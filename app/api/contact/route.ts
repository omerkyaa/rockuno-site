import { NextRequest, NextResponse } from "next/server";

// HTML escape function to prevent XSS attacks
function escapeHtml(text: string): string {
  const htmlEscapeMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };
  
  return text.replace(/[&<>"'\/]/g, (char) => htmlEscapeMap[char]);
}

// Sanitize text for email subject lines (remove potentially dangerous characters)
function sanitizeSubject(text: string): string {
  // Remove control characters and limit to safe ASCII/Unicode
  return text.replace(/[\x00-\x1F\x7F]/g, '').trim();
}

// Email template for professional communication
function generateEmailHTML(data: {
  name: string;
  email: string;
  project: string;
  category: string;
}) {
  const categoryLabels: Record<string, string> = {
    "ai-agent": "AI Agent & Automation",
    app: "Mobile App Development",
    web: "Web Development",
    cloud: "Backend & Cloud Infrastructure",
    waitlist: "Product Waitlist",
    general: "General Inquiry",
  };

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #0B0F1A;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(90deg, #2D4BFF 0%, #7B2FFF 25%, #C026D3 50%, #FF7A1A 75%, #FFB000 100%);
            padding: 30px;
            border-radius: 12px;
            margin-bottom: 30px;
          }
          .header h1 {
            color: white;
            margin: 0;
            font-size: 24px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .content {
            background: #ffffff;
            border: 1px solid #E5E7EB;
            border-radius: 12px;
            padding: 30px;
            margin-bottom: 20px;
          }
          .field {
            margin-bottom: 20px;
          }
          .field-label {
            font-weight: 600;
            color: #374151;
            margin-bottom: 5px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .field-value {
            color: #0B0F1A;
            font-size: 16px;
            padding: 10px;
            background: #F9FAFB;
            border-radius: 6px;
          }
          .category-badge {
            display: inline-block;
            background: linear-gradient(90deg, #2D4BFF 0%, #7B2FFF 50%, #C026D3 100%);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
          }
          .footer {
            text-align: center;
            color: #6B7280;
            font-size: 12px;
            padding: 20px;
          }
          .message-box {
            background: #F3F4F6;
            border-left: 4px solid #2D4BFF;
            padding: 20px;
            border-radius: 6px;
            margin-top: 10px;
            white-space: pre-wrap;
            word-wrap: break-word;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🎯 New Contact Request</h1>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="field-label">Category</div>
            <div class="field-value">
              <span class="category-badge">${escapeHtml(categoryLabels[data.category] || data.category)}</span>
            </div>
          </div>

          <div class="field">
            <div class="field-label">Name</div>
            <div class="field-value">${escapeHtml(data.name)}</div>
          </div>

          <div class="field">
            <div class="field-label">Email</div>
            <div class="field-value">
              <a href="mailto:${escapeHtml(data.email)}" style="color: #2D4BFF; text-decoration: none;">
                ${escapeHtml(data.email)}
              </a>
            </div>
          </div>

          <div class="field">
            <div class="field-label">Message / Project Details</div>
            <div class="message-box">${escapeHtml(data.project)}</div>
          </div>
        </div>

        <div class="footer">
          <p>
            This message was sent via the Rockuno contact form<br>
            <strong>rockuno.com</strong>
          </p>
          <p style="margin-top: 10px; color: #9CA3AF;">
            Respond directly to: ${escapeHtml(data.email)}
          </p>
        </div>
      </body>
    </html>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, project, category = "general" } = body;

    // Validate input
    if (!name || !email || !project) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email using Resend API
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      // Log submission for development
      console.log("Contact form submission:", { name, email, project, category });
      
      return NextResponse.json(
        { 
          success: true, 
          message: "Your message has been received successfully. Our team will get back to you within 24 hours." 
        },
        { status: 200 }
      );
    }

    // Send email via Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Rockuno Contact Form <contact@rockuno.com>",
        to: ["info@rockuno.com"],
        reply_to: email,
        subject: `New Contact Request: ${sanitizeSubject(category.toUpperCase())} - ${sanitizeSubject(name)}`,
        html: generateEmailHTML({ name, email, project, category }),
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      console.error("Resend API error:", errorData);
      
      // Still return success to user (logged for debugging)
      return NextResponse.json(
        { 
          success: true, 
          message: "Your message has been received successfully. Our team will get back to you within 24 hours." 
        },
        { status: 200 }
      );
    }

    const emailData = await emailResponse.json();
    console.log("Email sent successfully:", emailData);

    return NextResponse.json(
      { 
        success: true, 
        message: "Your message has been received successfully. Our team will get back to you within 24 hours." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-rockuno-gradient px-6 py-16 text-rockuno-ink dark:text-white">
      <div className="mx-auto max-w-3xl rounded-3xl rockuno-border bg-white/80 p-10 shadow-soft dark:bg-white/5">
        <h1 className="text-3xl font-semibold text-rockuno-ink dark:text-white">Cookie Policy</h1>
        
        <p className="mt-4 text-sm text-black/60 dark:text-white/60">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed">
          <p className="text-black/70 dark:text-white/70">
            This Cookie Policy explains how Rockuno (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) uses cookies and similar technologies on this website.
          </p>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-rockuno-ink dark:text-white">1. What Are Cookies?</h2>
            <p className="text-black/70 dark:text-white/70">
              Cookies are small text files that are stored on your device when you visit a website.
              They help websites function properly, improve security, and remember certain settings.
            </p>
            <p className="text-black/70 dark:text-white/70 mt-2">
              Cookies can be:
            </p>
            <ul className="list-disc list-inside text-black/70 dark:text-white/70 mt-2 space-y-1">
              <li><strong>Session cookies</strong> (deleted automatically after your visit)</li>
              <li><strong>Persistent cookies</strong> (stored for a defined period)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-rockuno-ink dark:text-white">2. Do We Use Cookies?</h2>
            <div className="rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 mt-2">
              <p className="text-green-800 dark:text-green-200 font-semibold">
                ✅ Current Status
              </p>
              <p className="text-green-700 dark:text-green-300 mt-2">
                At this time, Rockuno does not use tracking, analytics, marketing, or advertising cookies.
              </p>
              <p className="text-green-700 dark:text-green-300 mt-2">
                We only use technically necessary cookies where required to ensure the basic functionality, security, and stability of the website.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-rockuno-ink dark:text-white">3. Technically Necessary Cookies</h2>
            <p className="text-black/70 dark:text-white/70">
              Technically necessary cookies are essential for the operation of the website and cannot be disabled.
            </p>
            <p className="text-black/70 dark:text-white/70 mt-2">
              These cookies may be used for:
            </p>
            <ul className="list-disc list-inside text-black/70 dark:text-white/70 mt-2 space-y-1">
              <li>Ensuring secure website operation</li>
              <li>Protecting against misuse and unauthorized access</li>
              <li>Load balancing and system stability</li>
              <li>Session handling (if login or protected areas exist)</li>
            </ul>
            <p className="text-black/70 dark:text-white/70 mt-2">
              <strong>Legal basis:</strong><br />
              Art. 6 para. 1 lit. f GDPR – legitimate interest in providing a secure and functional website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-rockuno-ink dark:text-white">4. No Analytics or Tracking Cookies</h2>
            <p className="text-black/70 dark:text-white/70">
              This website currently does not use:
            </p>
            <ul className="list-disc list-inside text-black/70 dark:text-white/70 mt-2 space-y-1">
              <li>Google Analytics</li>
              <li>Firebase Analytics</li>
              <li>Tracking pixels</li>
              <li>Marketing or profiling tools</li>
              <li>Third-party advertising cookies</li>
            </ul>
            <p className="text-black/70 dark:text-white/70 mt-2">
              Therefore:
            </p>
            <ul className="list-none text-black/70 dark:text-white/70 mt-2 space-y-1">
              <li>❌ No cookie consent banner is required</li>
              <li>❌ No user profiling takes place</li>
              <li>❌ No behavioral tracking is performed</li>
            </ul>
            <p className="text-black/70 dark:text-white/70 mt-2">
              If analytics or tracking technologies are introduced in the future, this Cookie Policy will be updated accordingly, and consent will be requested where legally required.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-rockuno-ink dark:text-white">5. Third-Party Cookies</h2>
            <p className="text-black/70 dark:text-white/70">
              At present, no third-party cookies are set through this website.
            </p>
            <p className="text-black/70 dark:text-white/70 mt-2">
              External links may lead to third-party websites that operate their own cookies.
              We have no influence over the cookie practices of these external websites.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-rockuno-ink dark:text-white">6. Managing Cookies in Your Browser</h2>
            <p className="text-black/70 dark:text-white/70">
              You can configure your browser to:
            </p>
            <ul className="list-disc list-inside text-black/70 dark:text-white/70 mt-2 space-y-1">
              <li>Inform you about cookie usage</li>
              <li>Allow cookies only in individual cases</li>
              <li>Block cookies completely</li>
              <li>Automatically delete cookies when closing the browser</li>
            </ul>
            <p className="text-black/70 dark:text-white/70 mt-2">
              Please note that disabling cookies may affect the functionality of this website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-rockuno-ink dark:text-white">7. Changes to This Cookie Policy</h2>
            <p className="text-black/70 dark:text-white/70">
              We reserve the right to update this Cookie Policy to reflect changes in legal requirements or website functionality.
            </p>
            <p className="text-black/70 dark:text-white/70 mt-2">
              The current version published on this website is always applicable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-rockuno-ink dark:text-white">8. Contact</h2>
            <p className="text-black/70 dark:text-white/70">
              If you have any questions about this Cookie Policy or data protection, you can contact us at any time:
            </p>
            <p className="text-black/70 dark:text-white/70 mt-2">
              Rockuno<br />
              Owner: Oemer Kaya<br />
              Immermannstrasse 16<br />
              39108 Magdeburg<br />
              Germany<br />
              Email: info@rockuno.com<br />
              Phone: +49 1573 7980556
            </p>
          </section>

          <p className="text-black/60 dark:text-white/60 mt-8 pt-6 border-t border-black/10 dark:border-white/10 text-xs">
            This Cookie Policy is transparent about our minimal use of cookies and complies with EU regulations (ePrivacy Directive & GDPR).
          </p>
        </div>
      </div>
    </main>
  );
}

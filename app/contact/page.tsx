import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact Us | Rockuno",
  description: "Get in touch with Rockuno. Discuss your project, join our product waitlist, or inquire about our services.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-rockuno-gradient">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}

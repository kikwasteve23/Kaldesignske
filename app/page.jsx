import AboutSection from "@/components/about/about";
import Team from "@/components/team";
import ContactSection from "@/components/contact/contact";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import ServicesSection from "@/components/services";
import ProcessSection from "@/components/process";
import EngagementsSection from "@/components/engagements";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <EngagementsSection />
        <Team />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

import AboutSection from "@/components/about/about";
import ContactSection from "@/components/contact/contact";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import TestimonialsSection from "@/components/home/testimonials";
import Navbar from "@/components/navbar";
import ServicesSection from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <AboutSection/>
     <ServicesSection/>
     <TestimonialsSection/>
     <ContactSection/>
     <Footer/>
    </div>
  );
}

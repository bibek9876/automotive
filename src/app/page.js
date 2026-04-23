import About from "@/components/About";
import Carousel from "@/components/Carousel";
import CarCleaning from "@/components/CarCleaning";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import QuoteForm from "@/components/QuoteForm";
import Services from "@/components/Services";

const services = [
  {
    title: "Log Book Service",
    description:
      "Manufacturer-aligned servicing that protects performance, reliability, and warranty expectations.",
    icon: "book",
  },
  {
    title: "Mechanical Repairs",
    description:
      "Clear diagnostics and dependable repair work for daily drivers, family cars, and fleet vehicles.",
    icon: "wrench",
  },
  {
    title: "Brakes",
    description:
      "Brake pad, rotor, and system inspections focused on control, safety, and confident stopping.",
    icon: "brake",
  },
  {
    title: "Clutch / Transmission Replacement",
    description:
      "Targeted driveline repairs and replacement work to restore smooth gear changes and response.",
    icon: "gear",
  },
  {
    title: "Tyres & Wheels",
    description:
      "Tyre supply, fitting, balancing, and wheel care tailored for stable road feel and even wear.",
    icon: "wheel",
  },
  {
    title: "Pre Purchase Inspection",
    description:
      "Independent inspections with practical reporting so you know what you are buying before you commit.",
    icon: "search",
  },
  {
    title: "Battery Replacement",
    description:
      "Fast battery testing and replacement to keep starting performance reliable in every season.",
    icon: "battery",
  },
  {
    title: "Wheel Alignment",
    description:
      "Precision alignment to improve handling, tyre life, and steering confidence on Australian roads.",
    icon: "align",
  },
  {
    title: "Roadside Assistance",
    description:
      "Prompt support when your vehicle leaves you stranded and you need practical help without delay.",
    icon: "roadside",
  },
];

const galleryItems = [
  {
    src: "/images/diagnosing.png",
    title: "Precision Diagnostics",
    caption: "Measured, methodical inspection before any work begins.",
  },
  {
    src: "/images/carousel-02.svg",
    title: "Workshop Standards",
    caption: "Clean bays, disciplined processes, and premium presentation.",
  },
  {
    src: "/images/carousel-03.svg",
    title: "Brake And Suspension",
    caption: "Safety-critical systems serviced with care and consistency.",
  },
  {
    src: "/images/carousel-04.svg",
    title: "Performance Maintenance",
    caption: "Mechanical work focused on reliability and sharp response.",
  },
];

export default function HomePage() {
  return (
    <main className="section-stack bg-[var(--color-ink)] px-3 pb-3 text-white sm:px-4 sm:pb-4">
      <Navbar />
      <Hero />
      <Services services={services} />
      <About />
      <Carousel items={galleryItems} />
      <CarCleaning />
      <QuoteForm services={services} />
      <Contact />
      <Footer />
    </main>
  );
}

import Testimonials from "@/components/Common/Testimonials";
import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Partners from "@/components/Home/Partners";
import Services from "@/components/Home/Services";
import WhyChoose from "@/components/Home/WhyChoose";
import Works from "@/components/Home/Works";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Works />
      <WhyChoose />
      <Partners />
      <Testimonials dim={true} />
    </main>
  );
}

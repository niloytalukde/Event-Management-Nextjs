import {Categories} from "@/components/module/home/Categories";
import { CTA } from "@/components/module/home/CTA";
import Hero from "@/components/module/home/Hero";
import { HowItWorks } from "@/components/module/home/HowItWorks";
import { TestimonialsSection } from "@/components/module/home/Testimonials";


const HomePage = () => {
  return (
    <div className=" ">
      <Hero/>
      <Categories/>
      <HowItWorks/>
      <TestimonialsSection/>
      <CTA/>
    </div>
  );
};

export default HomePage;
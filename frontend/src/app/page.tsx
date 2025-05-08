import CTA from "./components/CTA";
import Features from "./components/Features";
import Hero from "./components/Hero";
import LastSection from "./components/LastSection";
import ProductShowcase from "./components/ProductShowcase";
import Section from "./components/Section";
import Services from "./components/Services";
import Team from "./components/Team";


export default function HomePage() {
  return (
    <div>
      <Hero/>
      <Features/>
      <Team/>
      <Section/>
      <ProductShowcase/>
      <Services/>
      <CTA/>
      <LastSection/> 
    </div>
  );
}

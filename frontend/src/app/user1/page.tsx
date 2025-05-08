import Features from "./components/Features";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Banner2 from "./components/Banner2";
import Services from "./components/Services";

export default function User1Page() {
  return (
    <div>
      <Hero/>
      <Features/>
      <Banner/>
      <Section/>
      <Banner2/> 
      <Services/>
    </div>
  );
}

import CTA from "./components/CTA";
import Features from "./components/Features";
import Hero from "./components/Hero";
import LastSection from "./components/LastSection";
import ProductShowcase from "./components/ProductShowcase";
import Section from "./components/Section";
import Services from "./components/Services";
import Team from "./components/Team";

// async function getHomePageData() {
//   const res = await fetch("http://localhost:1337/api/home-pages");
//   const data = await res.json();
//   return data.data?.[0];
// }

export default async function HomePage() {
  // const data = await getHomePageData();
  // console.log("Fetched data:", data);


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

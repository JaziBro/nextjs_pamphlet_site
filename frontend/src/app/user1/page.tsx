
// async function getHomePageData() {
//   const res = await fetch("http://localhost:1337/api/home-pages");
//   const data = await res.json();
//   return data.data?.[0];
// }

import Features from "./components/Features";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Banner2 from "./components/Banner2";
import Services from "./components/Services";

export default async function User1Page() {
  // const data = await getHomePageData();
  // console.log("Fetched data:", data);


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

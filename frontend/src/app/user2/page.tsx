
// async function getHomePageData() {
//   const res = await fetch("http://localhost:1337/api/home-pages");
//   const data = await res.json();
//   return data.data?.[0];
// }

import Banner from "./components/Banner";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Team from "./components/Team";


export default async function User1Page() {
  // const data = await getHomePageData();
  // console.log("Fetched data:", data);


  return (
    <div>
      <Hero/>
      <Section/>
      <Banner/>
      <Card/>
      <Card2/>
      <Card3/>
      <Team/>
    </div>
  );
}

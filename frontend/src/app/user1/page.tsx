
// async function getHomePageData() {
//   const res = await fetch("http://localhost:1337/api/home-pages");
//   const data = await res.json();
//   return data.data?.[0];
// }

import Features from "../components/Features";
import Hero from "./components/Hero";

export default async function User1Page() {
  // const data = await getHomePageData();
  // console.log("Fetched data:", data);


  return (
    <div>
        <Hero/>
        <Features/>
    </div>
  );
}

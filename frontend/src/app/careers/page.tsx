import Hero from "./components/Hero";


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
    </div>
  );
}

// import type { NextPage } from 'next'
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import Card from "../components/Card";

function Home({ exploreData, cardData }) {
  return (
    <>
      <Head>
        <title>makeMytrip</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Header />
        <Banner />
      </>

      <main className="max-w-7xl mx-auto h-[100vh] ">
        <section className="pt-5">
          <h2 className="text-4xl font-semibold pb-10 ">Explore more</h2>
        </section>
        <div className=" grid grid-cols-4 gap-10 scroll-m-8 ">
          {exploreData?.map((item) => (
            <SmallCard
              key={item.img}
              img={item.img}
              dis={item.distance}
              location={item.location}
            />
          ))}
        </div>

        <section className="py-8">
          <h className="text-4xl font-semibold ">Live Anywherre</h>
          <div className="grid grid-cols-4 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-x-scroll ">
            {cardData?.map((data) => (
              <Card key={data.img} img={data.img} title={data.title} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
export default Home;

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  const cardData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}

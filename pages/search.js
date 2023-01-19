import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import InfoCard from "./InfoCard";
// import { format } from "date-fns";
import Map from "../components/Map";
function Search({ searchResults }) {
  const router = useRouter();
  //   console.log(router.query);

  console.log(searchResults);

  const { location, startDate, endDate, guests } = router.query;

  //   const formateStartDate = format(new Date(startDate), "dd mm yyyy");
  //   const formateEndDate = format(new Date(endDate), "dd mm yyyy");

  //   const DateRange = `${formateStartDate}-${formateEndDate}`;

  return (
    <>
      <Header />
      <main>
        <section className="w-full h-full">
          <section className="mt-10 p-8 h-auto">
            <p>300+ -stays-for -{guests} guest</p>
            <h1 className="mt-6 text-4xl font-bold">Stays in {location}</h1>
            <div className="button mt-4">
              <button className=" p-2 space-x-4 border-2 border-indigo-100 bg-white font-bold rounded-full active:scale-105 hover:scale-100 hover:shadow-lg text-ellipsis overflow-hidden text-black ">
                Canceliation flexibilty
              </button>
              <button className="p-2 space-x-4 border-2 border-indigo-100 bg-white font-bold rounded-full active:scale-105 hover:scale-100 hover:shadow-lg text-ellipsis overflow-hidden text-black  ml-4">
                Type of Place
              </button>
              <button className="p-2 space-x-4 border-2 border-indigo-100 bg-white font-bold rounded-full active:scale-105 hover:scale-100 hover:shadow-lg text-ellipsis overflow-hidden text-black  ml-4">
                Price
              </button>
              <button className="p-2 space-x-4 border-2 border-indigo-100 bg-white font-bold rounded-full active:scale-105 hover:scale-100 hover:shadow-lg text-ellipsis overflow-hidden text-black  ml-4">
                Rooms
              </button>
              <button className="p-2 space-x-4 border-2 border-indigo-100 bg-white font-bold rounded-full active:scale-105 hover:scale-100 hover:shadow-lg text-ellipsis overflow-hidden text-black  ml-4">
                More Filters
              </button>
            </div>
          </section>
          <div className="flex">
            <div className="w-[40%] ">
              {searchResults.map((item) => (
                <InfoCard
                  key={item.img}
                  img={item.img}
                  location={item.location}
                  description={item.description}
                  star={item.star}
                  price={item.price}
                  title={item.title}
                  total={item.total}
                />
              ))}
            </div>
            <div className="w-[60%]">
              <Map searchResults={searchResults} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}

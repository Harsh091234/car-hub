
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "../../utils";
import CarCard from "@/components/CarCard";



export default async function Home() {
  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="pt-13 pb-6 flex-1 flex flex-col">
      <Hero />
      <div className="px-3  md:px-7 flex flex-col items-center md:items-start mb-5">
        <div className="mb-3 flex flex-col items-center md:items-start">
          <h1 className="font-bold text-2xl md:text-3xl ">Car Catalogue</h1>
          <p className="text-gray-600 text-sm md:text-base">Explore the cars you might like</p>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-10   md:items-center ">
          <SearchBar />
          <div className="flex gap-2">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>
        
      </div>
      <div className="px-2 sm:px-5 mt-7">
      {!isDataEmpty? (
          <section  className=" flex flex-col  gap-3 sm:flex-row md:gap-4 flex-wrap">
            {allCars.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
              {allCars.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
              {allCars.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
              {allCars.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </section>
        ) : (
          <div>
            <h2>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )

        }
      </div>
       
    </main>
  );
}

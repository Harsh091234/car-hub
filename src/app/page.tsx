"use client";

import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CarCard from "@/components/CarCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "@/store/slices/carsSlices";
import { RootState, AppDispatch } from "@/store/store";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";

export default function Home({ searchParams }: HomeProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { cars, loading, error } = useSelector((state: RootState) => state.cars);


    useEffect(() => {
  const filters = {
    manufacturer: searchParams?.manufacturer || "",
    year: searchParams?.year || 2022,
    fuel: searchParams?.fuel || "",
    limit: searchParams?.limit || 10,
    model: searchParams?.model || "",
  };

  dispatch(fetchCars(filters));
}, [searchParams, dispatch]);



  const isDataEmpty = !Array.isArray(cars) || cars.length === 0;

  return (
    <main className="pt-13 pb-6 flex-1 flex flex-col">
      <Hero />
      <div className="px-3 md:px-7 flex flex-col items-center md:items-start mb-5">
        <div className="mb-3 flex flex-col items-center md:items-start">
          <h1 className="font-bold text-2xl md:text-3xl ">Car Catalogue</h1>
          <p className="text-gray-600 text-sm md:text-base">
            Explore the cars you might like
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-2 flex-wrap items-center " >
          <SearchBar searchParams={searchParams} />
          <div className="flex gap-1">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
      </div>

      <div className="px-2 sm:px-5 mt-7">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : !isDataEmpty ? (
          <section className="flex flex-col gap-3 sm:flex-row md:gap-4 flex-wrap">
            {cars.map((car) => (
              <CarCard key={`${car.make}-${car.model}-${car.year}`} car={car} />
            ))}
          </section>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-semibold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}

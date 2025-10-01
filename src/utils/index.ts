
import { Car } from "@/generated/prisma";
import { CarProps, FilterProps } from "../types"; 
import api from "./axiosInstance";
import { Search } from "lucide-react";

const API_URL = "https://api.carapi.app/vehicles";
const API_KEY = "804d0c760a542516e0a9a1edc454d24f";

export const fetchCars = async (): Promise<any[]> => {
  const response = await fetch(`${API_URL}?make=Toyota`, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Accept': 'application/json',
    },
  });
  console.log("res", response)
  if (!response.ok) {
    throw new Error('Failed to fetch cars');
  }

  const data = await response.json();
  return data;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
    return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl = (car: CarProps, angle: string= "13") => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const {make, model, year} = car;
  console.log("details make, model, year", make, model, year)
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  console.log("url", url.toString())
  return url.toString();

}



export const fetchCarImageUrl = async (car: CarProps) => {
  const { year, make, model } = car;
  try {
    const response = await api.get('https://api.carsxe.com/v1/images', {
      params: { year, make, model, angle: "29" },
      headers: { 'Authorization': `Bearer ${API_KEY}` },
    });

    // Return only the first image URL if it exists
    return response.data?.images?.[0]?.url || null;
  } catch (error) {
    console.error('Error fetching car image URL:', error);
    return null;
  }
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}? ${searchParams.toString}`
  return newPathName;
}



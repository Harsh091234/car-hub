
import { CarProps } from "../types"; 

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
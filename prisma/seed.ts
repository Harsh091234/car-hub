import { PrismaClient } from "../src/generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  const cars = [
    { city_mpg: 25, class: "Sedan", combination_mpg: 28, cylinders: 4, displacement: 2.0, drive: "FWD", fuel_type: "Gasoline", highway_mpg: 32, make: "Toyota", model: "Camry", transmission: "Automatic", year: 2022 },
    { city_mpg: 22, class: "SUV", combination_mpg: 24, cylinders: 6, displacement: 3.5, drive: "AWD", fuel_type: "Gasoline", highway_mpg: 28, make: "Honda", model: "Pilot", transmission: "Automatic", year: 2021 },
    { city_mpg: 30, class: "Hatchback", combination_mpg: 33, cylinders: 4, displacement: 1.5, drive: "FWD", fuel_type: "Gasoline", highway_mpg: 36, make: "Volkswagen", model: "Golf", transmission: "Manual", year: 2023 },
    { city_mpg: 28, class: "Sedan", combination_mpg: 31, cylinders: 4, displacement: 2.0, drive: "FWD", fuel_type: "Hybrid", highway_mpg: 35, make: "Toyota", model: "Prius", transmission: "Automatic", year: 2022 },
    { city_mpg: 18, class: "SUV", combination_mpg: 20, cylinders: 8, displacement: 5.0, drive: "RWD", fuel_type: "Gasoline", highway_mpg: 22, make: "Ford", model: "Expedition", transmission: "Automatic", year: 2020 },
    { city_mpg: 32, class: "Hatchback", combination_mpg: 35, cylinders: 3, displacement: 1.0, drive: "FWD", fuel_type: "Gasoline", highway_mpg: 38, make: "Mini", model: "Cooper", transmission: "Manual", year: 2023 },
    { city_mpg: 27, class: "Sedan", combination_mpg: 30, cylinders: 4, displacement: 2.0, drive: "RWD", fuel_type: "Gasoline", highway_mpg: 33, make: "BMW", model: "3 Series", transmission: "Automatic", year: 2021 },
    { city_mpg: 15, class: "Truck", combination_mpg: 18, cylinders: 6, displacement: 3.5, drive: "4WD", fuel_type: "Diesel", highway_mpg: 22, make: "Chevrolet", model: "Colorado", transmission: "Automatic", year: 2020 },
    { city_mpg: 20, class: "SUV", combination_mpg: 23, cylinders: 4, displacement: 2.5, drive: "AWD", fuel_type: "Gasoline", highway_mpg: 27, make: "Subaru", model: "Forester", transmission: "Automatic", year: 2022 },
    { city_mpg: 19, class: "SUV", combination_mpg: 22, cylinders: 6, displacement: 3.0, drive: "AWD", fuel_type: "Gasoline", highway_mpg: 25, make: "Toyota", model: "Highlander", transmission: "Automatic", year: 2021 },
    { city_mpg: 24, class: "Sedan", combination_mpg: 27, cylinders: 4, displacement: 1.8, drive: "FWD", fuel_type: "Gasoline", highway_mpg: 31, make: "Honda", model: "Accord", transmission: "Automatic", year: 2022 },
    { city_mpg: 23, class: "Sedan", combination_mpg: 26, cylinders: 4, displacement: 2.0, drive: "FWD", fuel_type: "Gasoline", highway_mpg: 30, make: "Hyundai", model: "Elantra", transmission: "Automatic", year: 2023 },
    { city_mpg: 12, class: "Truck", combination_mpg: 14, cylinders: 8, displacement: 6.2, drive: "4WD", fuel_type: "Gasoline", highway_mpg: 17, make: "Ford", model: "F-150", transmission: "Automatic", year: 2021 },
    { city_mpg: 28, class: "Hatchback", combination_mpg: 31, cylinders: 4, displacement: 1.4, drive: "FWD", fuel_type: "Gasoline", highway_mpg: 34, make: "Volkswagen", model: "Polo", transmission: "Manual", year: 2022 },
    { city_mpg: 21, class: "Sedan", combination_mpg: 24, cylinders: 4, displacement: 2.0, drive: "RWD", fuel_type: "Gasoline", highway_mpg: 28, make: "Mercedes-Benz", model: "C-Class", transmission: "Automatic", year: 2022 },
    { city_mpg: 17, class: "SUV", combination_mpg: 19, cylinders: 6, displacement: 3.5, drive: "AWD", fuel_type: "Gasoline", highway_mpg: 22, make: "Jeep", model: "Grand Cherokee", transmission: "Automatic", year: 2021 },
    { city_mpg: 33, class: "Sedan", combination_mpg: 36, cylinders: 4, displacement: 1.5, drive: "FWD", fuel_type: "Hybrid", highway_mpg: 38, make: "Hyundai", model: "Ioniq", transmission: "Automatic", year: 2023 },
    { city_mpg: 26, class: "Hatchback", combination_mpg: 29, cylinders: 4, displacement: 1.6, drive: "FWD", fuel_type: "Gasoline", highway_mpg: 32, make: "Kia", model: "Rio", transmission: "Automatic", year: 2022 },
    { city_mpg: 14, class: "Truck", combination_mpg: 16, cylinders: 6, displacement: 4.0, drive: "4WD", fuel_type: "Diesel", highway_mpg: 20, make: "Ram", model: "1500", transmission: "Automatic", year: 2021 },
    { city_mpg: 25, class: "SUV", combination_mpg: 28, cylinders: 4, displacement: 2.0, drive: "AWD", fuel_type: "Hybrid", highway_mpg: 32, make: "Toyota", model: "RAV4", transmission: "Automatic", year: 2023 },
  ];

  for (const car of cars) {
    await prisma.car.create({ data: car });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


"use client";
import React, { useState } from "react";
import { CarProps } from "../../types";
import { calculateCarRent } from "../../utils";
import Image from "next/image";
import CustomButton from "./ui/CustomButton";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive, imageUrls } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-gray-200 hover:bg-gray-300 border border-transparent hover:border-gray-400 rounded-2xl py-2 px-4  md:py-3 md:px-6 shadow-md space-y-1 md:space-y-3 sm:w-80 md:w-87">
      {/* Title */}
      <h1 className="text-base md:text-2xl font-semibold">
        {make} {model}
      </h1>

      {/* Price */}
      <span className="flex items-baseline gap-1 text-sm md:text-xl font-bold text-gray-800">
        ${carRent}
        <p className="text-xs font-normal text-gray-600">/day</p>
      </span>

      {/* Car Image */}
      <div className="flex justify-center w-full">
        <div className="a relative w-45 sm:w-52 md:w-60 lg:w-72 rounded-lg overflow-hidden h-28  md:h-36 lg:h-44 z-10">
  <Image
    src={imageUrls ? imageUrls[0] : "/car-placeholder.png"}
    alt="car"
    fill
    priority
    className="object-cover"
  />
</div>
      </div>
     

      {/* Car Info */}
      <div className="grid grid-cols-3 gap-2 text-xs md:text-sm lg:text-base xl:text-lg text-gray-700">
        {/* Transmission */}
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/steering-wheel.svg"
            alt=""
            width={14}
            height={14}
            className="md:w-6 md:h-6"
          />
          <p className="text-[0.67rem] md:text-sm ">
            {transmission === "a" ? "Automatic" : "Manual"}
          </p>
        </div>

        {/* Drive */}
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/tire.svg"
            alt=""
           width={14}
            height={14}
            className="md:w-6 md:h-6"
          />
          <p className="text-[0.67rem] md:text-sm ">{drive.toUpperCase()}</p>
        </div>

        {/* MPG */}
        <div className="flex flex-col items-center justify-start">
          <Image
            src="/gas.svg"
            alt=""
            width={14}
            height={14}
            className="md:w-6 md:h-6"
          />
          <p className="text-[0.67rem] md:text-sm ">21 MPG</p>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <CustomButton
          title="View More"
          textStyles="text-white text-[0.67rem] md:text-sm font-semibold"
          containerStyles="bg-[var(--color-primary)] hover:bg-[var(--color-hovered-primary)] active:bg-[var(--color-hovered-primary)] rounded-lg px-4 py-1 md:py-2 md:px-6"
          rightIcon="/right-arrow.svg"
          handleClick={() => setIsOpen(true)}
        />
      </div>

      {/* Modal */}
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;

'use client';
import React from "react";
import Image from "next/image";
import CustomButton from "./ui/CustomButton";

const Hero = () => {
  return (
    <section className="relative py-10">
      {/* Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-0 gap-10">

        {/* Text Section */}
        <div className="text-center ml-9 md:text-left space-y-6 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Find, Book or Rent a Car <br /> Quickly and Easily!
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Streamline your car rental experience with our effortless booking process
          </p>
          <CustomButton
            title="Explore Cars"
            containerStyles="bg-[var(--color-primary)] py-2 px-6 text-sm md:text-base rounded-full text-gray-200 hover:bg-blue-700 transition"
            btnType="button"
          />
        </div>

        {/* Image with Pentagon Background */}
        <div className="relative flex justify-center md:justify-end w-full md:w-auto">
          {/* Pentagon Background */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-[var(--color-primary)] clip-polygon-pentagon -z-10 top-1/2 -translate-y-1/2 right-0 md:right-0"></div>

          {/* Car Image */}
          <div className="relative w-72 h-72 md:w-[30rem] md:h-[30rem]">
            <Image
              src="/hero.png"
              alt="Hero Image"
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

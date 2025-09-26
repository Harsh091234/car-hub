'use client';
import React from "react";
import Image from "next/image";
import CustomButton from "./ui/CustomButton";

const Hero = () => {
  return (
    <section className=" py-5  md:py-7 h-full">
      {/* Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between   gap-10">

        {/* Text Section */}
        <div className="text-center md:ml-9 md:text-left space-y-6 z-10 px-2 sm:px-0">
          <h1 className=" text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
            Find, Book or Rent a Car Quickly and Easily!
          </h1>
          <p className="text-gray-600  text-base md:text-xl">
            Streamline your car rental experience with our effortless booking process
          </p>
          <CustomButton
            title="Explore Cars"
            containerStyles="bg-[var(--color-primary)] hover:bg-[var(--color-hovered-primary)] active:bg-[var(--color-hovered-primary)] py-2 px-6 text-sm md:text-base rounded-full text-gray-200  transition w-full min-[420px]:w-70 md:w-40"
            btnType="button"
          />
        </div>

        {/* Image with Pentagon Background */}
     <div className="relative flex justify-center md:justify-end w-full md:w-auto">
  {/* Pentagon Background */}
  <div
    className="
      absolute 
      w-62 h-57  
      min-[458px]:h-57 min-[458px]:w-77              /* default: bigger than image */
      sm:w-90 sm:h-60 
      md:w-[25rem] md:h-[25rem] 
      
      bg-[var(--color-primary)] 
      clip-polygon-pentagon 
      -z-10 
      top-1/2 -translate-y-1/2 right-0
    "
  ></div>

  {/* Car Image */}
  <div className="relative w-60 h-60 min-[458px]:w-67 min-[458px]:h-67 sm:w-72 sm:h-72 md:w-[30rem] md:h-[30rem] lg:w-[32rem] lg:h-[32rem] ">
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

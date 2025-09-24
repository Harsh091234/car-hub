import React, { Fragment } from "react";
import { CarProps } from "../../types";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative  z-20" onClose={closeModal}>
        {/* Background overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        {/* Modal container */}
        <div className="fixed inset-0 top-13 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-3 sm:p-6 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-md sm:max-w-lg max-h-[85vh] overflow-y-auto rounded-xl bg-white p-5 sm:p-7 text-left shadow-2xl transition-all flex flex-col gap-6">
                {/* Close button */}
                <button
                  type="button"
                  className="absolute top-3 right-3 z-10 w-fit p-2 bg-gray-100 hover:bg-gray-200 transition rounded-full"
                  onClick={closeModal}
                >
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </button>

                {/* Images Section */}
                <div className="flex flex-col gap-4">
                  <div className="relative w-full h-35 sm:h-47 bg-gray-100 rounded-lg">
                    <Image
                      src="/hero.png"
                      alt="car model"
                      fill
                      priority
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-1 relative w-full h-16 min-[336px]:h-20  sm:h-24 bg-gray-200 hover:bg-gray-300 rounded-lg">
                      <Image
                        src="/hero.png"
                        alt="car model"
                        fill
                        priority
                        className="object-contain p-3"
                      />
                    </div>

                    <div className="flex-1  relative w-full h-16 min-[336px]:h-20  sm:h-24 bg-gray-200  hover:bg-gray-300 rounded-lg">
                      <Image
                        src="/hero.png"
                        alt="car model"
                        fill
                        priority
                        className="object-contain p-3"
                      />
                    </div>

                    <div className="flex-1 relative w-full h-16 min-[336px]:h-20  sm:h-24 bg-gray-200 hover:bg-gray-300 rounded-lg">
                      <Image
                        src="/hero.png"
                        alt="car model"
                        fill
                        priority
                        className="object-contain p-3"
                      />
                    </div>
                  </div>
                </div>

                {/* Car Details */}
                <div className="flex flex-col gap-3">
                  <h2 className="font-semibold text-lg sm:text-xl capitalize text-gray-800">
                    {car.make} {car.model}
                  </h2>

                  <div className="mt-2 flex flex-col divide-y divide-gray-100">
                    {Object.entries(car).map(([key, value]) => (
                      <div
                        className="flex justify-between py-2 text-sm sm:text-base"
                        key={key}
                      >
                        <h4 className="text-gray-500 capitalize">
                          {key.split("_").join(" ")}
                        </h4>
                        <p className="text-gray-800 font-medium">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarDetails;

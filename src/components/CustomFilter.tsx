"use client";
import { CustomFilterProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());
    router.push(newPathName);
  };

  return (
    <div className="w-20 sm:w-25 text-sm relative">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative">
          <Listbox.Button className="w-full flex justify-between items-center px-2 py-1 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-md focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] text-xs">
            <span className="truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              alt="up down"
              width={12}
              height={12}
            />
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 w-full bg-white shadow-md rounded-md py-1 max-h-48 overflow-auto z-50 text-xs">
              {options.map((option, idx) => (
                <Listbox.Option
                  key={idx}
                  value={option}
                  className={({ active }) =>
                    `cursor-pointer select-none px-2 py-1 text-gray-800 rounded-md ${
                      active ? "bg-[var(--color-primary)] text-white" : ""
                    }`
                  }
                >
                  {({ selected }) => (
                    <span className={`block truncate ${selected ? "font-semibold" : ""}`}>
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;

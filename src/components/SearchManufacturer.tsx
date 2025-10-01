import React, { Fragment, useState } from 'react'
import { SearchManufacturerProps } from '../types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { manufacturers } from '../constants/index'

const SearchManufacturer = ({manufacturer, setManufacturer} : SearchManufacturerProps) => {
      const [query, setQuery] = useState("");

      const filteredManufacturers = query === ""
      ? manufacturers 
      : manufacturers.filter((item) => (
        item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
      )) 

  return (
   <div className="w-72">
  <Combobox value={manufacturer} onChange={setManufacturer}>
    <div className="relative mt-1">
      {/* Input + Button */}
      <div className="flex items-center rounded-lg border border-gray-300 bg-white px-2 shadow-sm focus-within:border-transparent focus-within:ring-2 focus-within:ring-indigo-500">
        <Combobox.Button className="pl-2">
          <Image
            src="/car-logo.svg"
            width={17}
            height={17}
            className="ml-1"
            alt="car logo"
          />
        </Combobox.Button>

        <Combobox.Input
          className="w-full border-none py-1.5 text-sm outline-0 pl-2.5 text-gray-800 focus:ring-0 placeholder-gray-500"
          placeholder="Volkswagen"
          displayValue={(manufacturer: string) => manufacturer}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Dropdown */}
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        afterEnter={() => setQuery("")}
      >
        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-10">
          {filteredManufacturers.length === 0 && query !== "" ? (
            <Combobox.Option
              value={query}
              className={({ active }) =>
                `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                  active ? "bg-indigo-600 text-white" : "text-gray-900"
                }`
              }
            >
              Create "{query}"
            </Combobox.Option>
          ) : (
            filteredManufacturers.map((item) => (
              <Combobox.Option
                key={item}
                value={item}
                className={({ active, selected }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active
                      ? "bg-indigo-600 text-white"
                      : "text-gray-900"
                  } ${selected ? "font-medium" : "font-normal"}`
                }
              >
                {({ selected }) => (
                  <>
                    <span className="block truncate">{item}</span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                        ✔
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))
          )}
        </Combobox.Options>
      </Transition>
    </div>
  </Combobox>
</div>

  )
}

export default SearchManufacturer

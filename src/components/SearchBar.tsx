"use client"
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState("");
    const [model, setModel] = useState("");
    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(manufacturer === "" && model === ""){
            return alert("Please fill in the search bar");
        }

        updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
    }

    const updateSearchParams = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search);

        if(model){
            searchParams.set("model", model)
        }
        else{
            searchParams.delete("manufacturer");
        }

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newPathname)
    }

    return (
        <form onSubmit={handleSearch} className='flex flex-col sm:flex-row items-center gap-2 ' >
            <div className=' flex gap-2 items-center'>
                <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
               <button className='flex sm:hidden items-center'><Image height={15} width={15} src="/magnifying-glass.svg" alt={"magnifying glass"}  
            className='w-7'/></button>
            </div>
            <div className='flex gap-2  items-center'>
                <div className=' relative w-72  flex  rounded-lg border border-gray-300 bg-white px-4.5 py-1.5 shadow-sm focus-within:border-transparent focus-within:ring-2 focus-within:ring-indigo-500'>
                     <Image  src="/model-icon.png" alt='model icon' height={14} width={14} />
                <input type="text" name='model' placeholder='Tiguan'
                    value={model} 
                    onChange={(e) => setModel(e.target.value)}
                    className='text-gray-800  w-full  pl-3 focus:ring-0 placeholder-gray-500   text-sm  outline-0 '/>
                </div>
                   <button className='flex sm:hidden items-center'><Image height={15} width={15} src="/magnifying-glass.svg" alt={"magnifying glass"}  
            className='w-7'/></button>
                  
            </div>
            <button className='max-sm:hidden flex items-center'><Image height={15} width={15} src="/magnifying-glass.svg" alt={"magnifying glass"}  
            className='w-7'/></button>
        </form>
    )
}

export default SearchBar

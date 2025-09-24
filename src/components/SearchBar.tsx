"use client"
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer';

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState(""); 
    
    const handleSearch = () => {

    }

    return (
    <form onSubmit={handleSearch}>
        <div>
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
        </div>
    </form>
  )
}

export default SearchBar

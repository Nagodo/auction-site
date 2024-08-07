"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
    const router = useRouter();
    const [search, setSearch] = useState<string>("");

    function handleChange(e: any) {
        setSearch(e.target.value);
    }

    function handleKeyPress(e: any) {
        if (e.key === "Enter") {
            handleSubmit();
        }
    }
    
    function handleSubmit() {
        router.replace('/listings?query=' + search);
    }

    return (
        <div className="searchbar">
            <input type="text" className="input" placeholder="Søg efter noget" onChange={handleChange} autoComplete="off" onKeyDown={handleKeyPress}></input>

            <button className="search-btn" onClick={handleSubmit}>
              
                <IoMdSearch className="icon" />

            </button>
        </div>
    )
}

export default SearchBar;
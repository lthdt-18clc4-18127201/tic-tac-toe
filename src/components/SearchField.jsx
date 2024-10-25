import { useContext, useState } from "react"
import { ImageContext } from "../App";


const SearchField = () => {
    const [ searchValue, setSearchValue ] = useState("");
    const { fetchData, setSearchImage, setQuery, imagePerPage, page } = useContext(ImageContext);

    const handleInput = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    }

    const handleButtonSearch = () => {
        fetchData(`search/collections?page=${page}&query=${searchValue}&per_page=${imagePerPage}&client_id=${import.meta.env.VITE_ACCESS_KEY}`);
        setSearchValue("");
        setSearchImage(searchValue);
        setQuery(searchValue);
    }

    const handleEnterSearch = (e) => {
        if(e.key === "Enter") {
            fetchData(`search/collections?page=${page}&query=${searchValue}&per_page=${imagePerPage}&client_id=${import.meta.env.VITE_ACCESS_KEY}`);
            setSearchValue("");
            setSearchImage(searchValue);
            setQuery(searchValue);
        }
    }

    return (
        <div className="flex">
            <input 
                className="bg-gray-50 border border-gray-300text-sm w-full indent-2 p-2.5 ouline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
                type="search" 
                placeholder="Type something to search ...."
                value={searchValue}
                onChange={handleInput}
                onKeyDown={handleEnterSearch}
            />
            <button 
                className="bg-blue-600 px-6 py-2.5 text-white font-display rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
                disabled = {!searchValue}
                onClick={handleButtonSearch}
            >
                Search
            </button>
        </div>
    )
}

export default SearchField
import { useContext, useState } from "react"
import { ImageContext } from "../App";


const SearchField = () => {
    const [ searchValue, setSearchValue ] = useState("");
    const {
        fetchData, 
        imagePerPage,
        page,
        accessKey,
        setPage,
        setSearchImage, 
        setQuery, 
        setAccessKey,
    } = useContext(ImageContext);

    const handleInput = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
        setAccessKey(accessKey);
    }

    const handleButtonSearch = () => {
        fetchData(`search/collections?page=${page}&query=${searchValue}&per_page=${imagePerPage}&client_id=${accessKey}`);
        setSearchValue("");
        setAccessKey(accessKey);
        setSearchImage(searchValue);
        setQuery(searchValue);
        setPage(1);
    }

    const handleEnterSearch = (e) => {
        if(e.key === "Enter") {
            fetchData(`search/collections?page=${page}&query=${searchValue}&per_page=${imagePerPage}&client_id=${accessKey}`);
            setSearchValue("");
            setAccessKey(accessKey);
            setSearchImage(searchValue);
            setQuery(searchValue);
            setPage(1);
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
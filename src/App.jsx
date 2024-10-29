import { createContext, useEffect, useState } from "react";
import { useAxios }  from "./hooks/useAxios";
import { debounce } from "./utils/helper";
import Header from "./components/Header";
import Images from "./components/Images";
import SearchField from "./components/SearchField";


export const ImageContext = createContext();

function App() {
    const [ searchImage, setSearchImage ] = useState("");
    const [ imagePerPage, setImagePerPage] = useState(24);  
    const [ page, setPage ] = useState(1);
    const [ query, setQuery ] = useState("cats");
    const [ accessKey, setAccessKey ] = useState(import.meta.env.VITE_ACCESS_KEY || "");
    const [ imageDetailsURL, setImageDetailsURL ] = useState("");

    const { response, isLoading, error, fetchData, setResponse } = useAxios(`search/collections?page=${page}&query=${query}&per_page=${imagePerPage}&client_id=${accessKey}`);
    
    const value = {
        response,
        isLoading,
        error,
        page,
        query,
        searchImage,
        imagePerPage,
        accessKey,
        imageDetailsURL,
        setAccessKey,
        fetchData,
        setResponse,
        setQuery,
        setPage,
        setSearchImage,
        setImagePerPage,
        setImageDetailsURL
    }

    const handleScroll = () => {
        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >=
                document.documentElement.scrollHeight) {
                setPage((prev) => prev + 1);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", debounce(handleScroll, 500));
        return () => window.removeEventListener("scroll", debounce(handleScroll, 500));
    }, [page])

    return (
        <ImageContext.Provider value={value}>
            <div className="w-screen font-display">
                <Header>
                    <SearchField />
                </Header>
                <Images />
            </div>
        </ImageContext.Provider>
    )
}

export default App

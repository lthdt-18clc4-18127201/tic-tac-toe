import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Images from "./components/Images";
import SearchField from "./components/SearchField";
import { useAxios }  from "./hooks/useAxios";
import { debounce } from "./utils/helper";


export const ImageContext = createContext();

function App() {
    const [ searchImage, setSearchImage ] = useState("");
    const [ imagePerPage, setImagePerPage] = useState(12);  
    const [page, setPage ] = useState(1);
    const [ query, setQuery ] = useState("cats");

    const { response, isLoading, error, fetchData } = useAxios(`search/collections?page=${page}&query=${query}&per_page=${imagePerPage}&client_id=${import.meta.env.VITE_ACCESS_KEY}`);
    
    const value = {
        response,
        isLoading,
        error,
        page,
        fetchData,
        query,
        setQuery,
        searchImage,
        setSearchImage,
        imagePerPage,
        setImagePerPage
    }

    const handleScroll = (e) => {
        e.preventDefault();
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

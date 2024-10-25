import { useContext } from "react"
import { ImageContext } from "../App"
import Skeleton from "./Skeleton"
import Image from "./Image"

const Images = () => {
    const { response, isLoading, searchImage, imagePerPage, page } = useContext(ImageContext)
    
    return (
        <>
            <h1 className="text-center mt-6 underline text-2xl">The results for {searchImage}</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10 max-w-7xl mx-auto px-4">
                {isLoading
                ? <Skeleton item={imagePerPage*page}/> 
                : response.map((data, key) => 
                    <Image key={key} data={data.cover_photo}/>
                )}
            </div>
        </>
    )
}

export default Images
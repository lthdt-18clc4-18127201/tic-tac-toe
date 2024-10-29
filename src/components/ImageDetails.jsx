import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "./Skeleton"

const ImageDetails = () => {
    const { id } = useParams();
    const [ image, setImage ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        const getImageDetails = async () => {
            try {
                const res = await axios.get(`https://api.unsplash.com/photos/${id}?client_id=${import.meta.env.VITE_ACCESS_KEY}`);
                setImage(res.data);
                
            } catch (error) {
                console.error('Error to fetch data',error);
            }finally{
                setIsLoading(false);
            }
        };

        getImageDetails();
    }, [id]);

    if(isLoading) return <Skeleton item={1}/> 

    return (
        <div className="flex flex-row justify-center font-display text-center p-2 gap-4">
            <img 
                className="h-screen col-span-2 rounded-lg"
                src={image.urls.full}
                alt={image.alt_description}
            />
            <div className="flex flex-col justify-center items-center col-span-1">
                {image.alt_description 
                ? <h1 className="text-5xl text-[#9E1410]">{`Title: ${image.alt_description}`}</h1>
                : `There is no title!`
                }
                <span className="text-4xl">{`Author: ${image.user.first_name} ${image.user.last_name}`}</span>
                {image.description
                ? <span className="text-4xl">{`Description: ${image.description}`}</span>
                : <span className="text-4xl">{`Description: There is no description for this picture`}</span>
                }
            </div>
        </div>
    )
}

export default ImageDetails
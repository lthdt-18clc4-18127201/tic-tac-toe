/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom"

const Image = ({data}) => {
  const navigate = useNavigate();

  const handleImageDetails = () => {
    navigate(`/photos/${data.id}`);
    
  }

  return (
    <div className="flex flex-col gap-3">
        <div href={`/photos/${data.id}`} onClick={handleImageDetails} className="cursor-pointer">
            <img className="h-[150px] w-[200px] object-cover rounded-lg shadow-md hover:scale-105 transform transition-transform" src={data.urls.small} alt={data.alt_description} />
        </div>
        <div className="flex justify-center gap-2">
            From
            <h1 className="text-center cursor-pointer underline hover:scale-105 transition-all hover:text-gray-600">{`${data.user.first_name} ${data.user.last_name }`}</h1>
        </div>
    </div>
  )
}

export default Image
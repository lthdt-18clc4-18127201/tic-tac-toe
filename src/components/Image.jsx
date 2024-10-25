/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"


const Image = ({data}) => {
  return (
    <div className="flex flex-col gap-3">
        <Link to={data.urls.regular}>
            <img className="h-72 w-full object-cover rounded-lg shadow-md hover:scale-105 transform transition-transform" src={data.urls.small} alt={data.alt_description} />
        </Link>
        <div className="flex justify-center gap-2">
            From
            <h1 className="text-center cursor-pointer underline hover:scale-105 transition-all hover:text-gray-600">{`${data.user.first_name} ${data.user.last_name }`}</h1>
        </div>
    </div>
  )
}

export default Image
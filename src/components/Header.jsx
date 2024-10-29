/* eslint-disable react/prop-types */

import { useContext } from "react"
import { ImageContext } from "../App"

const Header = ({children}) => {

  const { 
    accessKey, 
    setAccessKey,
  } = useContext(ImageContext); 

  const handleInput = (e) => {
    e.preventDefault();
    setAccessKey(e.target.value);
  }


  return (
    <div className="bg-gray-900 flex justify-center items-center py-10">
      <div className="max-w-md mx-auto w-full">
        <h1 className="text-white text-center text-5xl mb-5 font-display">Gallery Image</h1>
        <div className="flex">
          <input 
            className="bg-gray-50 border border-gray-300text-sm w-full indent-2 p-2.5 ouline-none focus:border-blue-500 focus:ring-2 rounded mb-4"
            type="search" 
            placeholder="Insert your access key ...."
            value={accessKey}
            onChange={handleInput}
          />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Header
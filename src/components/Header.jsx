/* eslint-disable react/prop-types */


const Header = ({children}) => {
  return (
    <div className="bg-gray-900 flex justify-center items-center py-10">
        <div className="max-w-md mx-auto w-full">
            <h1 className="text-white text-center text-5xl mb-5 font-display">This is Gallery App</h1>
            {children}
        </div>
    </div>
  )
}

export default Header
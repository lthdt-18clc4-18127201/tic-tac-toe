import { Link } from "react-router-dom"
import useAuthStore from "../store/useAuthStore";
import Button from "./Button";
import DropdownProfile from "./DropdownProfile";

const Header = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <header className="h-[60px]">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow h-[60px]">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
            <Link to="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Logo
              </span>
            </Link>
            <div
              className={`flex-col md:flex md:flex-row justify-center items-center w-full md:w-auto md:order-2 transition-all duration-300 hidden gap-6`}
            >
              <ul className="flex flex-col md:flex-row md:gap-8 gap-0">
                <li>
                  <Button name="Home"direction={"/"}/>
                </li>
                <li>
                  <Button name="Contact us"direction={"/about"}/>
                </li>
                <li>
                  {!isLoggedIn && <Button name="Log in"direction={"/login"}/>}
                </li>
              </ul>
              {
                isLoggedIn
                ? <DropdownProfile />
                : (
                  <Link
                    to="/register"
                    className="mt-4 md:mt-0 rounded-full bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Sign Up Now
                  </Link>
                )
              }
            </div>
          </div>
        </nav>
    </header>
  )
}

export default Header
import { useState } from 'react';
import useAuthStore from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';


const DropdownProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = async (option: string) => {
    switch(option) {
      case 'Logout': {
        logout();
        setIsOpen(false);
        navigate('/');
        break
      }
      case 'Profile Settings': {
        navigate('/profile');
        setIsOpen(false);
        break
      }
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center rounded-full border border-gray-300 shadow-sm p-2 bg-white focus:outline-none"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="h-6 w-6 rounded-full"
          />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              onClick={() => handleOptionClick('Profile Settings')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
            >
              Profile Settings
            </button>
            <button
              onClick={() => handleOptionClick('Logout')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownProfile;
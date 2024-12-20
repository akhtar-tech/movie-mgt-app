import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  const handleDashboardNavigation = () => {
    navigate('/');
  };

  return (
    <div className="z-[20] px-5 sm:px-8 mx-auto border-b top-0 left-0 bg-gray-200/60 dark:bg-[#6d6d6d88] w-full dark:text-white text-gray-900">
      <nav className="px-3 sm:px-8 py-3">
        <div className="container mx-auto flex sm:flex-row flex-col flex-wrap items-center justify-between">
        <span 
            className="mt-1 sm:mt-0 inline-block self-center text-lg select-none font-semibold whitespace-nowrap cursor-pointer"
            onClick={handleDashboardNavigation}
            >
            TTN-MDb
          </span>
          <span className="mt-1 sm:mt-0 inline-block self-center text-g select-none font-semibold whitespace-nowrap">Akash Upadhyay</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

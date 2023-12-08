import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/outline';


function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="font-poppins bg-white">
      <nav className="w-full fixed top-0 left-0 right-0 z-10 font-poppins bg-white">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 bg-white">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block bg-white">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl font-bold ">PlantPal</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border bg-white"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <XMarkIcon className = "h-6 w-6" />
                    
                  ) : (
                    <Bars3Icon className = "h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center bg-white pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="pb-6 text-xl py-4 px-6 text-center  border-b-2 md:border-b-0  bg:white hover:bg-lightGreen hover:text-white  border-black-500  md:hover:text-greenTheme md:hover:bg-transparent">
                  <Link href="/search" onClick={() => setNavbar(!navbar)}>
                    Identify
                  </Link>
                </li>
              
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
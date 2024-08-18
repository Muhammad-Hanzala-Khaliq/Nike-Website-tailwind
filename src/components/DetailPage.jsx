import React, { useState } from 'react'
// import Nav from './Nav'
import { Footer } from '../sections'
import { useStateContext } from '../contexts/ContextProvider';
import { useLocation, useParams } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
// import { navLinks } from '../constants';


const DetailPage = () => {
    const location = useLocation();
    const { imgURL, name, price } = location.state || {};
    const [hamburgerToggle, setHamburgerToggle] = useState(false);
    const { setModes, currentMode } = useStateContext();
  
    const handleClick = () => {
      setHamburgerToggle(!hamburgerToggle);
    };
  
    const handleClicktwo = () => {
      const newMode = currentMode === "light" ? "dark" : "light";
      setModes(newMode);
    };
  return (
    <div className={currentMode === 'dark' ? 'dark' : ''}>
    <main className="relative">
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        {/* <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden text-white">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul> */}
    <div className="max-lg:hidden">
          <button
            className="w-14 h-7 rounded-full bg-neutral-800 relative flex items-center justify-between p-1 transition-colors duration-300"
            onClick={handleClicktwo}
          >
            <span
              className={`transform transition-transform duration-300 ${
                currentMode === "dark" ? "translate-x-7" : "translate-x-0"
              }`}
            >
              {currentMode === "light" ? (
                <FaSun className="w-5 h-5 text-yellow-500" />
              ) : (
                <FaMoon className="w-5 h-4 text-white" />
              )}
            </span>
          </button>
        </div>

        <div className="hidden max-lg:block cursor-pointer dark:text-white ">
          <img src={hamburger} alt="Hamburger"    className={currentMode === 'dark' ? 'filter invert' : ''}  width={25} height={25} onClick={handleClick} />
        </div>
      </nav>
      {hamburgerToggle && (
        <div className="absolute top-16 right-12 bg-white dark:bg-[#484B52] shadow-lg rounded-lg py-10 px-12 max-lg:block lg:hidden z-[9999]">
          {/* <ul className="flex flex-col items-center gap-4 "> */}
         
            <div className="block">
              <button
                className="w-14 h-7 rounded-full bg-neutral-800 relative flex items-center justify-between p-1 transition-colors duration-300"
                onClick={handleClicktwo}
              >
                <span
                  className={`transform transition-transform duration-300 ${
                    currentMode === "dark" ? "translate-x-7" : "translate-x-0"
                  }`}
                >
                  {currentMode === "light" ? (
                    <FaSun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <FaMoon className="w-5 h-4 text-white" />
                  )}
                </span>
              </button>
            </div>
          {/* </ul> */}
        </div>
      )}
    </header>
    <div className={`flex flex-col lg:flex-row lg:items-center lg:justify-center justify-around items-center gap-5 lg:mt-0 padding ${currentMode === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <img src={imgURL} alt={name} className='lg:w-[480px] lg:h-[480px]  mt-20 lg:mt-0' />
    <div>
    <h1 className='mt-4 lg:text-4xl leading-normal font-semibold dark:text-white'>Name: {name}</h1>
    <p className='mt-2 lg:text-2xl text-center leading-normal text-coral-red'>Price: {price}</p>
    </div>
    </div>
      <section className="bg-black padding-x padding-t pb-8">
                  <Footer />
                </section>
                </main>
    </div>
  )
}

export default DetailPage

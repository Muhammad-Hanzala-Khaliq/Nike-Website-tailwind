import React, { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useStateContext } from "../contexts/ContextProvider";

const Nav = () => {
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
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

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
          <ul className="flex flex-col items-center gap-4 ">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray dark:text-white">
                  {item.label}
                </a>
              </li>
            ))}
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
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;

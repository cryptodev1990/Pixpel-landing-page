import React, { useState } from "react";
import Logo from "../../assets/logo/logo.svg";
import { Link } from "react-router-dom";
import "../../App.scss";

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <header className="flex absolute w-full justify-between items-center h-24 header-bg top-0 px-8 md:px-12 lg:px-18 xl:px-24 2xl:px-36 3xl:px-48">
        <img src={Logo} alt="logo" className="w-40"/>
        <div className="hidden md:flex gap-4 border-1 items-center justify-center border-blue rounded-full px-4 py-2px">
          <div className="items-center text-white cursor-pointer hover:text-app-green">
            <a href="/">
              Home
            </a>
          </div>
          <div className="items-center text-white cursor-pointer hover:text-app-green">
            <a href="#services">
              Services
            </a>
          </div>
          <div className="items-center text-white cursor-pointer hover:text-app-green">
            <a href="#about">
              About
            </a>
          </div>
          <div className="items-center text-white cursor-pointer hover:text-app-green">
            <a href="#team">
              Team
            </a>
          </div>
          <div className="items-center text-white cursor-pointer hover:text-app-green">
            <a href="#tokenomics">
              Tokenomics
            </a>
          </div>
          <div className="items-center text-white cursor-pointer hover:text-app-green">
            <a href="#roadmap">
              Roadmap
            </a>
          </div>
          <div className="items-center text-white cursor-pointer hover:text-app-green">
            <a href="#partners">
              Partners
            </a>
          </div>
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0">
            <li>
              <button className="
                flex justify-between items-center text-sm2 w-full text-white hover:text-app-green"
                onClick={() => { setNavbarOpen(!navbarOpen); }}
              >
                More 
                <svg className="mt-1 ml-1 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd">
                  </path>
                </svg>
              </button>
              {
                navbarOpen && (
                  <div className="absolute flex flex-row-reverse justify-end bg-white w-32 mt-1">
                    <ul>
                      <li>
                        <a href="https://docsend.com/view/p26a9bvfpqf52ddi" className="block py-2 px-2 hover:text-app-green">White Paper</a>
                      </li>
                      <li>
                        <a href="https://docsend.com/view/q83qhhu6h66ckvgk" className="block py-2 px-2 hover:text-app-green">Check Deck</a>
                      </li>
                    </ul>
                  </div>
                )
              }
            </li>
          </ul>
        </div>
      </header>
      
    </>
  );
};

export default Header;
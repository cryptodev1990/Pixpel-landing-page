import React, { useState } from "react";
import Logo from "../../assets/logo/logo.svg";
import { Link } from "react-router-dom";
import "../../App.scss";

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header className="flex absolute w-full justify-between items-center h-24 header-bg top-0 px-8 md:px-12 lg:px-18 xl:px-24 2xl:px-36 3xl:px-48">
      <img src={Logo} alt="logo" className="w-40"/>
      <div className="hidden md:flex gap-4 border-1 items-center justify-center border-blue rounded-full px-4 py-2px">
        <div className="items-center text-white cursor-pointer hover:text-app-green">
          Home
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
        {/* <div className="items-center text-white cursor-pointer">
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            hambuger<i className="fas fa-bars"></i>
          </button>
          
        </div> */}
        {/* <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Share</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Tweet</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Pin</span>
                </a>
              </li>
            </ul>
          </div> */}
      </div>
    </header>
  );
};

export default Header;
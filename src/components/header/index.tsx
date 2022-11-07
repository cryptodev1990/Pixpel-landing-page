import React, { useState } from "react";
import Logo from "../../assets/logo/logo.svg";
import "../../App.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <header className="absolute top-0 z-20 flex items-center justify-between w-full h-24 px-8 header-bg md:px-12 lg:px-18 xl:px-24 2xl:px-36 3xl:px-48">
        <a href="/" rel="PIXPEL">
          <img src={Logo} alt="logo" className="w-40"/>
        </a>
        <div className="items-center justify-center hidden gap-4 px-4 rounded-full md:flex border-1 border-blue py-2px">
          <div className="items-center text-white cursor-pointer hover:text-app-green">
            <a href="/">
              Home
            </a>
          </div>
          <div className="items-center text-white cursor-pointer hover:text-app-green" onClick={() => setNavbarOpen(false) }>
            <a href="#services">
              Services
            </a>
          </div>
          <div className="items-center text-white cursor-pointer hover:text-app-green" onClick={() => setNavbarOpen(false) }>
            <a href="#about">
              About
            </a>
          </div>
          <div className="items-center text-white cursor-pointer hover:text-app-green" onClick={() => setNavbarOpen(false) }>
            <a href="#team">
              Team
            </a>
          </div>
          <div className="items-center text-white cursor-pointer hover:text-app-green" onClick={() => setNavbarOpen(false) }>
            <a href="#tokenomics">
              Tokenomics
            </a>
          </div>
          <div className="items-center text-white cursor-pointer hover:text-app-green" onClick={() => setNavbarOpen(false) }>
            <a href="#roadmap">
              Roadmap
            </a>
          </div>
          <div className="items-center text-white cursor-pointer hover:text-app-green" onClick={() => setNavbarOpen(false) }>
            <a href="#partners">
              Partners
            </a>
          </div>
          <div className="items-center text-white cursor-pointer hover:text-app-green" onClick={() => setNavbarOpen(false) }>
            <a href="#faq">
              FAQ
            </a>
          </div>
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0">
            <li>
              <button className="flex items-center justify-between w-full text-sm2 text-app-green"
                onClick={() => { setNavbarOpen(!navbarOpen); }}
              >
                Menu 
                <svg className="w-4 h-4 mt-1 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd">
                  </path>
                </svg>
              </button>
              {
                navbarOpen && (
                  <div className="absolute flex flex-row-reverse justify-end w-32 mt-1 bg-white rounded-b-xl">
                    <ul>
                      <li onClick={ () => setNavbarOpen(!navbarOpen) }>
                        <a href="https://docsend.com/view/p26a9bvfpqf52ddi" target="_blank" className="block px-2 py-2 hover:text-app-green" rel="noreferrer">White Paper</a>
                      </li>
                      <li onClick={ () => setNavbarOpen(!navbarOpen) }>
                        <a href="https://docsend.com/view/q83qhhu6h66ckvgk" target="_blank" className="block px-2 py-2 hover:text-app-green" rel="noreferrer">Check Deck</a>
                      </li>
                      <li onClick={ () => setNavbarOpen(!navbarOpen) }>
                        <a href="/news" target="_blank" className="block px-2 py-2 hover:text-app-green" rel="noreferrer">News</a>
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
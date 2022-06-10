import React from 'react'
import Logo from '../Assets/logo.png'
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function LandingPage() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  AOS.init({
    duration:1500
  });

  return (
    <section className='section-landing mt-0 relative bg-slate-100 lg:h-screen bg-local'>

      {/* Start navbar */}
    <header className='absolute w-full z-10'>
      <nav className="lg:max-w-screen-xl  flex flex-row flex-wrap justify-around my-4 lg:my-6 ml-auto mr-auto "
      role="navigation">
        
        {/* Start Logo */}
        <div className='flex items-center'>
          <a href="#">
            <img src={Logo} alt="logo" className='h-9 lg:h-9 lg:mt-3 lg:mr-16 md:h-9 mt-0'/>
          </a>
        </div>
        {/* End Logo */}

        <div id="nav_content"
        className="w-full hidden py-8 lg:flex lg:w-auto lg:py-0 lg:items-center 
        rounded-br-full shadow-md lg:shadow-none">
        <ul className="flex flex-col ml-auto text-md text-blue-900 font-semibold lg:flex-row">
          <li className="mx-6 w-mc hover:text-orange-600 mt-4 lg:mt-3"><a href="#">
            <span className='text-yellow-500'>★</span> Rewards</a></li>
          <li className="mx-6 w-mc hover:text-orange-600 mt-4 lg:mt-3"><a href="#">Job Posts</a></li>
          <li className="mx-6 w-mc hover:text-orange-600 mt-4 lg:mt-3"><a href="#">About Us</a></li>
          <li className="mx-6 w-mc hover:text-orange-600 mt-4 lg:mt-3"><a href="#">Contact Us</a></li>
          <button class="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 border 
          border-blue-900 rounded lg:ml-48">Sign In</button>
          <button class="bg-orange-600 hover:bg-orange-500 ml-5 text-white font-bold py-2 px-4 border 
          border-red-600 rounded">Create Account</button>
        </ul>
      </div>

        <div className='inline-block h-8 mr-3 lg:hidden'>

        <section className="mobile menu flex">
          <div
            className="hamburger-icon space-y-2 ml-52"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="cross icon absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-orange-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="menu-link mobile open flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-orange-600 text-blue-900 my-8 uppercase">
                <a href="/about">Rewards</a>
              </li>
              <li className="border-b border-orange-600 text-blue-900 my-8 uppercase">
                <a href="/portfolio">Job Posts</a>
              </li>
              <li className="border-b border-orange-600 text-blue-900 my-8 uppercase">
                <a href="/contact">About Us</a>
              </li>
              <li className="border-b border-orange-600 text-blue-900 my-8 uppercase">
                <a href="/contact">Contact Us</a>
              </li>
              <li className="border-b border-orange-600 text-blue-900 my-8 uppercase">
                <a href="/contact">Sign In</a>
              </li>
              <li className="border-b border-orange-600 text-blue-900 my-8 uppercase">
                <a href="/contact">Create Account</a>
              </li>
            </ul>
          </div>
        </section>

        </div>
      </nav>
    </header>
      {/* End navbar */}
{/* Slogan and SearchBar Section */}
    <div class="ml-0 lg:flex lg:ml-48 items-center h-full pb-16 lg:pb-28"  data-aos='slide-right'>
    <div className='w-full lg:w-auto'>
      <h1 className='text-3xl text-blue-900 pt-24 flex justify-center xl:text-6xl 
      lg:text-4xl md:text-1xl'>Recruit.<span className='text-orange-600'>Manage.</span>Succeed</h1>
      <h2 className='lg:text-2xl text-orange-600 m-10 flex justify-center md:text-2xl'>Discover more opportunities today!</h2>
    <div className='flex bg-blue-900 rounded-md p-2 m-4 '>
    <div class="flex justify-center mt-2">
      
  <div class="mb-3 xl:w-84">
    <select class="form-select appearance-none
      block
      w-full
      px-3
      py-2
      mr-2
      cursor-pointer
      text-base
      font-normal
      text-white
      bg-orange-600 bg-clip-padding bg-no-repeat
      border border-solid border-blue-900
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option selected>Categories ↓</option>
        <option value="1">Education Level</option>
        <option value="2">Experience</option>
        <option value="3">Age Range</option>
    </select>
  </div>
</div>
{/* Input search and button */}
<div className="relative w-full mt-2">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm 
            text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 
            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" 
            placeholder="Enter Job Title Here..." required/>
          
            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white 
            bg-orange-600 rounded-r-lg border border-blue-700 hover:bg-orange-600 focus:ring-4 focus:outline-none 
            focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
        </div>
    </div>
    </div>
    </div>
    </section>
  )
}

export default LandingPage
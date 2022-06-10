import React from 'react'
import Logo from '../Assets/logofooter.png'
import {FaGlobeAsia} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaLinkedin} from 'react-icons/fa'

function Footer() {
  return (
    <>
     <footer className="py-16 border-t border-blue-50 bg-blue-900">
  <div
    className="flex flex-col lg:flex-row items-center justify-between mx-auto max-w-screen-2xl"
  >
      <img src={Logo} alt="logo-footer" className='m-5'/>
    <ul
      className="flex flex-col lg:flex-row items-center text-sm font-medium text-white py-12 lg:py-0"
    >
      <li className="mx-7 hover:text-orange-600 mb-2 lg:mb-0">
        <a href="#"
          >JOB POSTS</a>
      </li>

      <li className="mx-7 hover:text-orange-600 mb-2 lg:mb-0">
        <a href="#">REWARDS</a>
      </li>

      <li className="mx-7 hover:text-orange-600 mb-2 lg:mb-0">
        <a href="#">ABOUT</a>
      </li>

      <li className="mx-7 hover:text-orange-600 mb-2 lg:mb-0">
        <a href="#">CONTACT</a>
      </li>
    </ul>

    <div className="flex gap-4 text-white">
              {/* <!-- GlobeAsia Icon --> */}
      <a className="hover:text-orange-600" href="#">
        <FaGlobeAsia className='h-full'/>
      </a>
      {/* <!-- Twitter Icon --> */}
      <a className="hover:text-orange-600" href="#">
        <AiFillTwitterCircle className='h-full'/>
      </a> 
      {/* <!-- Facebook Icon --> */}
      <a className="hover:text-orange-600" href="#">
        <FaFacebook className='h-full'/>
      </a>
      {/* <!-- Linkedin Icon --> */}
      <a className="hover:text-orange-600 mr-5" href="#">
            <FaLinkedin className='h-full'/>
      </a>
    </div>
  </div>

  {/* <!-- Fine Print--> */}
  <div className="flex flex-col items-center mt-24 text-xs text-white">
    <div className="mb-4">
      <a className="mx-4 hover:text-orange-600" href="#" 
        >Privacy Policy</a>
      <a className="mx-4 hover:text-orange-600" href="#" 
        >Terms &amp; Conditions</a>
    </div>
    <span>&copy; MYSTAFF.ONLINE 2022</span>
  </div>
</footer>












    
    </>
  )
}

export default Footer
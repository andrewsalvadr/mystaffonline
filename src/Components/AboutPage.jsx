import React from 'react'
import Google from '../Assets/google.png'
import Paypal from '../Assets/paypal.png'
import Facebook from '../Assets/facebook.png'
import Skype from '../Assets/skype.png'
import Slack from '../Assets/slack.png'
import OnlineMeeting from '../Assets/OnlineMeeting.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutPage() {


    AOS.init({
        duration:1500
      });

  return (
    <>
    <div className='about-body'>
    <h1 className='text-blue-400 flex justify-center m-8 font-bold'>Trusted By</h1>
    <div className='flex justify-center m-10'>
        <img src={Skype} alt="social-icon" className='h-6 mx-2 lg:h-12 lg:mx-12'/>
        <img src={Google} alt="social-icon" className='h-6 mx-2 lg:h-12 lg:mx-12'/>
        <img src={Paypal} alt="social-icon" className='h-6 mx-2 lg:h-12 lg:mx-12'/>
        <img src={Slack} alt="social-icon" className='h-6 mx-2 lg:h-12 lg:mx-12'/>
        <img src={Facebook} alt="social-icon" className='h-6 mx-2 lg:h-12 lg:mx-12'/>
    </div>
    <hr className='text-orange-600'/>
    </div>

    <div className='lg:flex lg:justify-center p-20'>
        <img src={OnlineMeeting} alt="online-meeting" className='h-48 mb-10 lg:m-5 lg:h-full lg:mt-34 md:h-2/3' data-aos='slide-up'/>

        <div className='ml-1 lg:m-5 lg:ml-16 lg:w-1/2'>
            <h1 className='text-blue-900 font-bold text-2xl lg:text-5xl lg:mb-4'>Talent<span className='text-orange-600 font-bold lg:text-5xl'>Wise</span>
            <span className='text-1xl font-light lg:text-3xl'> specialises in connecting WFH Filipinos candidates to Employers around the Globe!</span></h1>
            <div className='about z-40 text-slate-700 text-sm lg:shadow-2xl lg:p-4 lg:m-1' data-aos='slide-left'>
            <br/>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <br/>
            <p className=''>Iaculis urna id volutpat lacus laoreet non curabitur. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Felis donec et odio pellentesque diam volutpat commodo sed egestas. </p>
            <br/>
            <p className=''>Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Tortor posuere ac ut consequat semper viverra. Elementum facilisis leo vel fringilla est.</p>   
            <br/>
            <p className=''>Non diam phasellus vestibulum lorem sed. Fermentum leo vel orci porta non. Cursus eget nunc scelerisque viverra mauris in. </p>
            <br/>
            <p className=''>Nunc sed blandit libero volutpat. Bibendum arcu vitae elementum curabitur vitae nunc. Purus in mollis nunc sed id. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Nam libero justo laoreet sit amet cursus sit. Nam aliquam sem et tortor.</p>
                </div>
        </div>

    </div>
    </>


  )
}

export default AboutPage
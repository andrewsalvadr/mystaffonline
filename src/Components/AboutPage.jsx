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
            <h1 className='text-blue-900 font-bold text-2xl lg:text-5xl lg:mb-4'>My<span className='text-orange-600 font-bold lg:text-5xl'>Staff.</span>online
            <span className='text-1xl font-light lg:text-3xl'> specialises in connecting WFH Filipinos candidates to Employers around the Globe!</span></h1>
            <div className='about z-40 text-slate-700 text-sm lg:shadow-2xl lg:p-4 lg:m-1' data-aos='slide-left'>
            <br/>
            <p className=''>Here at MyStaff.online we are a little bit different from other recruitment sites. Because we specialise in providing work-from-home jobs our 
                Employers have requirements that are different from when applying for a normal job. 
                For example, Employers of remote Candidates also need to know how fast the internet is in your area, 
                your computer specs, if you have a quiet workspace, etc.</p>
            <br/>
            <p className=''>By signing up and completing your profile, you will be presenting yourself to Employers in a clear and understandable manner. 
                This, coupled with our “record a video” interview system, makes the hiring process faster and easier.</p>
            <br/>
            <p className=''>Although we do have some Job listings on our website, MyStaff.online is also a database of Candidates that our Employers and Recruiters around the world search 
                through and choose their employees from.</p>   
            <br/>
            <p className=''>By fully completing your MyStaff.online profile you greatly increase your chances of being successfully chosen.</p>
            <br/>
            <p className=''>The employer and employee relationship solve the common outsourcing problems associated with the Freelancer / Fiverr model. The issues of a lack of reliability and inconsistent earnings are removed 
                when permanent staff are employed and managed through MyStaff.online.</p>
                </div>
        </div>

    </div>
    </>


  )
}

export default AboutPage
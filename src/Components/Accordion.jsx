import React, { useState } from 'react';
import AccordionLayout from './AccordionLayout/AccordionLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    AOS.init({
      duration:1500
    });

  return (

    <div className='bg-slate-100'>

      <h1 className='text-2xl lg:text-5xl md:text-4xl font-bold text-blue-900 flex justify-center p-20' data-aos='flip-up'>Frequently.<span className='text-orange-600'>Asked.</span>Questions</h1>
      <div className='flex flex-col justify-center items-center pb-20' data-aos="fade-up">
          <AccordionLayout 
            title="What are the most common types of workers MyStaff places into work?"
            index={1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <div className='lg:flex justify-center lg:gap-14 text-xs px-32 lg:text-sm'>
            <ul>
              <li>Web Developers</li>
              <li>Web Designers</li>
              <li>SEO</li>
              <li>SEM</li>
              <li>Support Agents</li>
            </ul>
            <ul>
              <li>PPC Specialist</li>
              <li>Graphic Designers</li>
              <li>Social Media Marketers</li>
              <li>Call Operators</li>
              <li>Artist</li>
            </ul>
            <ul>
              <li>Data Entry</li>
              <li>Video Editors</li>
              <li>BookKeepers</li>
              <li>Animators</li>
              <li>Live Chat Operators</li>
            </ul>
            <ul>
              <li>Cartoonist</li>
              <li>Creative Writers</li>
              <li>Proofreaders</li>
              <li>Helpdesk</li>
            </ul>

            </div>
          </AccordionLayout>

          <AccordionLayout 
            title="Are all the candidates you have work-from-home-type employees?"
            index={2}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <div className='text-xs px-32 md:px-44 lg:text-sm lg:px-72'>
              <p>Yes, this is essentially what outsourcing is, work that does not have to be done onsite or in an office. This 
                enables us to access the best candidates from all over the Philippines. We are not limited to one area as so many BPOs are. 
                We have noticed that some of the most skilled and talented desire to have the flexibility of working from home or 
                away from the major cities.</p>
            </div>
            </AccordionLayout>

          <AccordionLayout 
            title="What Countries are the Employers in?"
            index={3}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
           <div className='text-xs px-32 md:px-44 lg:text-sm lg:px-72'>
              <p>Currently we are in the US, Canada, and Australia, but are constantly looking to expand into other countries.</p>
           </div>
 
          </AccordionLayout>

          <AccordionLayout 
            title="Where can I view the job vacancies?"
            index={4}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >

            <div className='text-xs px-32 md:px-44 lg:text-sm lg:px-72'>
              <p>We do not show our Job listings on our website. MyStaff.online is a database of Candidates which our Employers 
                and Recruiters around the world search through and choose from.</p>
             </div>
          </AccordionLayout>

          <AccordionLayout 
            title="What Countries does MyStaff recruit from?"
            index={5}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >

            <div className='text-xs px-32 md:px-44 lg:text-sm lg:px-72'>
             <p>Currently only the Indonesia, Philippines, Argentina and South Africa, but we soon hope to be recruiting from 
               Malaysia, Singapore and Vietnam.</p>
             </div>
          </AccordionLayout>

          <AccordionLayout 
            title="How can I increase my chances of gaining work through MyStaff?"
            index={6}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >


              <div className='text-xs px-32 md:px-44 lg:text-sm lg:px-72'>
             <p>Fully completing your MyStaff.online profile with as much detail as possible will greatly increases your chances 
               of being successfully chosen by our recruiter and employers.</p>
             </div>
          </AccordionLayout>

          <AccordionLayout 
            title="Does it cost to register on MyStaff?"
            index={7}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >

            <div className='text-xs px-32 md:px-44 lg:text-sm lg:px-72'>
             <p>No, its totally free to register, build a profile, and be interviewed on the MyStaff platform by our Recruiters 
               and Employers. Mystaff charges Employers a small management fee to cover its costs.</p>
             </div>

          </AccordionLayout>

          <AccordionLayout 
            title="How do I get paid?"
            index={8}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >

            <div className='text-xs px-32 md:px-44 lg:text-sm lg:px-72'>
            <p>Pays are processed monthly on the 15th and paid directly into your PHP bank account.</p>             
             </div>
          </AccordionLayout>

          <AccordionLayout 
            title="Where is MyStaff based?"
            index={9}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >

            <div className='text-xs px-32 md:px-44 lg:text-sm lg:px-72'>
             <p>MyStaff is a brand formed by its parent company Shockwave Media Pty Ltd. We are an Australian registered company, 
               with our HQ in Sydney.</p>
             </div>

          </AccordionLayout>

          <AccordionLayout 
            title="What’s in it for MyStaff online?"
            index={10}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >

              <div className='text-xs px-32 md:px-44 lg:text-sm lg:px-72'>
             <p>MyStaff charges a small monthly management fee to cover Mystaff employees managing the Filipino contractors’ pay, 
               start and end times, tracking hours they have done, productivity reports, sick leaves, holidays and all 
               banking/currency exchange fees. Mystaff understands the perils and pressures of running a business, and has 
               found its passion in connecting great businesses with great staff, everybody wins.</p>
             </div>
          </AccordionLayout>

      </div>
      </div>
  );
};
export default Accordion;
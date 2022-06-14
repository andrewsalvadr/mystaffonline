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
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
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
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            index={2}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <div className='text-xs px-32 md:px-44 lg:text-sm lg:px-72'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Scelerisque viverra mauris in aliquam. Iaculis urna id volutpat lacus laoreet non curabitur. Egestas egestas fringilla phasellus 
                faucibus scelerisque eleifend.</p>
            </div>
            </AccordionLayout>

          <AccordionLayout 
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            index={3}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
           <div className='text-xs px-32 md:px-44 lg:text-sm lg:px-72'>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Scelerisque viverra mauris in aliquam. Iaculis urna id volutpat lacus laoreet non curabitur. Egestas egestas fringilla phasellus 
                faucibus scelerisque eleifend.</p>           
                </div>
 
          </AccordionLayout>

          <AccordionLayout 
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            index={4}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >

            <div className='text-xs px-32 md:px-44 lg:text-sm lg:px-72'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Scelerisque viverra mauris in aliquam. Iaculis urna id volutpat lacus laoreet non curabitur. Egestas egestas fringilla phasellus 
                faucibus scelerisque eleifend.</p>
             </div>
          </AccordionLayout>

          <AccordionLayout 
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            index={5}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >

            <div className='text-xs px-32 md:px-44 lg:text-sm lg:px-72'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Scelerisque viverra mauris in aliquam. Iaculis urna id volutpat lacus laoreet non curabitur. Egestas egestas fringilla phasellus 
                faucibus scelerisque eleifend.</p>
             </div>
          </AccordionLayout>

          <AccordionLayout 
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            index={6}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >


              <div className='text-xs px-32 md:px-44 lg:text-sm lg:px-72'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Scelerisque viverra mauris in aliquam. Iaculis urna id volutpat lacus laoreet non curabitur. Egestas egestas fringilla phasellus 
                faucibus scelerisque eleifend.</p>
             </div>
          </AccordionLayout>

          <AccordionLayout 
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            index={7}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >

            <div className='text-xs px-32 md:px-44 lg:text-sm lg:px-72'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Scelerisque viverra mauris in aliquam. Iaculis urna id volutpat lacus laoreet non curabitur. Egestas egestas fringilla phasellus 
                faucibus scelerisque eleifend.</p>
             </div>

          </AccordionLayout>

          <AccordionLayout 
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            index={8}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >

            <div className='text-xs px-32 md:px-44 lg:text-sm lg:px-72'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Scelerisque viverra mauris in aliquam. Iaculis urna id volutpat lacus laoreet non curabitur. Egestas egestas fringilla phasellus 
                faucibus scelerisque eleifend.</p>         
             </div>
          </AccordionLayout>

          <AccordionLayout 
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            index={9}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >

            <div className='text-xs px-32 md:px-44 lg:text-sm lg:px-72'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Scelerisque viverra mauris in aliquam. Iaculis urna id volutpat lacus laoreet non curabitur. Egestas egestas fringilla phasellus 
                faucibus scelerisque eleifend.</p>
             </div>

          </AccordionLayout>

          <AccordionLayout 
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            index={10}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >

              <div className='text-xs px-32 md:px-44 lg:text-sm lg:px-72'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Scelerisque viverra mauris in aliquam. Iaculis urna id volutpat lacus laoreet non curabitur. Egestas egestas fringilla phasellus 
                faucibus scelerisque eleifend.</p>
             </div>
          </AccordionLayout>

      </div>
      </div>
  );
};
export default Accordion;
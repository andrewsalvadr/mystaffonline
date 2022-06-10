import React from 'react';

import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'


//reusable layout
const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {

   //close when another opens 
  const handleSetIndex = (index) => (activeIndex !== index) && setActiveIndex(index);

  return (
    <>
        <div onClick={() => handleSetIndex(index)} className='flex w-1/2 justify-between p-2 mt-2 rounded bg-blue-900'>
            <div className='flex'>
                <div className='text-white font-bold text-xs lg:text-sm'>{title}</div>
            </div>
            <div className="flex items-center justify-center">
                {
                (activeIndex === index) 
                ? <BsFillArrowDownCircleFill className='w-8 h-8 text-white hover:text-orange-600 cursor-pointer' />
                : <BsFillArrowUpCircleFill className='w-8 h-8 text-white hover:text-orange-600 cursor-pointer'/>
                }
            </div>
        </div>

        {(activeIndex === index) && (
            <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6">
              {children}
            </div>
        )}
    </>
  );
};

export default AccordionLayout;
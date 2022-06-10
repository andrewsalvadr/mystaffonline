import React from 'react'
import { GoLocation } from 'react-icons/go'
import AOS from 'aos';
import 'aos/dist/aos.css';

function JobPage() {
  AOS.init({
    duration:1500
  });

  return (
    <div className='bg-slate-100'>
    <div className='text-blue-900 pt-20'>
        <h1 className='text-4xl lg:text-6xl font-bold flex justify-center mb-5'>JOB OPENINGS</h1>
        <h2 className='text-xl lg:text-2xl font-bold flex justify-center'>Find your opportunities!</h2>
    </div>
    
    <div className='gap-1 lg:flex lg:justify-center p-2 lg:p-9 lg:gap-24'>
        {/* JobPost#1 */}
        <div className='mb-4 mt-9 mx-16 bg-slate-100 border-4 border-blue-100 lg:mx-2' data-aos='zoom-in-down'>
            <h1 className='border-blue-100 lg:border-2 lg:py-2 m-6 flex justify-center font-bold text-slate-600'>Virtual Assistant</h1>
            <h2 className=' p-1 flex justify-center text-slate-600'>Part Time</h2>
            <br/>
            <h2 className='text-slate-600 p-2'>Requirements:</h2>
            <ul className='text-slate-600 p-2'>
                  <li>1. Nunc in turpis metus. Pellentes.</li>
                <li>2. Nam tempus libero varius, ornare libero.</li>
                <li>3. Duis fermentum neque a ultrices.</li>
                <li>4. Aenean fringilla venenatis augue.</li>
            </ul>
           <h2 className='text-slate-600 flex p-2 mb-2 lg:m-2'> Location: <GoLocation className='mx-2'/>Philippines</h2>
           <button className='w-full p-2 bg-blue-100 border-2 border-blue-100 font-bold hover:bg-blue-200 text-slate-800'>VIEW JOB POST</button>
        </div>

     {/* JobPost#2 */}
     <div className='mb-4 mt-9 mx-16 bg-slate-100 border-4 border-blue-100 lg:mx-2' data-aos='zoom-in-up'>
            <h1 className='border-blue-100 lg:border-2 lg:py-2 m-6 flex justify-center font-bold text-slate-600'>Graphic Designer</h1>
            <h2 className=' p-1 flex justify-center text-slate-600'>Part Time</h2>
            <br/>
            <h2 className='text-slate-600 p-2'>Requirements:</h2>
            <ul className='text-slate-600 p-2'>
                  <li>1. Nunc in turpis metus. Pellentes.</li>
                <li>2. Nam tempus libero varius, ornare libero.</li>
                <li>3. Duis fermentum neque a ultrices.</li>
                <li>4. Aenean fringilla venenatis augue.</li>
            </ul>
           <h2 className='text-slate-600 flex p-2 mb-2 lg:m-2'> Location: <GoLocation className='mx-2'/>Philippines</h2>
           <button className='w-full p-2 bg-blue-100 border-2 border-blue-100 hover:bg-blue-200 font-bold text-slate-800'>VIEW JOB POST</button>
        </div>

     {/* JobPost#3 */}
     <div className='mb-4 mt-9 mx-16 bg-slate-100 border-4 border-blue-100 lg:mx-2' data-aos='zoom-in-up'>
            <h1 className='border-blue-100 lg:border-2 lg:py-2 m-6 flex justify-center font-bold text-slate-600'>Front End Developer</h1>
            <h2 className=' p-1 flex justify-center text-slate-600'>Part Time</h2>
            <br/>
            <h2 className='text-slate-600 p-2'>Requirements:</h2>
            <ul className='text-slate-600 p-2'>
                  <li>1. Nunc in turpis metus. Pellentes.</li>
                <li>2. Nam tempus libero varius, ornare libero.</li>
                <li>3. Duis fermentum neque a ultrices.</li>
                <li>4. Aenean fringilla venenatis augue.</li>
            </ul>
           <h2 className='text-slate-600 flex p-2 mb-2 lg:m-2'> Location: <GoLocation className='mx-2'/>Philippines</h2>
           <button className='w-full p-2 bg-blue-100 border-2 border-blue-100 hover:bg-blue-200 text-slate-800 font-bold'>VIEW JOB POST</button>
        </div>

    </div>



    <div className='gap-1 lg:flex lg:justify-center p-2 lg:p-9 lg:gap-24'>
         {/* JobPost#4 */}
         <div className='mb-4 mt-9 mx-16 bg-slate-100 border-4 border-blue-100 lg:mx-2' data-aos='zoom-in-up'>
            <h1 className='border-blue-100 lg:border-2 lg:py-2 m-6 flex justify-center font-bold text-slate-600'>Video Editor</h1>
            <h2 className=' p-1 flex justify-center text-slate-600'>Part Time</h2>
            <br/>
            <h2 className='text-slate-600 p-2'>Requirements:</h2>
            <ul className='text-slate-600 p-2'>
                  <li>1. Nunc in turpis metus. Pellentes.</li>
                <li>2. Nam tempus libero varius, ornare libero.</li>
                <li>3. Duis fermentum neque a ultrices.</li>
                <li>4. Aenean fringilla venenatis augue.</li>
            </ul>
           <h2 className='text-slate-600 flex p-2 mb-2 lg:m-2'> Location: <GoLocation className='mx-2'/>Philippines</h2>
           <button className='w-full p-2 bg-blue-100 border-2 border-blue-100 hover:bg-blue-200 text-slate-800 font-bold'>VIEW JOB POST</button>
        </div>

     {/* JobPost#5 */}
     <div className='mb-4 mt-9 mx-16 bg-slate-100 border-4 border-blue-100 lg:mx-2' data-aos='zoom-in-up'>
            <h1 className='border-blue-100 lg:border-2 lg:py-2 m-6 flex justify-center font-bold text-slate-600'>Lead Technical SEO</h1>
            <h2 className=' p-1 flex justify-center text-slate-600'>Part Time</h2>
            <br/>
            <h2 className='text-slate-600 p-2'>Requirements:</h2>
            <ul className='text-slate-600 p-2'>
                  <li>1. Nunc in turpis metus. Pellentes.</li>
                <li>2. Nam tempus libero varius, ornare libero.</li>
                <li>3. Duis fermentum neque a ultrices.</li>
                <li>4. Aenean fringilla venenatis augue.</li>
            </ul>
           <h2 className='text-slate-600 flex p-2 mb-2 lg:m-2'> Location: <GoLocation className='mx-2'/>Philippines</h2>
           <button className='w-full p-2 bg-blue-100 border-2 border-blue-100 hover:bg-blue-200 text-slate-800 font-bold'>VIEW JOB POST</button>
        </div>

     {/* JobPost#6 */}
     <div className='mb-4 mt-9 mx-16 bg-slate-100 border-4 border-blue-100 lg:mx-2' data-aos='zoom-in-up'>
            <h1 className='border-blue-100 lg:border-2 lg:py-2 m-6 flex justify-center font-bold text-slate-600'>Web Developer</h1>
            <h2 className=' p-1 flex justify-center text-slate-600'>Part Time</h2>
            <br/>
            <h2 className='text-slate-600 p-2'>Requirements:</h2>
            <ul className='text-slate-600 p-2'>
                  <li>1. Nunc in turpis metus. Pellentes.</li>
                <li>2. Nam tempus libero varius, ornare libero.</li>
                <li>3. Duis fermentum neque a ultrices.</li>
                <li>4. Aenean fringilla venenatis augue.</li>
            </ul>
           <h2 className='text-slate-600 flex p-2 mb-2 lg:m-2'> Location: <GoLocation className='mx-2'/>Philippines</h2>
           <button className='w-full p-2 bg-blue-100 border-2 border-blue-100 hover:bg-blue-200 text-slate-800 font-bold'>VIEW JOB POST</button>
        </div>

        </div>

    <div className='flex items-center justify-center'>
    <button className='m-9 p-2 bg-blue-900 rounded  border-2 border-white hover:bg-blue-200 text-white lg:text-2xl'>BROWSE MORE JOBS</button>
    </div>






</div>
    
    
    


  )
}

export default JobPage
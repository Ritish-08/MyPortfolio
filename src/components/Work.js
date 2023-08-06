import React from 'react';

import Img1 from '../assets/portfolio-img1.png';

import Img2 from '../assets/portfolio-img2.png';

import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
   return( 
   <section className='section' id='work'>
     <div className="container mx-auto">
       <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/*text*/}
          <div>
            <h2 className='h2 leading-tight text-accent'>
              My Latest Work
              </h2>
              <p className='max-w-sm mb-16'>
              <h1><strong>My notable projects includes</strong></h1>
              <ol>
                <li className='text-gradient'>eHealthEase Website</li>
                <li className='text-gradient'>Radar Roaming</li>
                <li className='text-gradient'>Hoobank Website</li>
              </ol>
              </p>
              <button className='btn btn-sm'>View All Projects</button>
          </div>
          {/*image*/}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/*overlay*/}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/*img */}
            <img 
            className='group-hover:scale-125 transition-all duration-500' 
            src={Img1} 
            alt="" 
            />
            {/*pretitle*/}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'><a href="https://e-health-ease.vercel.app/">Live Link</a></span>
            </div>
            {/*title*/}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>eHealthEase</span>
              </div>
          </div>
        </div>
        <div className='flex-1 flex flex-col gap-y-10'>
          {/*image*/}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/*overlay*/}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/*img */}
            <img 
            className='group-hover:scale-125 transition-all duration-500' 
            src={Img2} 
            alt="" 
            />
            {/*pretitle*/}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'><a href="https://bankingapp-lacr.vercel.app/">Live Link</a></span>
            </div>
            {/*title*/}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Radar Roaming</span>
              </div>
          </div>
          {/*image*/}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/*overlay*/}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/*img */}
            <img 
            className='group-hover:scale-125 transition-all duration-500' 
            src={Img3} 
            alt="" 
            />
            {/*pretitle*/}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'><a href="https://bankingapp-seven.vercel.app/">Live Link</a></span>
            </div>
            {/*title*/}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'> hooBank</span>
              </div>
          </div>
        </div>
       </div>
     </div>
   </section>
);
};

export default Work;
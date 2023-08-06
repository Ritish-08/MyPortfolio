import React from 'react';
import image from '../assets/avatar1.png'
//import {faGithub, faYoutube, faDribbble} from 'react-icons/fa';
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import './banner.css'
const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center 
        lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
            variants={fadeIn('up',0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='mb-4 text-[30px] font-bold leading-[0.8] lg:text-[60px]'>
              Ritish <span>Choudhary</span>
            </motion.h1>
            <motion.div
            variants={fadeIn('up',0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
             className='mb-6 text-[30px] lg:text-[50px] font-secondary 
            font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4 lowercase'>I am a</span>
              <TypeAnimation sequence={[
                'Developer ',
                2000,
                'Designer ',
                2000,
                'Algorithmic Designer ',
                2000,
              ]}
              speed={40}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            </motion.div>
            <motion.p 
            variants={fadeIn('up',0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
            Hi there! My name is Ritish Choudhary and I am a driven and passionate software developer. 
            I am currently a fourth year student studying Electronics Communication and engineering at
             Thapar Institute of Engineering and Technology, Punjab.
            </motion.p>
            <motion.div
            variants={fadeIn('up',0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className='text-gradient btn-link'> My Portfolio</a>
            </motion.div>
            <motion.div 
            variants={fadeIn('up',0.7)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="https://github.com/Ritish-08">
                <FaGithub/>
              </a>
              <a href="https://www.instagram.com/ritish.08/">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/ritish-choudhary-2a9279287/">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <div>
            <img
            
            src={image} alt="" className='second'/>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Banner;
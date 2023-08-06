import React from 'react';
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const About = () => {
  const[ref,inView] = useInView({
    threshold:0.5,

});
  return(
    <section className='section' id = 'about' ref={ref}>
      <div className="container mx-auto">
       <div>
       <h2 className='h2 leading-tight text-accent'>
         About Me
        </h2>
       </div>
        <div>
          <div></div>
          <motion.p 
           variants={fadeIn('up',0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false, amount:0.3}}
          className='border rounded-2xl p-4 gap-y-6'>
          Hi there! My name is Ritish Choudhary and I am a driven and passionate software developer. 
          I am currently a fourth year student studying Electronics Communication and engineering at Thapar Institute of Engineering and Technology, Punjab and I
          have a strong interest in frontend and backend development. I have a diverse skill set,
           encompassing proficiency in various programming languages like C, C++, Java, and JavaScript.
           I am Constantly looking to expand my Knowledge.
          </motion.p>
          <br />
          <motion.p 
          variants={fadeIn('up',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
         className='border rounded-2xl p-4 gap-y-6'>
          I have completed several projects that demonstrate my technical skills. 
          In my portfolio, you will find a collection of projects that showcase my ingenuity and proficiency in turning ideas into reality. 
          Each endeavor reflects my commitment to excellence and my drive to push the boundaries of what's possible.
          My notable projects include creating eHealthEase which is a website used to book your appointments, Radar Roaming a booking app clone, 
          hooBank website. You can go through them ahead.
          </motion.p>
          <br />
          <motion.p 
          variants={fadeIn('up',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
         className='border rounded-2xl p-4 gap-y-6'>
          
          I  am an innovative and resourceful problem solver, constantly exploring uncharted territories to discover unique and effective solutions.
           My ability to think outside the box sets me apart as a creative mind in the field of software development.
          As an individual with a relentless curiosity, I am always on the prowl for novel and streamlined approaches to tackle challenges and optimize processes.
           My passion lies in transforming complex problems into elegant, efficient, and scalable solutions.
          </motion.p>
        
        </div>
       </div>
    </section>
  )
};

export default About;
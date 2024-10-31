import React from 'react';
import AmanImage from '../Images/Aman.png'

function About() {
  return (
    <div className='grid gap-2 p-4 sm:px-20 md:justify-center md:items-center min-h-screen'>
      <div className='sm:grid border-2 border-yellow-300 md:grid lg:flex space-y-3 drop-shadow-[0_0_4px_rgba(0,0,0,1)] bg-[#5c5c5c] rounded-xl p-8'>
        <div className='w-full flex justify-center'>
          <img className='drop-shadow-2xl lg:max-w-lg object-contain p-5' src={AmanImage} alt="me" />
        </div>
        <div className='space-y-3'>
          <h1 className='text-4xl text-yellow-400 font-bold text-center'>About Me</h1>
          <div className='text-xl font-semibold text-white space-y-3'>
            <p>I am a motivated BCA graduate with a strong foundation in web development, programming, and database management. Passionate about problem-solving and eager to learn new technologies, I am driven by the desire to contribute to innovative IT solutions. I specialize in creating impactful user interfaces that deliver seamless user experiences as a frontend developer.</p>
            <p>I thrive on the challenges of coding and am committed to continuously expanding my skill set in the ever-evolving field of web development. I am excited about opportunities that allow me to contribute to both the design and functionality of web applications while growing as a developer. I look forward to collaborating on projects that push the boundaries of technology and make a meaningful impact.</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;

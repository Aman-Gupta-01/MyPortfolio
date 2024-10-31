import React from 'react';
import HomeImage from '../Images/Home.png';
import DownloadResume from './DownloadResume';

function Home() {
  return (
    <div className='min-h-screen'>
    <div className='flex flex-col p-4 sm:px-20 md:justify-center md:items-center md:flex-row '>
        <div className='sm:pt-4 space-y-3 md:w-1/2'>
            <h1 className='text-4xl text-yellow-400 font-bold text-center lg:text-left font-serif'>Hi There!</h1>
            <h3 className='text-2xl text-yellow-300 font-bold text-center lg:text-left font-mono'>I’m Aman Gupta</h3>
            <p className='text-xl font-semibold text-white'>As a frontend developer, I have a passion for crafting visually appealing, responsive, and user-friendly web applications. My creativity drives me to explore innovative solutions, while my problem-solving skills enable me to tackle challenges effectively. I'm deeply interested in modern web technologies like React.js, Redux Toolkit, and Tailwind CSS, which empower me to bring dynamic and responsive designs to life.</p>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <img className='hover:scale-105 transition drop-shadow-[0_0_4px_rgba(0,0,0,1)] duration-300' src={HomeImage} alt="Programmer" />
        </div>
    </div>
    <DownloadResume />

    </div>
  );
}

export default Home;

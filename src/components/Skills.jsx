import React from 'react';
import skillData from './data/skillData';

function Skills() {
  return (
    <section className='min-h-screen'>

      <div className='flex mx-10 mt-10 rounded-full bg-[#eeeeee] border-2 border-white h-20 drop-shadow-[0_0_4px_rgba(0,0,0,1)] items-center justify-center'>
        <h1 className='text-4xl font-bold'>My <span className='text-blue-600 font-mono'>Skills</span></h1>
      </div>

      <div className='p-8'>
        <ul className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8'>
          {skillData.map((data) => (
            <li key={data.id} className=' bg-[#eeeeee] border-4 drop-shadow-[0_0_4px_rgba(0,0,0,1)] border-yellow-400 hover:scale-95 transition duration-300  p-4 rounded-lg shadow-md flex flex-col items-center'>
              <img className='w-24 h-24 drop-shadow-2xl hover:scale-110 transition duration-300 object-contain ' src={data.image} alt={data.name} />
              <p className='mt-2 text-lg font-semibold'>{data.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
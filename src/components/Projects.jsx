import React from 'react'
import projectData from './data/projectData'

function Projects() {
  
  return (
    <div className='min-h-screen'>
      
      <div className='flex mx-10 mt-10 rounded-full bg-[#eeeeee] border-2 border-white h-20 drop-shadow-[0_0_4px_rgba(0,0,0,1)] items-center justify-center'>
        <h1 className='text-4xl drop-shadow-xl font-bold'>My <span className='text-blue-600 font-mono'>Projects</span></h1>
      </div>

    <section className='justify-center items-center m-10 rounded-xl '>
      
      <div >

          <ul className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8'>
            {projectData.map((project)=>(
              <li onClick={()=> {
                if (project.link) {
                  window.location.href = project.link
                }
              }} className='p-4 transition duration-300 cursor-pointer hover:scale-95 bg-[#5c5c5c] border-2 drop-shadow-[0_0_5px_rgba(0,0,0,1)] border-yellow-400 rounded-xl' key={project.id}>
                
        <div className='flex space-x-4 items-center justify-center pb-4'>
            <h1 className='text-3xl drop-shadow-lg  text-yellow-400 font-bold transition duration-300'>Name: </h1>
            <h2 className='text-3xl drop-shadow-lg font-semibold text-white transition duration-300'>{project.name}</h2>
          </div>

        <div>
          <img className='rounded-3xl drop-shadow-[0_0_5px_rgba(0,0,0,1)]  transition duration-300' src={project.image} alt={project.name} />
        </div>

        <div className='grid items-center justify-center'>
            <p className='text-center text-2xl text-yellow-400 font-bold 5pt-3'>Description: </p>
            <p className='text-xl font-semibold text-white drop-shadow-lg'>{project.description}</p>
        </div>
              </li>
            ))}

          </ul>

      </div>
    </section>
    </div>

  )
}

export default Projects



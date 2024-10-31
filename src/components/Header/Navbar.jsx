import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { IoCloseSharp, IoMenu } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-[#333] backdrop-filter backdrop-blur-xl opacity-80 px-4 z-[20] drop-shadow-[0_0_5px_rgba(0,0,0,1)] rounded-b-md sticky top-0 p-2 items-center flex justify-between'>
      <div className="text-yellow-400 font-serif text-xl font-semibold">
        <HashLink className='hover:drop-shadow-[0_0_5px_rgba(0,0,0,1)]' smooth to='/#home'>Aman Gupta</HashLink>
      </div>

      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoCloseSharp className="text-yellow-400 text-3xl" /> : <IoMenu className="text-yellow-400 text-3xl" />}
        </button>
      </div>

      {isOpen && (
        <ul className="absolute top-16 right-5 bg-[#333] p-5 rounded-md shadow-md flex flex-col gap-4 text-yellow-400 font-serif text-xl font-semibold sm:hidden">
          <li><HashLink onClick={() => setIsOpen(false)} className='hover:drop-shadow-[0_0_5px_rgba(0,0,0,1)]' smooth to='/#home'>Home</HashLink></li>
          <li><HashLink onClick={() => setIsOpen(false)} className='hover:drop-shadow-[0_0_5px_rgba(0,0,0,1)]' smooth to='/#about'>About</HashLink></li>
          <li><HashLink onClick={() => setIsOpen(false)} className='hover:drop-shadow-[0_0_5px_rgba(0,0,0,1)]' smooth to='/#skills'>Skills</HashLink></li>
          <li><HashLink onClick={() => setIsOpen(false)} className='hover:drop-shadow-[0_0_5px_rgba(0,0,0,1)]' smooth to='/#projects'>Projects</HashLink></li>
          <li><HashLink onClick={() => setIsOpen(false)} className='hover:drop-shadow-[0_0_5px_rgba(0,0,0,1)]' smooth to='/#contact'>Contact</HashLink></li>
        </ul>
      )}

      <ul className="hidden sm:flex gap-5 items-center text-yellow-400 font-serif text-xl font-semibold">
        <li><HashLink className='hover:drop-shadow-[0_0_5px_rgba(0,0,0,1)]' smooth to='/#home'>Home</HashLink></li>
        <li><HashLink className='hover:drop-shadow-[0_0_5px_rgba(0,0,0,1)]' smooth to='/#about'>About</HashLink></li>
        <li><HashLink className='hover:drop-shadow-[0_0_5px_rgba(0,0,0,1)]' smooth to='/#skills'>Skills</HashLink></li>
        <li><HashLink className='hover:drop-shadow-[0_0_5px_rgba(0,0,0,1)]' smooth to='/#projects'>Projects</HashLink></li>
        <li><HashLink className='hover:drop-shadow-[0_0_5px_rgba(0,0,0,1)]' smooth to='/#contact'>Contact</HashLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;

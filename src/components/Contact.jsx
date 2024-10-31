import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom'
import { VscGithub } from "react-icons/vsc";


function Contect() {
  const notify = () => toast.success('Message is Sent', {
    style: {
      borderRadius: '10px',
      background: '#5c5c5c',
      color: '#fff',
    }
  });


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "86f116d3-7230-4765-9e37-9928f4deb93f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }

    event.target.reset();
    notify()
  };

  return (
    <div className='min-h-screen'>
      <div className='grid justify-center items-center py-8'>
        <h1 className='drop-shadow-[0_0_5px_rgba(0,0,0,1)] text-6xl font-extrabold font-mono text-yellow-400'>Contect Me</h1>
      </div>
      <div className='lg:flex md:grid sm:grid justify-center gap-10 items-center m-4 md:m-10'>

          <form className='grid gap-4 w-full max-w-lg mx-auto md:mx-0' onSubmit={onSubmit}>
            <input 
              required
              className='drop-shadow-[0_0_5px_rgba(0,0,0,1)] focus:placeholder-transparent bg-[#5c5c5c] h-12 border-r-4 border-b-4 border-yellow-400 w-full rounded-xl placeholder:p-3 placeholder:text-white placeholder:font-semibold placeholder:font-serif text-white font-semibold font-serif p-3' 
              placeholder='Name' 
              type="text" 
              name="name"
            />
            <input 
              required
              className='drop-shadow-[0_0_5px_rgba(0,0,0,1)] focus:placeholder-transparent bg-[#5c5c5c] h-12 border-r-4 border-b-4 border-yellow-400 w-full rounded-xl placeholder:p-3 placeholder:text-white placeholder:font-semibold placeholder:font-serif text-white font-semibold font-serif p-3' 
              placeholder='Email' 
              type="email" 
              name="email"
            />
            <textarea 
              required
              className='drop-shadow-[0_0_5px_rgba(0,0,0,1)] focus:placeholder-transparent bg-[#5c5c5c] min-h-28 rounded-xl border-r-4 border-b-4 border-yellow-400 placeholder:p-3 placeholder:text-white  placeholder:font-semibold placeholder:font-serif text-white font-semibold font-serif p-3' 
              placeholder='Message' 
              name="message"
            ></textarea>
            <button 
              className='drop-shadow-[0_0_5px_rgba(0,0,0,1)] text-xl font-semibold bg-gray-800 active:scale-95 duration-300 border-2 border-yellow-300 text-white py-2 px-4 rounded-xl hover:bg-[#5c5c5c] transition' 
              type="submit"
            >
              Email Me
            </button>
            <Toaster />
          </form>

          <div className='mt-8 md:mt-0 text-center text-yellow-300 md:text-left space-y-4'>
          <div className='flex items-center space-x-2'>
              <VscGithub className='text-xl' />
              <Link className='text-2xl font-mono font-semibold drop-shadow-[0_0_5px_rgba(0,0,0,1)] underline' to={'https://github.com/Aman-Gupta-01'}>Github</Link>
            </div>
            <div className='flex items-center space-x-2'>
              <FaLinkedin className='text-xl' />
              <Link className='text-2xl font-mono font-semibold drop-shadow-[0_0_5px_rgba(0,0,0,1)] underline' to={'https://www.linkedin.com/in/aman-gupta-949475314/'}>Linkedin</Link>
            </div>
            <div className='flex items-center space-x-2'>
              <RiMailSendFill className='text-xl' />
              <Link to={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=guptaman2007@gmail.com`}  className='text-2xl font-mono font-semibold drop-shadow-[0_0_5px_rgba(0,0,0,1)]'>guptaman2007@gmail.com</Link>
            </div>
            <div className='flex items-center space-x-2'>
              <FaLocationDot className='text-xl' />
              <h1 className='text-2xl font-mono font-semibold drop-shadow-[0_0_5px_rgba(0,0,0,1)]'>North-East Delhi</h1>
            </div>
          </div>

        </div>

      
    </div>
  );
}

export default Contect;

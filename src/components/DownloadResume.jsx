import React from 'react'
import resume from './data/Resume/AmanResume.pdf'
import toast from 'react-hot-toast';


function DownloadResume() {
  const notify = () => {

    const DownloadPromise = new Promise((resolve, reject)=>{
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve()
        } else {
          reject()
        }
      }, 1500);
    })

    toast.promise(
      DownloadPromise,
       {
         loading: 'Downloading...',
         success: <b>Download successful!</b>,
         error: <b>Could not download the file..</b>,
       }
     );
  }
  
  
  return (
    <div className='flex items-center justify-center py-6' onClick={notify}>
        <a className='px-10 py-4 rounded-full drop-shadow-[0_0_5px_rgba(0,0,0,1)] text-xl font-semibold bg-gray-800 active:scale-95 duration-300 border-2 border-yellow-300 text-white hover:bg-[#5c5c5c] transition' href={resume} download='Aman_Gupta_Resume.pdf'>Download Resume</a>
    </div>
  )
}

export default DownloadResume
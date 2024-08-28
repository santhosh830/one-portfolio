import React from 'react'
import image from '../assets/profile.jpg'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name='home' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen overflow-x-hidden'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
               <h2 className='text-3xl sm:text-6xl font-bold text-white'>
                 I'm a Python Full Stack Developer
               </h2>
               <p className='text-gray-400 py-4 max-w-md'>
                  I am a motivated and enthusiastic fresher Python Full Stack Developer with
                  a strong foundation in both front-end and back-end development. My passion for 
                  coding and technology drives me to continuously learn and improve my skills. Through a 
                  demo project, I have gained practical experience in building and maintaining web applications, which I am eager 
                  to showcase in my portfolio.
               </p>
               <div>
                 <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500
                  to-blue-500 cursor-pointer'>
                   Portfolio <span className='group-hover:rotate-90 duration-300'> <MdOutlineKeyboardDoubleArrowRight size={22} className='ml-1'/></span> 
                 </Link>
               </div>
            </div>
             <div>
                 <img src={image} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
             </div>
        </div>        
         
    </div>
  )
}

export default Home

import React from 'react';
import chatroom from '../assets/portfolio/chatroom.jpg';
import cloudservices from "../assets/portfolio/couldservices.jpg";
import djangovideo from '../assets/portfolio/djangovideo.jpg';
import ecommerce from '../assets/portfolio/ecommerce.jpg';
import weather from '../assets/portfolio/weather.jpg';

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: chatroom,
            demoLink: 'http://13.60.95.206:8000/',  // Replace with your actual demo URL
            codeLink: 'https://github.com/santhosh830/Teamchatroom', // Replace with your actual code URL
        },
        {
            id: 2,
            src: cloudservices,
            demoLink: 'https://webcloudservices.netlify.app/',  // Replace with your actual demo URL
            codeLink: 'https://github.com/santhosh830/yt-cloud-web-services-website', // Replace with your actual code URL
        },
        {
            id: 3,
            src: djangovideo,
            demoLink: 'http://51.20.67.64:8000/',  // Replace with your actual demo URL
            codeLink: 'https://github.com/santhosh830/Videochatroom', // Replace with your actual code URL
        },
        {
            id: 4,
            src: ecommerce,
            demoLink: 'https://e-commercecloths.netlify.app/',  // Replace with your actual demo URL
            codeLink: 'https://github.com/santhosh830/E-Commerce', // Replace with your actual code URL
        },
        {
            id: 5,
            src: weather,
            demoLink: 'https://weatherupdateapplication.netlify.app/',  // Replace with your actual demo URL
            codeLink: 'https://github.com/santhosh830/Weatherapplication', // Replace with your actual code URL
        },
    ];

    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my demo work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolios.map(({ id, src, demoLink, codeLink }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                            <div className='flex items-center justify-center'>
                                <a href={demoLink} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center'>Demo</a>
                                <a href={codeLink} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center'>Code</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

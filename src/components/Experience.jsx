import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import reactImage from '../assets/react.png';
import javascript from '../assets/javascript.png';
import django from '../assets/django.png';
import python from '../assets/python.png';
import sql from '../assets/sql.png';
import tailwind from '../assets/tailwind.png';
import github from '../assets/github.png';

const Experience = () => {

    const techs = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: reactImage,
          title: "React",
          style: "shadow-cyan-500",
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 6,
          src: django,
          title: "Django",
          style: "shadow-green-400",
        },
        {
          id: 7,
          src: python,
          title: "Python",
          style: "shadow-blue-500",
        },
        {
          id: 8,
          src: sql,
          title: "SQL",
          style: "shadow-blue-400",
        },
        {
          id: 9,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
    ];

    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-full overflow-auto'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                    <p className='py-6'>These are the technologies I've learned and worked with on demo projects</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {techs.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt={`${title} icon`} className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;

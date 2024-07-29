import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/santhosh-m-2703a6244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/santhosh830",
    },
    {
      id: 3,
      child: (
        <>
          E-mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:santhosh65789@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/novasco_sats?igsh=NWttbTNzcGJlZXh3",
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "#", // Update this to the actual URL of your resume
      style: "rounded-br-md",
    },
  ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({ id, child, href, style,  }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] rounded-md bg-gray-500 hover:ml-[-10px] hover:rounded-md transition-all duration-[60ms] ${style}`}
          >
            <a
              href={href}
              className='flex justify-between items-center w-full text-white'
              target='_blank'
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks

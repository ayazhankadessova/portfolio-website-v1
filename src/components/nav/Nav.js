import React from 'react'
import './nav.css'
import { FaHome } from 'react-icons/fa'
import { BsInfoCircle } from 'react-icons/bs'
import { FaLaptopCode } from 'react-icons/fa'
import { BsEmojiSunglasses } from 'react-icons/bs'
import { MdMarkEmailRead } from 'react-icons/md'

import { useState } from 'react'

/* save different links */

const Nav = () => {
  const [isActive, setActive] = useState('#')

  //   const toggleClass = (e) => {
  //     console.log(e.a)
  //     setActive(e.target.href)
  //   }

  return (
    <nav>
      <a
        href='#'
        onClick={() => setActive('#')}
        className={isActive === '#' ? 'active' : ''}
      >
        <FaHome />
      </a>
      <a
        href='#about'
        onClick={() => setActive('#about')}
        className={isActive === '#about' ? 'active' : ''}
      >
        <BsInfoCircle />
      </a>
      <a
        href='#experience'
        onClick={() => setActive('#experience')}
        className={isActive === '#experience' ? 'active' : ''}
      >
        <FaLaptopCode />
      </a>
      <a
        href='#portfolio'
        onClick={() => setActive('#portfolio')}
        className={isActive === '#portfolio' ? 'active' : ''}
      >
        <BsEmojiSunglasses />
      </a>
      <a
        href='#contact'
        onClick={() => setActive('#contact')}
        className={isActive === '#contact' ? 'active' : ''}
      >
        <MdMarkEmailRead />
      </a>
    </nav>
  )
}

export default Nav

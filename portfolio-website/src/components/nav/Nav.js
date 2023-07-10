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
  const [isActive, setActive] = useState(false)

  const toggleClass = () => {
    setActive(!isActive)
  }

  return (
    <nav>
      <a
        href=''
        className={this.state.active && 'active'}
        onClick={() => this.setState({ active: !this.state.active })}
      >
        <FaHome />
      </a>
      <a
        href='#about'
        className={isActive ? 'active' : null}
        onClick={toggleClass}
      >
        <BsInfoCircle />
      </a>
      <a
        href='#experience'
        className={isActive ? 'active' : null}
        onClick={toggleClass}
      >
        <FaLaptopCode />
      </a>
      <a
        href='#portfolio'
        className={isActive ? 'active' : null}
        onClick={toggleClass}
      >
        <BsEmojiSunglasses />
      </a>
      <a
        href='#contact'
        className={isActive ? 'active' : null}
        onClick={toggleClass}
      >
        <MdMarkEmailRead />
      </a>
    </nav>
  )
}

export default Nav

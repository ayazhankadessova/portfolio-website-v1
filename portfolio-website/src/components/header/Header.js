import React from 'react'
import './header.css'
import Action from './Action.js'
import HeaderSocials from './HeaderSocials.js'
import Me from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Ayazhan Kadessova</h1>
        <h5 className='text-light'>Software Developer</h5>
        <Action />
        <HeaderSocials />

        <div className='me'>
          <img src={Me} alt='' />
        </div>

        <a href='#contact' className='scroll_down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header

import React from 'react'
import './header.css'
import Action from './Action.js'
import HeaderSocials from './HeaderSocials.js'
import Me from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h4>Hello I'm</h4>
        <h1>Ayazhan Kadessova</h1>
        <h4 className='text-light'>Software Developer</h4>
        <Action />
        <HeaderSocials />

        {/* <div className='me'>
          <img src={Me} alt='' />
        </div> */}

        <a href='#contact' className='scroll_down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header

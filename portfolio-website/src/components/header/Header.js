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
        <h1> Ayazhan Kadessova</h1>
        <div className='about-mee'>
          <h4 className='about-me'>
            I am a Software Engineering Intern at J.P. Morgan, aspiring Software
            Developer and a passionate learner. I am pursuing BSc in Computer
            Science, with a concentration in Computing and Software Technologies
            at Hong Kong Baptist University.
          </h4>
        </div>

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

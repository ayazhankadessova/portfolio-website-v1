import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { TbBrandLeetcode } from 'react-icons/tb'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/ayazhankad/' target='_blank'>
        <FaLinkedin />
      </a>
      <a href='https://www.linkedin.com/in/ayazhankad/' target='_blank'>
        <FaGithub />
      </a>
      <a href='https://www.linkedin.com/in/ayazhankad/' target='_blank'>
        <TbBrandLeetcode />
      </a>
    </div>
  )
}

export default HeaderSocials

import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub, FaBloggerB } from 'react-icons/fa'
// import { FaAngellist } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer__logo'>
        AyazhanKad
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#skills'>Skills</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#certificates'>Certificates</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
        <li>
          <a href='#awards'>Awards</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://github.com/ayazhankadessova'>
          <FaGithub />
        </a>
        <a href='https://www.linkedin.com/in/ayazhankad/'>
          <BsLinkedin />
        </a>
        <a href='https://ayazhankad-coding.blogspot.com'>
          <FaBloggerB />
        </a>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import './about.css'
import Me from '../../assets/me-about.jpg'
import { FaLaptopCode } from 'react-icons/fa'
import { FaAward } from 'react-icons/fa'
import { GoProjectSymlink } from 'react-icons/go'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} alt='me-about' />
          </div>
        </div>

        {
          // Each card will have an article tag
        }
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaLaptopCode className='about__icon' />
              <h5>Experience</h5>
              <small>My Internship Experience</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Awards</h5>
              <small>Scholarships, Hackathons</small>
            </article>
            <article className='about__card'>
              <GoProjectSymlink className='about__icon' />
              <h5>Passion Projects</h5>
              <small>Projects that I have done for fun!</small>
            </article>
          </div>

          <p>
            I am a 3rd year Computer Science student at the HKBU. I am
            passionate about software development and I am looking for a
            full-time software developer position for Summer 2024.
          </p>

          <a href='#contact' className='btn btn-primary'>
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  )
}

export default About

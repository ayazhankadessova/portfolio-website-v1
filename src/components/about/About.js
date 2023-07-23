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
            Hello! My name is Aya! I am passionate about all things tech :){' '}
            <br />
            I love participating in hackathons – I even travelled all the way to
            one in Denmark. We earned third place based on the latency and the
            number of data points! I shared my experience here. <br />
            I enjoy building projects independently for fun! While learning
            React.js, I built a TripGenie, a personalized trip itinerary
            generator with OpenAI API. Recently, I am also interested in Cloud
            Infrastructure Management, Monitoring and Observibility, exploring
            automation tools like Terraform in AWS, Azure, and other providers.
            I built a dev environment in Azure that I can SSH into to have my
            own redeployable environment & bootstrapped it with it with Docker
            for future projects. <br />
            I am also passionate about sharing my knowledge. My favorite event
            organized as a Women Techmakers Ambassador at Google is a web
            scraping workshop at HKBU with 100 participants. I have also
            mentored students in CS and Data Science at HKBU and Qwasar Silicon
            Valley Tech Talents Training.
            <br />
            To explore my leadership and community building skills even more, I
            am a Google Student Developer Club Lead at HKBU this year. I am so
            exited to create a community focused on tech at my campus!
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

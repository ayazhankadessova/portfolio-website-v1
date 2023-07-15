import React from 'react'
import './portfolio.css'
import IMG5 from '../../assets/portfolio5.png'
import soloProjects from './projects'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Passion Projects</h5>
      <h2>Portfolio</h2>

      <div className='portfolio__container'>
        {soloProjects.map((props) => {
          return (
            <article key={props.id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={props.img} alt={props.title} />
              </div>
              <h3>{props.title}</h3>
              <div className='portfolio__item-links'>
                <a
                  href={props.github}
                  className='btn'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </a>
                <a
                  href={props.link}
                  className='btn btn-primary'
                  target='_blank'
                  rel='noreferrer'
                >
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio

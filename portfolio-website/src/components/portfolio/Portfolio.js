import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Passion Projects</h5>
      <h2>Portfolio</h2>

      <div className='portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>Travel Plan Generator</h3>
          <div className='portfolio__item-links'>
            <a href='' className='btn' target='_blank'>
              Github
            </a>
            <a href='' className='btn btn-primary' target='_blank'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='' />
          </div>
          <h3>Dev Environment with Terraform and Azure</h3>
          <div className='portfolio__item-links'>
            <a href='' className='btn' target='_blank'>
              Github
            </a>
            <a href='' className='btn btn-primary' target='_blank'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='' />
          </div>
          <h3>University BookShop</h3>
          <div className='portfolio__item-links'>
            <a href='' className='btn' target='_blank'>
              Github
            </a>
            <a href='' className='btn btn-primary' target='_blank'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt='' />
          </div>
          <h3>Finance Game</h3>
          <div className='portfolio__item-links'>
            <a href='' className='btn' target='_blank'>
              Github
            </a>
            <a href='' className='btn btn-primary' target='_blank'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt='' />
          </div>
          <h3>Meme Generator</h3>
          <div className='portfolio__item-links'>
            <a href='' className='btn' target='_blank'>
              Github
            </a>
            <a href='' className='btn btn-primary' target='_blank'>
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio

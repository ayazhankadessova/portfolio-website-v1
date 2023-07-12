import React from 'react'
import './experience.css'
import { PiDotOutlineBold } from 'react-icons/pi'

/* Every article tag -> one experience */

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Internships</h5>
      <h2>Experience</h2>

      <div className='experience__container'>
        <article className='experience'>
          <div className='experience__head'>
            <h3>Software Engineer Intern</h3>
          </div>

          <ul className='experience_responsibilities'>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>Working with Applications on Public & Private CLoud.</p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>Working with Applications on Public & Private CLoud.</p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>Working with Applications on Public & Private CLoud.</p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>Working with Applications on Public & Private CLoud.</p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>Working with Applications on Public & Private CLoud.</p>
            </li>
          </ul>
        </article>

        {/* BREAK OF EXPERIENCE 1 */}

        <article className='experience'>
          <div className='experience__head'>
            <h3>NLP Engineer</h3>
          </div>

          <ul className='experience_responsibilities'>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>Working with Applications on Public & Private CLoud.</p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>Working with Applications on Public & Private CLoud.</p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>Working with Applications on Public & Private CLoud.</p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>Working with Applications on Public & Private CLoud.</p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>Working with Applications on Public & Private CLoud.</p>
            </li>
          </ul>
        </article>

        {/* BREAK OF EXPERIENCE 2 */}

        <article className='experience'>
          <div className='experience__head'>
            <h3>IT Investment Intern</h3>
          </div>

          <ul className='experience_responsibilities'>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>Working with Applications on Public & Private CLoud.</p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>Working with Applications on Public & Private CLoud.</p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>Working with Applications on Public & Private CLoud.</p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>Working with Applications on Public & Private CLoud.</p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>Working with Applications on Public & Private CLoud.</p>
            </li>
          </ul>
        </article>

        {/* BREAK OF EXPERIENCE 3 */}
      </div>
    </section>
  )
}

export default Experience

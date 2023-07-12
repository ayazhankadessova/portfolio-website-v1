import React from 'react'
import './skills.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>What I can do</h5>
      <h2>My Skills</h2>

      <div className='container skills__container'>
        <div className='skills__frontbackend'>
          <h3>Frontend/Backend development</h3>
          <div className='skills__content'>
            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* Break */}

        <div className='skills__sre'>
          <h3>Frontend/Backend development</h3>
          <div className='skills__content'>
            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

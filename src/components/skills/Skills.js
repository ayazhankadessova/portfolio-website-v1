import React from 'react'
import './skills.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import skills from './skills_data'
import skills2 from './skills2_data'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>What I can do</h5>
      <h2>My Skills</h2>

      <div className='container skills__container'>
        <div className='skills__frontbackend'>
          <h3>Frontend/Backend development</h3>
          <div className='skills__content'>
            {skills.map((props) => {
              return (
                <article key={props.id} className='skills__details'>
                  <BsFillPatchCheckFill className='skills__details-icon' />
                  <div>
                    <h4>{props.title}</h4>
                    <small className='text-light'>{props.level}</small>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* Break */}

        <div className='skills__sre'>
          <h3>SRE/Cloud/Others</h3>

          <div className='skills__content'>
            {skills2.map((props) => {
              return (
                <article key={props.id} className='skills__details'>
                  <BsFillPatchCheckFill className='skills__details-icon' />
                  <div>
                    <h4>{props.title}</h4>
                    <small className='text-light'>{props.level}</small>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

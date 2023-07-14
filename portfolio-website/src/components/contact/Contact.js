import React from 'react'
import './contact.css'
import contactData from './contact_data'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          {contactData.map((props) => {
            return (
              <article key={props.id} className='contact__item'>
                <div className='contact__icon'>{props.icon}</div>
                <h4>{props.title}</h4>
                <h5>{props.text}</h5>
                <div className='contact__item-links'>
                  <a href={props.link} target='_blank' rel='noreferrer'>
                    Send a message
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        {/* {END OF CONTACT OPTIONS} */}
        <form action='' className='contact__form'>
          <input
            type='text'
            name='Name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='Email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
          ></textarea>
          <button type='submit' className='btn btn-'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

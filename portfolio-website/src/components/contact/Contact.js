import React from 'react'
import './contact.css'
import contactData from './contact_data'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    // Service ID, Template ID, Public key
    emailjs
      .sendForm(
        'service_10o8fxi',
        'template_mk3a1wn',
        form.current,
        'FPiPYm_HcDkuVi1su'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

    e.target.reset()
  }
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
        <form
          action=''
          className='contact__form'
          ref={form}
          onSubmit={sendEmail}
        >
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
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

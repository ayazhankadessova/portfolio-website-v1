import React from 'react'
import './contact.css'
import contactData from './contact_data'

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
                {/* <div className='contact__item-image'>
                  <img src={props.img} alt={props.title} />
                </div> */}
                <h3>{props.title}</h3>
                <h4>{props.text}</h4>
                <div className='contact__item-links'>
                  <a
                    href={props.link}
                    className='btn btn-primary'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Send a message
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        {/* {END OF CONTACT OPTIONS} */}
        <form action=''>HEY</form>
      </div>
    </section>
  )
}

export default Contact

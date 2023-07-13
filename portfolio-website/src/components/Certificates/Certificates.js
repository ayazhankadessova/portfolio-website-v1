import React from 'react'
import './certificates.css'
import IMG1 from '../../assets/portfolio1.jpg'
import certificates from './certificates_data'

const Certificates = () => {
  return (
    <section id='certificates'>
      <h5>My Learning Achievements</h5>
      <h2>Certificates</h2>

      <div className='container certificates__container'>
        {certificates.map((props) => {
          return (
            <article className='certificate'>
              <div className='certificate__image'>
                <img
                  src={props.img}
                  alt='Certificate'
                  className='certificate-img'
                />
              </div>
              <h5 className='certificate__name'>{props.title}</h5>
              <small className='certificate__description'>
                {props.description}
              </small>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Certificates

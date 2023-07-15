import React from 'react'
import './awards.css'
import awards from './awards_data'

// import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'

const Awards = () => {
  return (
    <section id='awards'>
      <h5>My Notable Achievemnts</h5>
      <h2>Awards</h2>

      <Swiper
        className='container awards__container'
        pagination={true}
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={2}
      >
        {awards.map((props) => {
          return (
            <SwiperSlide key={props.id} className='certificate'>
              <div className='certificate__image'>
                <img src={props.img} />
              </div>
              <h5 className='certificate__name'>{props.title}</h5>
              <small className='certificate__description'>
                {props.description}
              </small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Awards

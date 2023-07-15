import React from 'react'
import CV from '../../assets/Ayazhan_Kadessova_CV.pdf'

const Action = () => {
  return (
    <div className='Action'>
      <a href={CV} download className='btn'>
        Download CV
      </a>
      <a href='#contact' className='btn btn-primary'>
        Let's Connect!
      </a>
    </div>
  )
}

export default Action

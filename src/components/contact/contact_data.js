import { MdEmail } from 'react-icons/md'
import { IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io'
import { AiOutlineLinkedin } from 'react-icons/ai'

const contactData = [
  {
    id: 2,
    title: 'Linkedin',
    icon: <AiOutlineLinkedin />,
    text: 'Ayazhan Kadessova',
    link: 'https://www.linkedin.com/in/ayazhankad/',
  },
  {
    id: 1,
    title: 'Email',
    icon: <MdEmail />,
    text: 'kadessovaayazhan@gmail.com',
    link: 'mailto:kadessovaayazhan@gmail.com',
  },
  {
    id: 3,
    title: 'WhatsApp',
    icon: <IoLogoWhatsapp />,
    text: '9288-8547',
    link: 'https://api.whatsapp.com/send?phone=87778502000',
  },
]

export default contactData

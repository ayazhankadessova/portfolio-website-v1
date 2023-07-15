## TODO

1. Add logo for the website : smath like "Ayazhankad"
2. Featured Projects:

- Info about all the projects is here: https://github.com/ayazhankadessova/Portfolio-Projects
  Name of the project
  description
  Picture
  Tech stack (if my repo doesnt say, you can text me)

two buttons : for repo & for live version.

- https://github.com/ayazhankadessova/trip-generator-with-OpenAI ,

- https://ayazhankad-coding.blogspot.com/2021/09/scraping-fafakz-for-almaty-delivery.html , https://github.com/ayazhankadessova/Portfolio-Projects/tree/main/FAFA (here blogpost link)

- https://github.com/ayazhankadessova/dev-environment-tf-azure (here just repo link)

3. Other Noteworthy Projects:

- https://github.com/ayazhankadessova/Portfolio-Projects/tree/main/Fine_Tune_Sentiment_Analysis (repo link & hugging face link)
- https://github.com/ayazhankadessova/FinanceGame
  LEarnBU: Web-based Financial Literacy Game built to improve students' personal finance skills. Users can choose a story to play, with each character dealing with different aspects of personal finance.
- University Bookshop: https://github.com/ayazhankadessova/UniversityBookshop (just repo link)

Helped 50 HKBU students learn Saving and Budgeting, Investing via quizes, reading videoes.

4. Certificates

- Algorithmic Toolbox - UC San Diego https://www.coursera.org/account/accomplishments/verify/AUVAXNQQBXTU
- Terraform Associate - Hashicorp - I will take next week, just put any link
- AWS Machine Learning Foundations - Amazon Web Services (AWS)
- Introduction to Fullstack Development - Qwasar Silicon Valley https://upskill.us.qwasar.io/certificates/MTM0Ni1rYWRlc3Nvdl9hLWp1bC0yMDIxLTMwLTJkNmI=
- Top 3rd student in Upskill Data Science Program - QWANT School of Advanced Technologies - https://api.trybe.id/xyz/uN0ykg858XG
- Introduction to Software Engineering - Qwasar Silicon Valley - https://upskill.us.qwasar.io/certificates/MTIwMy1rYWRlc3Nvdl9hLW1hci0yMDIxLTExLTQ4NTA=

5. Awards

[Info about Awards] https://www.linkedin.com/in/ayazhankad/details/honors/

- HKBU Non-local Non-Mainland Student Special Award 2021-2022, 2022-2023 https://www.comp.hkbu.edu.hk/v1/?page=std_ach&id=183
- The Belt and Road Scholarship Awardee
- 3rd place in the AUhack , largest hackathon in Denmark https://www.comp.hkbu.edu.hk/v1/?page=std_ach&id=182
- Finalist of Techathon 2023 by HKSTP. Chatbot for Regulation Technology. https://www.comp.hkbu.edu.hk/v1/?page=std_ach&id=181
- Finalist of Quest for Securities & Investment Elites (QSIE) Case Analysis Competition 2022 https://www.linkedin.com/posts/ayazhankad_dariga-zaikinova-and-i-were-very-honoured-activity-7002564638873726976-d7a9?utm_source=share&utm_medium=member_desktop

6. Check about me, summary -> wrapped?
7. experience -> bullet points with
8. Location of internship
9. When opening, same intro, Professional Experience, Passion Projects section like here : https://lynnzheng.netlify.app
10. Add Other Noteworthy Projects Section

---

## My Notes

## SHortcuts

> rafce -> bootstrap .js

> .container.header**container -> crates div w classname header**container

## Choose font-family

https://fonts.google.com/specimen/Poppins?query=poppins

Add & import

## Notes

1. Containers will be wrapped in section tags
2. h5 is child of h2
3. > npm install react-icons
4. move between diff sections -> give them id

```
<section id = "about">
```

```
<a href='#about'>
        <BsInfoCircle />
      </a>
```

5. Show which section is active right now

State current active as '#'
Then, with every pressed section button -> change state inside the section

```
const [isActive, setActive] = useState('#')

<a
    href='#about'
    onClick={() => setActive('#about')}
    className={isActive === '#about' ? 'active' : ''}
>
<BsInfoCircle />
</a>
<a
    href='#experience'
    onClick={() => setActive('#experience')}
    className={isActive === '#experience' ? 'active' : ''}
>
    <FaLaptopCode />
</a>
```

6. Height will always match the width

```
.about_me {
    width: 100%
    aspect-ratio: 1/1;
}
```

7. Make transition smooth, add transition bot to original object & the one w/ hover:

```
.about__card{
...
  transition: var(--transition);
}


.about__card:hover {
  background: transparent;
  border-color: var(--color-primary-variant);
  transition: var(--transition);
}
```

8. For cards ,use grid-template-columns
9. If you dont want to allow copy paste

```
  /* user-select: none; */
```

10. Swiper.js

For Swiping certificates: https://swiperjs.com/react

- Install:

```
npm i swiper
```

- Usage:

swiper/react exports 2 components: Swiper and SwiperSlide:

```
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};
```

Here is the list of additional modules imports from swiper/modules:

```
Virtual - Virtual Slides module
Keyboard - Keyboard Control module
Mousewheel - Mousewheel Control module
Navigation - Navigation module
Pagination - Pagination module
```

- Demos:

https://swiperjs.com/demos

11. Email.js - Send Emails Directly from Javascript

https://www.emailjs.com

https://www.emailjs.com/docs/examples/reactjs/

npm install @emailjs/browser --save 12. Flex-wrap: nowrap will stack things in one line

---

1. Fix Skills cards to be left aligned
2. Add Experience -> place , date
3. Check skills section -> css of card
4. Don't want it to be fully transaprent:

```
.portfolio__item:hover {
  background: rgba(var(--color-bg-variant), 0.5); #doesnt work
  border-color: var(--color-bg-variant);
  transition: var(--transition);

  cursor: pointer;
}
```

5. Change certificates data
6. change section classNames to container
7. change certificates height
8. update Pictures

---

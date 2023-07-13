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
7. change certificate images

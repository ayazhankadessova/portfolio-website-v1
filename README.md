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

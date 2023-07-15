1. Add in index.css

```
/* don't need scrollbar bc we have sections */

::-webkit-scrollbar {
  display: none;
}
```

.portfolio\_\_item {
background: var(--color-bg-variant);
padding: 1.3rem; # change
border-radius: 2rem;
border: 1px solid transparent;
transition: var(--transition);
}

---

```
.certificate {
  background: var(--color-bg-variant);
  text-align: center;
  padding: 2rem;
  border-radius: 2rem;
  /* user-select: none; */ # add
}
```

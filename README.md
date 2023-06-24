# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

## Table of contents

- [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Solution URL here](https://github.com/labrysxx/job-listings-with-filtering/tree/main)
- Live Site URL: [Live site URL here](https://labrysxx.github.io/job-listings-with-filtering/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

What I enjoyed the most in this code and my initial challenge was retrieving data from a JSON file using the ```fetch``` method and manipulating it.

```js
window.addEventListener('DOMContentLoaded', () => {
  fetch('./data.json')
          .then(response => {return response.json()})
          .then(data => {
            jobs = data
            createArticle(data)
            filterTool()
          })
          .catch(error => {
            // captura e trata erros ocorridos durante a requisição
            console.error('Erro: ' + error);
          });
})
```

### Continued development

In future projects, I intend to practice the functionality of deleting something both in the visual interface and in the localStorage.

### Useful resources

- [A Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - This guide helped me choose the CSS Grid properties to use on my webpage. It was very informative and easy to understand.
- [Padrões de commits](https://github.com/iuricode/padroes-de-commits) - In this GitHub repository, I found commit patterns to have a more organized code. Ever since I discovered it, I can't stop using them.

## Author

- GitHub - [@labrysxx](https://github.com/labrysxx)
- Frontend Mentor - [@labrysxx](https://www.frontendmentor.io/profile/labrysxx)
- LinkedIn - [Caroline Faria](https://www.linkedin.com/in/carolinegfaria/)

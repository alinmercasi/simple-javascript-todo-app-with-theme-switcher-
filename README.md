# Todo app concept with theme toggler

A small app concept idea just to sharpen some of my skills

## Table of contents

- Todo app concept with theme toggler
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
      - [For this project](#for-this-project)
    - [Known Bugs](#known-bugs)
      - [Solved](#solved)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add, remove, toggle todos and save them to local storage
- The app should detect user theme preference, apply it and save it to local storage
- Futhermore, user could change the theme and save it, no matter their system settings

### Screenshot

!["./design/screenshot.png"](./design/screenshot.png)

### Links

- Live Site URL: [View live demo](https://alinmercasi.github.io/simple-javascript-todo-app-with-theme-switcher-/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- CSS Animations
- Local storage

### What I learned

- It helped me get some practice on how local storage work
- Make good use of CSS custom properties
- Understand some javascript events, such as 'animationend'
- Work with arrays and objects
- Understand some javascript prototyping concepts working with classes
- Working with DOM in javascript
- Basic state management
- Make use of CSS animations, transforms and transitions

### Continued development

- To step into more advanced concepts of javascript DOM manipulation before learning any framework
- Learn git! :)
- To be more organized :)
- Practice, practice, practice!
  #### For this project
  - I would like to use svg on theme toggler button for a smoother ux and to create more complex animations
  - To be able to edit todos and update them in local storage. Maybe I would do this using 'contenteditable' attribute
  - Add some micro interactions when some events are fired (ex: when adding or removing todos)

## Known bugs

- On responsive mode (touch devices only), the theme toggle button register the click/tap even if it happens like 50% percent of his height under it. Futhermore, sometimes does not register it if you click on its top half.

#### Solved

- ~~That ugly border on the theme toggle button (it has something to do with overflow hidden ond border-radius on the button itself).~~ Background-clip set to content-box and a small padding seems to do the trick

## Author

- Alin Mercasi

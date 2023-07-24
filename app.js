// Dom Variables
const navMenu = document.getElementById('nav-menu')
const navClose = document.getElementById('nav-close')
const navToggle = document.getElementById('nav-toggle')

// Event Listener -- Menu Show
 navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu')
 })

//Event Listener -- Menu Hidden
 navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu')
 })

 //Event Listener -- Menu Hidden Mobile
 const navLink = document.querySelectorAll('.nav-link')

 function linkAction() {
  navMenu.classList.remove('show-menu')
 }

 navLink.forEach(n => n.addEventListener('click', linkAction))

 // Change Background Navbar Ternary Operator
 const bgNavbar = () => {
  const navbar = document.getElementById('navbar')
  this.scrollY >= 50 ? header.classList.add('bg-navbar')
                     : header.classList.remove('bg-navbar')
 }
 window.addEventListener('scroll', bgNavbar)

 //GSAP Animation
 gsap.from('.home-image-2', {duration: 1.2, y: 200, delay: .1, opacity: 0})
 gsap.from('.home-image-3', {duration: 1.2, y: 200, delay: .1, opacity: 0})
 gsap.from('.home-data', {duration: 1.2, y: -60, delay: .1, opacity: 0})
 gsap.from('.home-bird-1', {duration: 1.2, x: -80, delay: .3, opacity: 0})
 gsap.from('.home-bird-2', {duration: 1.2, x: 200, delay: .3, opacity: 0})
 gsap.from('.home-image-1', {duration: 1.2, y: 200, delay: .5, opacity: 0})
 gsap.from('.home-image-4', {duration: 1.2, x: 200, delay: .3, opacity: 0})
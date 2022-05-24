let menuToggler = document.querySelector('.menu-toggle');
let nav = document.querySelector('.nav');
let navLinks = Array.from(document.querySelectorAll('.nav-link'));
let contact = document.querySelector('.contact');

menuToggler.addEventListener('click', ()=>{
  menuToggler.classList.toggle('active');
  nav.classList.toggle('active');

  contact.classList.remove('active');

  if (menuToggler.classList.contains('active')) {
    setTimeout(()=>{
      nav.classList.add('active')
    },100)

    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove('active');
      setTimeout(()=>{
        navLinks[i].classList.add('active')
      }, i * 100)
    }
    setTimeout(()=>{
      contact.classList.add('active')
    }, 800);
  }
})

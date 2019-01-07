// Expandable menu
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const navigationItems = document.querySelector('.navigation');
const icon = document.querySelector('i');
let timesClicked = 0;

expandMenu = () => {
    timesClicked++;
    if (timesClicked % 2 == 0) {
        menu.classList.remove('menu-expanded');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        menu.classList.add('menu-expanded');
        navigationItems.classList.add('navigation-expanded');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
};

menuButton.addEventListener('click', expandMenu);

// Animation of FB button
const fbButton = document.querySelector('.fbbutton');

const addClass = () => {
    fbButton.classList.add("fbbutton-bottom");
};


// let fbButtonPosition = 0;
//
// function moveFbButton() {
//
//     if (window.scrollY >= 10) {
//         if(fbButtonPosition == 0) {
//             let bounding = fbButton.getBoundingClientRect();
//             fbButtonPosition = bounding.top;
//         }
//
//         fbButton.style.top = fbButtonPosition + pageYOffset + 'px';
//         console.log(fbButtonPosition + "~" + pageYOffset);
//     }
// }

window.addEventListener('load',  addClass);

// Animation for cards in contacts section
const contacts = document.querySelectorAll('li.contact-card');

runContactsAnimation = () => {
    if (!document.querySelectorAll('li.contact-card:not(.visible')) return;

    for (const contact of contacts) {
        if (contact.getBoundingClientRect().top <= window.innerHeight * 0.75
        && contact.getBoundingClientRect().top > 0) {
            console.log(window.innerHeight + '~' + contact.getBoundingClientRect().top);
            contact.classList.add('visible');
        }
    }
};

window.addEventListener('scroll', runContactsAnimation);




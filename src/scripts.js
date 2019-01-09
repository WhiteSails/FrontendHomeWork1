// slider

let i = 0;
let sliderImages = [9, 10, 11, 12, 13, 14, 15, 16, 17];


changeImage = () => {

    if(i < sliderImages.length - 1) {
        i++;

    } else {
        i = 0;
    }

    let activeImage = document.querySelector('.slider-image.active');
    let inactiveImage = document.querySelector('.slider-image.inactive');

    inactiveImage.src = "../assets/images/" + sliderImages[i] + ".jpeg";

    activeImage.classList.remove('active');
    activeImage.classList.add('inactive');

    inactiveImage.classList.remove('inactive');
    inactiveImage.classList.add('active');

};

setInterval(changeImage, 6000);


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


window.addEventListener('load', addClass);

// Animation for cards in contacts section
const contacts = document.querySelectorAll('li.contact-card');

runContactsAnimation = () => {
    if (!document.querySelectorAll('li.contact-card:not(.shown')) return;

    for (const contact of contacts) {

        if (contact.getBoundingClientRect().top <= window.innerHeight * 0.75
            && contact.getBoundingClientRect().top > 0) {

            contact.classList.add('shown');
        }
    }
};

window.addEventListener('scroll', runContactsAnimation);




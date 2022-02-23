/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function navigateTo(href) {
    switch (href) {
        case "Section1":
            document.getElementById('section1').scrollIntoView({behavior: "smooth"});break;
        case "Section2":
            document.getElementById('section2').scrollIntoView({behavior: "smooth"});break;
        case "Section3":
            document.getElementById('section3').scrollIntoView({behavior: "smooth"});break;
        case "Section4":
            document.getElementById('section4').scrollIntoView({behavior: "smooth"});break;
    }
}
function concatinator(sectionName){
    let x = sectionName.split(" ");
    return x[0].concat(x[1]);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavBar() {
    const fragment = document.createDocumentFragment();
    for (const section of sections) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        const sectionName = section.getAttribute('data-nav');
        const href = concatinator(sectionName);
        li.classList.add('li');
        a.classList.add('menu__link');
        a.setAttribute('href', href);
        a.innerHTML = sectionName;
        li.appendChild(a);
        fragment.appendChild(li);
    }
    document.getElementById('navbar__list').append(fragment);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', buildNavBar());

// Scroll to section on link click
const anchors = document.querySelectorAll('a');
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        navigateTo(href);
    });
}
// Set sections as active

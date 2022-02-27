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
            document.getElementById('section1').scrollIntoView({ behavior: "smooth" }); break;
        case "Section2":
            document.getElementById('section2').scrollIntoView({ behavior: "smooth" }); break;
        case "Section3":
            document.getElementById('section3').scrollIntoView({ behavior: "smooth" }); break;
        case "Section4":
            document.getElementById('section4').scrollIntoView({ behavior: "smooth" }); break;
    }
}
function concatinator(sectionName) {
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
function NavBarActive() {
    const navBarItems = document.querySelectorAll('li');


    for (const item of navBarItems) {
        item.addEventListener('click', function (e) {
            const li = document.querySelector('li.active');
            if(li!==null){
                li.classList.remove('active');
            }
            item.classList.add('active');
        });
    }
}

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
window.addEventListener('scroll', function sectionActivator() {
    const sec1 = Math.abs(document.getElementById('section1').getBoundingClientRect().top);
    const sec2 = Math.abs(document.getElementById('section2').getBoundingClientRect().top);
    const sec3 = Math.abs(document.getElementById('section3').getBoundingClientRect().top);
    const sec4 = Math.abs(document.getElementById('section4').getBoundingClientRect().top);
    const min = Math.min(sec1, sec2, sec3, sec4);
    const li = document.querySelector('li.active');
    if(li!==null){
        li.classList.remove('active');
    }

    switch (min) {
        case sec1:
            document.getElementById('section1').classList.add("your-active-class");
            document.getElementById('section2').classList.remove("your-active-class");
            document.getElementById('section3').classList.remove("your-active-class");
            document.getElementById('section4').classList.remove("your-active-class");
            this.document.querySelectorAll('li')[0].classList.add('active');
            break;
        case sec2:
            document.getElementById('section1').classList.remove("your-active-class");
            document.getElementById('section2').classList.add("your-active-class");
            document.getElementById('section3').classList.remove("your-active-class");
            document.getElementById('section4').classList.remove("your-active-class");
            this.document.querySelectorAll('li')[1].classList.add('active');
            break;
        case sec3:
            document.getElementById('section1').classList.remove("your-active-class");
            document.getElementById('section2').classList.remove("your-active-class");
            document.getElementById('section3').classList.add("your-active-class");
            document.getElementById('section4').classList.remove("your-active-class");
            this.document.querySelectorAll('li')[2].classList.add('active');
            break;
        case sec4:
            document.getElementById('section1').classList.remove("your-active-class");
            document.getElementById('section2').classList.remove("your-active-class");
            document.getElementById('section3').classList.remove("your-active-class");
            document.getElementById('section4').classList.add("your-active-class");
            this.document.querySelectorAll('li')[3].classList.add('active');
            break;
    }
});

document.getElementById('navbar__list').addEventListener('click', NavBarActive());
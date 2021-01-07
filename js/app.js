
const navItems = document.querySelectorAll('.nav-item');
const resumeSection = document.querySelector('#resume-section')
const projectsSection = document.querySelector('#projects-section')
const contactSection = document.querySelector('#contact-section')
const aboutSection = document.querySelector('#header-section')

const navbar = document.querySelector('.nav-wrapper')
const sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

window.onscroll = function () { myFunction() };

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function (event) {
        event.preventDefault();
        const sectionName = navItems[i].getAttribute('href')
        console.log(navItems[i].scrollHeight)
        window.scroll({
            top: (getOffset(document.querySelector(`${sectionName}-section`)).top - navItems[i].scrollHeight),
            behavior: 'smooth'
        });
    })
}



function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        top: rect.top + window.scrollY
    };
}




const navItems = document.querySelectorAll('.nav-item');
const resumeSection = document.querySelector('#resume-section')
const projectsSection = document.querySelector('#projects-section')
const contactSection = document.querySelector('#contact-section')
const aboutSection = document.querySelector('#header-section')


for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function (event) {
        event.preventDefault();
        const sectionName = navItems[i].getAttribute('href')
        console.log(sectionName)
        window.scroll({
            top: getOffset(document.querySelector(`${sectionName}-section`)).top,
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



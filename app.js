const navbar = document.querySelector('nav');
window.onscroll = () => {
    if (window.scrollY > 200) {
        //navbar.classList.add('active');
    } else {
        //navbar.classList.remove('active');
    }
};

const toggle = document.getElementsByClassName('toggle')[0];
const navlinks = document.getElementsByClassName('nav-links')[0];

toggle.addEventListener('click',() => {
    navlinks.classList.toggle('active');
})

function linkClicked(){
    navlinks.classList.remove('active');
}

const home = document.getElementsByClassName('homelink')[0];
const about = document.getElementsByClassName('aboutlink')[0];
const projects = document.getElementsByClassName('projectslink')[0];
const contact = document.getElementsByClassName('contactlink')[0];

home.addEventListener('click', linkClicked);
about.addEventListener('click', linkClicked);
projects.addEventListener('click', linkClicked);
contact.addEventListener('click', linkClicked);

const p1modal = document.getElementsByClassName('modal-container')[0];
const parent = document.getElementsByClassName('parent')[0];
const p1btnClose = document.getElementsByClassName('closep1')[0];
const p1btnOpen = document.getElementsByClassName('project1')[0];

p1btnClose.addEventListener('click',() => {
    p1modal.classList.remove('open');
    parent.classList.remove('open');
})
p1btnOpen.addEventListener('click',() => {
    p1modal.classList.add('open');
    parent.classList.add('open');
})

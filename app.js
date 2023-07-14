const navbar = document.querySelector('nav');
const name_var = document.getElementsByClassName('name')[0];
const about_div = document.getElementsByClassName('aboutTextDiv')[0];
const img_div = document.getElementsByClassName('myImg')[0];
const nav_links = document.getElementsByClassName('nav-links')[0];



window.onscroll = () => {
    if(window.scrollY > 350 && window.scrollY < 710 ){
        name_var.classList.add('active');
        img_div.classList.add('active');
        about_div.classList.add('active');    
        nav_links.classList.remove("active");
    }else{
        if(window.scrollY < 350){
            name_var.classList.remove('active');
            img_div.classList.remove('active');
            about_div.classList.remove('active');   
            nav_links.classList.remove("active"); 
        }
        if(window.scrollY > 710){
            nav_links.classList.add("active");
            if(window.scrollY > 1180){
                img_div.classList.remove('active');
                about_div.classList.remove('active');   
                if(window.scrollY > 1470){
                    nav_links.classList.remove("active");
                }     
            }else{
                img_div.classList.add('active');
                about_div.classList.add('active');            
            }
      }
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

//Functions for project images

function slideSwitch(n){
    
}

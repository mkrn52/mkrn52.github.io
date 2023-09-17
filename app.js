//Functions for project images
const navbar = document.querySelector('nav');
const name_var = document.getElementsByClassName('name')[0];
const toggle = document.getElementsByClassName('toggle')[0];
const navlinks = document.getElementsByClassName('nav-links')[0];
const separatorLine = document.getElementsByClassName('divSeparatorHr')[0];
const about_div = document.getElementsByClassName('aboutTextDiv')[0];
const landing_div = document.getElementsByClassName('landing')[0];
const img_div = document.getElementsByClassName('myImg')[0];
const project_div = document.getElementsByClassName('projects')[0];
const nav_links = document.getElementsByClassName('nav-links')[0];
const p1_div = document.getElementsByClassName('p1')[0];
const p2_div = document.getElementsByClassName('p2')[0];
const project_title = document.getElementsByClassName('projectTitle')[0];

var p1images =  document.querySelectorAll('.p1 img');
var p2images =  document.querySelectorAll('.p2 img');
var p3images =  document.querySelectorAll('.p3 img');
var p4images =  document.querySelectorAll('.p4 img');

var dotsp1 = document.querySelectorAll('.switchDot1');
var dotsp2 = document.querySelectorAll('.switchDot2');
var dotsp3 = document.querySelectorAll('.switchDot3');
var dotsp4 = document.querySelectorAll('.switchDot4');

var currentImage = 0;
dots = 0;

const interval = 5000;
function slideSwitch(project, n){
    if(project == 1){
        images = p1images;
        dots = dotsp1;
    }else if(project == 2){
        images = p2images;
        dots = dotsp2;
    }else if(project == 3){
        images = p3images;
        dots = dotsp3;
    }else if(project == 4){
        images = p4images;
        dots = dotsp4;
    }
    for (let index = 0; index < images.length; index++) {
        images[index].style.opacity = 0;
        console.log(index)
        dots[index].className = dots[index].className.replace(' DotActive', '');        
    }
    currentImage = n;

    images[currentImage].style.opacity = 1;
    dots[currentImage].className += ' DotActive';
}
function linkClicked(n){
    if(toggle.classList.contains("active")){
        navlinks.classList.remove('active');
    }
    console.log(window.pageYOffset + separatorLine.getBoundingClientRect().top)
    if(n == 1 && window.scrollY == 0){
        name_var.classList.remove('active1');
        setTimeout(function(){
            name_var.classList.add('active1');
        }, 1);      
    }else if(n == 2 && window.scrollY == landing_div.clientHeight){
        about_div.classList.remove("active1");
        img_div.classList.remove("active1");
        setTimeout(function(){
            about_div.classList.add("active1");
        }, 10);      
        setTimeout(function(){
            img_div.classList.add("active1");
        }, 10);      
    }else if(n==3 && window.scrollY > (window.pageYOffset + separatorLine.getBoundingClientRect().top - 10) &&  window.scrollY < (window.pageYOffset + separatorLine.getBoundingClientRect().top )){
        console.log("works")
        console.log("works")
        project_div.classList.remove("active1");
        setTimeout(function(){
            project_div.classList.add("active1");
        }, 10);      
    }
}
window.onscroll = () => {
    if(window.scrollY > landing_div.clientHeight / 1.75){
        name_var.classList.add('active');
    }else{
        name_var.classList.remove('active');
    }
    if(window.scrollY > landing_div.clientHeight - 20){
        toggle.classList.add('active');
        if(window.screenY > (landing_div.clientHeight + about_div.clientHeight + project_div.clientHeight)){
            toggle.classList.remove('active');
        }
    }else{
        toggle.classList.remove('active');
    }
}


toggle.addEventListener('click',() => {
    navlinks.classList.toggle('active');
    if(!toggle.classList.contains("active")){
        toggle.classList.toggle('active');
    }
})


const home = document.getElementsByClassName('homelink')[0];
const about = document.getElementsByClassName('aboutlink')[0];
const projects = document.getElementsByClassName('projectslink')[0];
const contact = document.getElementsByClassName('contactlink')[0];
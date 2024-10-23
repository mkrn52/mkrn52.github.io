//Get objects
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
const exp_ttl = document.getElementsByClassName('expTitle')[0];
const prj_ttl = document.getElementsByClassName('projectTitle')[0];
const p_r1 = document.getElementsByClassName('projectR1')[0];
const p_r2 = document.getElementsByClassName('projectR2')[0];

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
//Function to switch project slides
function slideSwitch(project, n){
    //Depending on which project switch was clicked
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
    //unset all images for that project
    for (let index = 0; index < images.length; index++) {
        images[index].style.opacity = 0;
        console.log(index)
        dots[index].className = dots[index].className.replace(' DotActive', '');        
    }
    currentImage = n;
    //set the image of the button which was clicked
    images[currentImage].style.opacity = 1;
    dots[currentImage].className += ' DotActive';
}

//Jump Functionality
/*
function linkClicked(n){
    if(toggle.classList.contains("active")){
        navlinks.classList.remove('active');
    }
    console.log(window.scrollY + separatorLine.getBoundingClientRect().top)
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
    }else if(n==3 && window.scrollY > (window.screenY + separatorLine.getBoundingClientRect().top - 10) &&  window.scrollY < (window.scrollY + separatorLine.getBoundingClientRect().top )){
        console.log("works")
        console.log("works")
        project_div.classList.remove("active1");
        setTimeout(function(){
            project_div.classList.add("active1");
        }, 10);      
    }
}
    */
//Scroll Animations
window.onscroll = () => {
    //navbar appear
    if(window.scrollY > 30){
        navbar.classList.add('active1');
    }else{
        navbar.classList.remove('active1');
    }

    //Landing disappears & Expierience section appears 
    if(window.scrollY > landing_div.clientHeight / 3){
        name_var.classList.add('active');
        exp_ttl.classList.add('active');
        exp_ttl.classList.remove('active1');
        prj_ttl.classList.add('active');
        p_r1.classList.add('active');
        p_r2.classList.add('active');
    }else{
        name_var.classList.remove('active');
        if(exp_ttl.classList.contains("active")){
            exp_ttl.classList.remove('active');
            exp_ttl.classList.add('active1');
        }
        p_r1.classList.remove('active');
        p_r2.classList.remove('active');
        prj_ttl.classList.remove('active');
    }
    //Change color of toggle menu when on blue page
    if(window.scrollY > landing_div.clientHeight - 20){
        toggle.classList.add('active');
        if(window.screenY > (landing_div.clientHeight + about_div.clientHeight + project_div.clientHeight)){
            toggle.classList.remove('active');
        }
    }else{
        toggle.classList.remove('active');
    }
}

// Open nav section when toggle clicked
toggle.addEventListener('click',() => {
    navlinks.classList.toggle('active');
})

// Collapse menu when link clicked with toggle
function linkClicked(n){
    navlinks.classList.remove('active');
}
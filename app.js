//Functions for project images
const navbar = document.querySelector('nav');
const name_var = document.getElementsByClassName('name')[0];
const about_div = document.getElementsByClassName('aboutTextDiv')[0];
const landing_div = document.getElementsByClassName('landing')[0];
const img_div = document.getElementsByClassName('myImg')[0];
const nav_links = document.getElementsByClassName('nav-links')[0];
const p1_div = document.getElementsByClassName('p1')[0];
const p2_div = document.getElementsByClassName('p2')[0];
const project_title = document.getElementsByClassName('projectTitle')[0];

var p1images =  document.querySelectorAll('.p1 img');
var p2images =  document.querySelectorAll('.p2 img');
var dotsp1 = document.querySelectorAll('.switchDot1');
var dotsp2 = document.querySelectorAll('.switchDot2');

var currentImage = 0;
dots = 0;

const interval = 5000;
//var timer = setInterval(slideSwitch, interval);
function slideSwitch(project, n){
    if(project == 1){
        images = p1images;
        dots = dotsp1;
    }else if(project == 2){
        images = p2images;
        dots = dotsp2;
    }
    for (let index = 0; index < images.length; index++) {
        images[index].style.opacity = 0;
        console.log(index)
        dots[index].className = dots[index].className.replace(' DotActive', '');        
    }
    //currentImage = (currentImage + 1) % images.length; // update the index number

    currentImage = n;

    images[currentImage].style.opacity = 1;
    dots[currentImage].className += ' DotActive';
}
function linkClicked(n){
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



    }
}

function sendEmail(){

}
/** 
window.onscroll = () => {
    if(window.scrollY > 350 && window.scrollY < 710 ){
        if(window.scrollY > 450){
            name_var.classList.remove('active1');
            setTimeout(function(){
                name_var.classList.add('active');
            }, 50);  
    
        }
        img_div.classList.add('active');
        about_div.classList.add('active');    
        //nav_links.classList.remove("active");
    }else{
        if(window.scrollY < 350){
            name_var.classList.remove('active');
            if(window.scrollY < 250){
                about_div.classList.remove('active');   
                img_div.classList.remove('active');
            }
            //nav_links.classList.remove("active"); 
        }
        if(window.scrollY > 710){
            //nav_links.classList.add("active");
            if(window.scrollY > 1180){
                img_div.classList.remove('active');
                about_div.classList.remove('active');  
                p1_div.classList.add("active");
                p2_div.classList.add("active");

                project_title.classList.add("active");
                if(window.scrollY > 1470){
                    //nav_links.classList.remove("active");
                    if(window.scrollY > 2590){ // change after all projects added
                        //nav_links.classList.add("active");
                    }
                }     
            }else{
                p1_div.classList.remove("active");
                p2_div.classList.remove("active");
                img_div.classList.add('active');
                about_div.classList.add('active');  
                project_title.classList.remove("active");          
            }
      }
    }
};
*/

const toggle = document.getElementsByClassName('toggle')[0];
const navlinks = document.getElementsByClassName('nav-links')[0];

toggle.addEventListener('click',() => {
    navlinks.classList.toggle('active');
})


const home = document.getElementsByClassName('homelink')[0];
const about = document.getElementsByClassName('aboutlink')[0];
const projects = document.getElementsByClassName('projectslink')[0];
const contact = document.getElementsByClassName('contactlink')[0];

//home.addEventListener('click', linkClicked);
//about.addEventListener('click', linkClicked);
//projects.addEventListener('click', linkClicked);
//contact.addEventListener('click', linkClicked);

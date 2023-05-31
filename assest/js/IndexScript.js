AOS.init();

const typed = new Typed('.navbar-brand', {
    strings: ['Knowledge Academy', 'Knowledge Academy'],
    typeSpeed: 100,
    backSpeed: 100,
    startDelay: 100,
    loop: true,
    showCursor: false
});


// while window loadding
document.body.style.overflow="hidden"
window.addEventListener("load",()=>{
    setTimeout(function(){
        document.querySelector(".preloader").classList.add('opacity-0');
        document.body.style.overflow="auto"
    },2000)
})

// To show the box color
document.querySelector(".box-color .icon").onclick=function(){
document.querySelector(".box-color").classList.toggle("active");
}

// To greate a random color for the page
// function RandomColorOfPage(){
// let hexArray=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
// let color=[];
// for(let i=0;i<6;i++)
// color.push(hexArray[Math.floor(Math.random()* hexArray.length)])
// document.querySelector("html").style.setProperty("--main-color",`#${color.join("")}`)
// }


// To change the color of page
document.querySelectorAll(".box-color .colors ul li").forEach(function(ele){
    ele.onclick=function(){
        document.querySelectorAll(".box-color .colors ul li").forEach(function(e){
            e.classList.remove("active")
        })
        ele.classList.add("active");
        document.querySelector("html").style.setProperty("--main-color",ele.getAttribute("data-color"))
    }
})

// Message for contact section
document.querySelector(".contact .box .info-box center a").onclick=function(){
Swal.fire({
title: 'Thank you for contacting us. We will reply to you soon',
icon: 'success',
showClass: {
popup: 'animate__animated animate__backInDown'
},
hideClass: {
popup: 'animate__animated animate__backOutUp'
}})
}



// change background of navbar and opacity of BackToTop
let NavBar = document.querySelector("nav.navbar");
let BackToTop=document.querySelector(".back-to-top")
if(scrollY > NavBar.offsetTop)
NavBar.classList.add("scrolled");
if(scrollY >= NavBar.offsetHeight )
BackToTop.classList.add("scrolled");
function ChangeBg(){
    if(scrollY > NavBar.offsetTop)
        NavBar.classList.add("scrolled");
    else
        NavBar.classList.remove("scrolled");

    if(scrollY >= NavBar.offsetHeight )
        BackToTop.classList.add("scrolled");
    else
        BackToTop.classList.remove("scrolled");
}
window.addEventListener("scroll",ChangeBg)



//change nav links
let links=document.querySelectorAll("nav.navbar a.nav-link");
function ChangeNav1(){
    let nav = document.getElementById("MainNavLink")
    let sec = document.getElementById("header")

    if(scrollY >= sec.offsetTop && scrollY < sec.offsetTop +sec.offsetHeight ){
        for (let i = 0; i < links.length; i++) 
            links[i].classList.remove("active")
    nav.classList.add("active")
    }
}
window.addEventListener("scroll",ChangeNav1)

function ChangeNav2(){
    let nav = document.getElementById("Courses")
    let sec = document.getElementById("portfolio")

    if(scrollY+10 >= sec.offsetTop && scrollY < sec.offsetTop +sec.offsetHeight ){
        for (let i = 0; i < links.length; i++) 
            links[i].classList.remove("active")
    nav.classList.add("active")
    }
}
window.addEventListener("scroll",ChangeNav2)

function ChangeNav3(){
    let nav = document.getElementById("Service")
    let sec = document.getElementById("second_features")
    
    if(scrollY+10 >= sec.offsetTop && scrollY < sec.offsetTop +sec.offsetHeight ){
        for (let i = 0; i < links.length; i++) 
            links[i].classList.remove("active")
    nav.classList.add("active")
    }
}
window.addEventListener("scroll",ChangeNav3)

function ChangeNav4(){
    let nav = document.getElementById("OurMainSkills")
    let sec = document.getElementById("our-skills")

    if(scrollY+10 >= sec.offsetTop && scrollY < sec.offsetTop +sec.offsetHeight ){
        for (let i = 0; i < links.length; i++) 
            links[i].classList.remove("active")
    nav.classList.add("active")
    }
}
window.addEventListener("scroll",ChangeNav4)

function ChangeNav5(){
    let nav = document.getElementById("com")
    let sec = document.getElementById("prices")

    if(scrollY+10 >= sec.offsetTop && scrollY < sec.offsetTop +sec.offsetHeight ){
        for (let i = 0; i < links.length; i++) 
            links[i].classList.remove("active")
    nav.classList.add("active")
    }
}
window.addEventListener("scroll",ChangeNav5)

function ChangeNav6(){
    let nav = document.getElementById("OurMainTeam")
    let sec = document.getElementById("team")

    if(scrollY+10 >= sec.offsetTop && scrollY < sec.offsetTop +sec.offsetHeight ){
        for (let i = 0; i < links.length; i++) 
            links[i].classList.remove("active")
    nav.classList.add("active")
    }
}
window.addEventListener("scroll",ChangeNav6)

function ChangeNav7(){
    let nav = document.getElementById("ContactWithUs")
    let sec = document.getElementById("contact")

    if(scrollY+10 >= sec.offsetTop && scrollY < sec.offsetTop +sec.offsetHeight ){
        for (let i = 0; i < links.length; i++) 
            links[i].classList.remove("active")
    nav.classList.add("active")
    }
}
window.addEventListener("scroll",ChangeNav7)

function ChangeNav8(){
    let nav = document.getElementById("importance")
    let sec = document.getElementById("reviews")

    if(scrollY+10 >= sec.offsetTop && scrollY < sec.offsetTop +sec.offsetHeight ){
        for (let i = 0; i < links.length; i++) 
            links[i].classList.remove("active")
    nav.classList.add("active")
    }
}
window.addEventListener("scroll",ChangeNav8)


// Timer

let counter=setInterval(function(){

let contentsCounter = document.querySelectorAll(".time .content")
let defference=new Date("1/1/2050 00:00:00").getTime()- new Date().getTime();

let days=Math.floor(defference/(1000*60*60*24))
let hours=Math.floor( ( defference % (1000*60*60*24) ) / (1000*60*60))
let minutes=Math.floor( ( defference % (1000*60*60) ) / (1000*60))
let seconds=Math.floor( ( defference % (1000*60) ) / (1000))

contentsCounter[0].innerHTML=` ${days} <br/> <span>الايام</span>`;
contentsCounter[1].innerHTML=`${hours} <br/> <span>الساعات</span>`;
contentsCounter[2].innerHTML=`${minutes} <br/> <span>الدقائق</span>`;
contentsCounter[3].innerHTML=`${seconds} <br/> <span>الثواني</span>`;

if(defference<0)
clearInterval(counter)
},1000)

// input in time
document.querySelector(".time .share p").onclick=function(){
    document.querySelector(".time .share input").value=""
}


// change the progress bar
window.addEventListener("scroll", ()=>{
    let sec =document.querySelector(".our-skills");
    let successBar = document.querySelector(".our-skills .progress .progress-bar.bg-success")
    let infoBar = document.querySelector(".our-skills .progress .progress-bar.bg-info")
    let warningBar = document.querySelector(".our-skills .progress .progress-bar.bg-warning")
    let dangerBar = document.querySelector(".our-skills .progress .progress-bar.bg-danger")

    successBar.style.width="0"
    infoBar.style.width="0"
    warningBar.style.width="0"
    dangerBar.style.width="0"

    if (scrollY >= sec.offsetTop - 170 ){
        successBar.style.width="75%"
        infoBar.style.width="90%"
        warningBar.style.width="60%"
        dangerBar.style.width="80%"
    }
})






















































































































































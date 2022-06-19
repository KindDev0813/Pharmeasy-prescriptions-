// Navbar on scroll FUnctionality
window.onscroll = function (){scroll()}
function scroll()
{
    let lowerNav = document.querySelector("#lowerNav")
    if(document.documentElement.scrollTop<1)
    {
        lowerNav.style.paddingTop = "75px";
        lowerNav.style.marginBottom = "0px";
        document.querySelector("#scroll").style.opacity ="1";
        document.querySelector("#offer").style.opacity ="1";
    }else{
        lowerNav.style.paddingTop = "10px";
        lowerNav.style.marginBottom = "20px";
        document.querySelector("#scroll").style.opacity ="0";
        document.querySelector("#offer").style.opacity ="0";
    }
}

//linking part

let BacktoHomeImg = document.querySelector("#upperNav>div>img:first-child");
BacktoHomeImg.addEventListener("click",function(){
    window.location.href = "index.html";
})
let cart = document.querySelector("#cart");
cart.addEventListener("click",function(){
    if(localStorage.getItem("checkLogin")=="Yes")
    {
    window.location.href = "cart.html";
    }
});
let login = document.querySelector("#login");
login.addEventListener("click",function(){
    window.location.href = "login.html";
})
let labtest = document.querySelector("#labtestb");
labtest.addEventListener("click",function(){
    console.log("in");
    window.location.href = "Labtest.html";
});

let Rtpcr = document.querySelector("#Rtpcr");
Rtpcr.addEventListener("click",function(){
    console.log("in");
    window.location.href = "RTPCR.html";
});

let Healthcare = document.querySelector("#Health");
Healthcare.addEventListener("click",function(){
    console.log("in");
    window.location.href = "healthcare.html";
});
let offer = document.querySelector("#offer");
offer.addEventListener("click",function(){
    window.location.href = "offerPage.html";
});
let orderMedicine = document.querySelector("#orderMedicinebtn");
orderMedicine.addEventListener("click",function(){
    console.log("in");
    window.location.href = "./OrderMedicine/ordermedicine.html";
});

//login Functionality
if(localStorage.getItem("checkLogin")=="Yes")
{
    let status = document.querySelector("#login>img+p");
    status.innerText = "User";
}

function first() {
    document.getElementById("sliderimg").src = "https://cms-contents.pharmeasy.in/banner/4acf73cf129-2_MonsoonStomach_HP.jpg"
}
function second() {
    document.getElementById("sliderimg").src = "https://cms-contents.pharmeasy.in/banner/491919cffc0-02_health-checkups_Cat_696x301_v1.jpg"
}
function third() {
    document.getElementById("sliderimg").src = "https://cms-contents.pharmeasy.in/banner/67144bc5fec-1_Cat_696x301_Grand1000.jpg"
}
setInterval(first, 2000)
setInterval(second, 4000)
setInterval(third, 6000)
let answers = document.querySelectorAll(".section");
answers.forEach((event) => {
    event.addEventListener('click', () => {
        if (event.classList.contains("active")) {
            event.classList.remove("active");
        }
        else {
            event.classList.add("active");
        }
    })
})
//slider for divs..... start>//
let slider=document.querySelector("#packages")
let left=document.querySelector("#left")
let right=document.querySelector("#right")
let index=0
right.addEventListener("click",function(){
    if(index<3){
        index=index+1
    }
    else{
        index=3
    }
  slider.style.transform="translate("+index*-16.5+"%)"
})
left.addEventListener("click",function(){
    if(index>0){
        index=index-1
    }
    else{
        index=0
    }
  slider.style.transform="translate("+index*-16.5+"%)"
})
//slider for divs..... ends>//
let slide=document.querySelector("#our")
let lef=document.querySelector("#lef")
let righ=document.querySelector("#rig")
let inde=0
righ.addEventListener("click",function(){
    if(inde<3){
        inde=inde+1
    }
    else{
        inde=3
    }
  slide.style.transform="translate("+inde*-25+"%)"
})
lef.addEventListener("click",function(){
    if(inde>0){
        inde=inde-1
    }
    else{
        inde=0
    }
  slide.style.transform="translate("+inde*-25+"%)"
})

//review//
let mover=document.querySelector(".report")
let perv=document.querySelector("#prev")
let next=document.querySelector("#next")
let count=0
next.addEventListener("click",function(){
    if(count<1){
    count=count+1
    }
    else{
        count=1
    }
  mover.style.transform="translate("+count*-50+"%)"
})
perv.addEventListener("click",function(){
    if(count>0){
        count=count-1
    }
    else{
        count=0
    }
  mover.style.transform="translate("+count*-25+"%)"
})

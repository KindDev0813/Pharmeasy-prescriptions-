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


var elements = document.getElementsByClassName("linkwallet");

var myFunction = function() {
    alert("Payment Successful");
    window.location.href = "paymentsucess.html";
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction);
}



var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");


    
   
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
    
    
    
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
    
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
         modal.style.display = "none";
    }
}
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}


var cartAmount=JSON.parse(localStorage.getItem("Mrp"));
document.querySelector("#cartPrice").innerText=cartAmount;

var stike=JSON.parse(localStorage.getItem("totalamt"));
document.querySelector("#strike").innerText=stike;
document.querySelector("#strike").style.marginRight="10px"

var totalBill=JSON.parse(localStorage.getItem("totalBill"));
document.querySelector("#totalbillpaid").innerText=totalBill;

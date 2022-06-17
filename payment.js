
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

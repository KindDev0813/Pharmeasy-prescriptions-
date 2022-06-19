//linking part
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

let BacktoHomeImg = document.querySelector("#upperNav>div>img:first-child");
BacktoHomeImg.addEventListener("click",function(){
    window.location.href = "index.html";
})
let cart = document.querySelector("#cart");
cart.addEventListener("click",function(){
    window.location.href = "cart.html";
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
let orderMedicine = document.querySelector("#orderMedicinebtn");
orderMedicine.addEventListener("click",function(){
    console.log("in");
    window.location.href = "./OrderMedicine/ordermedicine.html";
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

let data=JSON.parse(localStorage.getItem("cart-page"))||[]
display(data)
function display(data){
    document.querySelector("#cartitems").innerHTML="";
    data.map(function(el){
        let box = document.createElement("div");
        box.style.display="flex"
        box.setAttribute("class","box")

        let imagediv=document.createElement("div")
        imagediv.setAttribute("class","imgdiv");

        let image = document.createElement("img");
        image.setAttribute("src",el.image);
        image.setAttribute("class","realimg")

        imagediv.append(image)

        let contentdiv=document.createElement("div");
        contentdiv.setAttribute("id","contentdiv")

        let name=document.createElement("h4");
        name.innerText=el.name;
        name.setAttribute("id","h4name")

        let name2=document.createElement("h4");
        name2.innerText=el.name2;
        name2.setAttribute("id","name2") 

        let desp=document.createElement("h4");
        desp.innerText=el.description;
        desp.setAttribute("id","description")

        let pricediv=document.createElement("div");
        pricediv.setAttribute("id","pricediv")
        pricediv.style.display="flex";
        pricediv.style.alignItems="center";

        let qty=document.createElement("select")
        qty.setAttribute("id","selecttag")
        qty.innerHTML= `<option value="none">Qty:</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6 <span>Max Qty</span></option>`
        qty.addEventListener("change",function(){
            qtychange(el,qty)
        })

        let actualqty=document.createElement("p");
        actualqty.setAttribute("id","displayqty")
        actualqty.innerText=el.quantity

        let price=document.createElement("h2");
        price.innerHTML="₹"  
        let amount=document.createElement("span");
        amount.innerText=(el.price*el.quantity).toFixed(2)
        price.append(amount)
        price.setAttribute("id","aprice")
        let strike=document.createElement("h4");
        strike.innerHTML="₹";
        strike.style.textDecoration="line-through"
        strike.style.marginLeft="30px"
        let strike2=document.createElement("span");
        strike2.innerText=(el.Mrp*el.quantity).toFixed(2)
        strike.append(strike2)

        let delivery=document.createElement("div");
        delivery.setAttribute("id","delivery")
        delivery.innerHTML="<p>Delivery by <span><b>Tomorrow, before 10pm</b><span></p>";

        let del=document.createElement("div")
        del.setAttribute("id","del")
        let deletebtn=document.createElement("img");
        deletebtn.setAttribute("id","delimg")
        deletebtn.setAttribute("src","https://assets.pharmeasy.in/web-assets/dist/2fb50086.svg")
  
        deletebtn.addEventListener("click",function(){
            deletefun(el)
        })
        del.append(deletebtn)
        pricediv.append(qty,actualqty,strike,price);
        contentdiv.append(name,name2,desp,pricediv,delivery)
        box.append(imagediv,contentdiv,del);
        document.querySelector("#cartitems").append(box)
    })
}

function deletefun(el,i){
    data.splice(i,1)
    localStorage.setItem("cart-page",JSON.stringify(data))
    window.location.reload()
}

function qtychange(el,qty){
    el.quantity=qty.value;
    localStorage.setItem("cart-page",JSON.stringify(data))
    data=JSON.parse(localStorage.getItem("cart-page")) || []
    display(data)
    window.location.reload();
}

let total= data.reduce(function(acc,el){
    return acc+(el.price*el.quantity)
},0)
let Mrp=data.reduce(function(acc,el){
    return acc+(el.Mrp*el.quantity)
},0)

total=total.toFixed(2)
Mrp=Mrp.toFixed(2)
localStorage.setItem("totalamt",total);
localStorage.setItem("Mrp",Mrp);

document.querySelector("#cartvalueprice").innerText=total
document.querySelector("#cartvaluestriked").innerText=Mrp
document.querySelector("#num").innerText=data.length

if(data.length>0){
  document.querySelector("#deliverycharge").innerText=84.03
  document.querySelector("#amounttobepaid").innerText=( Number(total)+84.03).toFixed(2)
  let totalbill= (Number(total)+84.03).toFixed(2)
  localStorage.setItem("totalBill",totalbill)
  document.querySelector("#saved").innerText=(Mrp-total).toFixed(2)
  document.querySelector("#discounted").innerText=(Number(total)*0.1798).toFixed(2)
}

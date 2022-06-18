// localStorage.setItem("checkLogin","Yes");
let checkLogin = localStorage.getItem("checkLogin") || "No";

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
    location.reload();
})
let cart = document.querySelector("#cart");
cart.addEventListener("click",function(){
    if(localStorage.getItem("checkLogin")=="Yes")
    {
    window.location.href = "cart.html";
    }
});
let login = document.querySelector(".loginlink");
login.addEventListener("click",function(){
    if(checkLogin=="No"){
    window.location.href = "login.html";
    }
})
let labtest = document.querySelector("#labtestb");
labtest.addEventListener("click",function(){
    window.location.href = "Labtest.html";
});

let Rtpcr = document.querySelector("#Rtpcr");
Rtpcr.addEventListener("click",function(){
    window.location.href = "RTPCR.html";
});

let Healthcare = document.querySelector("#Health");
Healthcare.addEventListener("click",function(){
    window.location.href = "healthcare.html";
});
let orderMedicine = document.querySelector("#orderMedicinebtn");
orderMedicine.addEventListener("click",function(){
    console.log("in");
    window.location.href = "./OrderMedicine/ordermedicine.html";
});
let offer = document.querySelector("#offer");
offer.addEventListener("click",function(){
    window.location.href = "offerPage.html";
});
let pincode = document.querySelector("#NavPincode");
pincode.addEventListener("click",function(){
    window.location.href = "pincode.html";
});
//Login Functionality

if(checkLogin=="Yes")
{
    let status = document.querySelector("#switch>p");
    status.innerText = "User";
    document.querySelector("#switch").setAttribute("class","dropdown");
}

//DropDown Functionality
let logout = document.querySelector("#logout");
logout.addEventListener("click",()=>{
    console.log("in");
    localStorage.setItem("checkLogin","No");
    window.location.reload();
})



//Carousel 1 auto functionality
let bigSlider = document.querySelector(".slider-wrapper");
let BigIndex = 0;
setInterval(function(){
    if(BigIndex<3)
    {
        BigIndex+=1;
    }else{
        BigIndex=1;
    }
    // console.log(featuredIndex);
    bigSlider.style.transform = "translate("+(BigIndex)*-25 +"%)";

},5000)

let slider = document.querySelector(".offerSlider");
let leftArrow = document.querySelector(".leftarrow");
let rightArrow = document.querySelector(".rightarrow");
let selectionIndex = 0;

rightArrow.addEventListener("click",function(){
    if(selectionIndex<4)
    {
        selectionIndex+=1;
    }else{
        selectionIndex =1;
    }
    console.log(selectionIndex);
    slider.style.transform = "translate("+(selectionIndex)*-322 +"px)";
})

leftArrow.addEventListener("click",function(){
    if(selectionIndex>0)
    {
        selectionIndex-=1;
    }else{
        selectionIndex =4;
    }
    console.log(selectionIndex);
    slider.style.transform = "translate("+(selectionIndex)*-322 +"px)";
})

let featuredSlider = document.querySelector(".featuredSlider");
let featuredLeftArrow = document.querySelector(".Featuredleftarrow");
let featuredRightArrow = document.querySelector(".Featuredrightarrow");
let featuredIndex = 0;

featuredRightArrow.addEventListener("click",function(){
    if(featuredIndex<11)
    {
        featuredIndex+=1;
    }else{
        featuredIndex =11;
    }
    console.log(featuredIndex);
    featuredSlider.style.transform = "translate("+(featuredIndex)*-170 +"px)";

})
featuredLeftArrow.addEventListener("click",function(){
    if(featuredIndex>0)
    {
        featuredIndex-=1;
    }else{
        featuredIndex =0;
    }
    console.log(featuredIndex);
    featuredSlider.style.transform = "translate("+(featuredIndex)*-170 +"px)";

})
// Timing function 
setInterval(function(){
    if(featuredIndex<7)
    {
        featuredIndex+=1;
    }else{
        featuredIndex =1;
    }
    // console.log(featuredIndex);
    featuredSlider.style.transform = "translate("+(featuredIndex)*-170 +"px)";

},3000)
// LabTest Arrow Functionality
let LabTestslider = document.querySelector(".labTestSlider");
let labTestleftArrow = document.querySelector(".LabTestleftarrow");
let labTestrightArrow = document.querySelector(".LabTestrightarrow");
let labTestselectionIndex = 0;

labTestrightArrow.addEventListener("click",function(){
    if(labTestselectionIndex<4)
    {
        labTestselectionIndex+=1;
    }else{
        labTestselectionIndex =4;
    }
    console.log(labTestselectionIndex);
    LabTestslider.style.transform = "translate("+(labTestselectionIndex)*-308 +"px)";
})

labTestleftArrow.addEventListener("click",function(){
    if(labTestselectionIndex>0)
    {
        labTestselectionIndex-=1;
    }else{
        labTestselectionIndex =0;
    }
    LabTestslider.style.transform = "translate("+(labTestselectionIndex)*-308 +"px)";
})


// Frequently Lab Test tab creation
let labTestTab=[{
    image:"images/labTestimg1.svg",
    p1:"Comprehensive Full Body Chec...",
    p2:"Available at 1 certified lab",
    p3:"includes 87 tests",
    price:"₹1499",
},{
    image:"images/labTestimg2.svg",
    p1:"Post Prandial Blood Sugar (PPBS).",
    p2:"Available at 1 certified lab",
    p3:"",
    price:"₹199",
},{
    image:"images/labTestimg1.svg",
    p1:"Comprehensive Full Body Chec...",
    p2:"Available at 1 certified lab",
    p3:"includes 87 tests",
    price:"₹1499",
},{
    image:"images/labTestimg2.svg",
    p1:"Post Prandial Blood Sugar (PPBS).",
    p2:"Available at 1 certified lab",
    p3:"",
    price:"₹199",
},{
    image:"images/labTestimg2.svg",
    p1:"Post Prandial Blood Sugar (PPBS).",
    p2:"Available at 1 certified lab",
    p3:"",
    price:"₹199",
},{
    image:"images/labTestimg1.svg",
    p1:"Comprehensive Full Body Chec...",
    p2:"Available at 1 certified lab",
    p3:"includes 87 tests",
    price:"₹1499",
},{
    image:"images/labTestimg2.svg",
    p1:"Post Prandial Blood Sugar (PPBS).",
    p2:"Available at 1 certified lab",
    p3:"",
    price:"₹199",
}]

labTestTab.forEach(function(elem){
    const tab = document.createElement('div');
    tab.setAttribute("class","labtestTab")
    const img = document.createElement('img');
    img.setAttribute("class","featuredImg")
    img.setAttribute("src",elem.image);
    const p1 = document.createElement('p');
    p1.setAttribute("class","p1");
    p1.innerText=elem.p1;
    const p2 = document.createElement('p');
    p2.setAttribute("class","p2");
    p2.innerText=elem.p2;
    const p3 = document.createElement('p');
    p3.setAttribute("class","p3");
    p3.innerText=elem.p3;
    let div = document.createElement("div");
    div.setAttribute("class","flex priceButtondiv");
    const price = document.createElement('p');
    price.innerHTML=`<b>${elem.price}</b> Onwards`;
    let button = document.createElement("button");
    button.innerText="Book Now >"
    button.style.fontWeight="bold";
    div.append(price,button);
    tab.append(img,p1,p2,p3,div);
    document.querySelector(".labTestSlider").append(tab);

})

//DoD products information and Tab creation

let DodProducts=[{
    image:"images/Dodimg1.webp",
    name:"Baiyanath Ashok Ghrita -100 Gm",
    mrp:"₹249",
    dealPrice:"₹124.5"
},{
    image:"images/Dodimg2.webp",
    name:"Onetouch Select Plus Simple Glucometer With 10 Free...",
    mrp:"₹1147",
    dealPrice:"₹871.72"
},{
    image:"images/Dodimg2.webp",
    name:"Onetouch Select Plus Simple Glucometer With 10 Free...",
    mrp:"₹1147",
    dealPrice:"₹871.72"
},{
    image:"images/Dodimg2.webp",
    name:"Onetouch Select Plus Simple Glucometer With 10 Free...",
    mrp:"₹1147",
    dealPrice:"₹871.72"
},{
    image:"images/Dodimg2.webp",
    name:"Onetouch Select Plus Simple Glucometer With 10 Free...",
    mrp:"₹1147",
    dealPrice:"₹871.72"
},{
    image:"images/Dodimg2.webp",
    name:"Onetouch Select Plus Simple Glucometer With 10 Free...",
    mrp:"₹1147",
    dealPrice:"₹871.72"
},{
    image:"images/Dodimg2.webp",
    name:"Onetouch Select Plus Simple Glucometer With 10 Free...",
    mrp:"₹1147",
    dealPrice:"₹871.72"
},{
    image:"images/Dodimg2.webp",
    name:"Onetouch Select Plus Simple Glucometer With 10 Free...",
    mrp:"₹1147",
    dealPrice:"₹871.72"
}]

DodProducts.forEach(function(elem){
    const tab = document.createElement('div');
    tab.setAttribute("class","DodTab");
    const imageDiv = document.createElement('div');
    imageDiv.setAttribute("class","imgDiv");
    const image = document.createElement('img');
    image.setAttribute("src",elem.image);
    imageDiv.append(image);
    const h3 = document.createElement('h3');
    h3.innerText=elem.name;
    h3.setAttribute("class","font");
    const p1 = document.createElement('p');
    p1.innerHTML=`MRP <strike>${elem.mrp}`;
    p1.setAttribute("class","p1 font");
    const p2 = document.createElement('p');
    p2.setAttribute("class","p2");
    p2.innerHTML=`<b>${elem.dealPrice}</b>`;
    tab.append(imageDiv,h3,p1,p2);
    document.querySelector("#dealsOfTheDaySlider").append(tab);
})

// Deal of the Day Arrow Functionality
let dealsOfTheDaySlider = document.querySelector("#dealsOfTheDaySlider");
let DodleftArrow = document.querySelector(".Dodleftarrow");
let DodrightArrow = document.querySelector(".Dodrightarrow");
let DodselectionIndex = 0;

DodrightArrow.addEventListener("click",function(){
    if(DodselectionIndex<4)
    {
        DodselectionIndex+=1;
    }else{
        DodselectionIndex =4;
    }
    console.log(DodselectionIndex);
    dealsOfTheDaySlider.style.transform = "translate("+(DodselectionIndex)*-12.8 +"%)";
})

DodleftArrow.addEventListener("click",function(){
    if(DodselectionIndex>0)
    {
        DodselectionIndex-=1;
    }else{
        DodselectionIndex =0;
    }
    dealsOfTheDaySlider.style.transform = "translate("+(DodselectionIndex)*-12.8 +"%)";
})

// News Carousel
let news=[{
    image:"images/NewsImg1.jpg",
    heading:"Home Remedies That Ease Your Hydrocele",
    content:"Table of Contents Introduction:What is a hydrocele?What are the symptoms?When to consult with a doctor?Home remedies for"
},{
    image:"images/NewsImg2.jpg",
    heading:"6 Safe And Simple Exersises For Hydrocele",
    content:"Table of Contents The symptoms of hydrocele include:Is exercise good for Hydrocele?6 Exercises and yoga for people with..."
},{
    image:"images/NewsImg3.jpg",
    heading:"Ramsay Hunt Syndrome: What Is THis Rare Condition?",
    content:"Table of Contents Why does it occur?Signs and symptoms to look out forRisksComplicationsTreatment for Hunt..."
},{
    image:"images/NewsImg4.jpg",
    heading:"How Is Internet Addiction Affecting Your Mental Health?",
    content:"Table of Contents Introduction:What causes internet addiction?Symptoms of internet addictionTreatment of internet..."
},{
    image:"images/NewsImg5.jpg",
    heading:"Kiwi: Uses, Benefits, Side Effects and More!",
    content:"Table of Contents Introduction:Nutritional Value of Kiwi:Therapeutic Uses of Kiwi:Benefits of Kiwi:How to Use Kiwi?..."
}]

news.forEach(function(elem){
    const tab = document.createElement('div');
    const div = document.createElement('div');
    const image = document.createElement('img');
    image.setAttribute("src",elem.image);
    div.append(image);
    const p1 = document.createElement('p');
    p1.innerText=elem.heading;
    p1.setAttribute("class","NewsHead");
    const p2 = document.createElement('p');
    p2.innerText = elem.content;
    p2.setAttribute("class","NewsContent");
    const button = document.createElement('button');
    button.innerText = "Read More >";
    tab.append(div,p1,p2,button);
    document.querySelector("#NewsSlider").append(tab);

})
let NewsSlider = document.querySelector("#NewsSlider");
let NewsleftArrow = document.querySelector(".Newsleftarrow");
let NewsrightArrow = document.querySelector(".Newsrightarrow");
let NewsselectionIndex = 0;

NewsrightArrow.addEventListener("click",function(){
    if(DodselectionIndex<4)
    {
        NewsselectionIndex+=1;
    }else{
        NewsselectionIndex =4;
    }
    NewsSlider.style.transform = "translate("+(NewsselectionIndex)*-476 +"px)";
})

NewsleftArrow.addEventListener("click",function(){
    if(NewsselectionIndex>0)
    {
        NewsselectionIndex-=1;
    }else{
        NewsselectionIndex =0;
    }
    NewsSlider.style.transform = "translate("+(NewsselectionIndex)*-476 +"px)";
})


// Review Slider

let reviews=[{
    name:"Darpan Dholakia",
    date:"April 23,2020",
    review:"Very good App Would recommend it to everyone requiring fast and Efficient delivery of medicinal Products at the doorstep"
},{
    name:"Darpan Dholakia",
    date:"April 23,2020",
    review:"Very Good App Would recommend it to everyone requiring fast and Efficient delivery of medicinal Products at the doorstep"
},{
    name:"Darpan Dholakia",
    date:"April 23,2020",
    review:"Very Good App Would recommend it to everyone requiring fast and Efficient delivery of medicinal Products at the doorstep"
},{
    name:"Darpan Dholakia",
    date:"April 23,2020",
    review:"Very Good App Would recommend it to everyone requiring fast and Efficient delivery of medicinal Products at the doorstep"
},{
    name:"Darpan Dholakia",
    date:"April 23,2020",
    review:"Very Good App Would recommend it to everyone requiring fast and Efficient delivery of medicinal Products at the doorstep"
},{
    name:"Darpan Dholakia",
    date:"April 23,2020",
    review:"Very Good App Would recommend it to everyone requiring fast and Efficient delivery of medicinal Products at the doorstep"
},{
    name:"Darpan Dholakia",
    date:"April 23,2020",
    review:"Very Good App Would recommend it to everyone requiring fast and Efficient delivery of medicinal Products at the doorstep"
},{
    name:"Darpan Dholakia",
    date:"April 23,2020",
    review:"Very Good App Would recommend it to everyone requiring fast and Efficient delivery of medicinal Products at the doorstep"
}];

reviews.forEach(function(elem){
    const tab = document.createElement('div');
    const upperhalf = document.createElement('div');
    upperhalf.setAttribute("class","upperhalf");
    const lowerhalf = document.createElement('div');
    lowerhalf.setAttribute("class","lowerhalf")
    const name = document.createElement('p');
    name.setAttribute("class","HeadName")
    name.innerText = elem.name;
    const date = document.createElement('p');
    date.setAttribute("class","headDate");
    date.innerText = elem.date;
    upperhalf.append(name,date);
    const review = document.createElement('p');
    review.innerText = elem.review;
    review.setAttribute("class","review font");
    lowerhalf.append(review);
    tab.append(upperhalf,lowerhalf);
    document.querySelector("#reviewSlider").append(tab);
})

let reviewSlider = document.querySelector("#reviewSlider");
let reviewleftArrow = document.querySelector(".reviewleftarrow");
let reviewrightArrow = document.querySelector(".reviewrightarrow");
let reviewselectionIndex = 0;

reviewrightArrow.addEventListener("click",function(){
    if(reviewselectionIndex<6)
    {
        reviewselectionIndex+=1;
    }else{
        reviewselectionIndex =6;
    }
    reviewSlider.style.transform = "translate("+(reviewselectionIndex)*-357 +"px)";
})

reviewleftArrow.addEventListener("click",function(){
    if(reviewselectionIndex>0)
    {
        reviewselectionIndex-=1;
    }else{
        reviewselectionIndex =0;
    }
    reviewSlider.style.transform = "translate("+(reviewselectionIndex)*-357 +"px)";
})

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

setInterval(function(){
    if(featuredIndex<7)
    {
        featuredIndex+=1;
    }else{
        featuredIndex =1;
    }
    console.log(featuredIndex);
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
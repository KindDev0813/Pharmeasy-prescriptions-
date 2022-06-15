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


// Frequently Lab Test tab creation
let labTestTab=[{
    image:"images/labTestimg1.svg",
    p1:"Comprehensive Full Body Chec...",
    p2:"Available at 1 certified lab",
    p3:"includes 87 tests",
    price:"1499",
},{
    image:"images/labTestimg2.svg",
    p1:"Post Prandial Blood Sugar (PPBS).",
    p2:"Available at 1 certified lab",
    p3:"",
    price:"199",
}]

labTestTab.forEach(function(elem){
    const tab = document.createElement('div');
    const img = document.createElement('img');
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
    div.setAttribute("class","flex");
    const price = document.createElement('p');
    price.innerHTML=`<b>${elem.price}<b> Onwards`;
    let button = document.createElement("button");
    button.innerText="Book Now >"
    button.style.color = "#10847e";
    button.style.fontWeight="bold";
    div.append(price,button);
    tab.append(img,p1,p2,p3,div);
    document.querySelector(".labTestSlider").append(tab);

})
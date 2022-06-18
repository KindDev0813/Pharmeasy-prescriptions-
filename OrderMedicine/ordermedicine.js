//linking part

let BacktoHomeImg = document.querySelector("#logo");
BacktoHomeImg.addEventListener("click",function(){
    window.location.href = "../index.html";
})

let BacktoHome = document.querySelector("#navpage>p");
BacktoHome.addEventListener("click",function(){
    window.location.href = "../index.html";
})

let alloffer = document.querySelector("#dontknow");
alloffer.addEventListener("click",function(){
    window.location.href = "../offerPage.html";
})
//linking part

let img2=document.querySelector("#img2");

let button2=document.querySelectorAll(".button2")

let arr2=[
    "https://consumer-app-images.pharmeasy.in/marketing/comp_india_covered.jpg","https://consumer-app-images.pharmeasy.in/marketing/comp_50lac.jpg",
    "https://consumer-app-images.pharmeasy.in/marketing/comp_cod.jpg","https://consumer-app-images.pharmeasy.in/marketing/comp_3step.jpg"
]

// image slider 2

let imgNum=0;

button2[0].addEventListener("click",function(){
    if(imgNum===0){
        imgNum=arr2.length-1;
    }
    else{
        imgNum--;
    }
    img2.src=arr2[imgNum];
})

button2[1].addEventListener("click",function(){
    if(imgNum===arr2.length-1){
       imgNum=0 ;
    }
    else{
        imgNum++;
    }
    img2.src=arr2[imgNum];
});


// Frequenty asked ques using accordion

let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  });
});



    let slider = document.querySelector("#slider");
    let one = document.querySelector("#one");
    let two = document.querySelector("#two");
    let index = 0;
    let div=4;
  //   one.addEventListener("click", function () {
  //       index = index - 1;
  //       slider.style.transform = "translate(" + (index) * -20 + "%)";
  //   })
  //   two.addEventListener("click", function () {   index = index + 1;
  //     slider.style.transform = "translate(" + (index) * -20 + "%)";
  // })

  one.addEventListener("click", function () {
    if(index===0){
      index=div-1
      slider.style.transform = "translate(" + (index) * -20 + "%)";
    }
    else{
      index = index - 1;
      slider.style.transform = "translate(" + (index) * -20 + "%)";
    }
})

two.addEventListener("click", function () { 
  if(index===div-1){
    index=0;
  } else{
    index = index + 1;
    slider.style.transform = "translate(" + (index) * -20 + "%)";
  } 
})


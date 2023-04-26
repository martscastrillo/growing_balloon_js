"use strict";

 const balloon=document.querySelector(".js_balloon");

 const intro = document.getElementById('intro');
 
let widthBalloon = 100;
let heightBalloon =100;

  function changecolor() {
  intro.style.width = `${widthBalloon+40}px`;
  intro.style.height = `${heightBalloon+40}px`;
    if(widthBalloon === 220 && heightBalloon===220){
       widthBalloon = 100;
       heightBalloon = 100;
    }else if(widthBalloon >=100 && heightBalloon>=100){
       widthBalloon = widthBalloon +10;
       heightBalloon = heightBalloon +10;
    }

   if(balloon.classList.contains("colorRed")){
       balloon.classList.remove("colorRed");
       balloon.classList.add("colorGreen")
     }else if(balloon.classList.contains("colorGreen")){
       balloon.classList.remove("colorGreen");
       balloon.classList.add("colorYellow")
     }else if(balloon.classList.contains("colorYellow")){
       balloon.classList.remove("colorYellow");
       balloon.classList.add("colorRed")
      }

 }

 balloon.addEventListener("click", changecolor);
 balloon.addEventListener("mouse", changecolor);

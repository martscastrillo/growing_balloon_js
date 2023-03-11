"use strict";

 const balloon=document.querySelector(".js_balloon");

 const intro = document.getElementById('intro');
 let widthBalloon = 200;
  let heightBalloon =200;

  function changecolor() {
  let color ='#FF0000';
  intro.style.width = `${widthBalloon+40}px`;
  intro.style.height = `${heightBalloon+40}px`;
    if(widthBalloon === 420 && heightBalloon===420){
       widthBalloon = 200;
       heightBalloon = 200;
    }else if(widthBalloon >=200 && heightBalloon>=200){
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

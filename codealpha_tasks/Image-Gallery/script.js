const images = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

let current = 0;

function openLightbox(image){

lightbox.style.display="flex";

lightboxImg.src=image.src;

current=[...images].indexOf(image);

}

function closeLightbox(){

lightbox.style.display="none";

}

function changeImage(direction){

current += direction;

if(current<0){

current=images.length-1;

}

if(current>=images.length){

current=0;

}

lightboxImg.src=images[current].src;

}

document.addEventListener("keydown",function(e){

if(lightbox.style.display==="flex"){

if(e.key==="ArrowRight"){

changeImage(1);

}

if(e.key==="ArrowLeft"){

changeImage(-1);

}

if(e.key==="Escape"){

closeLightbox();

}

}

});

function filterSelection(category){

let cards=document.querySelectorAll(".image");

document.querySelectorAll(".filters button").forEach(btn=>btn.classList.remove("active"));

event.target.classList.add("active");

cards.forEach(card=>{

if(category==="all"){

card.style.display="block";

}

else if(card.classList.contains(category)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

}
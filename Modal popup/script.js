// Variables
const modal = document.querySelector(".modal"),
          btn = document.querySelector(".btn"),
          close = document.querySelector(".close");

btn.addEventListener("click" , openModal);
close.addEventListener("click" , closeModal);       
modal.addEventListener("click" , closeModal);                


// open modal
function openModal(e){
  modal.style.display= "block";
  e.preventDefault();
}

// close modal
function closeModal(){
  modal.style.display= "none";
  
}











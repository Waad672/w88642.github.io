let searchBtn = document.querySelector("#search-btn")
let searchForm = document.querySelector(".search-form")
let menuBar = document.querySelector("#menu-bar")

function showbar(){
    searchBtn.classList.toggle("fa-times")
    searchForm.classList.toggle("active")

}
function showmenu(){
    menuBar.classList.toggle(fa-times)
    Amenu.classList.toggle("active")
}

var swiper = new Swiper (".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay:{delay:2500},
    
    breakpoints:{
        640:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        },
}});

var mode =document.getElementById("mode");
mode.onclick =function change(){
    document.body.classList.toggle("dark-theme");}
    
var theme=document.getElementById("mode");
mode.onclick =function img(){
    document.body.classList.toggle("theme");
var backimage = 
document.getElementById('back-image');
if (backimage.src.match("image/building.jpg"))
{backimage.src="image/ai-.jpg"}
else{
    backimage.src="image/building.jpg"}}

    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }
    
    function blurFunc() {
      let parent = this.parentNode;
      if (this.value == "") {
        parent.classList.remove("focus");
      }
    }
    
    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });
    
    
$(document).ready(function(){
  $(".main-slider .owl-theme").owlCarousel({
    dots: true,
    loop: true,
    center: true,
    autoplay: true,
    animateOut: "fadeOut",
    autoplaySpeed: 7000,
    autoplayTimeout: 7000,
    items: 1,
  });
  
  $(".last-slider .owl-theme").owlCarousel({
    loop: true,
    dots: true,
    center: true,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    margin: 0,
    responsive: {
      168:{
        items: 1,
      },
      768:{
        items:3,
      },
      1920:{
        items: 3,
      }
    }
  })
  
  $("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
})

var imageContainer = document.querySelector("#top-image");
var image = imageContainer.querySelector("img");
var range = document.querySelector("#range-input");
var span = document.querySelector("#span-1");



range.oninput = function () {
  imageContainer.style.width = this.value + "%";
  if(this.value >= 86){
    span.style.zIndex = "-1";
    
  }
  else{
    span.style.zIndex = "1";
  }
};

function addFunc(id) {
  var element = document.getElementById(id);
  if(element.classList.contains("col") === false){
    element.classList.add("col");
  }
  else{
    element.classList.remove("col");
  }
}



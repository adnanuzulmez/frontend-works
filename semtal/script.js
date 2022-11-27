$(document).ready(function () {
  $(".main-slider .owl-theme").owlCarousel({
    loop: true,
    nav: false,
    center: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    onInitialized: counter,
    onChanged: counter,
    items: 1,
  });

  $(".owl-theme2").owlCarousel({
    loop: true,
    nav: false,
    center: true,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayTimeout: 5000,
    margin: 20,
    items: 1,
  });

  $(".slider-container-3 .owl-theme").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    center: true,
    0: {
      items: 1,
    },
    500: {
      items: 1,
    },
    1000: {
      items: 3,
    },
    margin: 0,
  });
  var owl = $(".owl-theme");
  var owl2 = $(".owl-theme2");
  owl2.owlCarousel();
  owl.owlCarousel();

  $(".next2").click(function () {
    owl2.trigger("next.owl.carousel");
  });
  $(".prev2").click(function () {
    owl2.trigger("prev.owl.carousel");
  });
  $(".next").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });
  function counter(event) {
    if (!event.namespace) {
      return;
    }
    var slides = event.relatedTarget;
    $(".main-slider-numbers").text(slides.relative(slides.current()) + 1);
  }
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.boxShadow =
      "0px 0.1px 21px 0.1px black";
    document.getElementById("navbar").style.opacity = "1";
    document.getElementById("navbar").style.transition = ".8s";
  } else {
    document.getElementById("navbar").style.top = "-130px";
    document.getElementById("navbar").style.boxShadow = "0px 0px 0px 0px black";
    document.getElementById("navbar").style.opacity = "0";
  }
}

function myFunc() {
  var x = document.getElementById("nav-mobile");
  if (x.style.display == "flex") {
    x.style.display = "none";
    x.style.transition = "1s";
  } else {
    x.style.display = "flex";
    x.style.transition = "1s";
  }
}

function myFunc2() {
  var x = document.getElementById("nav-mobile");
  var y = document.querySelectorAll(".mobile-navbar li a");
  if (x.style.display == "flex") {
    x.style.display = "none";
    for (var i = 0; i < y.length; i++) {
      y[i].style.fontSize = "0px";
      y[i].style.transition = "1s";
      y[i].style.padding = "0px";
    }
  } else {
    x.style.display = "flex";

    for (var i = 0; i < y.length; i++) {
      y[i].style.fontSize = "15px";
      y[i].style.transition = "1s";
      y[i].style.padding = "0px";
    }
  }
}


// Get the button
let mybutton = document.getElementById("myBtn");
    
// When the user scrolls down 1000px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Team Slider

       
$('#customers-teams').owlCarousel({
  loop: true,
  center: true,
  items: 6,
  margin: 0,
  autoplay: true,
  dots:true,
  autoplayTimeout: 2000,
  checkVisibility: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1170: {
      items: 3
    },
    1870: {
      items: 4
    },
    2570: {
      items: 5
    },
    3270: {
      items: 6
    }
  }
});

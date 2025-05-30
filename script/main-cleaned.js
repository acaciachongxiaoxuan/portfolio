
//typewriter effect on header
var i = 0;
var txt = 'Hi, I am Xiao Xuan.'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("headerTitle").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    
}

// Add an event listener to the document
document.addEventListener('click', function(event) {
    var x = document.getElementById("myTopnav");

    // Check if the clicked element is outside the navigation bar and not the icon
    if (!event.target.closest('.topnav') && !event.target.closest('.icon')) {
        x.className = "topnav"; // Remove the "responsive" class
    }
});

// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
}

// Add an event listener to the document
document.addEventListener('click', function(event) {
    var x = document.getElementById("myTopnav");

    // Check if the clicked element is outside the navigation bar and not the icon
    if (!event.target.closest('.topnav') && !event.target.closest('.icon')) {
        location.href = '#nav-closer'; // Change the URL to trigger the :target rule
    }
});

// Add click event listener to the icon
var icon = document.querySelector('.icon');
icon.addEventListener('click', function(event) {
    // Stop event propagation to prevent document click event from firing
    event.stopPropagation();
    toggleNav();
});

//slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
});
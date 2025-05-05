// document.addEventListener("DOMContentLoaded", function () {
//   setTimeout(function () {
//     const preloader = document.querySelector(".preloader");
//     if (preloader) {
//       preloader.style.display = "none";
//     }

    // Only apply nav styles on small screens (e.g., width < 768px)
    if (window.innerWidth < 769) {
      const nav = document.querySelector(".ms-navbar");
      const navIcon = document.querySelector(".ms-nav-icon");

      if (nav) nav.style.display = "block"; // or "flex" if needed
      if (navIcon) navIcon.style.display = "flex"; // or "block"
    }

//   }, 2000);
// });


function msbar(){
  var msNavbar = document.querySelector('.ms-navbar');
  msNavbar.style.right="0%";
  msNavbar.style.transition="right .5s ease "; 
  var msNavbar = document.querySelector('.ms-nav-icon');
  msNavbar.style.zIndex="0";


}
function msCross() {
  var msNavbar = document.querySelector('.ms-navbar');
  msNavbar.style.right = "-60%";

  var navIcon = document.querySelector('.ms-nav-icon');
  navIcon.style.transition = "right .5s ease"; 

  // Delay z-index change
  setTimeout(function () {
    navIcon.style.zIndex = "99999";
  }, 500); // 500ms to match transition
}

$(document).ready(function () {
  $(".info-icon i").click(function () {
    const target = $(this).data("target"); // e.g., "company-overview"
    toggleSection(target);
  });

  function slideToggleInfo(section, open) {
    const container = $(`.${section}`);
    const info = $(`.${section}-info`);
    const icon = $(`.info-icon-${section} .fa`);
    const heading = $(`.heading-${section}`); // e.g., .heading-company-overview

    if (open) {
      info.slideDown("slow");
      container.addClass("add-div-border");
      info.removeClass("div-border");
      icon.removeClass("fa-plus").addClass("fa-minus").addClass("icon-rotate");

      // Special condition
      if (container.hasClass("add-div-border")) {
        container.removeClass("add-div-border");
        info.addClass("div-border");
      }
    } else {
      info.slideUp("slow");
      container.removeClass("div-border");
      info.addClass("add-div-border");
      icon.removeClass("fa-minus").addClass("fa-plus").removeClass("icon-rotate");

      // Special condition
      if (info.hasClass("div-border")) {
        info.removeClass("div-border");
        container.addClass("add-div-border");
      }
    }
  }

  function toggleSection(section) {
    const sections = ["company-overview", "our-vision", "our-mission"];

    sections.forEach((sec) => {
      const info = $(`.${sec}-info`);
      const isTarget = sec === section;

      if (isTarget) {
        slideToggleInfo(sec, !info.is(":visible"));
      } else {
        slideToggleInfo(sec, false); // always close non-target sections
      }
    });
  }
});


$(".team-info-1").on("mouseenter", function() {
  const $overflow = $(this).find(".team-info-top-overflow");
  const $detail = $(this).find(".team-detail-div");

  $overflow.stop(true, true).animate({ height: "show", opacity: 1 }, 300);
  $detail.stop(true, true).animate({ height: "show", opacity: 1 }, 300);
});

$(".team-info-1").on("mouseleave", function() {
  const $overflow = $(this).find(".team-info-top-overflow");
  const $detail = $(this).find(".team-detail-div");

  $overflow.stop(true, true).animate({ height: "hide", opacity: 0 }, 300);
  $detail.stop(true, true).animate({ height: "hide", opacity: 0 }, 300);
});









// $(document).ready(function () {
//   const $track = $('.slider-track');
//   const $slides = $('.slide');
//   const visibleSlides = 4;
//   const slideWidth = $slides.outerWidth(true);
//   const totalSlides = $slides.length;
//   const totalPages = totalSlides; // Because we will clone slides

//   let currentIndex = 0;
//   let interval;

//   // Clone slides for infinite effect
//   $slides.slice(0, visibleSlides).clone().appendTo($track); // clone first 4 to the end
//   $slides.slice(-visibleSlides).clone().prependTo($track); // clone last 4 to the start

//   // Adjust track position to show real first slide
//   const startIndex = visibleSlides;
//   $track.css('transform', `translateX(-${slideWidth * startIndex}px)`);

//   currentIndex = startIndex;

//   function goToSlide(index) {
//     $track.css('transition', 'transform 0.5s ease-in-out');
//     $track.css('transform', `translateX(-${index * slideWidth}px)`);
//     currentIndex = index;
//   }

//   function nextSlide() {
//     goToSlide(++currentIndex);

//     // Reset position if at end clone
//     if (currentIndex === totalSlides + visibleSlides) {
//       setTimeout(() => {
//         $track.css('transition', 'none');
//         $track.css('transform', `translateX(-${slideWidth * visibleSlides}px)`);
//         currentIndex = visibleSlides;
//       }, 500); // must match transition time
//     }
//   }

//   function prevSlide() {
//     goToSlide(--currentIndex);

//     // Reset if at start clone
//     if (currentIndex === 0) {
//       setTimeout(() => {
//         $track.css('transition', 'none');
//         $track.css('transform', `translateX(-${slideWidth * totalSlides}px)`);
//         currentIndex = totalSlides;
//       }, 500);
//     }
//   }

//   $('.arrow.right').click(nextSlide);
//   $('.arrow.left').click(prevSlide);

//   function startAutoSlide() {
//     interval = setInterval(nextSlide, 2000);
//   }

//   function stopAutoSlide() {
//     clearInterval(interval);
//   }

//   $('.slider-container').hover(stopAutoSlide, startAutoSlide);

//   startAutoSlide();
// });





// $(document).ready(function () {
//   const $track = $('.our-team-info-1-div > div'); // This is the container that holds team-info-1 blocks
//   const $slides = $track.find('.team-info-1');
//   const visibleSlides = 4;
//   const slideWidth = $slides.outerWidth(true);
//   const totalSlides = $slides.length;
//   const totalPages = totalSlides;

//   let currentIndex = 0;
//   let interval;

//   // Clone slides for infinite effect
//   $slides.slice(0, visibleSlides).clone().appendTo($track);
//   $slides.slice(-visibleSlides).clone().prependTo($track);

//   // Adjust track position to show real first slide
//   const startIndex = visibleSlides;
//   $track.css('transform', `translateX(-${slideWidth * startIndex}px)`);
//   currentIndex = startIndex;

//   function goToSlide(index) {
//     $track.css('transition', 'transform 0.5s ease-in-out');
//     $track.css('transform', `translateX(-${index * slideWidth}px)`);
//     currentIndex = index;
//   }

//   function nextSlide() {
//     goToSlide(++currentIndex);
//     if (currentIndex === totalSlides + visibleSlides) {
//       setTimeout(() => {
//         $track.css('transition', 'none');
//         $track.css('transform', `translateX(-${slideWidth * visibleSlides}px)`);
//         currentIndex = visibleSlides;
//       }, 500);
//     }
//   }

//   function prevSlide() {
//     goToSlide(--currentIndex);
//     if (currentIndex === 0) {
//       setTimeout(() => {
//         $track.css('transition', 'none');
//         $track.css('transform', `translateX(-${slideWidth * totalSlides}px)`);
//         currentIndex = totalSlides;
//       }, 500);
//     }
//   }

//   // Update these selectors as needed to match your actual arrow elements
//   $('.arrow.right').click(nextSlide);
//   $('.arrow.left').click(prevSlide);

//   function startAutoSlide() {
//     interval = setInterval(nextSlide, 2000);
//   }

//   function stopAutoSlide() {
//     clearInterval(interval);
//   }

//   // Change this selector if you want hover effects over a specific parent
//   $('.our-team-info-1-div').hover(stopAutoSlide, startAutoSlide);

//   startAutoSlide();
// });




// $(document).ready(function () {
//   const $track = $('.team-info-1'); // This is the container that holds team-info-1 blocks
//   const $slides = $track.find('.team-info-1');
//   const visibleSlides = 4; // Number of visible slides
//   const slideWidth = $slides.outerWidth(true); // Get the width of each slide
//   const totalSlides = $slides.length; // Get the total number of slides

//   let currentIndex = 0;
//   let interval;

//   // Clone slides for infinite effect (add the first few slides to the end and the last few to the start)
//   $slides.slice(0, visibleSlides).clone().appendTo($track);
//   $slides.slice(-visibleSlides).clone().prependTo($track);

//   // Adjust track position to show the real first slide
//   const startIndex = visibleSlides;
//   $track.css('transform', `translateX(-${slideWidth * startIndex}px)`);

//   function goToSlide(index) {
//     $track.css('transition', 'transform 0.1s ease-in-out');
//     $track.css('transform', `translateX(-${index * slideWidth}px)`);
//     currentIndex = index;
//   }

//   function nextSlide() {
//     goToSlide(++currentIndex);
//     if (currentIndex === totalSlides + visibleSlides) {
//       setTimeout(() => {
//         $track.css('transition', 'none');
//         $track.css('transform', `translateX(-${slideWidth * visibleSlides}px)`);
//         currentIndex = visibleSlides;
//       }, 500);
//     }
//   }

//   function prevSlide() {
//     goToSlide(--currentIndex);
//     if (currentIndex === 0) {
//       setTimeout(() => {
//         $track.css('transition', 'none');
//         $track.css('transform', `translateX(-${slideWidth * totalSlides}px)`);
//         currentIndex = totalSlides;
//       }, 500);
//     }
//   }

//   // Add the arrow navigation functionality
//   $('.arrow.right').click(nextSlide);
//   $('.arrow.left').click(prevSlide);

//   // Auto slide functionality
//   function startAutoSlide() {
//     interval = setInterval(nextSlide, 2000);
//   }

//   function stopAutoSlide() {
//     clearInterval(interval);
//   }

//   // Start auto slide on hover out, stop on hover
//   $track.hover(stopAutoSlide, startAutoSlide);

//   // Start auto sliding
//   startAutoSlide();
// });






// $(document).ready(function () {
//   const $track = $('.slider-track');
//   const $slides = $track.find('.team-info-1');
//   const visibleSlides = 4;
//   const slideCount = $slides.length;
//   const slideWidth = $('.slider-container').width() / visibleSlides;

//   let currentIndex = 0;
//   let interval;
//   // Set fixed width to each slide
//   $slides.each(function () {
//     $(this).css('width', slideWidth + 'px');
//   });

//   // Clone slides for infinite loop
//   $track.append($slides.slice(0, visibleSlides).clone());
//   $track.prepend($slides.slice(-visibleSlides).clone());

//   let totalSlides = $track.children().length;

//   // Set initial position
//   let startIndex = visibleSlides;
//   $track.css('transform', `translateX(-${slideWidth * startIndex}px)`);
//   currentIndex = startIndex;

//   function goToSlide(index) {
//     $track.css('transition', 'transform 0.5s ease-in-out');
//     $track.css('transform', `translateX(-${slideWidth * index}px)`);
//   }

//   function nextSlide() {
//     currentIndex++;
//     goToSlide(currentIndex);
//     if (currentIndex >= totalSlides - visibleSlides) {
//       setTimeout(() => {
//         $track.css('transition', 'none');
//         currentIndex = visibleSlides;
//         $track.css('transform', `translateX(-${slideWidth * currentIndex}px)`);
//       }, 500);
//     }
//   }

//   function prevSlide() {
//     currentIndex--;
//     goToSlide(currentIndex);
//     if (currentIndex < visibleSlides) {
//       setTimeout(() => {
//         $track.css('transition', 'none');
//         currentIndex = totalSlides - visibleSlides * 2;
//         $track.css('transform', `translateX(-${slideWidth * currentIndex}px)`);
//       }, 500);
//     }
//   }

//   $('.arrow.right').click(nextSlide);
//   $('.arrow.left').click(prevSlide);

//   function startAutoSlide() {
//     interval = setInterval(nextSlide, 1500);
//   }

//   function stopAutoSlide() {
//     clearInterval(interval);
//   }

//   $('.slider-container').hover(stopAutoSlide, startAutoSlide);

//   startAutoSlide();
// });








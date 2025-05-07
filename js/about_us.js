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
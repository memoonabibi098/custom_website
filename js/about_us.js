// $(document).ready(function () {
//     $(".info-icon-company-overview i").click(function () {
//       toggleCompanyOverview();
//     });
  
//     function toggleCompanyOverview() {
//       // Slide toggle the info section
//       $(".company-overview-info").slideToggle("slow");
  
//       // Toggle border class between the two sections
//       if ($(".company-overview").hasClass("div-border")) {
//         $(".company-overview").removeClass("div-border");
//         $(".company-overview-info").addClass("div-border");
//       } else {
//         $(".company-overview").addClass("div-border");
//         $(".company-overview-info").removeClass("div-border");
//       }
  
//       // Toggle icons
//       $(".info-icon-company-overview .fa").toggleClass("fa-plus fa-minus");
//     }
//   });
  
//   $(document).ready(function () {
//     $(".info-icon-our-vision i").click(function () {
//       toggleCompanyOverview();
//     });
  
//     function toggleCompanyOverview() {
//       // Slide toggle the info section
//       $(".our-vision-info").slideToggle("slow");
  
//       // Toggle border class between the two sections
//       if ($(".our-vision").hasClass("div-border")) {
//         $(".our-vision").removeClass("div-border");
//         $(".our-vision-info").addClass("div-border");
//       } else {
//         $(".our-vision").addClass("div-border");
//         $(".our-vision-info").removeClass("div-border");
//       }
  
//       // Toggle icons
//       $(".info-icon-our-vision .fa").toggleClass("fa-plus fa-minus");
//     }
//   });
//   $(document).ready(function () {
//     $(".info-icon-our-mission i").click(function () {
//       toggleCompanyOverview();
//     });
  
//     function toggleCompanyOverview() {
//       // Slide toggle the info section
//       $(".our-mission-info").slideToggle("slow");
  
//       // Toggle border class between the two sections
//       if ($(".our-mission").hasClass("div-border")) {
//         $(".our-mission").removeClass("div-border");
//         $(".our-mission-info").addClass("div-border");
//       } else {
//         $(".our-mission").addClass("div-border");
//         $(".our-mission-info").removeClass("div-border");
//       }
  
//       // Toggle icons
//       $(".info-icon-our-mission .fa").toggleClass("fa-plus fa-minus");
//     }
//   });
  




// $(document).ready(function () {
//   $(".info-icon i").click(function () {
//     const target = $(this).data("target"); // get the section key like "company-overview"
//     toggleSection(target);
//   });

//   function toggleSection(section) {
//     const sections = ["company-overview", "our-vision", "our-mission"];

//     sections.forEach((sec) => {
//       const container = $(`.${sec}`);
//       const info = $(`.${sec}-info`);
//       const icon = $(`.info-icon-${sec} .fa`);

//       if (sec === section) {
//         if (info.is(":visible")) {
//           info.slideUp("slow");
//           // Swap div-border back
//           container.removeClass("add-div-border");
//           info.addClass("div-border");
//           icon.removeClass("fa-minus").addClass("fa-plus");
//         } else {
//           info.slideDown("slow");
//           // Swap div-border
//           container.addClass("add-div-border");
//           info.removeClass("div-border");
//           icon.removeClass("fa-plus").addClass("fa-minus");
//         }
//       } else {
//         info.slideUp("slow");
//         container.removeClass("div-border");
//         info.addClass("add-div-border");
//         icon.removeClass("fa-minus").addClass("fa-plus");
//       }
//     });
//   }
// });



$(document).ready(function () {
    $(".info-icon i").click(function () {
      const target = $(this).data("target"); // e.g., "company-overview"
      toggleSection(target);
    });
  
    function slideToggleInfo(section, open) {
      const container = $(`.${section}`);
      const info = $(`.${section}-info`);
      const icon = $(`.info-icon-${section} .fa`);
  
      if (open) {
        info.slideDown("slow");
        container.addClass("add-div-border");
        info.removeClass("div-border");
        icon.removeClass("fa-plus").addClass("fa-minus");
  
        // Special condition: if .div-border is on the container, remove it from info and vice versa
        if (container.hasClass("add-div-border")) {
          container.removeClass("add-div-border");
          info.addClass("div-border");
        }
      } else {
        info.slideUp("slow");
        container.removeClass("div-border");
        info.addClass("add-div-border");
        icon.removeClass("fa-minus").addClass("fa-plus");
  
        // Special condition: if .div-border is on info, remove from container
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
  

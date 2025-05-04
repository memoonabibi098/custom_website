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


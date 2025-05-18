if (window.innerWidth < 769) {
  const nav = document.querySelector(".ms-navbar");
  const navIcon = document.querySelector(".ms-nav-icon");

  if (nav) nav.style.display = "block"; // or "flex" if needed
  if (navIcon) navIcon.style.display = "flex"; // or "block"
}
function msbar() {
  var msNavbar = document.querySelector(".ms-navbar");
  msNavbar.style.right = "0%";
  msNavbar.style.transition = "right .5s ease ";
  var msNavbar = document.querySelector(".ms-nav-icon");
  msNavbar.style.zIndex = "0";
}
function msCross() {
  var msNavbar = document.querySelector(".ms-navbar");
  msNavbar.style.right = "-60%";

  var navIcon = document.querySelector(".ms-nav-icon");
  navIcon.style.transition = "right .5s ease";

  // Delay z-index change
  setTimeout(function () {
    navIcon.style.zIndex = "99999";
  }, 500); // 500ms to match transition
}

$(document).ready(function () {
  // When nav icon is clicked
  $(".ms-nav-icon").on("click", function () {
    $(".sm-nav-main-div").css("z-index", "99999");
    $(".sm-nav-main-div").css("backdropFilter", "blur(3px)");
    $(".sm-nav-main-div").css("background-color", " #2f345b54");
    msbar(); // Call the existing function
  });

  // Override the msCross function with jQuery addition
  window.msCross = function () {
    $(".ms-navbar").css("right", "-60%");
    $(".ms-nav-icon").css("transition", "right .5s ease");

    // Delay resetting z-index of parent after closing
    setTimeout(function () {
      $(".sm-nav-main-div").css("z-index", "0");
      $(".ms-nav-icon").css("z-index", "99999");
      $(".sm-nav-main-div").css("backdropFilter", "");
      $(".sm-nav-main-div").css("background-color", "");
    }, 500); // Match the transition time
  };
});

$(document).ready(function () {
  const detailDivs = $(".services-detail-div");
  const visaDivs = $(".business-visa-div");

  function resetVisaStyles() {
    visaDivs.css({
      "background-color": "",
      "box-shadow": "",
    });

    visaDivs.find(".business-visa-icon-div img").each(function () {
      const src = $(this).attr("src").replace("-light-golden", "-blue");
      $(this).attr("src", src);
    });

    visaDivs.find(".business-visa-name-div").css("color", "#c59c3d");
    visaDivs.find(".business-visa-view-detail-div").css("color", "#c59c3d");

    visaDivs.find(".business-visa-view-detail-div img").each(function () {
      const src = $(this).attr("src").replace("-light-golden", "-blue");
      $(this).attr("src", src);
    });

    detailDivs.removeClass("active zoom-in").addClass("zoom-out").hide();
  }

  visaDivs.each(function (index) {
    $(this).on("mouseenter", function () {
      resetVisaStyles();

      $(this).css({
        "background-color": "#2f345b",
        "box-shadow": "0 0 4px 1px #f2cd74",
      });

      $(this)
        .find(".business-visa-icon-div img")
        .each(function () {
          const src = $(this).attr("src").replace("-blue", "-light-golden");
          $(this).attr("src", src);
        });

      $(this).find(".business-visa-name-div").css("color", "white");
      $(this).find(".business-visa-view-detail-div").css("color", "#f2cd74");

      $(this)
        .find(".business-visa-view-detail-div img")
        .each(function () {
          const src = $(this).attr("src").replace("-blue", "-light-golden");
          $(this).attr("src", src);
        });

      $(this).addClass("zoom-in").removeClass("zoom-out");

      const currentDetail = detailDivs.eq(index);
      currentDetail.removeClass("zoom-out").addClass("zoom-in active").show();
    });

    $(this).on("mouseleave", function () {
      $(this).removeClass("zoom-in").addClass("zoom-out");
      resetVisaStyles();
    });
  });
});

$(document).ready(function () {
  $(".more-services-card-1").on("mouseenter", function () {
    $(this).css({
      transform: "scale(1.05)",
      "box-shadow": "0 0 10px rgba(242, 204, 116, 0.63)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    });
  });

  $(".more-services-card-1").on("mouseleave", function () {
    $(this).css({
      transform: "scale(1)",
      "box-shadow": "none",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    });
  });
});

function setCardWidths() {
  let screenWidth = $(window).width();
  let cardsPerRow;

  if (screenWidth >= 1440) {
    // Extra large laptop
    cardsPerRow = 4;
  } else if (screenWidth >= 981) {
    // Large laptop
    cardsPerRow = 4;
  } else if (screenWidth >= 769) {
    // large tablet
    cardsPerRow = 3;
  } else if (screenWidth <= 768) {
    // smart Phone
    cardsPerRow = 2;
  } else {
    // Very small screen fallback
    cardsPerRow = 1;
  }

  let cardWidthPercent = 100 / cardsPerRow - 4; // 4% total margin
  $(".more-services-card-1").css({
    width: cardWidthPercent + "%",
  });
}

function handleResponsiveCards() {
  let screenWidth = $(window).width();
  let visibleCount;

  if (screenWidth >= 1401) {
    visibleCount = 8; // 4 per row → 2 rows
  } else if (screenWidth >= 769) {
    visibleCount = 6; // 3 per row → 2 rows
  } else {
    visibleCount = 4; // 2 per row → 2 rows
  }

  // Hide all cards first
  $(".more-services-card-1").hide().removeClass("extra-card");

  // Show only first visibleCount cards
  $(".more-services-card-1").each(function (index) {
    if (index < visibleCount) {
      $(this).show();
    } else {
      $(this).addClass("extra-card");
    }
  });

  // Hide/show buttons appropriately
  if ($(".extra-card").length > 0) {
    $(".view-more-btn").css("display", "flex");
    $(".less-more-btn").hide();
  } else {
    $(".view-more-btn, .less-more-btn").hide();
  }
}

function setupCardButtons() {
  $(document).ready(function () {
    // View More Click
    $(".view-more-btn button").click(function () {
      $(".extra-card").slideDown(500);
      $(".view-more-btn").hide();
      $(".less-more-btn").css("display", "flex");
    });

    // Less More Click
    $(".less-more-btn button").click(function () {
      $(".extra-card").slideUp(500);
      $(".less-more-btn").hide();
      $(".view-more-btn").css("display", "flex");
    });
  });
}

// Initial run
$(document).ready(function () {
  handleResponsiveCards();
  setupCardButtons();

  // Recalculate on resize
  $(window).resize(function () {
    handleResponsiveCards();
  });
});

$(document).ready(function () {
  $(".guidance-at-every-step-card-1").mouseenter(function () {
    $(this)
      .find(".guidance-at-every-step-card-1-icon img")
      .stop(true, true)
      .slideDown();
    $(this)
      .find(".guidance-at-every-step-card-1-detail")
      .stop(true, true)
      .slideDown();
    $(this).css("background-color", "#c59c3d");
    $(this)
      .find(".guidance-at-every-step-card-1-heading")
      .css("color", "white");
  });

  $(".guidance-at-every-step-card-1").mouseleave(function () {
    $(this)
      .find(".guidance-at-every-step-card-1-icon img")
      .stop(true, true)
      .slideUp();
    $(this)
      .find(".guidance-at-every-step-card-1-detail")
      .stop(true, true)
      .slideUp();
    $(this).css("background-color", "#f2cd74");
    $(this)
      .find(".guidance-at-every-step-card-1-heading")
      .css("color", "#2f345b");
  });
});




// small screen query







$(document).ready(function () {
  $(".business-visa-div-sm").click(function () {
    const parentBox = $(this).closest(".business-visa-heading-detail-box-sm");
    const detailDiv = parentBox.find(".services-detail-div-sm");
    const iconImg = $(this).find(".business-visa-icon-div-sm img");
    const nameDiv = $(this).find(".business-visa-name-div-sm");
    const viewDetailDiv = $(this).find(".business-visa-view-detail-div-sm");

    // Close others if any is open
    $(".business-visa-heading-detail-box-sm").not(parentBox).each(function () {
      const otherDetail = $(this).find(".services-detail-div-sm");
      if (otherDetail.hasClass("active")) {
        otherDetail.slideUp(300).removeClass("active");
        $(this).css("height", "5rem");
        $(this).find(".business-visa-div-sm").css({
          height: "80%",
          backgroundColor: "transparent",
          boxShadow: "none",
        });
        $(this).find(".business-visa-name-div-sm").css("color", "#c59c3d");
        $(this).find(".business-visa-view-detail-div-sm").css("color", "#c59c3d");

        // Revert icon
        const originalIcon = $(this).find(".business-visa-div-sm img").attr("src");
        if (originalIcon.includes("-blue")) {
          const normalIcon = originalIcon.replace("-blue", "-blue");
          $(this).find(".business-visa-div-sm img").attr("src", normalIcon);
        }
      }
    });

    // Toggle current
    if (detailDiv.hasClass("active")) {
      detailDiv.slideUp(300).removeClass("active");
      parentBox.css("height", "5rem");
      $(this).css({
        height: "80%",
        backgroundColor: "transparent",
        boxShadow: "none",
      });
      nameDiv.css("color", "#c59c3d");
      viewDetailDiv.css("color", "#c59c3d");
    } else {
      detailDiv.slideDown(300).addClass("active");
      parentBox.css("height", "30rem");
      $(this).css({
        height: "15%",
        backgroundColor: "#2f345b",
        boxShadow: "0 0 5px 1px #f2cd74",
      });
      nameDiv.css("color", "white");
      viewDetailDiv.css("color", "white");

      // Replace icon
      let currentSrc = iconImg.attr("src");
      if (currentSrc.includes("-blue")) {
        let goldenSrc = currentSrc.replace("-blue", "-light-golden");
        iconImg.attr("src", goldenSrc);
      }
    }
  });
});
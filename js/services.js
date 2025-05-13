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
  $(".featured-services-detail-card").on("mouseenter", function () {
    $(this).css({
      transform: "scale(1.05)",
      "box-shadow": "0 0 10px rgba(242, 204, 116, 0.63)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    });
  });

  $(".featured-services-detail-card").on("mouseleave", function () {
    $(this).css({
      transform: "scale(1)",
      "box-shadow": "none",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    });
  });
});

$(document).ready(function () {
  $(".btn-view-more").click(function () {
    // Show extra cards
    $(".show-1, .show-2").show();

    // Adjust heights
    $(".featured-services-div").css("height", "150rem");
    $(".featured-services-heading-div").css("height", "5%");
    $(".featured-services-heading-p").css("height", "5%");
    $(".featured-services-details-div-1").css("height", "22%");
    $(".featured-services-details-div-2").css("height", "22%");

    // Toggle buttons
    $(".btn-view-more").css("display", "none");
    $(".btn-view-less").css("display", "flex");
  });

  $(".btn-view-less").click(function () {
    // Hide extra cards
    $(".show-1, .show-2").hide();

    // Reset heights
    $(".featured-services-div").css("height", "75rem");
    $(".featured-services-heading-div").css("height", "6%");
    $(".featured-services-heading-p").css("height", "6%");
    $(".featured-services-details-div-1").css("height", "38%");
    $(".featured-services-details-div-2").css("height", "38%");

    // Toggle buttons
    $(".btn-view-more").css("display", "flex");
    $(".btn-view-less").css("display", "none");
  });
});









let resetTimer;

function resetView() {
  // Step 1: Shrink container
  $('.expert-visa-detail-box-div').stop().animate({ height: '5rem' }, 500);

  // Step 2: Center align-items
  $('.expert-visa-detail-box').css('align-items', 'center');

  // Step 3: Hide content and fade out children smoothly
  $('.guidance-at-every-step-main-div-1, .guidance-at-every-step-main-div-2, .guidance-at-every-step-main-div-3').fadeOut(500);

  // Step 4: Remove visibility class (fades out inner elements)
  $('.guidance-at-every-step-img-div-1, .guidance-at-every-step-img-div-2, .guidance-at-every-step-img-div-3, .guidance-at-every-step-para-div-1, .guidance-at-every-step-para-div-2, .guidance-at-every-step-para-div-3')
    .removeClass('visible');

  // Step 5: Restore all main headings
  $('.guidance-at-every-step-main-heading-1, .guidance-at-every-step-main-heading-2, .guidance-at-every-step-main-heading-3')
    .css('display', 'flex')
    .stop()
    .animate({ height: '80%' }, 500);
}

function showContent(index) {
  clearTimeout(resetTimer);

  // Step 1: Expand container
  $('.expert-visa-detail-box-div').stop().animate({ height: '35rem' }, 500);

  // Step 2: Align content to top
  $('.expert-visa-detail-box').css('align-items', 'flex-start');

  // Step 3: Hide the selected heading and shrink others
  $(`.guidance-at-every-step-main-heading-${index}`).hide();
  [1, 2, 3].filter(i => i !== index).forEach(i => {
    $(`.guidance-at-every-step-main-heading-${i}`).stop().animate({ height: '20%' }, 500);
  });

  // Step 4: Show main content div
  const mainDiv = $(`.guidance-at-every-step-main-div-${index}`);
  mainDiv.css('display', 'flex').hide().fadeIn(500, function () {
    setTimeout(() => {
      // Step 5: Fade in img and para
      $(`.guidance-at-every-step-img-div-${index}, .guidance-at-every-step-para-div-${index}`).addClass('visible');
    }, 600);
  });
}

$(document).ready(function () {
  // Bind hover events
  [1, 2, 3].forEach(index => {
    $(`.guidance-at-every-step-main-heading-${index}`).mouseenter(() => showContent(index));

    $(`.guidance-at-every-step-main-div-${index}`).hover(
      () => clearTimeout(resetTimer),
      () => resetTimer = setTimeout(resetView, 300)
    );
  });
});
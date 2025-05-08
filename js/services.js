if (window.innerWidth < 769) {
    const nav = document.querySelector(".ms-navbar");
    const navIcon = document.querySelector(".ms-nav-icon");

    if (nav) nav.style.display = "block"; // or "flex" if needed
    if (navIcon) navIcon.style.display = "flex"; // or "block"
}
function msbar() {
    var msNavbar = document.querySelector('.ms-navbar');
    msNavbar.style.right = "0%";
    msNavbar.style.transition = "right .5s ease ";
    var msNavbar = document.querySelector('.ms-nav-icon');
    msNavbar.style.zIndex = "0";
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
                "box-shadow": "0 0 4px 1px #f2cd74"
            });

            $(this).find(".business-visa-icon-div img").each(function () {
                const src = $(this).attr("src").replace("-blue", "-light-golden");
                $(this).attr("src", src);
            });

            $(this).find(".business-visa-name-div").css("color", "white");
            $(this).find(".business-visa-view-detail-div").css("color", "#f2cd74");

            $(this).find(".business-visa-view-detail-div img").each(function () {
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


$(document).ready(function() {
    $('.featured-services-detail-card').on('mouseenter', function() {
      $(this).css({
        'transform': 'scale(1.05)',
        'box-shadow': '0 0 10px rgba(242, 204, 116, 0.63)',
        'transition': 'transform 0.3s ease, box-shadow 0.3s ease'
      });
    });
  
    $('.featured-services-detail-card').on('mouseleave', function() {
      $(this).css({
        'transform': 'scale(1)',
        'box-shadow': 'none',
        'transition': 'transform 0.3s ease, box-shadow 0.3s ease'
      });
    });
  });








  $(document).ready(function () {
    $('.btn-view-more').click(function () {
      // Show extra cards
      $('.show-1, .show-2').show();

      // Adjust heights
      $('.featured-services-div').css('height', '150rem');
      $('.featured-services-heading-div').css('height', '5%');
      $('.featured-services-heading-p').css('height', '5%');
      $('.featured-services-details-div-1').css('height', '22%');
      $('.featured-services-details-div-2').css('height', '22%');

      // Toggle buttons
      $('.btn-view-more').css('display', 'none');
      $('.btn-view-less').css('display', 'flex');
    });

    $('.btn-view-less').click(function () {
      // Hide extra cards
      $('.show-1, .show-2').hide();

      // Reset heights
      $('.featured-services-div').css('height', '75rem');
      $('.featured-services-heading-div').css('height', '6%');
      $('.featured-services-heading-p').css('height', '6%');
      $('.featured-services-details-div-1').css('height', '38%');
      $('.featured-services-details-div-2').css('height', '38%');

      // Toggle buttons
      $('.btn-view-more').css('display', 'flex');
      $('.btn-view-less').css('display', 'none');
    });
  });
  





  
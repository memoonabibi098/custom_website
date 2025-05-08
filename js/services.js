if (window.innerWidth < 769) {
    const nav = document.querySelector(".ms-navbar");
    const navIcon = document.querySelector(".ms-nav-icon");

    if (nav) nav.style.display = "block"; // or "flex" if needed
    if (navIcon) navIcon.style.display = "flex"; // or "block"
  }
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
    const detailDivs = $(".services-detail-div");
    const visaDivs = $(".business-visa-div");

    // Reset all visa styles
    function resetVisaStyles() {
        visaDivs.css({
            "background-color": "",
            "box-shadow": "",
            "transform": "translateX(0)",
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
    }

    // Activate first visa
    function activateFirstVisa() {
        detailDivs.removeClass("active").hide();
        detailDivs.eq(0).addClass("active").show();

        visaDivs.eq(0).css({
            "background-color": "#2f345b",
            "box-shadow": "0 4px 20px rgba(0, 0, 0, 0.2)"
        });

        visaDivs.eq(0).find(".business-visa-icon-div img").each(function () {
            const src = $(this).attr("src").replace("-blue", "-light-golden");
            $(this).attr("src", src);
        });

        visaDivs.eq(0).find(".business-visa-name-div").css("color", "white");
        visaDivs.eq(0).find(".business-visa-view-detail-div").css("color", "#f2cd74");

        visaDivs.eq(0).find(".business-visa-view-detail-div img").each(function () {
            const src = $(this).attr("src").replace("-blue", "-light-golden");
            $(this).attr("src", src);
        });
    }

    // Initial activation
    activateFirstVisa();

    // Hover logic
    visaDivs.each(function (index) {
        $(this).on("mouseenter", function () {
            // Animate left slide
            $(this).css("transform", "translateX(-5px)");

            // Show detail with fade
            detailDivs.removeClass("active").hide();
            detailDivs.eq(index).addClass("active").fadeIn(300);

            // Reset all and apply to current
            resetVisaStyles();
            $(this).css({
                "background-color": "#2f345b",
                "box-shadow": "0 0 5px #f2cd74"
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

            $(this).addClass("pulsing");
            setTimeout(() => $(this).removeClass("pulsing"), 1000);

        });

        $(this).on("mouseleave", function () {
            activateFirstVisa();
        });
    });
});

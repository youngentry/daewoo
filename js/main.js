$(function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    slidesToShow: 3,
    pauseOnHover: false,
  });

  $(".nav_right i").on("click", function () {
    $(".nav_right input").toggle("on");
  });

  $(".toTop").on("click", function () {
    $("html").animate({ scrollTop: 0 }, 200);
  });

  $(window).on("scroll", function () {
    var screenHeight = $(window).scrollTop();
    var btn = $(".toTop");
    screenHeight > 700 ? btn.fadeIn(300) : btn.fadeOut(300);

    if (screenHeight >= 600 && screenHeight < 1200) {
      $(".content01 li").addClass("on");
    }

    if (screenHeight >= 1300 && screenHeight < 1700) {
      $(".content_box01").addClass("on");
    }
    if (screenHeight >= 1700 && screenHeight < 2200) {
      $(".content_box02").addClass("on");
    }
    if (screenHeight >= 2100 && screenHeight < 2500) {
      $(".content_box03").addClass("on");
    }
    if (screenHeight >= 2600 && screenHeight < 3300) {
      $(".content_box04").addClass("on");
    }
  });
});

$(function () {
  $(".slider").slick({
    centerMode: true,
    slidesToShow: 3,
  });

  $(".toTop").on("click", function () {
    $("html").animate({ scrollTop: 0 }, 200);
  });

  $(window).on("scroll", function () {
    var screenHeight = $(window).scrollTop();
    var btn = $(".toTop");
    screenHeight > 700 ? btn.fadeIn(300) : btn.fadeOut(300);
  });
});

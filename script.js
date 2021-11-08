$(document).ready(function () {
    $(window).scroll(function () {
      if (this.scrollY > 20) {
        $("header").addClass("sticky");
        $(".goTop").fadeIn();
      } else {
        $("header").removeClass("sticky");
        $(".goTop").fadeOut();
      }
    });
  
    $(".goTop").click(function () {
      scroll(0, 0);
    });
  
    $(".menu-toggler").click(function () {
      $(this).toggleClass("active");
      $(".navbar-menu").toggleClass("active");
    });
  });
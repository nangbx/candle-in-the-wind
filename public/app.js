$(document).ready(function () {
  console.log("Run");
  $(".image-slider").slick({
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    dots: true,
    prevArrow:
      "<button type='button' class='custom slick-prev pull-left'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='custom slick-next pull-right'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  });
});

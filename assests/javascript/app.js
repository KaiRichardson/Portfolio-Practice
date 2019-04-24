$("#div_2").slideUp();
$("#div_3").slideUp();
$("#div_4").slideUp();

$("#home_btn").on("mousedown", function () {
  $("#div_2").slideUp();
  $("#div_3").slideUp();
  $("#div_4").slideUp();
});

$("#about_btn").on("mousedown", function () {
  $("#div_3").slideUp();
  $("#div_4").slideUp();
  
  $("#div_2").slideDown("fast");
});

$("#portfolio_btn").on("mousedown", function () {
  $("#div_2").slideUp();
  $("#div_4").slideUp();
  
  $("#div_3").slideDown("fast");
});

$("#contact_btn").on("mousedown", function () {
  $("#div_3").slideUp();
  $("#div_2").slideUp();
  
  $("#div_4").slideDown("fast");
});


var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("my_nav").style.top = "0";
  } else {
    document.getElementById("my_nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

function navResponse() {
  var x = document.getElementById("my_nav");
  if (x.className === "top_nav") {
    x.className += " responsive";
  } else {
    x.className = "top_nav";
  }
}

//animate scroll when a button in clicked
$(".scrollBtn").on("mouseup", function () {
  navResponse();
  $('html,body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  },
    'slow');
});

$("#my_face").on("click", function () {
  if ($("#my_face").attr("clicked") != "true") {

    $("#my_face").attr("src", "./assests/images/my-face-forward-sq.png");

    $("#tt_k").animate({
      right: '+=100',
      bottom: '+=100'
    }, 2000);

    $("#tt_r").animate({
      left: '+=100',
      top: '+=100'
    }, 2000);

    $("#my_face").attr("clicked", "true")

  } else {

    $("#my_face").attr("src", "./assests/images/my-face-smile-sq.png");

    $("#tt_k").animate({
      right: '-=100',
      bottom: '-=100'
    }, 2000);

    $("#tt_r").animate({
      left: '-=100',
      top: '-=100'
    }, 2000);

    $("#my_face").attr("clicked", "false")
  }
});

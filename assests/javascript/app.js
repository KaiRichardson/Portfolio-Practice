var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

//animate scroll when a button in clicked
$(".scrollBtn").on("mouseup", function () {
  $('html,body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  },
    'slow');
});

$("#my_face").mouseenter(function () {
  $(this).attr("src", "./assests/images/my-face-forward-sq.png");
});

$("#my_face").mouseleave(function () {
  $(this).attr("src", "./assests/images/my-face-smile-sq.png");
});

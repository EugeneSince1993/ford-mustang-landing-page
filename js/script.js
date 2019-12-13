// The Lightbox Initialization
$(function () {
  const $gallery = $('.gallery a').simpleLightbox();
});
// The "Animate On Scroll" Initialization
AOS.init({
  offset: 270,
  duration: 1500
});
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
/* Mobile Navigation - Start */
function myFunction () {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
/* Mobile Navigation - End */
/* Fade in element on scroll - Start */
$(window).scroll(function() {
  let scrollTop = $(this).scrollTop();
  $('.hidden').css({
    opacity: function() {
      let elementHeight = $(this).height();
      return 1 - (elementHeight - scrollTop) / elementHeight;
    }
  });
});
/* Fade in element on scroll - End */
// Introduction text - fade in
$(document).ready(
  function () {
    $('div#introduction').fadeIn(3000);
  }
);

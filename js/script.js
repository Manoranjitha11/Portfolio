// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight, myVar;

function loading () {
  $(".se-pre-con").fadeOut("slow");;
}
$(document).ready(function(){

navbarHeight = $('#home-top').outerHeight();
setTimeout(loading, 1000);
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  5000);
$("#slideshow1 > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow1 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow1');
},  6000);
})

$(window).scroll(function(event){
console.log('scroll event');
didScroll = true;
});

setInterval(function() {
if (didScroll) {
hasScrolled();
didScroll = false;
}
}, 250);

function myBG() {
  document.getElementById('home-top').style.background = '#E0EBE8';

}
function hasScrolled() {
var st = $(this).scrollTop();
// Make sure they scroll more than delta
if(Math.abs(lastScrollTop - st) <= delta)
return;
// If they scrolled down and are past the navbar, add class .nav-up.
// This is necessary so you never see what is "behind" the navbar.
if (st > lastScrollTop && st > navbarHeight){
// Scroll Down
$('#home-top').removeClass('nav-down').addClass('nav-up');
clearTimeout(myVar);

} else {
// Scroll Up
if(st + $(window).height() < $(document).height()) {
$('#home-top').removeClass('nav-up').addClass('nav-down');
document.getElementById('home-top').style.background = '#fff';
myVar = setTimeout(myBG, 2000);

}
}
lastScrollTop = st;
}
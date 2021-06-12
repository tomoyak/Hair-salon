const targetElement = document.querySelectorAll(".animationTarget");
document.addEventListener("scroll", function() {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i].
    getBoundingClientRect().top + targetElement[i].clientHeight * .6

    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("ani1");
    }
  }
})

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("menuButton").addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementById("nav").classList.toggle("active");
  })
})

var element1 = document.getElementById('home');
    var rect1 = element1.getBoundingClientRect();
    var position1 = rect1.top;

function scrollTo1() {
  scrollTo(0, position1);
 }
var element2 = document.getElementById('about');
    var rect2 = element2.getBoundingClientRect();
    var position2 = rect2.top;

function scrollTo2() {
  scrollTo(0, position2);
 }
var element3 = document.getElementById('menu');
    var rect3 = element3.getBoundingClientRect();
    var position3 = rect3.top;

function scrollTo3() {
  scrollTo(0, position3);
 }
var element4 = document.getElementById('stylist');
    var rect4 = element4.getBoundingClientRect();
    var position4 = rect4.top;

function scrollTo4() {
  scrollTo(0, position4);
 }
var element5 = document.getElementById('access');
    var rect5 = element5.getBoundingClientRect();
    var position5 = rect5.top;

function scrollTo5() {
  scrollTo(0, position5);
 }
var element6 = document.getElementById('sns');
    var rect6 = element6.getBoundingClientRect();
    var position6 = rect6.top;

function scrollTo6() {
  scrollTo(0, position6);
 }
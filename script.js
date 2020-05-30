function smoothScroll(target, duration) {
  console.log("enterd function");
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var bigProjects = document.querySelector(".big-p");
var smallProjects = document.querySelector(".small-p");
var cssDesign = document.querySelector(".css-d");
var javaScript = document.querySelector(".java-s");

bigProjects.addEventListener("click", function () {
  smoothScroll(".big-projects", 2000);
  console.log("enterd event");
});
smallProjects.addEventListener("click", function () {
  smoothScroll(".small-projects", 2000);
});
cssDesign.addEventListener("click", function () {
  smoothScroll(".css-design", 2000);
});
javaScript.addEventListener("click", function () {
  smoothScroll(".javascript", 2000);
});

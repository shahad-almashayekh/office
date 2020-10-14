// make animation on big menu
$(document).ready(function() {

    var active1 = false;
    var active2 = false;
    var active3 = false;
    var active4 = false;
  
      $('.parent2').on('mousedown touchstart', function() {
      
      if (!active1) $(this).find('.test1').css({ 'transform': 'translate(0px,115px)'});
      else $(this).find('.test1').css({ 'transform': 'none'}); 
       if (!active2) $(this).find('.test2').css({'transform': 'translate(50px,95px)'});
      else $(this).find('.test2').css({ 'transform': 'none'});
        if (!active3) $(this).find('.test3').css({ 'transform': 'translate(95px,50px)'});
      else $(this).find('.test3').css({ 'transform': 'none'});
        if (!active4) $(this).find('.test4').css({ 'transform': 'translate(115px,0px)'});
      else $(this).find('.test4').css({ 'transform': 'none'});
      active1 = !active1;
      active2 = !active2;
      active3 = !active3;
      active4 = !active4;
        
      });
  });

  // make tooltip for menu
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


  // make scroll effect to page 


  var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');}
       else {
        element.classList.remove('is-visible');
       }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
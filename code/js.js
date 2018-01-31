
function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).scroll(function () {
  next_black = null;
  begin_index = 0;
  images = document.querySelectorAll('video[poster],img[srcset]')

  for (var i = 0; i < images.length; i++) {
    if (isScrolledIntoView(images[i])) {
      begin_index = i;
      break;
    }
  }
  
  for (var i = begin_index; i < images.length; i++) {
    if (!images[i].classList.contains("color")) {
      next_black = images[i];
      break;
    }
  }
  if (isScrolledIntoView(next_black)) {
    next_black.classList.add("color");
  }
  //scroll_loc = $(window).scrollTop();
});



let toggleables = {
  "theme": {
    "selectors": "body, .content-wrap, footer",
    "className": "dark-mode"
  },
  "sidebar": {
    "selectors": ".sidebar, #main, #logo-text, #slogan, .grid",
    "className": "closed"
  }
}

function toggle(value) {
  let className = toggleables[value].className;
  $(toggleables[value].selectors).toggleClass(className);

  let currentValue = localStorage.getItem(value);
  if (currentValue === className) {
    localStorage.setItem(value, "");
  } else {
    localStorage.setItem(value, className);
  }
}

for (const value in toggleables) {
  let initial = localStorage.getItem(value);
  if (initial) {
    $(toggleables[value].selectors).toggleClass(toggleables[value].className);
    if (value === "theme") {
      document.getElementById("checkbox").checked = true;
    }
  }
}

$('.fadein img:gt(0)').hide();
setInterval(function() {
  $('.fadein :first-child').fadeOut(1500)
  .next('img')
  .fadeIn(1500)
  .end()
  .appendTo('.fadein');
}, 4000);

$("#main").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
  function() {
    $(".grid").masonry();
  });

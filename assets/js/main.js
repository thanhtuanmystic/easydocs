// Header Navigation

// search-box open close js code
let navbar = document.querySelector(".navbar");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};


// Question Easydocs
$(document).ready(function () {
  const $faqItems = $(".faq-item");

  $faqItems.on("click", function () {
    const $item = $(this);
    const $answer = $item.next();
    const $icon = $item.find("i");
    const $faqBox = $item.closest(".faq-box");
    $(".faq-box").removeClass("faqBoxActive");
    $faqItems.not($item).each(function () {
      const $otherAnswer = $(this).next();
      const $otherIcon = $(this).find("i");
      $otherAnswer
        .removeClass("active")
        .css("max-height", "0")
        .css("margin-top", 0);
      $otherIcon.removeClass("active");
      
    });

    $answer.toggleClass("active");
    $icon.toggleClass("active");
    $answer.css("max-height",$answer.hasClass("active") ? $answer[0].scrollHeight + "px" : "0").css("margin-top", $answer.hasClass("active") ? "1rem" : "0");
    $faqBox.addClass( $answer.hasClass("active") ? "faqBoxActive" : "");
  });

});

// Scroll Partner
const scrollers = document.querySelectorAll(".scroller");

// If an user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}


// Các element từ từ hiện lên khi load trang
function scrollMouse(classFirst, nameClassAdd) {
  $(classFirst).addClass("hidden");
  $(classFirst).each(function () {
    var spaceTop = $(this).offset().top;
    var chieucao = $(this).height();
    var spaceBottom = $(document).height() - $(this).offset().top - chieucao;
    var scrollBottom =
      $(document).height() + $(window).height() - $(window).scrollTop();
    var scrollSpaceTop = $(window).scrollTop();
    if (
      spaceBottom < scrollBottom - $(window).height() &&
      spaceTop < scrollSpaceTop + $(window).height()
    ) {
      $(this).addClass(nameClassAdd);
    }
  });
}
var width = $(window).width();

if (width > 767) {
  $(window).scroll(function () {
    scrollMouse(".animation_slide_bottom_to_show", "slide-bottom-to-show");
  });
}
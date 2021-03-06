jQuery("#carousel2").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 20,
  /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: false,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 3
    },

    1024: {
      items: 4
    },

    1366: {
      items: 4
    }
  }
});

jQuery("#carousel").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 20,
  /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1
    },

    1024: {
      items: 1
    },

    1366: {
      items: 1
    }
  }
});

$("body").scrollspy({ target: "#main-nav" });

// Add smooth scrolling
$("#navbarNav a").on("click", function(e) {
  // Check for a hash value
  if (this.hash !== "") {
    // Prevent default behavior
    e.preventDefault();

    // Store hash
    const hash = this.hash;

    // Animate smooth scroll
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      900,
      function() {
        // Add hash to URL after scroll
        window.location.hash = hash;
      }
    );
  }
});

function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName("body")[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
    if (loading) {
      console.log(loading);
      $(".navbar").removeClass("fixed-top");
      console.log("hidden");
    } else {
      $(".navbar").addClass("fixed-top");
      console.log("shown");
    }
  }, 1000);
}
function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? "block" : "none";
}
onReady(function() {
  setVisible(".page", true);

  setVisible("#loading", false);
  $("#loading").remove();
});

function loading() {
  $(document).ready(function() {
    return false;
  });
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? "block" : "none";
}

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).width() < 500) {
      $(".owl-carousel")
        .find(".owl-nav")
        .addClass("disabled");
      $(".owl-carousel").on("changed.owl.carousel", function(event) {
        $(this)
          .find(".owl-nav")
          .addClass("disabled");
      });
    } else {
      $(".owl-carousel")
        .find(".owl-nav")
        .removeClass("disabled");
      $(".owl-carousel").on("changed.owl.carousel", function(event) {
        $(this)
          .find(".owl-nav")
          .removeClass("disabled");
      });
    }
  });
});

$(".overlay").click(function() {
  $(".overlay").toggleClass("hidden");
});

//back to top

var btn = $("#button");

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function(e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 2) {
    $(".navbar").addClass("fixed-top");
  }
});

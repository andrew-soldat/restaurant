$(function () {

   function ibg() {
      $.each($(".ibg"), function (i, g) {
         0 < $(this).find("img").length &&
            $(this).css(
               "background-image",
               'url("' + $(this).find("img").attr("src") + '")'
            );
      });
   }
	ibg();
	
	// ================================================================================

   $(".header-menu__icon").click(function (event) {
      $(this).toggleClass("active");
      $(".header-menu").toggleClass("active");
      if ($(this).hasClass("active")) {
         $("body").data("scroll", $(window).scrollTop());
      }
      $("body").toggleClass("lock");
      if (!$(this).hasClass("active")) {
         $("body,html").scrollTop(parseInt($("body").data("scroll")));
      }
   });

   // ============= parallax ================

   $(window).scroll(function (event) {
      var s = 0 - $(this).scrollTop() / 2;
      $(".content__image").css("transform", "translate3d(0, " + s + "px, 0)");
   });

   // ============= anchor link =============

   $('a[href^="#"]').click(function (event) {
      $(".header-menu__icon").removeClass("active");
      $(".header-menu").removeClass("active");
      $("body").removeClass("lock");
      var target = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(target).offset().top }, 800);
      return false;
	});
	

   /*            Fixed Header              */

   var header = $("#header"),
      introH = $("#about").innerHeight(),
      scrollOffset = $(window).scrollTop();

   checkScroll(scrollOffset);

   $(window).on("scroll", function () {
      scrollOffset = $(this).scrollTop();

      checkScroll(scrollOffset);
   });

   function checkScroll() {
      if (scrollOffset >= introH) {
         header.addClass("fixed");
      } else {
         header.removeClass("fixed");
      }
   }

   // ================================================================================
   $(window).resize(function (event) {
      content();
   });
   function content() {
      var h = $(window).outerHeight();
      $(".content").css("min-height", h);
   }
   content();

   // ================================================================================
	
   var options = {
      sectionClass: ".scrollspy",
      menuActiveTarget: ".header-menu__link",
      offset: 100
   };
	scrollSpy(".header-menu", options);

	// ================================================================================

	$('a[href=""]').click (function(e) {
		return false;
	});
	
});

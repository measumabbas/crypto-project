/*
Author       : theme_ocean
Template Name: Kaniz - Bitcoin & Cryptocurrency HTML Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
			$('a.page-scroll').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		
			
			// $(window).scroll(function() {
			//   if ($(this).scrollTop() > 100) {
			// 	$('.menu-top').addClass('menu-shrink');
			//   } else {
			// 	$('.menu-top').removeClass('menu-shrink');
			//   }
			// });
			
			// $(document).on('click','.navbar-collapse.in',function(e) {
			// if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
			// 	$(this).collapse('hide');
			// }
			// });										
		
		$('.video-play').magnificPopup({
            type: 'iframe'
        });
		
		
	}); 	
	
		/* START TESTIMONIAL JS */
		 $("#testimonial-slider").owlCarousel({
				items:4,
				itemsDesktop:[1199,2],
				itemsDesktopSmall:[979,2],
				itemsTablet:[768,2],
				itemsMobile:[600,1],
				pagination: false,
				navigation:true,
				navigationText:["",""],
				slideSpeed:1000,
				autoPlay:false
			});
		/* END TESTIMONIAL JS */
		
				
})(jQuery);


  


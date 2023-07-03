$(document).ready(function(){
	$('.swiper-wrapper').slick({
		arrows: false,
		draggable: true,
		slidesToShow: 3,
		swipe: true,
		responsive: [
		    {
		      breakpoint: 1240,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true,
		      }
		    },
		    {
		      breakpoint: 1000,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        dots: true,
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        dots: true,
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		]
	});
});
$(document).ready(function(){
	$('.swiper-wrapper1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 6000,
	});
});
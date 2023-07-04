AOS.init();
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
$(document).ready(function(){
	$('.confidence__table-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4500,
		rows: 1,
	});
});

let count = document.getElementById('count');
let btn = document.querySelectorAll('.item__radiobutton');
let item = document.querySelectorAll('.item');

for(let x of btn){
	if(x.checked){
		count.textContent = parseInt(count.textContent) + 1
	}
}
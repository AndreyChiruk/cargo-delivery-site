new Swiper('.swiper-container', {
	spaceBetween: 30,
	loop: true,
	breakpoints: {
  		1240: {
  			slidesPerView: 3,
  		},
  		992: {
  			slidesPerView: 2,
  		},
  		320: {
  			slidesPerView: 1,
  		}
  	},
	pagination: {
    	el: '.swiper-pagination',
    	clickable: true,
  	},
});
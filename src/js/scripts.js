// $(document).ready(function() {
// 	'use strict'
// 	$('.sliders').slick({
//         slidesToShow: 1,
//         dots: true,
// 		dotsClass: "slider__dots",
// 		autoplay: true,
// 		adaptiveHeight: true,
		
// 		prevArrow: '.arrows__arrow--next1',
// 		nextArrow: '.arrows__arrow--prev1',
// 		responsive: [{
// 			breakpoint: 576,
// 			settings: {
// 				slidesToShow: 1,
// 				dots: false
// 			}
// 		}]
// 	});
	// $('.slider2').slick({
	// 	infinite: true,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	autoplay: true,
	// 	autoplaySpeed: 2000,
	// 	prevArrow: '.arrows__arrow--next2',
	// 	nextArrow: '.arrows__arrow--prev2',
	// 	responsive: [{
	// 		breakpoint: 1024,
	// 		settings: {
	// 			slidesToShow: 2
	// 		}
	// 	}, {
	// 		breakpoint: 768,
	// 		settings: {
	// 			slidesToShow: 1
	// 		}
	// 	}]
	// });
// });
// $(document).ready(function() {
// 	$("#menu").on("click", "a", function(event) {
// 		event.preventDefault();
// 		var id = $(this).attr('href'),
// 			top = $(id).offset().top;
// 		$('body,html').animate({
// 			scrollTop: top
// 		}, 1500);
// 	});
// });

// function initMap() {
// 	let geo = {
// 		lat: -7.963919,
// 		lng: 112.589311
// 	}
// 	let markerPosition = {
// 		lat: -7.9407512,
// 		lng: 112.6055576
// 	}
// 	let map = new google.maps.Map(document.getElementById('map'), {
// 		zoom: 13,
// 		center: geo,
// 		disableDefaultUI: true
// 	});
// 	let marker = new google.maps.Marker({
// 		position: markerPosition,
// 		map: map,
// 		icon: './img/pin.png',
// 		title: 'Ikan Piranha Atas 220C  Malang - East Java Indonesia'
// 	});
// }
$(document).ready(function() {
	'use strict'


	$('.sliders').slick({
		dots: true,
		dotsClass: "slider__dots",
		arrows: true,
		slidesToShow: 1,
		autoplay: true,
		swipeToSlide: true,
		infinite: true,
		adaptiveHeight: true,
		speed: 500,
		autoplaySpeed: 6000,
		prevArrow: '.arrows__arrow--next1',
		nextArrow: '.arrows__arrow--prev1',
		responsive: [{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				dots: false
			}
		}]
	});
	})

	
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
		
		arrows: true,
		slidesToShow: 1,
		autoplay: true,
		swipeToSlide: true,
		infinite: true,
		adaptiveHeight: true,
		speed: 500,
		autoplaySpeed: 3000,
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

	const shader = {
		vertex: `			#ifdef GL_ES
		precision mediump float;
		#endif
		
		
		// Simplex 2D noise
		//
		vec3 permute(vec3 x) {
		return mod(((x*34.0)+1.0)*x, 289.0);
		}
		
		float snoise(vec2 v){
		const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
		vec2 i  = floor(v + dot(v, C.yy) );
		vec2 x0 = v -   i + dot(i, C.xx);
		vec2 i1;
		i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
		vec4 x12 = x0.xyxy + C.xxzz;
		x12.xy -= i1;
		i = mod(i, 289.0);
		vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
		+ i.x + vec3(0.0, i1.x, 1.0 ));
		vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
		dot(x12.zw,x12.zw)), 0.0);
		m = m*m ;
		m = m*m ;
		vec3 x = 2.0 * fract(p * C.www) - 1.0;
		vec3 h = abs(x) - 0.5;
		vec3 ox = floor(x + 0.5);
		vec3 a0 = x - ox;
		m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
		vec3 g;
		g.x  = a0.x  * x0.x  + h.x  * x0.y;
		g.yz = a0.yz * x12.xz + h.yz * x12.yw;
		return 130.0 * dot(m, g);
		}
		
		// those are the mandatory attributes that the lib sets
		attribute vec3 aVertexPosition;
		attribute vec2 aTextureCoord;
		
		// those are mandatory uniforms that the lib sets and that contain our model view and projection matrix
		uniform mat4 uMVMatrix;
		uniform mat4 uPMatrix;
		
		uniform mat4 uTextureMatrix0;
		
		// our time uniform
		uniform float uTime;
		
		// if you want to pass your vertex and texture coords to the fragment shader
		varying vec3 vVertexPosition;
		varying vec2 vTextureCoord;
		
		void main() {
		vec3 vertexPosition = aVertexPosition;
		
		vec4 position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);
		
		// calculate a screen space uv
		vec2 screenUV = position.xy / position.ww; // (from -1 to 1)
		screenUV = screenUV * 0.5 + 0.5; // remap to (0 to 1)
		
		// the bigger the more waves
		float noiseRatio = 2.0;
		
		// apply simplex noise based on time
		vec3 simplexNoise = vec3(snoise((screenUV * noiseRatio) - (uTime / 360.0)));
		
		// displace vertices
		vertexPosition.z += simplexNoise.r;
		
		gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);
		
		// varyings
		vTextureCoord = (uTextureMatrix0 * vec4(aTextureCoord, 0.0, 1.0)).xy;
		vVertexPosition = vertexPosition;
		}`,
		fragment: `	#ifdef GL_ES
		precision mediump float;
		#endif
		
		// get our varyings
		varying vec3 vVertexPosition;
		varying vec2 vTextureCoord;
		
		// our texture sampler (this is the lib default name, but it could be changed)
		uniform sampler2D uSampler0;
		
		void main() {
		// get our texture coords
		vec2 textureCoords = vTextureCoord;
		
		// apply our texture
		vec4 finalColor = texture2D(uSampler0, textureCoords);
		
		// uncomment this line to get a b&w version of what's happening
		// finalColor = vec4(0.3, 0.3, 0.3, 1.0);
		
		// fake shadows based on vertex position along Z axis
		finalColor.rgb -= clamp(-vVertexPosition.z / 5.0, 0.0, 1.0);
		// fake lights based on vertex position along Z axis
		finalColor.rgb += clamp(vVertexPosition.z / 5.0, 0.0, 1.0);
		
		// handling premultiplied alpha (useful if we were using a png with transparency)
		finalColor = vec4(finalColor.rgb * finalColor.a, finalColor.a);
		
		gl_FragColor = finalColor;
		}`
	};
	

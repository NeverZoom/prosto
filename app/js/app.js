import $ from 'jquery'
window.jQuery = $
window.$ = $

import 'slick-carousel/slick/slick.js';
import 'magnific-popup/dist/jquery.magnific-popup.min.js';

document.addEventListener('DOMContentLoaded', () => {

	$('.serv').slick({
		infinite: false,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: false,
				}
			},
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
				}
			}
		]
	});

	$('.shop').slick({
		infinite: false,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: false,
				}
			},
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
				}
			}
		]
	});

	$('.burger').on('click', () => {
		$('.menu').addClass('active');
	});
	$('.close').on('click', () => {
		$('.menu').removeClass('active');
	});

	$('.menu a').on('click', () => {
		$('.menu').removeClass('active');
	});

	$('.popup-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		mainClass: 'mfp-with-zoom',

		zoom: {
			enabled: true,
			duration: 300, 
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},

		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	//E-mail Ajax Send
	$("form.popupform").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				// Done Functions
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});

	$("form.contactform").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				// Done Functions
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});


})

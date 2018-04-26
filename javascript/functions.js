$(document).ready(function() {
	// ******** nav functions ********
	$('#navToggle').on('click', function() {
		$('#nav').stop().slideToggle();
	});
	$('#nav').on('click', function() {
		if($(window).width() > 640) {
			$('#nav').stop().slideDown();
		}
	});
	$(window).on('resize', function() {
		if($(window).width() > 640 && $('#nav').height() > 50)  {
			$('#nav').slideDown();
		} else if($(window).width() > 640) {
			$('#nav').fadeIn(10);
		} else if($(window).width() <= 640) {
			$('#nav').hide();
		}	
	});
	// ********************************
	// ******** smooth scrolling ********
	$('#logo').on('click', function() {
		$('HTML, BODY').animate({ scrollTop: 0}, 500);
	});

	$('#nav ul li:nth(0)').on('click', function() {
		var position = $('#about').offset().top; 
		$('HTML, BODY').animate({ scrollTop: position - 70}, 500);
	});
	$('#nav ul li:nth(1)').on('click', function() {
		var position = $('#portfolio').offset().top; 
		$('HTML, BODY').animate({ scrollTop: position - 70}, 500);
	});
	$('#nav ul li:nth(2)').on('click', function() {
		var position = $('#contact').offset().top; 
		$('HTML, BODY').animate({ scrollTop: position - 70}, 500);
	});

	// *********************************

	$(window).on('scroll', function() {
		// close mobile nav if scrolling
		if($(window).width() < 640) {
			$('#nav').fadeOut();
		}

		// when you scroll up to the main page the nav disappears
		var scrollTop = $(document).scrollTop();
		// if youre at the top of the page the header should be transparent
		if(scrollTop >= 550 && scrollTop <= 3000) {
			$('header').fadeIn();
			console.log('fade in');
		} else if(scrollTop < 550) {
			$('header').fadeOut();
			console.log('fade out');
		}
	});

	// ******* fade in scrolling *******
	var aboutOffset = $('#about').offset().top;
	$('header').hide();
	// $('#about').hide();
	// $('#portfolio').hide();
	// $('#contact').hide();
	// $('#socialMedia').hide();
	// $('footer').hide();

	$('#downArrow').on('click', function() {
		// $('#about').show();
		// $('footer').show();
		// $('#socialMedia').show();
		// $('#contact').show();
		// $('#portfolio').show();
		$('HTML, BODY').animate({ scrollTop: aboutOffset }, 1500);
		//$('header').delay(1500).fadeIn(500);
	});
	// *********************************
	// ******* on click client work *******
	$('#portfolio #portfolio-container #client div:nth-of-type(1)').on('click', function() {
		window.location.href = "http://coolerdesigns.ca";
	});

	$('#portfolio #portfolio-container #client div:nth-of-type(2)').on('click', function() {
		window.location.href = "http://www.handiy.ca";
	});
	// ************************************
});












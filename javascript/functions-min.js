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
		} else if(scrollTop < 550) {
			$('header').fadeOut();
		}

		// fade in stuff
		if(scrollTop >= aboutOffset - 150) {
			$('#education').animate({opacity: '1'}, 500);
			$('#skills').delay(400).animate({opacity: '1'}, 500);
			$('#achievements').delay(800).animate({opacity: '1'}, 500);
		} 
		if(scrollTop >= portfolioOffset - 350) {
			$('#portfolio-container').animate({opacity: '1'}, 20);
		}
		if(scrollTop >= contactOffset - 350) {
			$('#contact-container').animate({opacity: '1'}, 500);
		}
		if(scrollTop >= socialOffset - 550) {
			$('#twitter').animate({opacity: '1'}, 500);
			$('#linkedin').delay(400).animate({opacity: '1'}, 500);
			$('#behance').delay(800).animate({opacity: '1'}, 500);
		}

	});

	// ******* fade in scrolling *******
	var aboutOffset = $('#about').offset().top;
	var portfolioOffset = $('#portfolio').offset().top;
	var contactOffset = $('#contact').offset().top;
	var socialOffset = $('#socialMedia').offset().top;

	$('header').hide();

	$('#downArrow').on('click', function() {
	$('HTML, BODY').animate({ scrollTop: aboutOffset }, 1500);
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



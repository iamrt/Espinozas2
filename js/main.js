$(function () {
	
/*********************** SVG Hover ***********************/
	var $svgHover = '#C9DA2B'
	var $svgFill = '#346F91'
	var $gplus = $('#gplus')
	var $fb = $('#fb')
	var $g = $('#g')
	var $p = $('#plus')

	$fb.on('mouseenter', function() {
		$('#fb-path').css('fill', $svgHover);
	});

	$fb.on('mouseleave', function() {
		$('#fb-path').css('fill', $svgFill);
	});

	$gplus.on('mouseenter', function() {
		$g.css('fill', $svgHover)
		$p.css('fill', $svgHover)
	});

	$gplus.on('mouseleave', function() {
		$g.css('fill', $svgFill)
		$p.css('fill', $svgFill)
	});

/*********************************************************/

/****************** Logo Responsiveness ******************/

	winWidth = window.innerWidth;
	

	if (winWidth < 768) {
		$('#logo').addClass('img-responsive');
	}	else {
		$('#logo').removeClass('img-responsive');
	};

/*********************************************************/

/********************** Mobile Menu **********************/

	$('#mobile-menu').on('click', function() {
		$('nav ul').slideToggle(600)
		$('button').toggleClass('change-bg')
		$('.icon-bar').toggleClass('change-icon');
	});

/*********************************************************/


/******************* Footer to Bottom ********************/
	
	$docHeight = $(document).height();
	$winHeight = $(window).height();

	if ($docHeight > $winHeight) {
		$('.wrapper').css('min-height', $docHeight);
	}	else {
		$('.wrapper').css('min-height', $winHeight);
	};

/*********************************************************/
});
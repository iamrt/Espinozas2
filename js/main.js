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

});
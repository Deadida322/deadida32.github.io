var isOpen = 0;
var e = window.event
var x0 = 0;
var x1 = 0;
var curPos = 0;

var x02 = 0;
var x12 = 0;
var curPos2 = 0;

var x03 = 0;
var x13 = 0;
var curPos3 = 0;
$(document).ready(function(){
	

	$(".middle_slide_line").bind("mousedown", function(e) {
		x0 = e.pageX;
	});
	$(".middle_slide_line").bind("mouseup", function(e) {
		var iLine = -7 * ($("#slide1").width() + 5);
		var iLine2 = -13 * ($("#slide1").width() + 5);
		x1 = e.pageX;
		var xm = 1.3*(x1 - x0);
		curPos += xm;
		if (curPos > 1) {
			xm = 0;
			curPos=xm;
		} else {
			if (curPos < iLine) {
				xm = iLine;
				curPos = xm;
			}
		}
		$(".middle_slide_line").css({"margin-left" : curPos + 'px'});
	});
	
	$(".middle_slide_line > div").on('click', function(d) {
		curSlide = d.target;
		iPicture = $(curSlide).css("backgroundImage");
		$(".middle_slide").css({"backgroundImage": iPicture});
	});
	
	
	$(".middle_slide_line2").bind("mousedown", function(e) {
		x02 = e.pageX;
	});
	$(".middle_slide_line2").bind("mouseup", function(e) {
		var iLine2 = -7 * ($("#slide1").width() + 5);
		var iLine22 = -13 * ($("#slide1").width() + 5);
		x12 = e.pageX;
		var xm2 = 1.5*(x12 - x02);
		curPos2 += xm2;
		if (curPos2 > 1) {
			xm2 = 0;
			curPos2=xm2;
		} else {
			if (curPos2 < iLine2) {
				xm2 = iLine2;
				curPos2 = xm2;
			}
		}
		$(".middle_slide_line2").css({"margin-left" : curPos2 + 'px'});
	});
	
	$(".middle_slide_line2 > div").on('click', function(d) {
		curSlide = d.target;
		iPicture = $(curSlide).css("backgroundImage");
		$(".middle_slide").css({"backgroundImage": iPicture});
	});
	
	$(".middle_slide_line3").bind("mousedown", function(e) {
		x03 = e.pageX;
	});
	$(".middle_slide_line3").bind("mouseup", function(e) {
		var iLine3 = -7 * ($("#slide1").width() + 5);
		var iLine23 = -13 * ($("#slide1").width() + 5);
		x13 = e.pageX;
		var xm3 = 1.6*(x13 - x03);
		curPos3 += xm3;
		if (curPos3 > 1) {
			xm3 = 0;
			curPos3=xm3;
		} else {
			if (curPos3 < iLine3) {
				xm3 = iLine3;
				curPos3 = xm3;
			}
		}
		$(".middle_slide_line3").css({"margin-left" : curPos3 + 'px'});
	});
	
	$(".middle_slide_line3 > div").on('click', function(d) {
		curSlide = d.target;
		iPicture = $(curSlide).css("backgroundImage");
		$(".middle_slide").css({"backgroundImage": iPicture});
	});
});


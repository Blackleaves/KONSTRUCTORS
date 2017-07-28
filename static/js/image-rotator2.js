var iter = 2;

var image_array = [];
var title_array = [];
var block_array = [];
var maxIteration = 0;

function slideSwitch() {
    var next_video_id = 'slider-video-' + iter;
    var next_video = document.getElementById(next_video_id); 
    if (next_video){
        next_video.play();        
    }

    /* image */
    var current_image = $('#slideshow div.active');
    var next_image = $('#slideshow div.next');

    current_image.addClass('last-active');
    next_image.addClass('active').css({opacity: 0.0}).animate({opacity: 1.0}, 1500, function() { current_image.removeClass('active').removeClass('last-active').css({opacity: 0.0}); });
    next_image.removeClass('next');

    /* title */

    var current_title = $('#slideshow-titles div.active');
    var next_title = $('#slideshow-titles div.next');

    current_title.addClass('last-active');
    next_title.addClass('active').css({opacity: 0.0}).animate({opacity: 1.0}, 1500, function() { current_title.removeClass('active').removeClass('last-active').css({opacity: 0.0}); });
    next_title.removeClass('next');

    /* block */

    var current_block = $('#slideshow-blocks div.active');
    var next_block = $('#slideshow-blocks div.next');

    current_block.addClass('last-active');
    next_block.addClass('active').css({opacity: 0.0}).animate({opacity: 1.0}, 1500, function() { current_block.removeClass('active').removeClass('last-active').css({opacity: 0.0}); });
    next_block.removeClass('next');


    var point = $('.slide-point-active');
    point.removeClass('slide-point-active');
    var point_class = '.slide-point-' + iter;
    point = $(point_class);
    point.addClass('slide-point-active');

    var last_video_id = 'slider-video-' + ((iter >1) ? (iter-1) : 4);
    var last_video = document.getElementById(last_video_id); 
    if (last_video){
        last_video.pause();        
    }

	if (iter<4) {iter++;} else{iter=1;};
    var image_class = '.img-' + iter;
    var future_image = $(image_class);
    future_image.addClass('next');
    var title_class = '.title-' + iter;
    var future_title = $(title_class);
    future_title.addClass('next');
    var block_class = '.block-' + iter;
    var future_block = $(block_class);
    future_block.addClass('next');
}

function slideMove(image_number) {
	var prev_next_image = $('#slideshow div.next');
	var image_class = '.img-' + image_number;
    var new_next_image = $(image_class);
    prev_next_image.removeClass('next');
    new_next_image.addClass('next');

    var prev_next_title = $('#slideshow-titles div.next');
    var title_class = '.title-' + image_number;
    var new_next_title = $(title_class);
    prev_next_title.removeClass('next');
    new_next_title.addClass('next');

    var prev_next_block = $('#slideshow-blocks div.next');
    var block_class = '.block-' + image_number;
    var new_next_block = $(block_class);
    prev_next_block.removeClass('next');
    new_next_block.addClass('next');

    iter = image_number;
    slideSwitch();
}

function prevSlide () {
	iter = (iter-2)>0 ? (iter-2) : (iter+2);
	slideMove(iter);
}

function calculateHeight(){
    sliderWidth = $(".slideshow-wrapper").width();
    calculatedHeight = parseInt(sliderWidth * 0.375) + "px";
    $(".slideshow-wrapper").css({ "height": calculatedHeight });
    $(".slideshow").css({ "height": calculatedHeight });
}


function slideSwitch2() {
        
    /* image */
    // var current_image = $('#slideshow div.active');
    // var next_image = $('#slideshow div.next');

    // current_image.addClass('last-active');
    // next_image.addClass('active').css({opacity: 0.0}).animate({opacity: 1.0}, 1500, function() { current_image.removeClass('active').removeClass('last-active').css({opacity: 0.0}); });
    // next_image.removeClass('next');

    var currentImage = $(imageArray).filter(".active");
    var nextImage = $(imageArray).filter(".next");

    var sometext = typeof imageArray;
    console.log(sometext);
    currentImage.addClass('last-active');
    nextImage.addClass('active').css({opacity: 0.0}).animate({opacity: 1.0}, 1500, function() { currentImage.css({opacity: 0.0}); });
    currentImage.removeClass('active').removeClass('last-active');
    // var someNumber = imageArray.indexOf(nextImage);
    // var someNumber = imageArray.findIndex(item => item.className == nextImage[0].className);
    // console.log(someNumber);
    nextImage.removeClass('next');

    // console.log(imageArray);
    // console.log(nextImage);
}

$(document).ready(function() {
	// calculateHeight();

	// $(window).resize(function() {
	//     calculateHeight();
	// });
	// setInterval('slideSwitch2()', 5000 );

    imageArray = $(".slider-image");
    titleArray = $(".slider-title");
    blockArray = $(".slider-block");
    maxIteration = Math.max(imageArray.length, titleArray.length, blockArray.length);


    slideSwitch2();
});
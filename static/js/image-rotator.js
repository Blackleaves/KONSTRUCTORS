var iter = 2;
var maxIteration = 0;
var titleArray;

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
    next_image.addClass('active').css({opacity: 0.0, left: '+=100%'}).animate({opacity: 1.0, left: '-=100%'}, 1000, function() {stopVideo(); next_image.removeClass('next');});
    current_image.css({opacity: 1.0}).animate({opacity: 0.0}, 1500, function() {current_image.removeClass('active').removeClass('last-active');});

    /* title */

    var current_title = $('#slideshow-titles div.active');
    var next_title = $('#slideshow-titles div.next');

    current_title.addClass('last-active');
    next_title.addClass('active').css({opacity: 0.0, left: '+=200px'}).animate({opacity: 1.0, left: '-=200px'}, 1000, function() {next_title.removeClass('next');});
    current_title.css({opacity: 1.0}).animate({opacity: 0.0, left: '-=100px'}, 1000, function() {current_title.removeClass('active').removeClass('last-active').css({left: '+=100px'});});

    /* block */

    var current_block = $('#slideshow-blocks div.active');
    var next_block = $('#slideshow-blocks div.next');

    current_block.addClass('last-active');
    next_block.addClass('active').css({opacity: 0.0, left: '+=200px'}).animate({opacity: 1.0, left: '-=200px'}, 1000, function() {next_block.removeClass('next');});
    current_block.css({opacity: 1.0}).animate({opacity: 0.0, left: '-=100px'}, 1000, function() {current_block.removeClass('active').removeClass('last-active').css({left: '+=100px'});});


    var point = $('.slide-point-active');
    point.prop("disabled", false).removeClass('slide-point-active');
    var point_class = '.slide-point-' + iter;
    point = $(point_class);
    point.addClass('slide-point-active').prop("disabled", true);

	if (iter<maxIteration) {iter++;} else{iter=1;};
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

function stopVideo(){
    try {
        var last_video_id = 'slider-video-' + ((iter >1) ? iter : 1);
        document.getElementById(last_video_id).pause();
    } catch(err){}
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

$(document).ready(function() {
	// calculateHeight();

	// $(window).resize(function() {
	//     calculateHeight();
	// });

    maxIteration = $(".slideshow-title").length;

	setInterval('slideSwitch()', 5000 );
});
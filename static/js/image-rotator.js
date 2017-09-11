var sliderLoop;
var slideInterval = null;
var switchTime = 0;
var allSlides = "";
var allTitles = "";
var allBlocks = "";
var allPoints = "";

function sliding() {
    var slide = []
    for(var i=0; i<allSlides.length; ++i) {
        if((allSlides[i].style.display != "none") && (i != (allSlides.length-1)) ) {
            slide.push(i);
            slide.push(i+1);
            break;
        }else if((allSlides[i].style.display != "none") && (i == (allSlides.length-1))) {
            slide.push(i);
            slide.push(0);
            break;
        }
    }
    return slide;
}

function slideSwitch() {
    iter = sliding();
    var current = iter[0];
    if(arguments[0] === undefined){
        var next = iter[1];
    } else {
        var next = arguments[0];
    }

    var next_video_id = 'slider-video-' + next;
    var next_video = document.getElementById(next_video_id); 
    if (next_video){
        next_video.play();        
    }

    // /* image */
    var current_image = $(allSlides[current]);
    var next_image = $(allSlides[next]);
    current_image.addClass('last-active');
    next_image.addClass('active').css({opacity: 0.0, display: "block"}).animate({opacity: 1.0}, 1500, function() {/*stopVideo();*/});
    current_image.css({opacity: 1.0}).animate({opacity: 0.0}, 1000, function() {current_image.removeClass('active').removeClass('last-active');$(current_image).css("display", "none");});

    /* title */
    var current_title = $(allTitles[current]);
    var next_title = $(allTitles[next]);
    current_title.addClass('last-active');
    next_title.addClass('active').css({opacity: 0.0}).animate({opacity: 1.0}, 1500, function() {next_title.removeClass('next');});
    current_title.css({opacity: 1.0}).animate({opacity: 0.0}, 1000, function() {current_title.removeClass('active').removeClass('last-active');});

    /* block */
    var current_block = $(allBlocks[current]);
    var next_block = $(allBlocks[next]);
    current_block.addClass('last-active');
    next_block.addClass('active').css({opacity: 0.0}).animate({opacity: 1.0}, 1500, function() {next_block.removeClass('next');});
    current_block.css({opacity: 1.0}).animate({opacity: 0.0}, 1000, function() {current_block.removeClass('active').removeClass('last-active');});

    /* pointer */
    var point = $('.slide-point-active');
    point.prop("disabled", false).removeClass('slide-point-active');
    point = $(allPoints[next]);
    point.addClass('slide-point-active').prop("disabled", true);
}

function slideMove(number){
    slideSwitch(number);

    clearInterval(sliderLoop);
    sliderLoop = setInterval(function(){ slideSwitch() }, 4000);
}

function stopVideo(){
    try {
        var last_video_id = 'slider-video-' + ((iter >1) ? iter : 1);
        document.getElementById(last_video_id).pause();
    } catch(err){}
}

function navClick(){
    $('#mobile-nav').toggleClass('mobile-navigation-active');
    $('body').toggleClass('locked');
}

$(function(){
    // generateSlider();
    allSlides = $("div.slideshow-image");
    allTitles = $("div.slideshow-title");
    allBlocks = $("div.slideshow-block");
    allPoints = $(".slide-changer");
    sliderLoop = setInterval(function(){ slideSwitch() }, 4000);
});

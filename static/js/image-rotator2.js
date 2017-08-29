/* Promo header JS (need jQuery) */

var slideInterval = null;
var switchTime = 0;
var allSlides = "";
var allTitles = "";
var allBlocks = "";
var allPoints = "";

var pageData = {
    "landing":[
        {"image-url": "static/images/image-1.jpg",
         "title": "WAYOUT",
         "text": "<div class='block-text'>Test limits of your brain by perfecting each puzzle. Let your mind be your guide in meditative and relaxing, yet challenging, journey</div><div class='block-buttons'><a class='box-link' href='#' target='_blank'>MORE INFO</a><a class='arrow-link' href='#' target='_blank'>GO TO STORE</a></div>",
         "video": ""},
        {"image-url": "static/images/image-2.jpg",
         "title": "LINKAGE",
         "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in purus purus. Praesent ornare ac nisl scelerisque volutpat. Quisque ac tellus malesuada, dictum libero in, imperdiet erat. Mauris ultrices tellus in ex auctor ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec tristique augue, at accumsan enim. Praesent eleifend eleifend posuere. Quisque in sem semper, feugiat ante blandit, dapibus metus.",
         "video": "<video poster='static/images/image-2.jpg' id='slider-video-1' class='slider-video' playsinline muted loop><source src='static/videos/linkage.mp4' type='video/mp4'></video>"},
        {"image-url": "static/images/image-3.jpg",
         "title": "GR1D",
         "text": "And this is the third part of the text. Something is here but I am sure that it worse.",
         "video": ""},
        {"image-url": "",
         "title": "DEATH MAZE",
         "text": "This is some text related to Death Maze",
         "video": "<video poster='' id='slider-video-3' class='slider-video' playsinline muted loop><source src='static/videos/death_maze.mp4' type='video/mp4'></video>"} ]
};

function generateSlider() {
    var sliderData = pageData["landing"];

    var sliderBox = $("#slideshow");
    var pointBox = $("#slideshow-points");
    var titleBox = $("#slideshow-titles");
    var blockBox = $("#slideshow-blocks");
    for(var i=0; i<sliderData.length; ++i) {
        var display = (i != 0) ? "display: none; " : "display: block; ";
        var str = "<div class='slideshow-image' style='"+display+"background: transparent url(\""+sliderData[i]['image-url']+"\") no-repeat center center / cover;'>"+sliderData[i]['video']+"</div>";
        sliderBox.append(str);
        // var strTitle = "<div class='slideshow-title'>" + sliderData[i]['title'] + "</div>";
        var strTitle = (i == 0) ? "<div class='slideshow-title active'>" + sliderData[i]['title'] + "</div>" : "<div class='slideshow-title'>" + sliderData[i]['title'] + "</div>";
        titleBox.append(strTitle);
        var strBlock = (i == 0) ? "<div class='slideshow-block active'>" + sliderData[i]['text'] + "</div>" : "<div class='slideshow-block'>" + sliderData[i]['text'] + "</div>";
        blockBox.append(strBlock);
        // <div class="slideshow-title title-1 active">WAYOUT</div>
    }
    var slide_points = "";
    for(var i=0;i<sliderData.length; ++i) {
        slide_points += (i == 0) ? "<button class='slide-changer p"+i+" slide-point-active'></button>" : "<button class='slide-changer p"+i+"'></button>";
    }
    pointBox.append(slide_points);
}

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
    next_image.addClass('active').css({opacity: 0.0, display: "block", left: '+=100%'}).animate({opacity: 1.0, left: '-=100%'}, 1000, function() {/*stopVideo();*/});
    current_image.css({opacity: 1.0}).animate({opacity: 0.0}, 1500, function() {current_image.removeClass('active').removeClass('last-active');$(current_image).css("display", "none");});

    /* title */
    var current_title = $(allTitles[current]);
    var next_title = $(allTitles[next]);
    current_title.addClass('last-active');
    next_title.addClass('active').css({opacity: 0.0, right: '-=200px'}).animate({opacity: 1.0, right: '+=200px'}, 1000, function() {next_title.removeClass('next');});
    current_title.css({opacity: 1.0}).animate({opacity: 0.0, right: '+=100px'}, 1000, function() {current_title.removeClass('active').removeClass('last-active').css({right: '-=100px'});});

    /* block */
    var current_block = $(allBlocks[current]);
    var next_block = $(allBlocks[next]);
    current_block.addClass('last-active');
    next_block.addClass('active').css({opacity: 0.0, right: '-=200px'}).animate({opacity: 1.0, right: '+=200px'}, 1000, function() {next_block.removeClass('next');});
    current_block.css({opacity: 1.0}).animate({opacity: 0.0, right: '+=100px'}, 1000, function() {current_block.removeClass('active').removeClass('last-active').css({right: '-=100px'});});

    /* pointer */
    var point = $('.slide-point-active');
    point.prop("disabled", false).removeClass('slide-point-active');
    point = $(allPoints[next]);
    point.addClass('slide-point-active').prop("disabled", true);
}

function stopVideo(){
    try {
        var last_video_id = 'slider-video-' + ((iter >1) ? iter : 1);
        document.getElementById(last_video_id).pause();
    } catch(err){}
}

function setClickOnSliderDots() {
    var allSlides = document.querySelectorAll("div.slider");
    for(var i=0; i<allSlides.length; ++i) {
        $("div.slideshow-points > button",allSlides[i]).on("click",function() {
            if(!$(this).hasClass("active")) {
                var num = ( Array.isArray(/p(\d{1,})/.exec(this.className)) ) ? (/p(\d{1,})/.exec(this.className))[1] : null ;
                if(num && curNum) {
                    console.log(num);
                    slideSwitch(num)
                }
            }
        });
    }
}

$(function(){
    generateSlider();
    setClickOnSliderDots();
    allSlides = $("div.slideshow-image");
    allTitles = $("div.slideshow-title");
    allBlocks = $("div.slideshow-block");
    allPoints = $(".slide-changer");
    switchTime += 1;
    // slideInterval = setInterval(slideSwitch, 4000);

    sliding();
});

/* Promo header JS END */

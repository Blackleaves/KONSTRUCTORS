var pageData = {
    "landing":[
        {"image-url": "static/images/image-1.jpg",
         "title": "WAYOUT",
         "text": "<div class='block-text'>Test limits of your brain by perfecting each puzzle. Let your mind be your guide in meditative and relaxing, yet challenging, journey</div><div class='block-buttons'><a class='slide-link green-link' href='#' target='_blank'>MORE INFO</a><a class='slide-link' href='#' target='_blank'>GO TO STORE</a></div>",
         "video": ""},
        {"image-url": "static/images/image-2.jpg",
         "title": "LINKAGE",
         "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in purus purus. Praesent ornare ac nisl scelerisque volutpat. Quisque ac tellus malesuada, dictum libero in, imperdiet erat. Mauris ultrices tellus in ex auctor ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec tristique augue, at accumsan enim.",
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
        var strTitle = (i == 0) ? "<div class='slideshow-title active'>" + sliderData[i]['title'] + "</div>" : "<div class='slideshow-title'>" + sliderData[i]['title'] + "</div>";
        titleBox.append(strTitle);
        var strBlock = (i == 0) ? "<div class='slideshow-block active'>" + sliderData[i]['text'] + "</div>" : "<div class='slideshow-block'>" + sliderData[i]['text'] + "</div>";
        blockBox.append(strBlock);
    }
    var slide_points = "";
    for(var i=0;i<sliderData.length; ++i) {
        slide_points += (i == 0) ? "<button class='slide-changer p"+i+" slide-point-active' onclick='slideMove("+i+")'></button>" : "<button class='slide-changer p"+i+"' onclick='slideMove("+i+")'></button>";
    }
    pointBox.append(slide_points);
}
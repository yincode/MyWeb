$(document).ready(function() {
    var oPicshow = $('#picShow');
    var oPic = $('#pic');
    var oPicinfo = $('#pic_info');
    var aImg = $('#pic li');
    var aPic = $('#pic li img');
    var aInfo = $("#pic_info li");
    var oBtnLeft = $('.btn_left');
    var oBtnRight = $('#picShow .btn_right');

    var length = aImg.size();

    var now = 0;

    for (var i = 0; i < length; i++) {
        aImg[i].style.opacity = 0;
        aInfo[i].style.opacity = 0;
    }
    aImg[0].style.opacity = 1;
    aInfo[0].style.opacity = 1;

    oBtnRight.on('click', tabs);

    oBtnLeft.on('click', function() {
        startMove(aImg[now], { opacity: 0 });
        startMove(aInfo[now], { opacity: 0 });

        aImg[now].style.opacity = 0;
        now--;
        if (now == -1) {
            now = length - 1;
        }
        startMove(aImg[now], { opacity: 100 });
        startMove(aInfo[now], { opacity: 100 });

    });


    var timer = setInterval(tabs, 2000);

    oPicshow.hover(function() {
        clearInterval(timer);
    }, function() {
        timer = setInterval(tabs, 2000);
    });

    function tabs() {
        startMove(aImg[now], { opacity: 0 });
        startMove(aInfo[now], { opacity: 0 });

        aImg[now].style.opacity = 0;
        now++;
        if (now == length) {
            now = 0;
        }
        startMove(aImg[now], { opacity: 100 });
        startMove(aInfo[now], { opacity: 100 });
    };

    //Gallery
    var Gallery = $('.Gallery');
    var Gal_big = $('.Gallety_big');
    var Gal_small = $('.Gallety_small');


  

});

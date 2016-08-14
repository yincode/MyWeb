$(document).ready(function() {
    var oGallery = $('#Gallety');
    var oGal_big = $('.Gallety_big');
    var oGal_sma = $('.Gallety_small');
    var aLiBig = $('.Gallety_big li');
    var aLiSma = $('.Gallety_small img');
    var length = aLiBig.size();
    var now = 0;

    for (var i = 0; i < length; i++) {
        startMove(aLiBig[i], { opacity: 0 });
    }
    startMove(aLiBig[0], { opacity: 100 });

    for (var i = 0; i < length; i++) {

        for (var i = 0; i < length; i++) {
            aLiSma[i].index = i;
            now = aLiSma[i].index;

            aLiSma[i].onclick = function() {
                now = this.index;
                tabs();
                clearInterval(timer);
                setTimeout(timer = setInterval(function() {
                    now++;
                    if (now == length) {
                        now = 0;
                    }
                    tabs()
                }, 2000), 1000)
            }
        }
    };


    function tabs() {
        for (var j = 0; j < length; j++) {
            startMove(aLiBig[j], { opacity: 0 });
        }

        startMove(aLiBig[now], { opacity: 100 });
    }
    //自动切换

    var timer = setInterval(function() {
        now++;
        if (now == length) {
            now = 0;
        }
        tabs()
    }, 1500);

    oGal_big.hover(function() {
        clearInterval(timer);
    }, function() {
        timer = setInterval(function() {
            now++;
            if (now == length) {
                now = 0;
            }
            tabs()
        }, 2000);
    });
})

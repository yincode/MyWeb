var total = 17;
var zWin = $(window);
var render = function() {
    var padding = 2;
    var winWidth = zWin.width();
    var picWidth = Math.floor((winWidth - padding * 3) / 4);
    var tmpl = '';
    for (var i = 1; i <= total; i++) {
        var imgSrc = 'imgs/' + i + '.jpg';
        var p = padding;
        if (i % 4 == 1) {
            p = 0;
        }
        tmpl += '<li data-id="' + i + '" class="animated bounceIn" style="width:' + picWidth + 'px;height:' + picWidth + 'px;padding-left:' + p + 'px;padding-top:' + padding + 'px;"><canvas id="cvs_' + i + '"></canvas></li>'

        var imageObj = new Image();
        imageObj.index = i;
        imageObj.onload = function() {
            var cvs = $('#cvs_' + this.index)[0].getContext('2d');
            cvs.width = this.width;
            cvs.height = this.height;
            cvs.drawImage(this, 0, 0);
        }
        imageObj.src = imgSrc;
    }

    $('#container').html(tmpl);
}

render();

var wImage = $('#large_img');
var domImage = wImage[0];
var loadImg = function(id, callback) {
    $('#large_container').css({
        width: zWin.width(),
        height: zWin.height()
    }).show();

    var imgsrc = 'imgs/' + id + '.large.jpg';
    var imageObj = new Image();
    imageObj.src = imgsrc;
    imageObj.onload = function() {
        var w = this.width;
        var h = this.height;
        var winWidth = zWin.width();
        var winHeight = zWin.height();
        var realW = winHeight * w / h;
        var paddingLeft = parseInt((winWidth - realW) / 2);
        var realH = winWidth * h / w;
        var paddingTop = parseInt((winHeight - realH) / 2);

        wImage.css('width', 'auto').css('height', 'auto');
        wImage.css('padding-left', '0').css('padding-top', '0');

        if (h / w > 1.2) {
            wImage.attr('src', imgsrc).css('height', winHeight).css('padding-left', paddingLeft)
        } else {
            wImage.attr('src', imgsrc).css('width', winWidth).css('padding-top', paddingTop);
        }

        callback && callback();
    }



}

var cid;
$("#container").delegate('li', 'tap', function() {
    var _id = cid = $(this).attr('data-id');
    loadImg(_id);
});

var lock = false;
$('#large_container').tap(function() {
    $(this).hide()
}).swipeLeft(function() {
    if (lock) {
        return
    }
    cid++;
    lock = true;
    if (cid > total) {
        cid = total;
    } else {
        loadImg(cid, function() {

            domImage.addEventListener('webkitAnimationEnd', function() {
                wImage.removeClass('animated bounceInRight');
                // domImage.removeEventListener('webkitAnimationEnd');

                lock = false;
            }, false);
            wImage.addClass('animated bounceInRight');
        })
    }
}).swipeRight(function() {
    if (lock) {
        return }
    cid--;

    lock = true;

    if (cid < 1) {
        cid = 1;
    } else {
        loadImg(cid, function() {
            domImage.addEventListener('webkitAnimationEnd', function() {
                wImage.removeClass('animated bounceInLeft');
                // domImage.removeEventListener('webkitAnimationEnd');

                lock=false;
                
            }, false);
            wImage.addClass('animated bounceInLeft');
        });
    }
});;

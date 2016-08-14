function startMove(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var bStop = true;
        for (attr in json) {

            var icur = 0;
            icur = (attr == 'opacity') ? Math.round(getStyle(obj, attr) * 100) : parseInt(getStyle(obj, attr));
            var iSpeed = (json[attr] - icur) / 8;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if (icur != json[attr]) {
                bStop = false;
            }
            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (icur + iSpeed) + ')';
                obj.style.opacity = (icur + iSpeed) / 100;
            } else {
                obj.style[attr] = icur + iSpeed + 'px';
            }


        }
        if (bStop) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }

        }


    }, 30);
}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}

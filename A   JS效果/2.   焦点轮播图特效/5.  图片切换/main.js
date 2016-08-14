window.onload = function() {

    // var OautoCut = document.getElementById("autoCut");
    var Oprev = document.getElementsByClassName("prev")[0];
    var Onext = document.getElementsByClassName("next")[0];

    var arr = [];
    var aLi = document.getElementsByTagName("li");

    for (var i = 0; i < aLi.length; i++) {
        var oimg = aLi[i].getElementsByTagName('img')[0];
        arr.push([parseInt(getStyle(aLi[i], 'left')), parseInt(getStyle(aLi[i], 'top')), getStyle(aLi[i], 'opacity') * 100, getStyle(aLi[i], 'zIndex'), oimg.width]);
    }

    Oprev.onclick = function() {

        arr.push(arr[0]);
        arr.shift();

        for (var i = 0; i < aLi.length; i++) {
            var oimg = aLi[i].getElementsByTagName('img')[0];
            aLi[i].style.zIndex = arr[i][3];
            startMove(aLi[i], {
                left: arr[i][0],
                top: arr[i][1],
                opacity: arr[i][2]
            });
            startMove(oimg, {
                width: arr[i][4]
            });
        }
    }
    Onext.onclick = function() {
        arr.unshift(arr[arr.length - 1]);
        arr.pop();

        for (var i = 0; i < aLi.length; i++) {
            var oimg = aLi[i].getElementsByTagName('img')[0];
            aLi[i].style.zIndex = arr[i][3];
            startMove(aLi[i], {
                left: arr[i][0],
                top: arr[i][1],
                opacity: arr[i][2]
            });
            startMove(oimg, {
                width: arr[i][4]
            });
        }
    }


    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return getComputedStyle(obj, false)[attr];
        }
    }


}

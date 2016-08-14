window.onload = function() {
    var oWrap = document.getElementById('#wrap');
    var oBtn = getByClass(oWrap, 'btn')[0];
    var timer = null;
    var isTop = true;

    window.onscroll = function() {
        if (!isTop) {
            clearInterval(timer);
        }
        isTop = false;

        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var clientHeight = document.documentElement.clientHeight;

        if (scrollTop>clientHeight) {
        	oBtn.style.display='block';
        }else{
        	oBtn.style.display='none';
        }
    }

    oBtn.onclick = function() {

        timer = setInterval(function() {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var iSpeed = Math.floor(-scrollTop / 6);
            isTop = true;

            if (scrollTop == 0) {
                clearInterval(timer);
            }

            document.documentElement.scrollTop = document.body.scrollTop -= -iSpeed;
        }, 30);
    }


}

function getByClass(oParent, sClass) {
    var aEle = document.getElementsByTagName("*");
    var aResults = [];

    for (var i = 0; i < aEle.length; i++) {
        if (aEle[i].className == sClass) {
            aResults.push(aEle[i]);
        }
    }

    return aResults;
}

window.onload = function() {
    waterfall('main', 'pin');

    var dataInt = {
        "data": [{ "src": '7.jpg' }, { "src": '8.jpg' }, { "src": '9.jpg' }, { "src": '10.jpg' }, { "src": '11.jpg' }, { "src": '12.jpg' }]
    }

    window.onscroll = function() {
        if (checkScrollSlide()) {
            //将数据渲染到尾部块
            var oParent = document.getElementById('main');
            for (var i = 0; i < dataInt.data.length; i++) {
                var oBox = document.createElement('div');
                oBox.className = 'pin';
                oParent.appendChild(oBox);

                var oPic = document.createElement('div');
                oPic.className = 'box';
                oBox.appendChild(oPic);

                var oImg = document.createElement('img');
                oImg.src = "images/" + dataInt.data[i].src;

                oPic.appendChild(oImg);
            }
            waterfall('main', 'pin');
        }
    }
}

function waterfall(parent, box) {
    //将main下的所有class为box的元素取出来
    var oParent = document.getElementById(parent);
    var oBoxs = getByClass(oParent, 'pin');

    //计算整个页面显示的列数（页面宽/box的宽）
    var oBoxW = oBoxs[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth / oBoxW);

    //设置main的宽度
    oParent.style.cssText = 'width:' + cols * oBoxW + 'px;margin:0 auto';

    var hArr = []; //存放每一列高度的数组
    for (var i = 0; i < oBoxs.length; i++) {
        if (i < cols) {
            hArr.push(oBoxs[i].offsetHeight);
        } else {
            var minH = Math.min.apply(null, hArr);
            var index = getMinhIndex(hArr, minH);

            //进行定位
            oBoxs[i].style.position = 'absolute';
            oBoxs[i].style.top = minH + 'px';
            oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';

            //更新数组
            hArr[index] += oBoxs[i].offsetHeight;
        }
    }
}


//根据class获取元素
function getByClass(oParent, sClass) {
    var aEle = oParent.getElementsByTagName('*');
    var aResults = [];
    for (var i = 0; i < aEle.length; i++) {
        if (aEle[i].className == sClass) {
            aResults.push(aEle[i]);
        }
    }
    return aResults;
}

//获取最小高度元素的索引值
function getMinhIndex(arr, val) {
    for (var i in arr) {
        if (arr[i] == val) {
            return i;
        }
    }
}

//检测是有具备了加载数据的条件
function checkScrollSlide() {
    var oParent = document.getElementById('main');
    var oBoxs = getByClass(oParent, 'pin');
    var lastBoxH = oBoxs[oBoxs.length - 1].offsetTop + Math.floor(oBoxs[oBoxs.length - 1].offsetHeight / 2);
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var height = document.documentElement.clientHeight || document.body.clientHeight;
    return (lastBoxH < (scrollTop + height) ? true : false);
}

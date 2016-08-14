/**
 * Created by 殷 on 2016/6/5.
 */

$(document).ready(function () {
    // 搜索切换
    (function () {

        var aLi = $("#menu li");
        var oText = $("#search").find('.form .text');
        var iNow = 0;

        var arrText = [
            '荷棠鱼坊烤鱼 或 樱花日本料理01',
            '荷棠鱼坊烤鱼 或 樱花日本料理02',
            '荷棠鱼坊烤鱼 或 樱花日本料理03',
            '荷棠鱼坊烤鱼 或 樱花日本料理04',
            '荷棠鱼坊烤鱼 或 樱花日本料理05'
        ]

        oText.val(arrText[iNow]);

        aLi.each(function (index) {
            $(this).click(function () {
                aLi.attr('class', 'gradient');
                $(this).attr('class', 'active');

                iNow = index;

                oText.val(arrText[iNow]);
            })
        });

        oText.focus(function () {
            if (oText.val() == arrText[iNow]) {
                $(this).val('');
            }
        });

        oText.blur(function () {
            if (oText.val() == '') {
                oText.val(arrText[iNow]);
            }
        });

    })();

    // update滚动
    (function () {
        var iNow = 0;
        var oUl = $("#update ul");
        var timer = null;
        var oUpdate = $("#update");
        arrDate = [
            {'name': '萱萱', 'time': '1', 'title': '哪些美好灿烂的时光', 'url': '#'},
            {'name': '丫丫', 'time': '2', 'title': '我们快要毕业了', 'url': '#'},
            {'name': '萱萱', 'time': '3', 'title': '哪些美好灿烂的时光', 'url': '#'},
            {'name': '丫丫', 'time': '4', 'title': '我们快要毕业了', 'url': '#'},
            {'name': '萱萱', 'time': '5', 'title': '哪些美好灿烂的时光', 'url': '#'},
            {'name': '丫丫', 'time': '6', 'title': '我们快要毕业了', 'url': '#'},
            {'name': '萱萱', 'time': '7', 'title': '哪些美好灿烂的时光', 'url': '#'},
            {'name': '丫丫', 'time': '8', 'title': '我们快要毕业了', 'url': '#'},
            {'name': '峰峰', 'time': '9', 'title': '即将步入社会', 'url': '#'}
        ];

        var str = '';
        for (var i = 0; i < arrDate.length; i++) {
            str += "<li><a href=" + arrDate[i].url + "><strong>" + arrDate[i].name + "</strong><span>" + arrDate[i].time + "分钟前</span>写了一篇新文章：" + arrDate[i].title + "</a></li>"
        }

        oUl.html(str);
        var liH = oUl.find('li').height();

        var updateUp = $("#updateUpBtn");
        var updateDown = $("#updateDownBtn");

        updateUp.click(function () {
            doMove(-1);
        });
        updateDown.click(function () {
            doMove(1);
        });

        oUpdate.hover(function () {
            clearInterval(timer);
        }, autoPlay);

        autoPlay();
        function autoPlay() {
            timer = setInterval(function () {
                doMove(-1);
            }, 3000);
        }

        function doMove(Num) {
            iNow += Num;
            if (Math.abs(iNow) > (arrDate.length - 1)) {
                iNow = 0;
            }
            if (iNow > 0) {
                iNow = -(arrDate.length - 1);
            }
            oUl.stop().animate({'top': liH * iNow}, 1000, 'elasticOut');
        }
    })();

    // options 选项卡切换
    (function () {

        var oNav = $('.tabNav1');
        var oCon = $('.tabCon1');
        var oNav2 = $('.tabNav2');
        var oCon2 = $('.tabCon2');
        var oNav3 = $('.tabNav3');
        var oCon3 = $('.tabCon3');
        var oNav4 = $('.tabNav4');
        var oCon4 = $('.tabCon4');
        fnTab(oNav, oCon);
        fnTab(oNav2, oCon2);
        fnTab(oNav3, oCon3);
        fnTab(oNav4, oCon4);

        function fnTab(oNav, oCon) {
            var aElem = oNav.find('li');

            oCon.hide().eq(0).show();

            aElem.each(function (index) {
                $(this).click(function () {
                    aElem.removeClass('active').addClass('gradient');
                    $(this).removeClass('gradient').addClass('active');
                    aElem.find('a').attr('class', 'triangle_down_gray');
                    $(this).find('a').attr('class', 'triangle_down_red');

                    oCon.hide().eq(index).show();
                })
            });
        }
    })();

    //幻灯片切换
    (function () {
        var oDiv = $('#fade');
        var oUlLi = oDiv.find('ul li');
        var oOlLi = oDiv.find('ol li');
        var oP = oDiv.find('p');
        var arr = ['爸爸去哪里', '妈妈去哪了', '奶奶去哪了'];
        var iNow = 1;
        var timer = null;

        fade();

        oOlLi.click(function () {
            iNow = $(this).index();
            fade();
        });

        autoPlay();
        function autoPlay() {
            timer = setInterval(function () {
                iNow++;
                iNow %= arr.length;
                fade();
            }, 2000);
        }

        oDiv.hover(function () {
            clearInterval(timer);
        }, autoPlay);


        function fade() {
            oUlLi.each(function (i) {
                if (i != iNow) {
                    oUlLi.eq(i).fadeOut(1000).css('zIndex', 1);
                    oOlLi.eq(i).removeClass('active');
                } else {
                    oUlLi.eq(i).fadeIn(1000).css('zIndex', 2);
                    oOlLi.eq(i).addClass('active');
                }
            });
            oP.text(arr[iNow]);
        }

    })();

    // 日历效果
    (function () {
        var oDiv = $('.calendar');
        var oImg = oDiv.find('ol li img');

        oImg.hover(function () {
            $('.today-info').show(200);
        }, function () {
            $('.today-info').hide(200);

        });
    })();

    // BBS高亮显示
    (function () {
        $('.luntan-con ol li').mouseover(function () {
            $('.luntan-con ol li').removeClass('active').eq($(this).index()).addClass('active');
        });
    })();

    // HOT透明层效果
    (function () {
        $('.hot-list-pic ul li').mouseover(function () {

            var arr=[
                '',
                'pic01',
                'pic02',
                'pic03',
                'pic04',
                'pic05',
                'pic06',
                'pic07',
                'pic08',
                'pic09',
                'pic10'
            ];

            if ($(this).index()==0){
                return;
            }

            $('.hot-list-pic ul li span').remove();
            $(this).append('<span>'+arr[$(this).index()]+'</span>');
        });
    })();
});

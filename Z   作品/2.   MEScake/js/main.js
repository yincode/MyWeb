/**
 * Created by 殷 on 2016/5/13.
 */
window.onload = function () {

    // nav隐藏
    var oNav = document.getElementById('nav');
    var aA = oNav.getElementsByTagName('a');

    var oSpan1 = aA[0].getElementsByTagName('span')[0];
    aA[0].onmouseover = function () {
        oSpan1.style.backgroundColor = '#000';
    }
    aA[0].onmouseout = function () {
        oSpan1.style.backgroundColor = '#B5EBA7';
    }

    var oSpan2 = aA[1].getElementsByTagName('span')[0];
    aA[1].onmouseover = function () {
        oSpan2.style.backgroundColor = '#000';
    }
    aA[1].onmouseout = function () {
        oSpan2.style.backgroundColor = '#F8D280';
    }

    // 轮播图

    var oDiv = document.getElementById('ad');
    var oUl = document.getElementById("ul1");
    var aLi = oDiv.getElementsByTagName('li');
    var aImg = oDiv.getElementsByTagName('img');
    var iNow = 0;
    var iNow2 = 0;


    var oBtn = document.getElementById('btn');
    var oBtnA = oBtn.getElementsByTagName('a');

    var imgWidth = 1920;
    oUl.style.width = aImg.length * imgWidth + "px";

    function toResize() {
        var viewWidth = document.documentElement.clientWidth;

        if (viewWidth > 1000) {
            for (var i = 0; i < aImg.length; i++) {
                aImg[i].style.left = -(imgWidth - viewWidth) / 2 + "px";
            }
        }

    }

    toResize();

    window.onresize = function () {
        toResize();
    }

    for (var i = 0; i < oBtnA.length; i++) {
        oBtnA[i].index = i;
        oBtnA[i].onclick = function () {

            for (var i = 0; i < oBtnA.length; i++) {
                oBtnA[i].className = '';
            }
            this.className = 'active';

            startMove(oUl, {
                left: -this.index * imgWidth
            });

        };
    }


    setInterval(toRun, 3000);

    function toRun() {

        if (iNow == aLi.length - 1) {
            aLi[0].style.position = 'relative';
            aLi[0].style.left = aLi.length * imgWidth + 'px';
            iNow = 0;
        } else {
            iNow++;
        }

        iNow2++;

        for (var i = 0; i < oBtnA.length; i++) {
            oBtnA[i].className = '';
        }

        oBtnA[iNow].className = 'active';

        startMove(oUl, {
            left: -iNow2 * imgWidth
        }, function () {

            if (iNow == 0) {
                aLi[0].style.position = 'static';
                oUl.style.left = 0;
                iNow2 = 0;
            }

        });

    }

    var cakes = document.getElementById('cakes');
    var cakes_a = cakes.getElementsByTagName('a');

    for (var i = 0; i < cakes_a.length; i++) {
        cakes_a[i].onmouseover = function () {
            var oSpan = this.getElementsByTagName('span')[0];
            changeImg(oSpan)
        }
        cakes_a[i].onmouseout = function () {
            var oSpan = this.getElementsByTagName('span')[0];
            RchangeImg(oSpan)
        }
    }


    function changeImg(obj) {
        obj.style.backgroundImage = "";
        obj.style.backgroundPositionX = "0px";
        obj.style.backgroundPositionY = "-189px";
    }

    function RchangeImg(obj) {
        obj.style.backgroundImage = "";
        obj.style.backgroundPositionX = "0px";
        obj.style.backgroundPositionY = "0px";
    }


    // 弹出层
    openLogin();
    function openLogin(){
        // 登陆弹出框
        var oBtnLogin = document.getElementById('btn-login');
        oBtnLogin.onclick=function(){
            // 获取页面的宽度和高度
            var sHeight = document.documentElement.scrollHeight;
            var sWidth = document.documentElement.scrollWidth;

            // 获取可视区域的宽高
            var vHeight=document.documentElement.clientHeight;

            var oMask = document.createElement('div');
            oMask.id = "mask";
            oMask.style.height = sHeight + 'px';
            oMask.style.width=sWidth+'px';
            document.body.appendChild(oMask);

            var oLogin=document.createElement('div');
            oLogin.id='login';
            oLogin.innerHTML="<div id='close'></div><h3>用户登陆</h3><input type='text' placeholder='手机号码' class='phone'> <input type='text' placeholder='用户密码' class='key'><input type='submit' value='登陆' class='btn-login'> <div class='checkbox'> <lable> <input type='checkbox' value='记住登陆'>记住登陆 </lable> <a href='#'>忘记密码</a> </div> <input type='submit' value='新用户注册' class='btn-reg'>"
            document.body.appendChild(oLogin);

            // 获取元素的宽高
            var dHeight=oLogin.offsetHeight;
            var dWidth=oLogin.offsetWidth;
            oLogin.style.left=(sWidth-dWidth)/2+'px';
            oLogin.style.top=(vHeight-dWidth)/2+'px';

            var oClose=document.getElementById('close');
            oClose.onclick=function (){
                document.body.removeChild(oMask);
                document.body.removeChild(oLogin);
            }

        }
    }




    
}
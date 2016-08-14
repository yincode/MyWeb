 window.onload = function() {
        var oDiv = document.getElementById('div1');
        var oUl = oDiv.getElementsByTagName('ul')[0];
        var aLi = oUl.getElementsByTagName('li');
        var aImg = oUl.getElementsByTagName('img');

        var oBtn = document.getElementById('btn');
        var aA = oBtn.getElementsByTagName('a');

        var imgWidth = 1920;
        var iNow = 0;
        var iNow2 = 0;

        oUl.style.width = aImg.length * imgWidth + 'px';

        function toReSize() {

            var veiwWidth = document.documentElement.clientWidth;

            if (veiwWidth > 1000) {
                for (var i = 0; i < aImg.length; i++) {
                    aImg[i].style.left = -(imgWidth - veiwWidth) / 2 + 'px';
                }
            }

        }

        toReSize();

        window.onresize = function() {
            toReSize();
        };


        for (var i = 0; i < aA.length; i++) {
            aA[i].index = i;
            aA[i].onclick = function() {

                for (var i = 0; i < aA.length; i++) {
                    aA[i].className = '';
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

            for (var i = 0; i < aA.length; i++) {
                aA[i].className = '';
            }

            aA[iNow].className = 'active';

            startMove(oUl, {
                left: -iNow2 * imgWidth
            }, function() {

                if (iNow == 0) {
                    aLi[0].style.position = 'static';
                    oUl.style.left = 0;
                    iNow2 = 0;
                }

            });

        }

    };
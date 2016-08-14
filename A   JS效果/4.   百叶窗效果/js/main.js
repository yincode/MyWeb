window.onload = function() {
    var oUl = document.getElementById("uli");
    var oUl2 = document.getElementById("uli2");
    var iNow = 0;
    var timer = null;
    var btn = true;
    toShow(oUl);

    function toShow(obj) {
        var oDiv = obj.getElementsByTagName("div");
        setInterval(function() {
            toChange();
        }, 4000);

        function toChange() {

            timer = setInterval(function() {
                if (iNow == oDiv.length) {
                    clearInterval(timer);
                    iNow = 0;
                    btn = !btn;
                } else if (btn) {

                    startMove(oDiv[iNow], { top: 0 });
                    iNow++;
                } else {
                    startMove(oDiv[iNow], { top: -30 });
                    iNow++;
                }

            }, 100);
        }
    }

}

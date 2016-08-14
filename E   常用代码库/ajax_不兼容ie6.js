function ajax(url, fnSucc, fnFalied) {
    //1.创建ajax对象
    var oAjax = new XMLHttpRequest();

    //2.连接服务器
    //open(方法，文件名，异步传输)
    oAjax.open('GET', url+'?t='+new Date().getTime(), true);

    //3.发送请求
    oAjax.send();

    //4.接收返回值
    oAjax.onreadystatechange = function() {
        if (oAjax.readyState == 4) //读取完成
        {
            if (oAjax.status == 200) {
                fnSucc(oAjax.responseText);
            } else {
                if (fnFalied) {
                    fnFalied(oAjax.status);
                }
            }
        }
    }

}

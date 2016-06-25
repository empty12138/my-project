$(document).ready(function() {
    $("#newslist").click(function() {
        $(".cont1").css("display", "none");
        $(".cont2").css("display", "block");
    })
    $("#addnews").click(function() {
        $(".cont1").css("display", "block");
        $(".cont2").css("display", "none");
    });


    //往数据库添加内容时的ajax
    $('#submit').on("click", function() {
        $.post("../php/sql.php", {
            newskind: $("#newskind").val(),
            newstitle: $("#newstitle").val(),
            newscontent: $("#newscontent").val(),
            newstime: $("#newstime").val()
        }, function(data) {
            var arr1 = eval(data)
            var textin = '<tr><td>' + decodeURIComponent(arr1[0]) + '</td><td>' + decodeURIComponent(arr1[1]) + '</td><td>' + decodeURIComponent(arr1[2]) + '</td><td>' + arr1[3] + '</td></tr>';
            //console.log(eval(textin))
            $('#eached').prepend(textin);
        });
        //不跳转，html内form表单去掉了。在提交后清空表单内容
        $("#newskind").val("");
        $("#newstitle").val("");
        $("#newscontent").val("");
        $("#newstime").val("");
        alert("添加成功")

    })


    //重置按钮
    $('#reset').on("click", function() {
        $("#newskind").val("");
        $("#newstitle").val("");
        $("#newscontent").val("");
        $("#newstime").val("");
    })

    //打开页面时自动加载数据库内容
    $.get("../php/readsql.php", function(data) {
        var arr = eval(data);
        //console.log(data);
        for (var i = 0; i < arr.length; i++) {
            //var oTr = document.createElement('tr');
            var text = '<tr><td>' + arr[i].newstype + '</td><td>' + arr[i].newstitle + '</td><td>' + arr[i].newscontent + '</td><td>' + arr[i].newstime + '</td></tr>';
            $('#eached').prepend(text);
        }
    })

})
















//下面是测试时候的记录or草稿，仅作为日后查找用



/*


window.onload = function() {
    var oBtn = document.getElementById('newslist');
    sql();
    oBtn.onclick = function() {
        sql();
    }

}



function sql() {
    var oTbody = document.getElementById('eached')
    ajax('../php/readsql.php?t=' + new Date().getTime(), function(str) {
        var arr = eval(str);
        console.log(str);
        for (var i = 0; i < arr.length; i++) {
            var oTr = document.createElement('tr');
            oTr.innerHTML = '<td>' + arr[i].newstype + '</td><td>' + arr[i].newstitle + '</td><td>' + arr[i].newscontent + '</td><td>' + arr[i].newstime + '</td>';
            oTbody.appendChild(oTr);
        }

    }, function() {
        alert('失败');
    });
};




function ajax(url, fnSucc, fnFaild) {
    //1.创建Ajax对象
    if (window.XMLHttpRequest) {
        var oAjax = new XMLHttpRequest();
    } else {
        var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //2.连接服务器（打开和服务器的连接）
    oAjax.open('GET', url, true);


    //3.发送
    oAjax.send();

    //4.接收
    oAjax.onreadystatechange = function() {
        if (oAjax.readyState == 4) {
            if (oAjax.status == 200) {
                //alert('成功了：'+oAjax.responseText);
                fnSucc(oAjax.responseText);
            } else {
                //alert('失败了');
                if (fnFaild) {
                    fnFaild();
                }
            }
        }
    };
}
*/

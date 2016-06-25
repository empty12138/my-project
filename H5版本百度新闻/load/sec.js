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
        var i = $('#eached tr').length;
        $.post("../php/sql.php", {
            newskind: $("#newskind").val(),
            newstitle: encodeURIComponent($("#newstitle").val()),
            newscontent: encodeURIComponent($("#newscontent").val()),
            newstime: encodeURIComponent($("#newstime").val())
        }, function(data) {
            var arr = eval(data);
            console.log(arr);
            var typespan = "typespan_" + i;
            var titlespan = "titlespan_" + i;
            var contentspan = "contentspan_" + i;
            var timespan = "timespan_" + i;
            //$('#eached').prepend("<tr><td><span id='typespan'></span></td><td><span id='titlespan'></span></td><td><span id='contentspan'></span></td><td><span id='timespan'></span></td><td><button class=\"btn btn-info btn-xs\">修改</button>&nbsp;<button  class=\"btn-xs btn btn-danger delete\">删除</button></td></tr>");
            $('#eached').prepend("<tr><td><span id='typespan'></span></td><td><span id='titlespan'></span></td><td><span id='contentspan'></span></td><td><span id='timespan'></span></td></tr>");

            $('#typespan').attr('id', typespan);
            $('#titlespan').attr('id', titlespan);
            $('#contentspan').attr('id', contentspan);
            $('#timespan').attr('id', timespan);
            $('#' + typespan).text(arr[0]);
            $('#' + titlespan).text(arr[1]);
            $('#' + contentspan).text(arr[2]);
            $('#' + timespan).text(arr[3]);

        });



        //不跳转，html内form表单去掉了。在提交后清空表单内容
        $("#newskind").val("");
        $("#newstitle").val("");
        $("#newscontent").val("");
        $("#newstime").val("");

        alert("添加成功");
        $(".cont1").css("display", "none");
        $(".cont2").css("display", "block");


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
        for (var i = 0; i < arr.length; i++) {
            var typespan = "typespan_" + i;
            var titlespan = "titlespan_" + i;
            var contentspan = "contentspan_" + i;
            var timespan = "timespan_" + i;
            
            //$('#eached').prepend("<tr><td><span id='typespan'></span></td><td><span id='titlespan'></span></td><td><span id='contentspan'></span></td><td><span id='timespan'></span></td><td><button class=\"btn btn-info btn-xs\">修改</button>&nbsp;<button  class=\"btn-xs btn btn-danger delete\">删除</button></td></tr>");
            $('#eached').prepend("<tr><td><span id='typespan'></span></td><td><span id='titlespan'></span></td><td><span id='contentspan'></span></td><td><span id='timespan'></span></td></tr>");
            
            $('#typespan').attr('id', typespan);
            $('#' + typespan).text(arr[i].newstype);
            $('#titlespan').attr('id', titlespan);
            $('#' + titlespan).text(arr[i].newstitle);
            $('#contentspan').attr('id', contentspan);
            $('#' + contentspan).text(arr[i].newscontent);
            $('#timespan').attr('id', timespan);
            $('#' + timespan).text(arr[i].newstime);
        }
    })


})

$(function() {    
    $("#eached").on("click",  ".btn-danger",  function(event) {        
        console.log("删除")
        var bo = confirm("是否确定删除该条新闻")
        if (bo) {
            $(this).parent().parent().remove()    
        }
    });
});


// console.log($(".btn-danger").length)




// $(document).ready(function() {
//     console.log(12)

//     $("btn-danger").each(function(){
//         $(this).bind("click",function(){
//             alert(222)
//         })
//     })
//     console.log($(".btn-danger").length)
//     console.log($("div").length)
//     // .bind("click", function() {

//     //     console.log($(this).parent())
//     //    
//     // })
// })


var num = 1;
var yun = 1;
var sum = " ";
while(true){
    if(yun == 1){
        sum = sum + "+"+(num * yun);
    }else if(yun == -1){
        sum = sum +(num * yun);
    }
   
    num += 2;
    yun *= -1;
    if(num>101){break}
}

    console.log(sum);









/**
 * Created by Empty on 16/3/31.
 */


$(window).on("load", function() {
    waterfull();
    var dataInt = {
        "data": [{ "src": "1.gif" }, { "src": "2.gif" }, { "src": "3.gif" }, { "src": "4.gif" }, { "src": "5.gif" }, { "src": "6.gif" },
            { "src": "7.gif" }, { "src": "8.gif" }, { "src": "9.gif" }, { "src": "10.gif" }, { "src": "11.gif" }, { "src": "12.gif" },
            { "src": "13.gif" }, { "src": "14.gif" }, { "src": "15.gif" }, { "src": "16.gif" }, { "src": "17.gif" }, { "src": "18.gif" },
            { "src": "19.gif" }, { "src": "20.gif" }, { "src": "21.gif" }, { "src": "22.gif" }, { "src": "23.gif" }, { "src": "24.gif" },
            { "src": "25.gif" }, { "src": "26.gif" }, { "src": "27.gif" }, { "src": "28.gif" }, { "src": "29.gif" }, { "src": "30.gif" },
            { "src": "31.gif" }, { "src": "32.gif" }, { "src": "33.gif" }, { "src": "34.gif" }, { "src": "35.gif" }, { "src": "36.gif" },
            { "src": "37.gif" }, { "src": "38.gif" }, { "src": "39.gif" }, { "src": "40.gif" }
        ]

    }
    $(window).on("scroll", function() { //检测是否继续加载
        if (checkScrollSlide) {
            $.each(dataInt.data, function(key, value) {
                var oBox = $("<div>").addClass("box").appendTo($("#continaer"));       //添加元素
                var oPic = $("<div>").addClass("pic").appendTo($(oBox));
                $('<img>').attr('src', "images/" + $(value).attr('src')).appendTo($(oPic));
            })
            waterfull();
        };
    
    })

})



function waterfull() {
    var boxs = $('.box'); //获取到所有class是box的div
    var w = boxs.eq(0).outerWidth(); //获取到div的宽度
    var cols = Math.floor($(window).width() / w); //计算屏幕可放置的列数,用屏幕的宽度除以div的宽度
    $('#continaer').width(w * cols).css('margin', '0 auto'); //设置外层div的宽度,并且居中处理
    var hArr = [];
    boxs.each(function(index, value) { //遍历所有box div
        var h = boxs.eq(index).outerHeight();
        if (index < cols) {
            hArr[index] = h; //把第一行的高度遍历出数组,放置在 变量h中
        } else {
            var minH = Math.min.apply(null, hArr); //获取到最小的高度
            var minHIndex = $.inArray(minH, hArr); //判minH在hArr中的位置
            $(value).css({
                'position': 'absolute',
                'left': minHIndex * w + 'px',
                'top': minH + 'px'
            });
            hArr[minHIndex] += boxs.eq(index).outerHeight(); //叠加高度
        }
    })
}





//检测滚动条滑动到什么位置，判断当最后一张图片出现一半的时候触发加载事件
function checkScrollSlide() {
    var $lastBox = $(".box").last();
    var lastBoxDis = $lastBox.offset().top + Math.floor($lastBox.outerHeight() / 2);
    var scrollTop = $(window).scrollTop();
    var documentH = $(window).height();
    return (lastBoxDis < scrollTop + documentH) ? true : false

}

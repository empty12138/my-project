/**
 * Created by EMPTY on 16/3/26.
 */


//下拉菜单的显示隐藏
$(document).ready(function() {
    $("nav,.headbot_nav_down").mouseover(function() { //设置下拉导航隐藏显示
        $(".headbot_nav_down").show()
    }).mouseleave(function() {
        $(".headbot_nav_down").hide()
    });
    //鼠标滑过导航文字,高亮下来菜单对应选项
    $("#head_nav li").each(function(index) {
        $(this).mouseover(function() {
            $(".headbot_nav_down ul.headbot_nav_down_background").removeClass("headbot_nav_down_background");
            $(".headbot_nav_down ul").eq(index).addClass("headbot_nav_down_background");
        });
    });
    //鼠标在下拉菜单中滑动,变换高亮
    $(".headbot_nav_down ul").each(function(index) {
        $(this).mouseover(function() {
            $(".headbot_nav_down ul.headbot_nav_down_background").removeClass("headbot_nav_down_background");
            $(".headbot_nav_down ul").eq(index).addClass("headbot_nav_down_background");
        });
    });

    //鼠标滑过左侧菜单,弹出详细课程(左侧下拉菜单)

    $(".muen li").each(function(index) {
        $(this).mouseenter(function() {
            $(".muen_more").eq(index).addClass("muen_show");
            $(".muen li").eq(index).css({
                "border-left": "2px solid #35b550",
                "padding-left": "18px",
                "border-right": "0"
            });
            $(".muen li a").eq(index).css("color", "#35b550");
            $(".muen ul li span").eq(index).css("display", "none");
        }).mouseleave(function() {
            $(".muen_more").eq(index).removeClass("muen_show");
            $(".muen li").eq(index).css({
                "border-left": "1px solid #dfdfdf",
                "padding-left": "15px",
                "border-right": "1px solid #dfdfdf"
            });
            $(".muen li a").eq(index).css("color", "#333");
            $(".muen ul li span").eq(index).css("display", "block");
        });
    });
    $(".muen_more").each(function(index) {
        $(this).mouseenter(function() {
            $(this).addClass("muen_show");
            $(".muen li").eq(index).css({
                "border-left": "2px solid #35b550",
                "padding-left": "18px",
                "border-right": "0"
            });
            $(".muen li a").eq(index).css("color", "#35b550");
            $(".muen ul li span").eq(index).css("display", "none");
        }).mouseleave(function() {
            $(this).removeClass("muen_show");
            $(".muen li").eq(index).css({
                "border-left": "1px solid #dfdfdf",
                "padding-left": "15px",
                "border-right": "1px solid #dfdfdf"
            });
            $(".muen li a").eq(index).css("color", "#333");
            $(".muen ul li span").eq(index).css("display", "block");
        });
    });

});


//banner轮播滚动效果
$(document).ready(function() {

    var i = 0;
    var clone = $(".ch_banner li").first().clone(); //复制一个图片
    $(".ch_banner").append(clone); //将复制的图片添加到banner中
    var size = $(".ch_banner li").size(); //获得banner的个数
    $(".banner_num li").first().addClass("banner_on"); //默认第一个底下白条active

    //鼠标点击白条的效果,和banner的滑动
    $(".banner_num li").each(function(index) {
        $(this).click(function() {
            $(this).addClass("banner_on").siblings().removeClass("banner_on");
            $(".ch_banner").animate({ "left": -index * 560 + "px" }, 500)
        })
    });
    //定时器的设定和关闭
    var time = setInterval(moveL, 3500);
    $(".content_fir_middle_top").hover(function() {
        clearInterval(time)
    }, function() {
        time = setInterval(moveL, 3500);
    });

    //左右滑动按键的效果
    $(".banner_right").click(function() {
        moveL()
    });

    $(".banner_left").click(function() {
        moveR()
    });
    //左滑动的过程封装
    function moveL() {
        i++;
        if (i == size) {
            $(".ch_banner").css("left", 0);
            i = 1
        }
        $(".ch_banner").stop().animate({ "left": -i * 560 + "px" }, 500);
        if (i == size - 1) {
            $(".banner_num li").eq(0).addClass("banner_on").siblings().removeClass("banner_on");
        }
        $(".banner_num li").eq(i).addClass("banner_on").siblings().removeClass("banner_on");
    }

    //右滑动的过程封装
    function moveR() {
        i--;
        if (i == -1) {
            $(".ch_banner").css("left", -(size - 1) * 560 + "px");
            i = size - 2
        }
        $(".ch_banner").animate({ "left": -i * 560 + "px" }, 500);
        $(".banner_num li").eq(i).addClass("banner_on").siblings().removeClass("banner_on");
    }


    //banner浮动左右按钮
    $(".content_fir_middle_top").mouseenter(function() {
        $(".banner_left,.banner_right").fadeIn(500)
    }).mouseleave(function() {
        $(".banner_left,.banner_right").fadeOut(500)
    });

});

//banner下面的课程滚动
$(document).ready(function() {
    var i = 0;

    var clone2 = $(".content_fir_middle_bottom ul li").clone();
    $(".content_fir_middle_bottom ul").append(clone2);
    var size2 = $(".content_fir_middle_bottom ul li").size();
    $(".bbr").click(function() {
        i++;
        if (i == size2 / 2 + 1) {
            $(".content_fir_middle_bottom ul").css("left", 0);
            i = 1
        }
        $(".content_fir_middle_bottom ul").animate({ "left": -i * 186 }, 500)
    });
    $(".bbl").click(function() {
        i--;
        if (i == -1) {
            $(".content_fir_middle_bottom ul").css("left", -size2 / 2 * 186);
            i = size2 / 2 - 1
        }
        $(".content_fir_middle_bottom ul").animate({ "left": -i * 186 }, 500)
    })

});


$(document).ready(function() {


    //banner右下变的下拉菜单


    $(".conrightbot-star li").each(function(index) {
        $(this).mouseenter(function() {
            $(".conrightbot_list").css("display", "block");
            $("#crblist li").eq(index).addClass("crblist_active");
            $("div[class^='conrightbot_con']").eq(index).addClass("conrightbot_show")
        });
        $(".conrightbot_list ").mouseleave(function() {
            $(this).css("display", "none");
            $("#crblist li").eq(index).removeClass("crblist_active");
            $("div[class^='conrightbot_con']").eq(index).removeClass("conrightbot_show")
        });
    });

    $("#crblist li").each(function(index) {
        $(this).mouseenter(function() {
            $('#crblist li').removeClass("crblist_active");
            $(this).addClass("crblist_active");
            $("div[class^='conrightbot_con']").removeClass("conrightbot_show");
            $("div[class^='conrightbot_con']").eq(index).addClass("conrightbot_show")
        });
    });


    //    公开课内容 翻页效果
    $(".cont_openlesson_weekday a").each(function(index) {
        $(this).mouseenter(function() {
            $(".cont_openlesson_weekday a").removeClass("openlesson_active");
            $(this).addClass("openlesson_active");
            $(".openlesson_con").removeClass("openlesson_show");
            $(".openlesson_con").eq(index).addClass("openlesson_show")
        })
    });


    //课程推荐翻页效果
    $(".reco_nav a").each(function(index) {
        $(this).mouseenter(function() {
            $(".reco_nav a").removeClass("reco_active");
            $(this).addClass("reco_active");
            $(".reco_lesson").removeClass("recolesson_show");
            $(".reco_lesson").eq(index).addClass("recolesson_show")
        })
    });


});


//合作企业
$(document).ready(function() {
    var i = 0;
    var clone3 = $(".company_conin li").clone();
    $(".company_conin ul").append(clone3);
    var size3 = $(".company_conin li").size();

    $(".ccr").click(function() {
        i++;
        if (i == size3 / 2 + 1) {
            $(".company_conin ul").css("left", 0);
            i = 1
        }
        $(".company_conin ul").animate({ "left": -i * 158 }, 500)
    });
    $(".ccl").click(function() {
        i--;
        if (i == -1) {
            $(".company_conin ul").css("left", -size3 / 2 * 158);
            i = size3 / 2 - 1
        }
        $(".company_conin ul").animate({ "left": -i * 158 }, 500)
    })

});



//合作院校

$(document).ready(function() {
    var i = 0;
    var clone4 = $(".school_conin li").clone();
    $(".school_conin ul").append(clone4);
    var size4 = $(".school_conin li").size();

    $(".scr").click(function() {
        i++;
        if (i == size4 / 2 + 1) {
            $(".school_conin ul").css("left", 0);
            i = 1
        }
        $(".school_conin ul").animate({ "left": -i * 133 }, 500)
    });
    $(".scl").click(function() {
        i--;
        if (i == -1) {
            $(".school_conin ul").css("left", -size4 / 2 * 133);
            i = size4 / 2 - 1
        }
        $(".school_conin ul").animate({ "left": -i * 133 }, 500)
    })

});

//底部微信弹框
$(document).ready(function() {
    $(".address_weixin").hover(function() {
        $(".alert_weixin").css("display", "block")
    }, function() {
        $(".alert_weixin").css("display", "none")
    })
});

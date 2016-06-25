//使用单例模式。
$(document).ready(function() {
    set.init(); //设置
    more.init(); //更多产品
    massage.init(); //导航消息按钮
    turntop.init(); //返回顶部
    searchtab.init() //搜索框下方的标签切换
    searchlive.init() //滚动下来后弹出搜索框
    changeSkin.init(); //换肤界面
    skinImgTab.init(); //切换皮肤模式
    skinImgChange.init(); //换肤，并记录localStorage
})  

//设置下拉菜单
var set = {
    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var time = null;
        var me = this;
        me.settoggle = $("#set");
        me.stiltoggle = $('.set');
    },
    bind: function() {
        var me = this;
        me.settoggle.mouseenter(function() {
            me.show()
        });
        me.settoggle.mouseleave(function() {
            me.hide()
        });
        me.stiltoggle.mouseenter(function() {
            clearTimeout(time)
        });
        me.stiltoggle.mouseleave(function() {
            me.hide()
        })
    },
    hide: function() {
        time = setTimeout(function() {
            $(".set").css("display", "none")
        }, 300)
    },
    show: function() {
        $(".set").css("display", "block")
    }
}

//更多
var more = {
    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        me.toggle = $('#more');
        me.sel = $('.more');
    },
    bind: function() {
        var me = this
        me.toggle.mouseenter(function() {
            me.show()
        })
        me.sel.mouseleave(function() {
            me.hide()
        })
    },
    show: function() {
        $(".more").show()
    },
    hide: function() {
        $(".more").hide()
    }
}

//导航消息按钮
var massage = {
    init: function() {
        this.render()
        this.bind()
    },
    render: function() {
        var me = this;
        me.btn = $(".nav_left ul li").eq(3);
    },
    bind: function() {
        var me = this;
        me.btn.click(function() {
            me.toggle()
        })
    },
    toggle: function() {
        $(".nav_massage").toggle()
    }
}

//滚动下来后弹出搜索框
var searchlive = {
    init: function() {
        this.bind()
    },
    bind: function() {
        var me = this;
        window.onscroll = function() {
            me.hide()
        }
    },
    toph: function() {
        var scrollHeight = $(window).scrollTop();
        return scrollHeight;
    },
    hide: function() {
        var me = this;
        if (me.toph() > 185) {
            $("#floatsearch").css("display", "block")
        } else {
            $("#floatsearch").css("display", "none")
        }
    }

}

//搜索框下方的标签切换
var searchtab = {
    init: function() {
        this.render()
        this.bind()
    },
    render: function() {
        var me = this;
        me.tab = $(".content .con_nav ul li")
    },
    bind: function() {
        var me = this;
        me.tab.each(function(index) {
            $(this).click(function() {
                $(".content .con_nav ul li").removeClass("con_active");
                $(this).addClass("con_active");
                $("div.con_con").removeClass("con_show");
                $("div.con_con").eq(index).addClass("con_show");
            })
        })

    }
}

//返回顶部
var turntop = {
    init: function() {
        this.render()
        this.bind()
    },
    render: function() {
        var me = this;
        me.btn = $(".turn_top");
    },
    bind: function() {
        var me = this;
        me.btn.click(function() {
            me.trun()
        });
    },
    trun: function() {
        var speed = 200; //滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
    }
}




//换肤界面下拉
var changeSkin = {
        init: function() {
            this.render()
            this.bind()
        },
        render: function() {
            var me = this;
            me.btn = $("#skin");
        },
        bind: function() {
            var me = this;
            me.btn.click(function() { me.show(event) })
            $("body").click(function() { me.hide() });
            $("#shouqi").click(function() { me.hide() });
            $(".skin").click(function(event) { event.stopPropagation(); })
        },
        show: function(event) {
            event.stopPropagation();
            $(".skin").slideDown(100)
        },
        hide: function() {
            $(".skin").slideUp(100)
        }
    }
    //切换皮肤模式
var skinImgTab = {
        init: function() {
            this.bind()
        },
        bind: function() {
            $(".skin_head ul li").each(function(index) {
                $(this).click(function() {
                    $(".skin_head ul li").removeClass("skin_active");
                    $(this).addClass("skin_active");
                    $(".skin_con").removeClass("skin_show");
                    $(".skin_con").eq(index).addClass("skin_show");
                })
            });
        }
    }
    //换肤，并记录localStorage
var skinImgChange = {
    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        if (localStorage.getItem("background")) {
            $("body").css({
                "background-image": "url(" + localStorage.getItem("background") + ")"
            })
        }
    },
    bind: function() {
        var me = this;
        $(".skin_con ul li img").each(function(index) {
            $(this).click(function() {
                var ground = $(this).attr('src');
                $("body").css({
                    "background-image": "url(" + ground + ")"
                });
                me.storage("background", ground);
            })
        });
    },
    storage: function(name, value) {
        localStorage.setItem(name, value);
        return localStorage.getItem(name);
    }
}

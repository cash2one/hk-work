$(document).ready(function() {
    var URL = window.location.href;

    //列表
    $(".list_conter_nav a").click(function() {
        $(".list_conter_nav a").removeClass("hover");
        var listbz = $(".list_conter_nav a").index(this);
        $(".list_conter_nav a:eq(" + listbz + ")").addClass("hover");
    })

    var lylxtu = $(".lylxclass3_left ul li");
    lylxtu.hover(function() {
        $(".lylxclass3_right .lylxclass3_right_lb").eq(lylxtu.index(this)).show().siblings().hide();
    })

    //首页幻灯片按钮显示隐藏
    $(".fx_banner_common").hide();
    $(".ic_content").hover(function() {
        $(".fx_banner_common").stop().fadeIn(100);
    }, function() {
        $(".fx_banner_common").fadeOut(100);
    })

    //品牌
    $(".yypp_conter3tp ul li:eq(0)").addClass("classqh1");
    $(".yypp_conter3tp ul li:eq(0)").css({ "background-image": "url(/include/images/img123.png)" });
    $(".yypp_conter3tp ul li:eq(1)").addClass("classqh2");
    $(".yypp_conter3tp ul li:eq(1)").css({ "background-image": "url(/include/images/img124.png)" });
    $(".yypp_conter3tp ul li:eq(2)").addClass("classqh3");
    $(".yypp_conter3tp ul li:eq(2)").css({ "background-image": "url(/include/images/img128.png)" });

    //技术
    $(".jishu_conter ul li").hover(function() {
        var jishupage = $(".jishu_conter ul li").index(this);
        $(".jishu_conter ul li:eq(" + jishupage + ") i").fadeIn(300);
    }, function() {
        var jishupage = $(".jishu_conter ul li").index(this);
        $(".jishu_conter ul li:eq(" + jishupage + ") i").fadeOut(300);
    })

    //评论
    $(".pinglun_right2 ul li i").click(function() {
        var pinglunlia = $(".pinglun_right2 ul li i").index(this);
        //var pinglunback = $(".pinglun_right2 ul li i:eq("+pinglunlia+")").html();
        if (pinglunlia < 5) {
            for (i = 0; i < 5; i++) {
                $(".pinglun_right2 ul li i:eq(" + i + ")").empty();
            }
            for (i = 0; i <= pinglunlia; i++) {
                $(".pinglun_right2 ul li i:eq(" + i + ")").html("<span></span>");
            }
        } else if (5 <= pinglunlia && pinglunlia < 10) {
            for (i = 5; i < 10; i++) {
                $(".pinglun_right2 ul li i:eq(" + i + ")").empty();
            }
            for (i = 5; i <= pinglunlia; i++) {
                $(".pinglun_right2 ul li i:eq(" + i + ")").html("<span></span>");
            }
        } else if (10 <= pinglunlia && pinglunlia < 15) {
            for (i = 10; i < 15; i++) {
                $(".pinglun_right2 ul li i:eq(" + i + ")").empty();
            }
            for (i = 10; i <= pinglunlia; i++) {
                $(".pinglun_right2 ul li i:eq(" + i + ")").html("<span></span>");
            }
        } else if (15 <= pinglunlia && pinglunlia < 20) {
            for (i = 15; i < 20; i++) {
                $(".pinglun_right2 ul li i:eq(" + i + ")").empty();
            }
            for (i = 15; i <= pinglunlia; i++) {
                $(".pinglun_right2 ul li i:eq(" + i + ")").html("<span></span>");
            }
        }
    })
})

$(".yypp_conter3tp ul li.qhper").live({
    click: function() {
        if ($(".yypp_conter3tp ul li.qhper").hasClass("qh1")) {
            var qhwei = 0;
            $(".yypp_conter3tp ul li:eq(2)").animate({ left: '512px' }, 300)
            $(".yypp_conter3tp ul li:eq(2)").css({ "background-image": "url(/include/images/img125.png)" });
            $(".yypp_conter3tp ul li:eq(2)").removeClass("classqh3 zindex5").addClass("classqh2 qhnext");
            $(".yypp_conter3tp ul li:eq(1)").animate({ left: '0px' }, 500)
            $(".yypp_conter3tp ul li:eq(1)").removeClass("classqh2 qhnext").addClass("classqh1 qhper");
            $(".yypp_conter3tp ul li:eq(" + qhwei + ")").css({ "background-image": "url(/include/images/img126.png)" });
            $(".yypp_conter3tp ul li:eq(" + qhwei + ")").addClass("zindex5");
            $(".yypp_conter3tp ul li:eq(" + qhwei + ")").animate({ left: '175px' }, 400)
            $(".yypp_conter3tp ul li:eq(" + qhwei + ")").removeClass("classqh1 qhper").addClass("classqh3");

        } else if ($(".yypp_conter3tp ul li.qhper").hasClass("qh2")) {
            var qhwei = 1;
            $(".yypp_conter3tp ul li:eq(0)").animate({ left: '512px' }, 300)
            $(".yypp_conter3tp ul li:eq(0)").css({ "background-image": "url(/include/images/img123.png)" });
            $(".yypp_conter3tp ul li:eq(0)").removeClass("classqh3 zindex5").addClass("classqh2 qhnext");
            $(".yypp_conter3tp ul li:eq(2)").animate({ left: '0px' }, 500)
            $(".yypp_conter3tp ul li:eq(2)").removeClass("classqh2 qhnext").addClass("classqh1 qhper");
            $(".yypp_conter3tp ul li:eq(" + qhwei + ")").css({ "background-image": "url(/include/images/img127.png)" });
            $(".yypp_conter3tp ul li:eq(" + qhwei + ")").addClass("zindex5");
            $(".yypp_conter3tp ul li:eq(" + qhwei + ")").animate({ left: '175px' }, 400)
            $(".yypp_conter3tp ul li:eq(" + qhwei + ")").removeClass("classqh1 qhper").addClass("classqh3");

        } else if ($(".yypp_conter3tp ul li.qhper").hasClass("qh3")) {
            var qhwei = 2;
            $(".yypp_conter3tp ul li:eq(1)").animate({ left: '512px' }, 300)
            $(".yypp_conter3tp ul li:eq(1)").css({ "background-image": "url(/include/images/img124.png)" });
            $(".yypp_conter3tp ul li:eq(1)").removeClass("classqh3 zindex5").addClass("classqh2 qhnext");
            $(".yypp_conter3tp ul li:eq(0)").animate({ left: '0px' }, 500)
            $(".yypp_conter3tp ul li:eq(0)").removeClass("classqh2 qhnext").addClass("classqh1 qhper");
            $(".yypp_conter3tp ul li:eq(" + qhwei + ")").css({ "background-image": "url(/include/images/img128.png)" });
            $(".yypp_conter3tp ul li:eq(" + qhwei + ")").addClass("zindex5");
            $(".yypp_conter3tp ul li:eq(" + qhwei + ")").animate({ left: '175px' }, 400)
            $(".yypp_conter3tp ul li:eq(" + qhwei + ")").removeClass("classqh1 qhper").addClass("classqh3");
        }
    }
})

$(".yypp_conter3tp ul li.qhnext").live({
    click: function() {
        if ($(".yypp_conter3tp ul li.qhnext").hasClass("qh1")) {
            $(".yypp_conter3tp ul li:eq(1)").animate({ left: '0px' }, 300)
            $(".yypp_conter3tp ul li:eq(1)").css({ "background-image": "url(/include/images/img124.png)" });
            $(".yypp_conter3tp ul li:eq(1)").removeClass("classqh3 zindex5").addClass("classqh1 qhper");
            $(".yypp_conter3tp ul li:eq(2)").animate({ left: '512px' }, 500)
            $(".yypp_conter3tp ul li:eq(2)").removeClass("classqh1 qhper").addClass("classqh2 qhnext");
            $(".yypp_conter3tp ul li:eq(0)").css({ "background-image": "url(/include/images/img126.png)" });
            $(".yypp_conter3tp ul li:eq(0)").addClass("zindex5");
            $(".yypp_conter3tp ul li:eq(0)").animate({ left: '175px' }, 400)
            $(".yypp_conter3tp ul li:eq(0)").removeClass("classqh2 qhnext").addClass("classqh3");

        } else if ($(".yypp_conter3tp ul li.qhnext").hasClass("qh2")) {
            $(".yypp_conter3tp ul li:eq(2)").animate({ left: '0px' }, 300)
            $(".yypp_conter3tp ul li:eq(2)").css({ "background-image": "url(/include/images/img125.png)" });
            $(".yypp_conter3tp ul li:eq(2)").removeClass("classqh3 zindex5").addClass("classqh1 qhper");
            $(".yypp_conter3tp ul li:eq(0)").animate({ left: '512px' }, 500)
            $(".yypp_conter3tp ul li:eq(0)").removeClass("classqh1 qhper").addClass("classqh2 qhnext");
            $(".yypp_conter3tp ul li:eq(1)").css({ "background-image": "url(/include/images/img127.png)" });
            $(".yypp_conter3tp ul li:eq(1)").addClass("zindex5");
            $(".yypp_conter3tp ul li:eq(1)").animate({ left: '175px' }, 400)
            $(".yypp_conter3tp ul li:eq(1)").removeClass("classqh2 qhnext").addClass("classqh3");

        } else if ($(".yypp_conter3tp ul li.qhnext").hasClass("qh3")) {
            $(".yypp_conter3tp ul li:eq(0)").animate({ left: '0px' }, 300)
            $(".yypp_conter3tp ul li:eq(0)").css({ "background-image": "url(/include/images/img123.png)" });
            $(".yypp_conter3tp ul li:eq(0)").removeClass("classqh3 zindex5").addClass("classqh1 qhper");
            $(".yypp_conter3tp ul li:eq(1)").animate({ left: '512px' }, 500)
            $(".yypp_conter3tp ul li:eq(1)").removeClass("classqh1 qhper").addClass("classqh2 qhnext");
            $(".yypp_conter3tp ul li:eq(2)").css({ "background-image": "url(/include/images/img128.png)" });
            $(".yypp_conter3tp ul li:eq(2)").addClass("zindex5");
            $(".yypp_conter3tp ul li:eq(2)").animate({ left: '175px' }, 400)
            $(".yypp_conter3tp ul li:eq(2)").removeClass("classqh2 qhnext").addClass("classqh3");
        }
    }
})

// $(window).scroll(function() {
//     var articeheight = $(".center_artice").height(); //核心内容高度
//     var right1height = $(".center_right1").height(); //浮动内容高度
//     var topheight = $(".head_top").height() + $(".head_nav").height() + $(".head_banner").height() + $(".channel_path").height(); //浮动层以上内容高度
//     var fixedheight = right1height + topheight - $(window).height();
//     var fixedheight1 = articeheight + topheight - $(window).height();
//     var scrollTop = $(window).scrollTop(); //滚动条状态
//     $(".center_right").css({ "height": articeheight + "px" }); //设置浮动层父级高度

//     if (articeheight < right1height) {
//         $(".center_right").css({ "height": "auto" }); //设置浮动层父级高度
//         $(".center_right1").removeClass("classfixed");
//         $(".center_right1").removeClass("classabsolute");
//         return false;
//     } else {
//         if (scrollTop <= topheight) {
//             $(".center_right1").removeClass("classfixed");
//             $(".center_right1").removeClass("classabsolute");

//         } else if (scrollTop > 484) {
//             $(".center_right1").removeClass("classabsolute");
//             $(".center_right1").addClass("classfixed");

//         } else if (scrollTop > fixedheight1) {
//             $(".center_right1").removeClass("classfixed");
//             $(".center_right1").addClass("classabsolute");
//         }
//     }
// })

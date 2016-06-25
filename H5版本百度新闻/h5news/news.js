$(document).ready(function() {

    $("#rec").on("click", function() {
        $('.news_nav a').removeClass('active');
        $(this).addClass('active');
        $.post("../php/readnews.php", { type: "推荐" }, function(data) {
            $('#con_list').empty()
            var arr = eval(data);
            for (var i = 0; i < arr.length; i++) {
                var textin = '<li>' + '<h1>' + arr[i].newstitle + '</h1>' + '<p>' + arr[i].newscontent + '</p>' + '<span>' + arr[i].newstime + '</span>' + '</li>'
                $('#con_list').prepend(textin);
            }
        })
    })


    $("#soc").on("click", function() {
        $('.news_nav a').removeClass('active');
        $(this).addClass('active');
        $.post("../php/readnews.php", { type: "社会" }, function(data) {
            $('#con_list').empty()
            var arr = eval(data);
            for (var i = 0; i < arr.length; i++) {
                var textin = '<li>' + '<h1>' + arr[i].newstitle + '</h1>' + '<p>' + arr[i].newscontent + '</p>' + '<span>' + arr[i].newstime + '</span>' + '</li>'
                $('#con_list').prepend(textin);
            }
        })
    })

    $("#sci").on("click", function() {
        $('.news_nav a').removeClass('active');
        $(this).addClass('active');
        $.post("../php/readnews.php", { type: "科技" }, function(data) {
            $('#con_list').empty()
            var arr = eval(data);
            for (var i = 0; i < arr.length; i++) {
                var textin = '<li>' + '<h1>' + arr[i].newstitle + '</h1>' + '<p>' + arr[i].newscontent + '</p>' + '<span>' + arr[i].newstime + '</span>' + '</li>'
                $('#con_list').prepend(textin);
            }
        })
    })


    $("#spo").on("click", function() {
        $('.news_nav a').removeClass('active');
        $(this).addClass('active');
        $.post("../php/readnews.php", { type: "娱乐" }, function(data) {
            $('#con_list').empty()
            var arr = eval(data);
            for (var i = 0; i < arr.length; i++) {
                var textin = '<li>' + '<h1>' + arr[i].newstitle + '</h1>' + '<p>' + arr[i].newscontent + '</p>' + '<span>' + arr[i].newstime + '</span>' + '</li>'
                $('#con_list').prepend(textin);
            }
        })
    })

    $("#ent").on("click", function() {
        $('.news_nav a').removeClass('active');
        $(this).addClass('active');
        $.post("../php/readnews.php", { type: "军事" }, function(data) {
            $('#con_list').empty()
            var arr = eval(data);
            for (var i = 0; i < arr.length; i++) {
                var textin = '<li>' + '<h1>' + arr[i].newstitle + '</h1>' + '<p>' + arr[i].newscontent + '</p>' + '<span>' + arr[i].newstime + '</span>' + '</li>'
                $('#con_list').prepend(textin);
            }
        })
    })


    $("#mil").on("click", function() {
        $('.news_nav a').removeClass('active');
        $(this).addClass('active');
        $.post("../php/readnews.php", { type: "体育" }, function(data) {
            $('#con_list').empty()
            var arr = eval(data);
            for (var i = 0; i < arr.length; i++) {
                var textin = '<li>' + '<h1>' + arr[i].newstitle + '</h1>' + '<p>' + arr[i].newscontent + '</p>' + '<span>' + arr[i].newstime + '</span>' + '</li>'
                $('#con_list').prepend(textin);
            }
        })
    })

    $.post("../php/readnews.php", { type: "推荐" }, function(data) {
        var arr = eval(data);
        for (var i = 0; i < arr.length; i++) {
            var textin = '<li>' + '<h1>' + arr[i].newstitle + '</h1>' + '<p>' + arr[i].newscontent + '</p>' + '<span>' + arr[i].newstime + '</span>' + '</li>'
            $('#con_list').prepend(textin);
        }
    })

})

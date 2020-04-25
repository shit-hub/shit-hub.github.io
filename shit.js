$(document).ready(function() {
    var wid = $("body").width();
    if (wid < 640) {
        $(".wd").attr('autocomplete', 'off');
    }else{
        $(".wd").focus();
    }

    $(".search li").click(function() {
        var dt = $(this).attr('data-s');
        wd = $(".wd").val();
        if (dt == "google") {
            if (wd == "" || wd == null) {
                window.location.href = "https://www.google.com/?hl=zh";
            } else {
                $("form").attr('action', 'https://www.google.com/search?hl=zh');
                $(".wd").attr("name","q");
                $(".t").val("g");
                $("form").submit();
            }
        } else {
            if (wd == "" || wd == null) {
                window.location.href = "https://www.baidu.com/?tn=simple";
            } else {
                $("form").attr('action', 'https://www.baidu.com/s?ie=utf-8');
                $(".wd").attr("name","wd");
                $(".t").val("b");
                $("form").submit();
            }
        }
    });

    $("#menu").click(function(event) {
        $(this).toggleClass('on');
        $(".list").toggleClass('closed');
        $(".wth").toggleClass('hidden');
    });
    $("#content").click(function(event) {
        $(".on").removeClass('on');
        $(".list").addClass('closed');
        $(".wth").removeClass('hidden');
    });
});

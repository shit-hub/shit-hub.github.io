$(document).ready(function() {
    var wid = $("body").width();
    if (wid < 640) {
        $(".wd").attr('autocomplete', 'off');
    }else{
        $(".wd").focus();
    }

    $("#search").click(function() {
        wd = $(".wd").val()
        index = wd.split(":")
        switch(index[0]) {
            case "go" :
                $("form").attr('action', 'https://pkg.go.dev/search?');
                $(".wd").attr("name","q");
                $(".wd").val(wd.substr(index[0].length+1))
                $("form").submit();
                break;
            case "rust" :
                $("form").attr('action', 'https://docs.rs/releases/search?')
                $(".wd").attr("name","query");
                $(".wd").val(wd.substr(index[0].length+1))
                $("form").submit();
                break;
            case "py" :
            case "python" :
                $("form").attr('action', 'https://docs.python.org/3/search.html?')
                $(".wd").attr("name","q");
                $(".wd").val(wd.substr(index[0].length+1))
                $("form").submit();
                break;
            case "docker" :
                $("form").attr('action', 'https://docs.docker.com/search/?')
                $(".wd").attr("name","q");
                $(".wd").val(wd.substr(index[0].length+1))
                $("form").submit();
                break;
            case "linux" :
                location.assign('https://jaywcjlove.gitee.io/linux-command/list.html#!kw=' + wd.substr(index[0].length+1))
                return false;
            case "http" :
            case "https" :
                if (index[1].startsWith("//")) {
                    location.assign(wd)
                    return false;
                }
                break;
            default:
                $("form").attr('action', 'https://goobe.io/search.aspx?')
                $(".wd").attr("name","k");
                $("form").submit();
                break;
        }
    })

    $(".search li").click(function() {
        var dt = $(this).attr('data-s');
        wd = $(".wd").val();
        if (dt == "google") {
            if (wd == "" || wd == null) {
                window.location.href = "https://www.google.com/?hl=zh";
            } else {
                $("form").attr('action', 'https://www.google.com/search?hl=zh');
                $(".wd").attr("name","q");
                $("form").submit();
                
            }
        } else if (dt == "baidu") {
            if (wd == "" || wd == null) {
                window.location.href = "https://www.baidu.com/?tn=simple";
            } else {
                $("form").attr('action', 'https://www.baidu.com/s?ie=utf-8');
                $(".wd").attr("name","wd");
                $("form").submit();
            }
        } else if (dt == "bing") {
            if (wd == "" || wd == null) {
                window.location.href = "https://cn.bing.com/?scope=web";
            } else {
                $("form").attr('action', 'https://cn.bing.com/search?scope=web');
                $(".wd").attr("name","q");
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

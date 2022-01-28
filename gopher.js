$(document).ready(function () {
    var wid = $("body").width();
    if (wid < 640) {
        $(".wd").attr('autocomplete', 'off');
    } else {
        $(".wd").focus();
    }

    $("#search").click(function () {
        var wd = $(".wd").val();
        if (wd == "" || wd == null) {
            window.location.href = "https://go.dev";
            return false;
        } else {
            wd = wd.replace(/：/g, ":");
            index = wd.split(":");
            if (index.length > 1) {
                key = index[0].toLowerCase()
                switch (key) {
                    case "bd":
                    case "baidu":
                        $("form").attr('action', 'https://www.baidu.com/s?ie=utf-8');
                        $(".wd").attr("name","wd");
                        $("form").submit();
                        break
                    case "gg":
                    case "google":
                        $("form").attr('action', 'https://www.google.com/search?hl=zh');
                        $(".wd").attr("name","q");
                        $("form").submit();
                        break
                    case "go" :
                    case "golang":
                        $("form").attr('action', 'https://pkg.go.dev/search?');
                        $(".wd").attr("name","q");
                        $(".wd").val(wd.substr(index[0].length+1))
                        $("form").submit();
                        break;
                    case "gh" :
                    case "github":
                        $("form").attr('action', 'https://github.com/search?');
                        $(".wd").attr("name","q");
                        $(".wd").val(wd.substr(index[0].length+1))
                        $("form").submit();
                        break;
                    case "so" :
                    case "stackoverflow":
                        $("form").attr('action', 'https://stackoverflow.com/search?');
                        $(".wd").attr("name","q");
                        $(".wd").val(wd.substr(index[0].length+1))
                        $("form").submit();
                        break;
                    case "yd":
                    case "youdao" :
                        location.assign('http://www.youdao.com/w/eng/' + wd.substr(index[0].length+1))
                        return false;
                    default:
                        $("form").attr('action', 'https://cn.bing.com/search?scope=web')
                        $(".wd").attr("name","q");
                        $("form").submit();
                        break;
                }
            }
        }
    })

    $("#rightmenu").click(function() {
        $("#leftmenu.on").removeClass('on'); 
        $(".leftlist").addClass('closed');

        $(this).toggleClass('on');
        $(".rightlist").toggleClass('closed');
        $(".wth").toggleClass('hidden');
    });

    $("#leftmenu").click(function() {
        $("#rightmenu.on").removeClass('on');
        $(".rightlist").addClass('closed');

        $(this).toggleClass('on');
        $(".leftlist").toggleClass('closed');
        $(".wth").toggleClass('hidden');
    });

    $("#content").click(function() {
        $(".on").removeClass('on');
        $(".rightlist").addClass('closed');
        $(".leftlist").addClass('closed');
        $(".wth").removeClass('hidden');
    });
})

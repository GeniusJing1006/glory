$(".icon-back").on("tap",function(){location.href="./info_developer.html"}),$(".info-content").on("tap",function(){$(this).parent(".info-cell").removeClass("info-after"),$(this).parent(".info-cell").children(".finish").children(".end").removeClass("finish_none")}),$(".info-content").blur(function(){$(this).parent(".info-cell").addClass("info-after"),$(this).parent(".info-cell").children(".finish").children(".end").addClass("finish_none")});
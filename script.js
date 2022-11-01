$(function(){
    var mainNav = $("nav.nav > ul > li");

    mainNav.on("mouseenter", function(){
        $(this).stop(true).find(".sub-nav").slideDown(200);
    }).on("mouseleave", function(){
        $(this).stop(true).find(".sub-nav").slideUp(200);
    });

    //slide

    var $sld = $(".slide-group");

    function sld(){
        $interval = setInterval(function(){
            slideAct();
        },3000);
    }
    function slideAct(){
        $sld.stop(true).animate({left:"-100%"},500, function(){
            $sld.css("left",0);
            $sld.append($sld.find(">div").eq(0));
        });
    }
    sld();

    //popup

    var popup = $("#popup");
    var btn = popup.find(".popup-contents button.btn");

    $("article.notice ul li:first-child").on("click", function(){
        popup.stop(true).fadeIn(300);
    });
    btn.on("click", function(){
        popup.stop(true).fadeOut(300);
    });
    
}); 
$(function(){ 
    let duration = 200;
    let activeSubMenu;
    
    $(".nav > ul > li").hover(
        function() {
            if($(this).children(".sub").is(":animated")) return;
            if(activeSubMenu) activeSubMenu.stop().slideUp(duration);
            activeSubMenu = $(this).children(".sub");
            activeSubMenu.stop().slideDown(duration);
        },
        function() {
            activeSubMenu.stop().slideDown(duration);
        }
    );

    // photo 슬라이드
    $("#photo ul li").hide().first().show();
    let i = 0;
    function slide (){
        if(i<2)i++;
        else i = 0;
        $("#photo ul li").fadeOut(1200);
        $("#photo ul li").eq(i).fadeIn(1200);
    };
    setInterval(slide, 3000)
});

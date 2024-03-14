$(function(){ 
    let duration = 200;
    $(".nav > ul > li").hover(
        // 1. #nav 요소 내의 li 요소에 마우스 커서가 들어가면
        function() { 
            if($(this).children(".sub").is(":animated")) return
            // 2. 해당 드롭 다운 메뉴가 보이도록 한다.
            $(this).children(".sub").slideDown(duration);
        },

        // 3. #nav 요소 내의 li 요소에서 마우스 커서가 나오면
        function() { 
            // 4. 해당 드롭 다운 메뉴를 사라지도록 한다.
            $(this).children(".sub").slideUp(duration);
        }
    )

    // photo 슬라이드
    $("#photo ul li").hide().first().show();
    var i=0;
    function slide (){
        if(i<2)i++;
        else i=0;
        $("#photo ul li").fadeOut(1200);
        $("#photo ul li").eq(i).fadeIn(1200);
    };
    setInterval(slide, 3000)
});
$(function() { 
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

    var $banner = $(".artist").find("ul");

    var $bannerWidth = $banner.children().outerWidth();//이미지의 폭
    var $length = $banner.children().length;//이미지의 갯수
    var rollingId;

    //정해진 초마다 함수 실행
    rollingId = setInterval(function() { rollingStart(); }, 2500);//다음 이미지로 롤링 애니메이션 할 시간차

    //마우스 오버시 롤링을 멈춘다.
    $banner.mouseover(function(){
        //중지
        clearInterval(rollingId);
        $(this).css("cursor", "pointer");
    });
    //마우스 아웃되면 다시 시작
    $banner.mouseout(function(){
        rollingId = setInterval(function() { rollingStart(); }, 2500);
        $(this).css("cursor", "default");
    });
    function rollingStart() {
        $banner.css("width", $bannerWidth * $length + "px");
        //alert(bannerHeight);
        //배너의 좌측 위치를 옮겨 준다.
        $banner.animate({left: - $bannerWidth + "px"}, 2500, 
        function() { //숫자는 롤링 진행되는 시간이다.
         //첫번째 이미지를 마지막 끝에 복사(이동이 아니라 복사)해서 추가한다.
         $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
         //뒤로 복사된 첫번재 이미지는 필요 없으니 삭제한다.
         $(this).find("li:first").remove();
         //다음 움직임을 위해서 배너 좌측의 위치값을 초기화 한다.
         $(this).css("left", 0);
         //이 과정을 반복하면서 계속 롤링하는 배너를 만들 수 있다.
        });
       }

        


    $(".newrel>ul>li>a").hover(
        function () { // mouseover
            $(".album>ul>li").attr("src","../image/album1.png");
        },
        function () { // mouseout
            $(this).attr("src","../image/album2.png");
        }
    );
//     <img src="기본 이미지 주소" onmouseover="this.src='마우스 오버 상태의 이미지 주소'"
// onmouseout="this.src='기본 이미지 주소'">

});

// 메뉴 안사라지고 그대로 있는거 원해.
// 클릭하면 되는거 해야겠다.

// $(function() { 
//     // 0. 요소 탐색 및 변수 선언
//     // 1. #nav 하위 요소인 a 요소를 클릭했을 때
//     // 2. 클릭한 요소의 드롭 다운 메뉴가 숨겨진 상태면
//     // 3. 보여지고 있는 드롭 다운 메뉴를 숨기고
//     // 4. 클릭한 요소의 드롭 다운 메뉴를 보이도록 한다.
//     // 5. 클릭한 요소의 드롭 다운 메뉴가 보여지는 상태이면
//     // 6. 클릭한 요소의 드롭 다운 메뉴를 숨긴다.
//     //------------------------------------------------------------
//     // 0. 요소 탐색 및 변수 선언
//     let $subMenus = $(".sub");
//     let duration = 200;
//     // 1. #nav 하위 요소인 a 요소를 클릭했을 때
//     $("#nav > ul > li > a").on("click", function() { 
//         // 클릭한 요소의 드롭 다운 메뉴
//         let $sub = $(this).show(".sub");

//         if(!$sub.length) return;

//         /*
//         // 2. 클릭한 요소의 드롭 다운 메뉴가 숨겨진 상태면
//         if($dropdown.is(":hidden")) {
//             // 3. 보여지고 있는 드롭 다운 메뉴를 숨기고
//             $dropdownMenus.filter(":visible").slideUp();
//             // 4. 클릭한 요소의 드롭 다운 메뉴를 보이도록 한다.
//             $dropdown.slideDown();
//         }
//         // 5. 클릭한 요소의 드롭 다운 메뉴가 보여지는 상태이면
//         else {
//             // 6. 클릭한 요소의 드롭 다운 메뉴를 숨긴다.
//             $dropdown.slideUp();
//         }
//         */

//         if($sub.is(":hidden")) {
//             $subMenus.filter(":visible").slideUp(duration);
//         }
        
//         $sub.slideToggle(duration);

//     });
// });
var bigPic = document.querySelector(".big");
var smallPics = document.querySelectorAll(".small");

for(var i = 0 ; i < smallPics.length; i++ ){
    smallPics[i].addEventListener("mouseover", changepic);
}
function changepic(){
    var smallPicAttribute = this.getAttribute("src");
    bigPic.setAttribute("src", smallPicAttribute);

}
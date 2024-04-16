$(function() { 
    // artist banner list
    let roller = document.querySelector('.list ul');
    roller.id = 'roller1'; 

    let clone = roller.cloneNode(true)
    clone.id = 'roller2';
    document.querySelector('.list').appendChild(clone);

    document.querySelector('#roller1').style.left = '0px';
    document.querySelector('#roller2').style.left = document.querySelector('.list ul').offsetWidth + 'px';

    roller.classList.add('original');
    clone.classList.add('clone');
    // artist banner list end

    // newrel
    let $titNames = $("#titname>li");
    let $alimg = $(".alimg");

    $titNames.on("mouseover", function(){
        let $this = $(this);

            $this.css({
                fontWeight:"700",
                textDecoration: "underline"
            })
            .siblings().css({
                textDecoration: "none",
                fontWeight:"400"
            });

        let targetId = $this.data("target");
            
        $alimg.css("display", "none")
                .filter(targetId).css("display", "block");
    });
});
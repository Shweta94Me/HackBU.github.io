$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
    $('.menu-item').click(function(){
        $('#menu-open').prop('checked', false);
        $('body').css('overflow-y','visible');
        $('.sm-container').css('opacity','1');
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
        $('.menu').css('opacity','0.7');
        } else {
        $('.menu').css('opacity','1');
        }
        });
    $("#menu-open").click(function(e, parameters) {

        var nonUI = false;
        try {
            nonUI = parameters.nonUI;
        } catch (e) {}
        var checked = nonUI ? !this.checked : this.checked;
        if(checked){
            $('.menu').css('opacity','1');
            $('body').css('overflow-y','hidden');
            $('.sm-container').css('opacity','0.2');
        }
        else{
            $('body').css('overflow-y','visible');
            if ($(window).scrollTop() >= 100) {
                $('.menu').css('opacity','0.7');
                } else {
                $('.menu').css('opacity','1');
                }
            // $('.menu').css('opacity','0.7');
            $('.sm-container').css('opacity','1');
            // $('body').css('back','rgba(0,0,0,0.4)');
        }
    });
    // $('.menu').hover(function(){
    //     $('.menu').css('opacity','1');
    // })
  });
// let $content = $('.sm-container')

// function showContent(selector){
//     $content.hide();
//     $(selector).show();

// }
// $('.sm-col.sm-navbar').on('click','.sm-button.sm-block.sm-black-row', function(e){
//     showContent(e.currentTarget.hash);
//     e.preventDefault();
// });

// showContent('#home');

// let slideIndex = 4;
// showDivs(slideIndex);

// function plusDivs(n){
//     showDivs(slideIndex += n);
// }

// function showDivs(n){
//     let i;
//     let x = document.getElementsByClassName("portfolio-col");
//     if (n > x.length) { slideIndex = 4}
//     if (n < 4) { slideIndex = x.length}
//     for (i = 0; i < x.length; i++){
//         x[i].style.display = "none";
//     }
//     i = 0;
//     while(i != 4){
//         x[slideIndex-1].style.display = "block";
//         slideIndex -= 1;
//         i += 1;
//     }
//     if (slideIndex === 0) { 
//         slideIndex = 4
//     }
//     else{
//         slideIndex = n;
//     }
// }

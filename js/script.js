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
            $('.sm-container').css('transition', 'opacity .5s ease-in-out');
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
    $('.sm-container').click(function(){
        $('#menu-open').prop('checked', false);
        $('body').css('overflow-y','visible');
        $('.sm-container').css('opacity','1');
    })
    // $('.menu').hover(function(){
    //     $('.menu').css('opacity','1');
    // })
  });
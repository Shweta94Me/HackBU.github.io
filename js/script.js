$(document).ready(function(){
    $('.menu-item').click(function(){
        $('.menu-open').prop('checked', false);
        $('#circularMenu1').toggleClass('active');
        $('body').css('overflow-y','visible');
        $('.sm-container').css('opacity','1');
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
        $('#circularMenu1').css('opacity','0.7');
        } else {
        $('#circularMenu1').css('opacity','1');
        }
        });
    $(".menu-open").click(function(e, parameters) {
        $('#circularMenu1').toggleClass('active');
        var nonUI = false;
        try {
            nonUI = parameters.nonUI;
        } catch (e) {}
        var checked = nonUI ? !this.checked : this.checked;
        if(checked){
            $('#circularMenu1').css('opacity','1');
            $('body').css('overflow-y','hidden');
            $('.sm-container').css('opacity','0.2');
            $('.sm-container').css('transition', 'opacity .5s ease-in-out');
        }
        else{
            $('body').css('overflow-y','visible');
            if ($(window).scrollTop() >= 100) {
                $('#circularMenu1').css('opacity','0.7');
                } else {
                $('#circularMenu1').css('opacity','1');
                }
            $('.sm-container').css('opacity','1');
        }
    });
    $('.sm-container').on('click touchstart', function(){
        if($('.menu-open').is(":checked")){
            $('.menu-open').prop('checked', false);
            $('#circularMenu1').toggleClass('active');
            $('body').css('overflow-y','visible');
            $('.sm-container').css('opacity','1');
        }
    })
  });
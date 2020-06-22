let $content = $('.container')

function showContent(selector){
    $content.hide();
    $(selector).show();

}
$('.col.navbar').on('click','.button.block.black-row', function(e){
    showContent(e.currentTarget.hash);
    e.preventDefault();
});

showContent('#home');


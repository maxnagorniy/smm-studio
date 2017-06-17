//Так приятней :)
window.log = function(param){
    console.log(param);
};

// Toggle Menu

$(document).ready(function(){

    $("#toggle_menu").click(function(){

        $(".header-nav__link").toggle(400);

    });

});


// Menu Fixed

$(function () {

    var smmMenu = $('.header');

    $(document).scroll(function(){

        $(window).ready(function fixedMenu(){
            var height = $(this).scrollTop();

            if ( height >= 520) {
                smmMenu.css({
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    zIndex: '9999',
                    background: 'white',
                    width: '100%'
                });
            }else {
                smmMenu.css({
                    position: 'relative',
                    top: '0'
                });
            }
        });
    })
});

// Scroll

$(function () {
    $(document).ready(function(){
        $(".header-nav, .footer").on("click","a", function (event) {
            event.preventDefault();

            var id  = $(this).attr('href');
            var top = $(id).offset().top - 50;

            $('body,html').animate({scrollTop: top}, 1000);
        })
    })
});

$(document).ready(function() {
    console.log("chạy rồi nè");
    $('.divslide #1').addClass('actives');
    $('.anh1').animate({
        opacity: 1,
        marginLeft: 0

    })
    $('.anh2').animate({
        opacity: 0,
        marginLeft: -100

    })
    $('.anh3').animate({
        opacity: 0,
        marginLeft: -100

    })
    $('#1').click(function() {;
        $('.divslide #1').addClass('actives');
        $('.divslide #2').removeClass('actives');
        $('.divslide #3').removeClass('actives');
        $('.anh1').animate({
            opacity: 1,
            marginLeft: 0

        })
        $('.anh2').animate({
            opacity: 0,
            marginLeft: -100

        })
        $('.anh3').animate({
            opacity: 0,
            marginLeft: -100

        })
    });
    $('#2').click(function() {;
        $('.divslide #2').addClass('actives');
        $('.divslide #1').removeClass('actives');
        $('.divslide #3').removeClass('actives');
        $('.anh2').animate({
            opacity: 1,
            marginLeft: 0

        })
        $('.anh1').animate({
            opacity: 0,
            marginLeft: -100

        })
        $('.anh3').animate({
            opacity: 0,
            marginLeft: -100

        })


    });
    $('#3').click(function() {;
        $('.divslide #3').addClass('actives');
        $('.divslide #1').removeClass('actives');
        $('.divslide #2').removeClass('actives');
        $('.anh3').addClass('divaotubenphai');
        $('.anh1').removeClass('divaotubenphai');
        $('.anh2').removeClass('divaotubenphai');
        $('.anh3').animate({
            opacity: 1,
            marginLeft: 0

        })
        $('.anh1').animate({
            opacity: 0,
            marginLeft: -100

        })
        $('.anh2').animate({
            opacity: 0,
            marginLeft: -100

        })
    });

});
// hết hiệu ứng slide
$(document).ready(function() {
    console.log("chạy hiệu ứng backtôtp rồi nè");
    $(window).scroll(function() {
        if ($('body,html').scrollTop() > 100) {
            $('#BackToTop').addClass('back');
        } else {
            $('#BackToTop').removeClass('back');
        }
    });
    $('#BackToTop').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000)

    });
});
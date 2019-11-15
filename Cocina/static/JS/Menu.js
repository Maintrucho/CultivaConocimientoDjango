$(document).ready(main);

var cont = 1;

function main() {
    $('.menu_bar').click(function() {
        if (cont == 1) {
            $('nav').animate({
                left: '0'
            });
            cont = 0;
        } else {
            $('nav').animate({
                left: '-100%'
            });
            cont = 1;
        }
    });
}

$(function() {
    $('.reg').click(function() {
        $('#contactForm').fadeToggle();
    })
    $(document).mouseup(function(e) {
        var container = $("#contactForm");

        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            container.fadeOut();
        }

    });

});

$(function() {
    $('.ini').click(function() {
        $('#iniAcc').fadeToggle();
    })
    $(document).mouseup(function(e) {
        var container = $("#iniAcc");

        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            container.fadeOut();
        }

    });

});

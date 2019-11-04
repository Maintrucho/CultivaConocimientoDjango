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

(function() {
    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('btn');

    var validarNombre = function(e) {
        if (formulario.nombre.value == 0) {
            alert("Introdusca el nombre");
            e.preventDefault();
        }
    }

    var validarContraseña = function(e) {
        if (formulario.pass.value == 0) {
            alert("Falta Contraseña");
            e.preventDefault();
        }
    }

    var validarRcontraseña = function(e) {
        if (formulario.pass2.value != formulario.pass.value) {
            alert("Contraseñas no son Iguales");
            e.preventDefault();
        }
    }

    var validarCorreo = function(e) {
        if (formulario.mail.value == 0) {
            alert("Falta el Correo");
            e.preventDefault();
        }
    }

    var validarTerminos = function(e) {
        if (formulario.Terminos.checked == false) {
            alert("Acepta los terminos");
            e.preventDefault();
        }
    }
    var validar = function(e) {
        validarNombre(e);
        validarContraseña(e);
        validarRcontraseña(e);
        validarCorreo(e);
        validarTerminos(e);
    }
    formulario.addEventListener("submit", validar);
}())
$(function() {

    var login = document.getElementsByName('login')[0],
        elementos = login.elements,
        boton = document.getElementById('btn');

    var validarNombre = function(e) {
        if (login.nombre.value == 0) {
            alert("Ingresar Usuario");
            e.preventDefault();
        }

    };

    var validarPass = function(e) {
        if (login.contraseña.value == 0) {
            alert("Ingresar Contraseña")
            e.preventDefault();
        }
    };

    var validar = function(e) {
        validarNombre(e);
        validarPass(e);
    };

    login.addEventListener("submit", validar);
}())

//Funcion para validar datos de "Crear Cuenta"

(function() {

    var formulario = document.getElementsByName('formulario')[0],
        elementos2 = formulario.elements,
        boton2 = document.getElementById('btn2');

    var validarUsuario = function(e) {
        if (formulario.usuario.value == 0) {
            alert("Ingrese un nombre de Usuario");
            e.preventDefault();
        }
    }

    var validarPasswd = function(e) {
        if (formulario.pass.value == 0) {
            alert("Ingrese una Contraseña");
            e.preventDefault();
        }
    }

    var validarPasswd2 = function(e) {
        if (formulario.repetirpsw.value != formulario.pass.value) {
            alert("Las Contraseñas ingresadas no coinciden");
            e.preventDefault();
        }
    }

    var validarCorreo = function(e) {
        if (formulario.correo.value == 0) {
            alert("Ingrese un Correo Electronico");
            e.preventDefault();
        }
    }

    var validarCell = function(e) {
        if (formulario.cell.value == 0) {
            alert("Ingrese un numero Telefonico");
            e.preventDefault();
        }
    }

    var validar2 = function(e) {
        validarUsuario(e);
        validarPasswd(e);
        validarPasswd2(e);
        validarCorreo(e);
        validarCell(e);
    }

    formulario.addEventListener("submit", validar2)

}())
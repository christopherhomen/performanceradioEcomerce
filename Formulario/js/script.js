//funcion para mostrar el formulario de registro y ocultar el de login y añadir estilos al boton 
function registro(){

    document.getElementById("registrationForm").style.display = "block"
    document.getElementById("loginForm").style.display = "none"
    document.getElementById("Register").style.color = "rgb(165, 105, 189)"
    document.getElementById("Login").style.color = "black"
}
//funcion para mostrar el formulario de login y ocultar el de registro y añadir estilos al boton 
function login(){
    document.getElementById("loginForm").style.display ="block"
    document.getElementById("registrationForm").style.display ="none"
    document.getElementById("Register").style.color = "black"
    document.getElementById("Login").style.color = "rgb(165, 105, 189)"
}

//funcion para mostrar la alerta de registro exitoso
function registrar(){ 

    var nombre = document.getElementById("registrationName").value;
    var apellido = document.getElementById("registrationApellido").value;
    var email = document.getElementById("registrationEmail").value;
    var clave = document.getElementById("registrationPassword").value;
    var terminos = document.getElementById("checkBox1");


    if (nombre != "" && apellido != "" && email !="" && clave !="" && terminos.checked != false){

    alert("Inscripcion exitosa");
    }
}
//funcion para mostrar la alerta de inicio de sesion exitoso
    function iniciar() {
        var ilogin = document.getElementById("loginEmail").value;
        var iclave = document.getElementById("loginPassword").value;

        if (ilogin != "" && iclave!= ""){

            alert("Inicio de sesion exitoso");
        }
    }

//funcion para mostrar los terminos y condiciones
 function termycondiciones(){
    swal({
        title: "Terminos y condiciones",
        text: "Sus datos se tratarán y procesaran de acuerdo a nuestras politicas empresariales.",
        icon: "success",
        buttons: true,
        dangerMode: true,
      });
}

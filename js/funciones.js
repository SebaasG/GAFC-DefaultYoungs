// Apartado (código) del inicio de sesión para verificar que se selecciona un rol.

function iniciarSesion() {
    var rol = document.getElementById('roles'); // <-- Obtiene el valor del combo box (lo llama, lo atrae, etc...).

    if (rol.value == 0 || rol.value == "") { // <-- Verifica si la pisición del combo está en 0 (Selecione...).
        Swal.fire({ // <-- Si eso es cierto, arroja un mensaje de error.
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: true,
            title: '¡ ERROR !',
            html: '<b class="texto-alerta"> ¡Debe seleccionar algún rol para continuar! </b>',
            icon: 'error',
            iconColor: '#0e810e',
            confirmButtonColor: '#0e810e'
        });
    } else if (rol.value == 1) { // <-- Verifica si la pisición del combo está en 1 (Aprendiz).
        window.location.href = "html/CodigoApe.html"; // <-- Si esta en 1, te envia al apartado de Aprendiz.
    } else if (rol.value == 2) { // <-- Verifica si la pisición del combo está en 2 (Instructor).
        window.location.href = "html/Instructor.html"; // <-- Si esta en 2, te envia al apartado de Instructor.
    }
}

// -------------------------------------------------------------------------------------------------------------//
// Apartado (código) del instructor para verificar que no tenga campos vacios.
// Instructor ↓ ↓ ↓.

function validarInstructor() {
    var documento = document.getElementById("documento").value; // <-- Obtiene el valor de la caja de texto "documento".
    var contra = document.getElementById("contra").value; // <-- Obtiene el valor de la caja de texto "contraseña".


    if (contra == '' || documento == '') { // <-- Se valida si la caja de texto está vacia.
        Swal.fire(' ¡ ERROR !' , ' ¡ Por favor, rellene los campos ya que son obligatorios ! ' , 'error'); // <-- Se muestra un mensaje de error si la caja esta vacia.
    } else {
        if (documento.length >= 8 && documento.length <= 10) {  // <-- Verifica si el valor esta dentro del rango (entre 8 y 10).
            if (contra.length >= 4 && contra.length <= 50) {  // <-- Si el documento está dentro del rango, verifica si el valor esta dentro del rango (entre 8 y 50).
                document.getElementById('documento').value = '';    // <-- Limpia lo digitado en el input (caja de texto) antes de abrir la pagina procesosInstructor.html.
                document.getElementById('contra').value = '';       // <-- Limpia lo digitado en el input (caja de texto) antes de abrir la pagina procesosInstructor.html.

            } else {
                Swal.fire(' ¡ ERROR !' , ' ¡ Error, debe digitar una contraseña valida ! ' , 'error');
            }
        } else {
            Swal.fire(' ¡ ERROR !' , ' ¡ Error, debe digitar un número de documento valido ! ' , 'error'); // <-- Muestra un mensaje de error si ninguna delas consiciones anteriores se cumple.
        }
    }
};

// -------------------------------------------------------------------------------------------------------------//
// Apartado (código) del aprendiz para verificar que no tenga campos vacios.
// Aprendiz ↓ ↓ ↓.

function validarAprendiz() {
    var codigo = document.getElementById('codigo').value; // <-- Obtiene el valor de la caja de texto -> "Código departicipación".

    if (codigo == '') {  // <-- Se verifica que la caja de texto no esté vacía.
        Swal.fire(' ¡ ERROR !' , ' ¡Por favor, rellene los campos ya que son obligatorios! ' , 'error'); // <-- Si está vacía, se mostrará un mensaje de error.
    } else {
        if (codigo.length >= 5 && codigo.length <= 10) { // <-- Si no está vacía, se pasará a verificar que lo digitado esté dentro del rango (entre 5 y 10).
            document.getElementById('codigo').value = '';  // Limpia lo digitado en el input (caja de texto) antes de abrir la pagina indexprocess.html.
            window.location.href = 'indexprocess.html'; // <-- Si está dentro del rango, se envia al usuario a la pagina del index de procesos para aprendices (indexprocess.html).
        } else {
            Swal.fire(' ¡ ERROR !' , ' ¡Digite un código valido! ' , 'error'); // Si lo digitado no está dentro del rango, se mostrará un mensaje de error.
        }
    }
};

// -------------------------------------------------------------------------------------------------------------//
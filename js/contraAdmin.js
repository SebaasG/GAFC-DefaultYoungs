// Esperar a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    // Obtener una referencia al botón con id "inicioSesionIns"
    const btn = document.getElementById("inicioSesionIns");

    // Agregar un evento de clic al botón
    btn.addEventListener("click", function () {
        // Obtener los valores de los campos de entrada (documento y contraseña)
        const docIns = document.getElementById("documento").value;
        const contra = document.getElementById("contra").value;

        // Verificar si los campos están vacíos
        if (docIns === "" || contra === "") {
            // Mostrar un mensaje de error si los campos están vacíos
            Swal.fire({
                position: 'center',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                stopKeydownPropagation: true,
                title: '¡ ERROR !',
                html: '<b class="texto-alerta"> ¡Por favor, rellene los campos ya que son obligatorios! </b>',
                icon: 'error',
                iconColor: '#0e810e',
                confirmButtonColor: '#0e810e',
                timer: 8000
            });
            return; // No continuar si los campos están vacíos.
        }

        // Imprimir el documento y la contraseña en la consola (solo para propósitos de prueba)
        console.log(docIns);
        console.log(contra);

        // Realizar una solicitud GET al servidor para verificar las credenciales del instructor
        fetch('http://localhost:8085/apiIns/admin/' + docIns + '/' + contra, {
            method: 'GET'
        })
            .then(response => {
                // Verificar si la respuesta del servidor es exitosa
                if (response.ok) {
                    // Devolver los datos como JSON si la respuesta es exitosa
                    return response.json();
                } else {
                    // Lanzar un error si la respuesta no es exitosa
                    throw new Error('Contraseña o documento incorrecto');
                }
            })
            .then(data => {
                // Almacenar los datos del instructor en el almacenamiento local
                localStorage.setItem('datos', data);

                // Mostrar un mensaje de éxito y redirigir después de un tiempo específico
                Swal.fire({
                    position: 'center',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    stopKeydownPropagation: true,
                    title: '¡ BIENVENIDO !',
                    html: '<b class="texto-alerta"> ¡Credenciales correctas! </b>',
                    icon: 'success',
                    iconColor: '#0e810e',
                    confirmButtonColor: '#0e810e',
                    timer: 8000
                });
                setTimeout(() => {
                    location.href = 'cambiarContra.html';
                }, 2000);
            })
            .catch(error => {
                // Manejar errores y mostrar un mensaje de error
                console.error('Error', error);
                Swal.fire({
                    position: 'center',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    stopKeydownPropagation: true,
                    title: '¡ ERROR !',
                    html: '<b class="texto-alerta"> ¡Contraseña o documento incorrecto! </b>',
                    icon: 'error',
                    iconColor: '#0e810e',
                    confirmButtonColor: '#0e810e',
                    timer: 8000
                });
            });
    });
});

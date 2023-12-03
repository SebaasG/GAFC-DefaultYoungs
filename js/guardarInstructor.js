// Obtener el elemento del botón con id "instructor"
const btn = document.getElementById("instructor");

// Agregar un event listener al botón para manejar el click
btn.addEventListener("click", function () {
    // Obtener los valores de los campos de entrada (docIns, nomIns, conIns)
    const docIns = document.getElementById("txtDoc").value;
    const nomIns = document.getElementById("txtNom").value;
    const conIns = document.getElementById("txtCon").value;

    // Definir el estado como 1 (presumiblemente activo)
    var estado = 1;
    fetch('http://localhost:8085/apiIns/save', {
        method: 'POST',
        body: JSON.stringify({
            "docIns": docIns,
            "nomIns": nomIns,
            "conIns": conIns,
            "estado": estado
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    // Procesar la respuesta del servidor
    .then(data => {
        // Mostrar una alerta de éxito utilizando la librería Swal
        Swal.fire({
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: true,
            title: '¡Éxito!',
            html: '<b class="texto-alerta"> ¡Instructor guardado! </b>',
            icon: 'success',
            iconColor: '#0e810e',
            confirmButtonColor: '#0e810e',
            timer: 8000
        });

        // Redirigir a otra página después de un tiempo específico (2 segundos en este caso)
        setTimeout(() => {
            location.href = 'procesosInstructor.html';
        }, 2000);
    })
    // Manejar errores en caso de fallo en la solicitud
    .catch(error => {
        // Mostrar una alerta de error utilizando la librería Swal y mostrar detalles en la consola
        Swal.fire('¡ERROR!','¡No se guardaron los datos!', 'error');
        console.log("Respuesta completa del servidor", error.response);
    });
});

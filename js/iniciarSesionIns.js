document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("inicioSesionIns");

    btn.addEventListener("click", function () {
        const docIns = document.getElementById("documento").value;
        const contra = document.getElementById("contra").value;

        if (docIns === "" || contra === "") {
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

        console.log(docIns);
        console.log(contra);

        fetch('http://localhost:8085/gafc-0.0.1-SNAPSHOT/apiIns/' + docIns + '/' + contra, {
            method: 'GET'
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Contraseña o documento incorrecto');
            }
        })
        .then(data => {
            
            localStorage.setItem('datos', data);
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
                var nuevaPestana = window.open("procesosInstructor.html", "_blank");
        setTimeout(function () {
            window.open('about:blank', '_self').close();
        }, 2)
            }, 2000);
            
        })
        .catch(error => {
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

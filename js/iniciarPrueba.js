const codeInput = document.getElementById("codigo");
const btn = document.getElementById("btnCode");

btn.addEventListener("click", function () {
    const code = codeInput.value;

    fetch('http://localhost:8085/gafc-0.0.1-SNAPSHOT/apiCita/' + code, {
        method: 'GET'
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Código no válido');
        }
    })
    .then(data => {
        console.log('Datos', data);
        
        localStorage.setItem('datos', data);
        Swal.fire({ 
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: true,
            title: '¡ USTED HA SIDO CITADO !',
            html: '<b class="texto-alerta"> ¡Credenciales correctas! </b>',
            icon: 'success',
            iconColor: '#0e810e',
            confirmButtonColor: '#0e810e',
            timer: 8000
        });
        location.href='IndexSeleccion.html'
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
            html: '<b class="texto-alerta"> ¡Código no válido o no existente! </b>',
            icon: 'error',
            iconColor: '#0e810e',
            confirmButtonColor: '#0e810e',
            timer: 8000
        });
    });

});

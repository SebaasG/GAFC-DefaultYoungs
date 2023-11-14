const btn = document.getElementById("instructor");

btn.addEventListener("click", function () {
    const docIns = document.getElementById("txtDoc").value;
    const nomIns = document.getElementById("txtNom").value;
    const conIns = document.getElementById("txtCon").value;
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
    .then(data => {
        console.log('Datos ', data);
        Swal.fire({
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: true,
            title: '¡ Éxito !',
            html: '<b class="texto-alerta"> ¡Instructor guardado! </b>',
            icon: 'success',
            iconColor: '#0e810e',
            confirmButtonColor: '#0e810e',
            timer: 8000
        });
        setTimeout(() => {
            location.href = 'procesosInstructor.html';
        }, 2000);
    })
    .catch(error => {
        Swal.fire('¡ ERROR !',' ¡ No se guardaron los datos ! ' , 'error');
        console.log("Respuesta completa del servidor", error.response);
    });
});

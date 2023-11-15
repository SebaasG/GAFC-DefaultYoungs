const valorLocalStorage = localStorage.getItem("datos");
const valorDoc = localStorage.getItem("documentoSeleccionado");

//FUNCIÓN PARA VALIDAR LOS INPUTS
function revisarDeca() {

    const valoresDecatipos = [];
    
    for (let i = 1; i <= 16; i++) {
        const campo = document.getElementById(`deca${i}`);//asgina todos los valores a las variable campo 
        const valor = campo.value.trim(); // Elimina espacios en blanco al principio y al final
        valoresDecatipos.push({ campo, valor });
        if (valor === '') {
            campo.focus(); // Hace focus en el campo vacío
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
            return; 
        }

        if (isNaN(valor) || valor < 1 || valor > 20) {
            campo.focus(); // Hace focus en el campo con valor incorrecto
            Swal.fire({
                position: 'center',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                stopKeydownPropagation: true,
                title: '¡ ERROR !',
                html: '<b class="texto-alerta"> ¡No puede ser mayor a 20 ni menor que 1! </b>',
                icon: 'error',
                iconColor: '#0e810e',
                confirmButtonColor: '#0e810e',
                timer: 8000
            });
            return; 
        }
    }
    Swal.fire({
        title: '¿Desea registrar los datos ingresados?',
        showDenyButton: true,
        confirmButtonText: 'Registrar',
        confirmButtonColor: '#0e810e',
        denyButtonText: 'Cancelar',
        denyButtonColor: '#0e810e',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        timer: 8000,
        stopKeydownPropagation: true
    }).then((result) => {
        if (result.isConfirmed) {
            guardarpf16();
            mostrarAlerta('¡Registro exitoso!', 'success');
        } else if (result.isDenied) {
            mostrarAlerta('¡Datos no registrados!', 'info');
        }
    });
}

async function guardarpf16() {
    const decaValues = [];

    for (let i = 1; i <= 16; i++) {
        const element = document.getElementById(`deca${i}`);
        decaValues[i - 1] = element.value;
        console.log(decaValues[i - 1]);
    }
    await fetch("http://localhost:8085/gafc-0.0.1-SNAPSHOT/apiPf/saveRes", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            "resu1": decaValues[0],
            "resu2": decaValues[1],
            "resu3": decaValues[2],
            "resu4": decaValues[3],
            "resu5": decaValues[4],
            "resu6": decaValues[5],
            "resu7": decaValues[6],
            "resu8": decaValues[7],
            "resu9": decaValues[8],
            "resu10": decaValues[9],
            "resu11": decaValues[10],
            "resu12": decaValues[11],
            "resu13": decaValues[12],
            "resu14": decaValues[13],
            "resu15": decaValues[14],
            "resu16": decaValues[15],
            "docApe": valorDoc,
            "tipo": 1,
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al guardar los datos");
            } else {
                Swal.fire({
                    position: 'center',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    stopKeydownPropagation: true,
                    title: '¡ Éxito !',
                    html: '<b class="texto-alerta"> ¡Decatipos guardados! </b>',
                    icon: 'success',
                    iconColor: '#0e810e',
                    confirmButtonColor: '#0e810e',
                    timer: 8000
                });
                setTimeout(() => {
                    location.href = 'grafica2.html';
                    location.reload();
                }, 1000);
            }

        })
        .catch(error => {
            console.error("Error:", error);
        });
}

const btn = document.getElementById("decatipos")
btn.addEventListener("click", function () {
    revisarDeca();
});


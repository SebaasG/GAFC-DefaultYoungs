const rangoMinimo = 10000;
const rangoMaximo = 10000000;
const numerosGenerados = new Set();
const resultadoElement = document.getElementById("resultado");
let tipoProceso = "";
let ipv1 = "";
let ipv2 = "";

async function verificar() {
    const docApe = document.getElementById("docApe").value;

    try {
        const response = await fetch('http://localhost:8085/apiApe/' + docApe, {
            method: 'GET'
        });

        if (response.ok) {
            const responseData = await response.text(); // Lee el contenido de la respuesta como texto
            if (responseData === "2") {
                GuardarApe();
                generarcod();
            } else {
            generarcod();
            }
        } else {
            console.error('Error en la solicitud HTTP. Estado:', response.status);
            return false;
        }
    } catch (error) {
        console.error('Error en la solicitud HTTP', error);
        return false;
    }
}



async function generarcod() {

    if (numerosGenerados.size === rangoMaximo - rangoMinimo + 1) {
        
        return;
    }
    let numeroAleatorio;
    let existeEnDB;
    do {
        numeroAleatorio = Math.floor(Math.random() * (rangoMaximo - rangoMinimo + 1)) + rangoMinimo;
        existeEnDB = await existeEnBaseDeDatos(numeroAleatorio);
    } while (numerosGenerados.has(numeroAleatorio) || existeEnDB);
    numerosGenerados.add(numeroAleatorio);
    var docIns = localStorage.getItem("datos"); 
    const docApe = document.getElementById("docApe").value;
    const nomApe = document.getElementById("nomApe").value;
    const tipPro = document.getElementById("cboTipo").value;
    const fecIni = document.getElementById("fecIniApe").value;
    const codFic = document.getElementById("fichaApe").value;
    const cboApePrueba = document.getElementById("cboApePrueba").value;
    
    if (tipPro === "1") {
        tipoProceso = "Técnico";
    } else {
        if (tipPro === "2") {
            tipoProceso = "Tecnologo";
        } else {
            if (tipPro === "3") {
                tipoProceso = "Especialización";
            } else {
                if (tipPro === "4") {
                    tipoProceso = "Operario";
                } else {
                    tipoProceso = "0";
                }
            }
        }
    }

    if (cboApePrueba === "1") {
        ipv1 = 1;
        ipv2 = 0;
    } else {
        if (cboApePrueba === "2") {
            ipv1 = 0;
            ipv2 = 1;
        } else {
            if (cboApePrueba === "3") {
                ipv1 = 1;
                ipv2 = 1;
            }
        }
    }

    const response = await fetch("http://localhost:8085/apiCita/save", {
        method: "POST",
        body: JSON.stringify({

            "docApe": docApe,
            "docIns": docIns,
            "codIng": numeroAleatorio,
            "ipv1": ipv1,
            "ipv2": ipv2 
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        Swal.fire({
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: true,
            title: '¡ Éxito !',
            html: '<b class="texto-alerta"> ¡El aprendiz ha sido citado! </b>',
            icon: 'success',
            iconColor: '#0e810e',
            confirmButtonColor: '#0e810e',
            timer: 8000
        });
        setTimeout(() => {
            location.href = 'procesosInstructor.html';
        }, 1000);
    } else {
        Swal.fire({
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: true,
            title: '¡ ERROR !',
            html: '<b class="texto-alerta"> ¡No se pudo citar al aprendiz, intentelo nuevamente! </b>',
            icon: 'error',
            iconColor: '#0e810e',
            confirmButtonColor: '#0e810e',
            timer: 8000
        });
    
}
};

function GuardarApe(){
    const docApe = document.getElementById("docApe").value;
    const nomApe = document.getElementById("nomApe").value;
    const tipPro = document.getElementById("cboTipo").value;
    const fecIni = document.getElementById("fecIniApe").value;
    const codFic = document.getElementById("fichaApe").value;
    const cboApePrueba = document.getElementById("cboApePrueba").value;
    
    if (tipPro === "1") {
        tipoProceso = "Técnico";
    } else {
        if (tipPro === "2") {
            tipoProceso = "Tecnologo";
        } else {
            if (tipPro === "3") {
                tipoProceso = "Especialización";
            } else {
                if (tipPro === "4") {
                    tipoProceso = "Operario";
                } else {
                    tipoProceso = "0";
                }
            }
        }
    }

    if (cboApePrueba === "1") {
        ipv1 = 1;
        ipv2 = 0;
    } else {
        if (cboApePrueba === "2") {
            ipv1 = 0;
            ipv2 = 1;
        } else {
            if (cboApePrueba === "3") {
                ipv1 = 1;
                ipv2 = 1;
            }
        }
    }
    try {
        const response = fetch("http://localhost:8085/apiApe/save", {
            method: "POST",
            body: JSON.stringify({
                "docApe": docApe,
                "nomApe": nomApe,
                "tipPro": tipoProceso,
                "fecIni": fecIni,
                "codFic": codFic
            }),
            headers: {

                "Content-Type": "application/json"
            }
        })
    }
    catch (error) {
        console.error('Error en la solicitud HTTP', error);
        return false; // Hubo un error en la solicitud
    }
}




async function existeEnBaseDeDatos(numeroAleatorio) {
    try {
        const response = await fetch('http://localhost:8085/apiCita/Cod', {
            method: 'GET'
        });

        if (response.ok) {
            const data = await response.json();


            // Comprobar si el númeroAleatorio no está en la lista de números de la base de datos
            const existe = data.includes(numeroAleatorio);
            return existe;
        } else {
            console.error('Error en la solicitud HTTP');
            return false;
        }
    } catch (error) {
        console.error('Error en la solicitud HTTP', error);
        return false;
    }
}

const btn = document.getElementById("CitarApe");
btn.addEventListener("click", function () { 
    verificar();
});

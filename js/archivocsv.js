let lineasDatos;
let nombres = [];
let codigosFicha = [];
let documentos = [];
let fechasInicio = [];
let tiposPrograma = [];
let ipv1 = false, ipv2 = false;

const rangoMinimo = 10000;
const rangoMaximo = 10000000;
const numerosGeneradosArray = [];

async function generarCodigos() {
    if (numerosGeneradosArray.length === rangoMaximo - rangoMinimo + 1) {

        return;
    }

    const registrosPorGenerar = nombres.length - numerosGeneradosArray.length;

    for (let i = 0; i < registrosPorGenerar; i++) {
        let numeroAleatorio;
        let existeEnDB;

        do {
            numeroAleatorio = Math.floor(Math.random() * (rangoMaximo - rangoMinimo + 1)) + rangoMinimo;
            existeEnDB = await existeEnBaseDeDatos(numeroAleatorio);
        } while (numerosGeneradosArray.includes(numeroAleatorio) || existeEnDB);

        numerosGeneradosArray.push(numeroAleatorio);
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

function leerArchivo(e) {
    const archivo = e.target.files[0];
    if (!archivo) {
        return;
    }

    // Reiniciar los arreglos antes de cargar nuevos datos
    nombres = [];
    codigosFicha = [];
    documentos = [];
    fechasInicio = [];
    tiposPrograma = [];

    const lector = new FileReader();
    lector.onload = function (e) {
        // Almacenar todas las líneas de datos en un arreglo
        lineasDatos = e.target.result.split('\n');

        lineasDatos.forEach(function (linea) {
            const separador = /,|;/;
            const datos = linea.split(separador);

            if (datos.length >= 5) {
                const nombre = datos[0].replace(/"/g, "").trim();
                const codigoFicha = datos[1].replace(/"/g, "").trim();
                const documento = datos[2].replace(/"/g, "").trim();
                const fechaInicio = datos[3].replace(/"/g, "").trim();
                const tipoPrograma = datos[4].replace(/"/g, "").trim();

                nombres.push(nombre);
                codigosFicha.push(codigoFicha);
                documentos.push(documento);
                fechasInicio.push(fechaInicio);
                tiposPrograma.push(tipoPrograma);
            }
        });

        // Ahora tienes los datos separados en diferentes arreglos
        console.log(nombres);
        console.log(codigosFicha);
        console.log(documentos);
        console.log(fechasInicio);
        console.log(tiposPrograma);
    };

    lector.readAsText(archivo);
}

function Cbo() {
    const cbo = document.getElementById("cbo-prueba").value;

    if (cbo == 1) {
        console.log(" Se seleccionó la prueba 1 ")
        ipv1 = true;
        ipv2 = false;
        console.log(ipv1, ipv2)
    } else if (cbo == 2) {
        console.log(" Se seleccionó la prueba 2 ")
        ipv1 = false;
        ipv2 = true;
        console.log(ipv1, ipv2)
    } else if (cbo == 3) {
        console.log(" Se seleccionaron ambas pruebas ")
        ipv1 = true;
        ipv2 = true;
        console.log(ipv1, ipv2)
    } else {
        console.log(" No se seleccionó nada ")
    }
}

async function enviarRegistros() {


    for (let index = 0; index < nombres.length; index++) {
        const response = await fetch("http://localhost:8085/apiApe/save", {
            method: "POST",
            body: JSON.stringify({
                "docApe": documentos[index],
                "nomApe": nombres[index],
                "tipPro": tiposPrograma[index],
                "fecIni": fechasInicio[index],
                "codFic": codigosFicha[index]
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {
            console.log(`Registro ${index + 1} enviado con éxito`);
        } else {
            console.error(`Error al enviar registro ${index + 1}`);
        }
    }

    // console.log('Todos los registros han sido enviados');
    // Swal.fire(' ¡Todos los registros han sido enviados! ' , 'success');
    // location.reload();
    asginarPrueba();
}
async function asginarPrueba() {
    if (numerosGeneradosArray.length < nombres.length) {
        console.log('Esperando a que se generen todos los números aleatorios...');
        return;
    }
    var docIns = localStorage.getItem("datos");
    for (let index = 0; index < nombres.length; index++) {
        const response = await fetch("http://localhost:8085/apiCita/save", {
            method: "POST",
            body: JSON.stringify({

                "docApe": documentos[index],
                "docIns": docIns,
                "codIng": numerosGeneradosArray[index],
                "ipv1": ipv1,
                "ipv2": ipv2
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {
            console.log(`Registro ${index + 1} enviado con éxito`);
        } else {
            console.error(`Error al enviar registro ${index + 1}`);
        }
    }

    // Swal.fire({
    //     position: 'center',
    //     allowOutsideClick: false,
    //     allowEscapeKey: false,
    //     allowEnterKey: false,
    //     stopKeydownPropagation: true,
    //     title: '¡ ERROR !',
    //     html: '<b class="texto-alerta"> ¡Todos los registros han sido enviados! </b>',
    //     icon: 'success',
    //     iconColor: '#0e810e',
    //     confirmButtonColor: '#0e810e',
    //     timer: 8000
    // });
    // location.reload();
}


document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("hola");
    btn.addEventListener("click", async function () {
        Cbo();
        await generarCodigos();
        if (numerosGeneradosArray.length === nombres.length) {
            enviarRegistros();
            Swal.fire({
                position: 'center',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                stopKeydownPropagation: true,
                title: '¡ Éxito !',
                html: '<b class="texto-alerta"> ¡Citación exitosa! </b>',
                icon: 'success',
                iconColor: '#0e810e',
                confirmButtonColor: '#0e810e',
                timer: 8000
            });
            setTimeout(() => {
                location.href = 'procesosInstructor.html';
            }, 2000);

        } else {
            Swal.fire({
                position: 'center',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                stopKeydownPropagation: true,
                title: '¡ ERROR !',
                html: '<b class="texto-alerta"> ¡Error al hacer la citación! </b>',
                icon: 'error',
                iconColor: '#0e810e',
                confirmButtonColor: '#0e810e',
                timer: 8000
            });
        }
    });

    document.querySelector('#archivo1').addEventListener('change', leerArchivo, false);
});





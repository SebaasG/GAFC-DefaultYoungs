// Definir constantes para el rango de números aleatorios
const rangoMinimo = 10000;
const rangoMaximo = 10000000;

// Utilizar un conjunto (Set) para almacenar los números aleatorios generados
const numerosGenerados = new Set();

// Obtener una referencia al elemento HTML con id "resultado"
const resultadoElement = document.getElementById("resultado");

// Variables para almacenar el tipo de proceso, ipv1 e ipv2
let tipoProceso = "";
let ipv1 = "";
let ipv2 = "";

// Función asincrónica para verificar si un aprendiz ya existe en la base de datos
async function verificar() {
    // Obtener el documento del aprendiz desde el campo de entrada
    const docApe = document.getElementById("docApe").value;

    try {
        const response = await fetch('http://localhost:8085/apiApe/' + docApe, {
            method: 'GET'
        });

        if (response.ok) {
            // Leer el contenido de la respuesta como texto
            const responseData = await response.text();

            // Si el aprendiz no existe en la base de datos, llamar a las funciones GuardarApe y generarcod
            if (responseData === "2") {
                GuardarApe();
                generarcod();
            } else {
                // Si el aprendiz ya existe, llamar solo a generarcod
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

// Función asincrónica para generar un código aleatorio y guardar la cita del aprendiz
async function generarcod() {
    // Verificar si se han generado todos los números aleatorios posibles
    if (numerosGenerados.size === rangoMaximo - rangoMinimo + 1) {
        return;
    }

    // Generar un número aleatorio único que no esté en la base de datos
    let numeroAleatorio;
    let existeEnDB;
    do {
        numeroAleatorio = Math.floor(Math.random() * (rangoMaximo - rangoMinimo + 1)) + rangoMinimo;
        existeEnDB = await existeEnBaseDeDatos(numeroAleatorio);
    } while (numerosGenerados.has(numeroAleatorio) || existeEnDB);

    // Agregar el número aleatorio al conjunto de números generados
    numerosGenerados.add(numeroAleatorio);

    // Obtener datos adicionales del aprendiz y el instructor del almacenamiento local
    var docIns = localStorage.getItem("datos");
    const docApe = document.getElementById("docApe").value;
    const nomApe = document.getElementById("nomApe").value;
    const tipPro = document.getElementById("cboTipo").value;
    const fecIni = document.getElementById("fecIniApe").value;
    const codFic = document.getElementById("fichaApe").value;
    const cboApePrueba = document.getElementById("cboApePrueba").value;

    // Determinar el tipo de proceso según la opción seleccionada
    if (tipPro === "1") {
        tipoProceso = "Técnico";
    } else if (tipPro === "2") {
        tipoProceso = "Tecnologo";
    } else if (tipPro === "3") {
        tipoProceso = "Especialización";
    } else if (tipPro === "4") {
        tipoProceso = "Operario";
    } else {
        tipoProceso = "0";
    }

    // Determinar los valores de ipv1 e ipv2 según la opción seleccionada
    if (cboApePrueba === "1") {
        ipv1 = 1;
        ipv2 = 0;
    } else if (cboApePrueba === "2") {
        ipv1 = 0;
        ipv2 = 1;
    } else if (cboApePrueba === "3") {
        ipv1 = 1;
        ipv2 = 1;
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

    // Verificar si la respuesta del servidor es exitosa
    if (response.ok) {
        // Mostrar una alerta de éxito y redirigir después de un tiempo específico
        Swal.fire({
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: true,
            title: '¡Éxito!',
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
        // Mostrar una alerta de error en caso de fallo en la solicitud
        Swal.fire({
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: true,
            title: '¡ERROR!',
            html: '<b class="texto-alerta"> ¡No se pudo citar al aprendiz, inténtelo nuevamente! </b>',
            icon: 'error',
            iconColor: '#0e810e',
            confirmButtonColor: '#0e810e',
            timer: 8000
        });
    }
}

// Función para guardar los datos del aprendiz en la base de datos
function GuardarApe() {
    // Obtener los valores de los campos de entrada
    const docApe = document.getElementById("docApe").value;
    const nomApe = document.getElementById("nomApe").value;
    const tipPro = document.getElementById("cboTipo").value;
    const fecIni = document.getElementById("fecIniApe").value;
    const codFic = document.getElementById("fichaApe").value;
    const cboApePrueba = document.getElementById("cboApePrueba").value;

    // Determinar el tipo de proceso según la opción seleccionada
    if (tipPro === "1") {
        tipoProceso = "Técnico";
    } else if (tipPro === "2") {
        tipoProceso = "Tecnologo";
    } else if (tipPro === "3") {
        tipoProceso = "Especialización";
    } else if (tipPro === "4") {
        tipoProceso = "Operario";
    } else {
        tipoProceso = "0";
    }

    // Determinar los valores de ipv1 e ipv2 según la opción seleccionada
    if (cboApePrueba === "1") {
        ipv1 = 1;
        ipv2 = 0;
    } else if (cboApePrueba === "2") {
        ipv1 = 0;
        ipv2 = 1;
    } else if (cboApePrueba === "3") {
        ipv1 = 1;
        ipv2 = 1;
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
        });
    } catch (error) {
        console.error('Error en la solicitud HTTP', error);
        return false; // Hubo un error en la solicitud
    }
}

// Función asincrónica para verificar si un número aleatorio ya existe en la base de datos
async function existeEnBaseDeDatos(numeroAleatorio) {
    try {
        const response = await fetch('http://localhost:8085/apiCita/Cod', {
            method: 'GET'
        });

        if (response.ok) {
            // Obtener la lista de números desde la respuesta
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

// Obtener una referencia al botón con id "CitarApe" y agregar un evento de clic
const btn = document.getElementById("CitarApe");
btn.addEventListener("click", function () {
    // Llamar a la función verificar cuando se hace clic en el botón
    verificar();
});

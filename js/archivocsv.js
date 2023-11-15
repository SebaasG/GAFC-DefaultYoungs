// Declaración de variables globales
let lineasDatos;
let nombres = [];
let codigosFicha = [];
let documentos = [];
let fechasInicio = [];
let tiposPrograma = [];
let ipv1 = false, ipv2 = false;

// Definición de constantes para el rango de códigos generados
const rangoMinimo = 10000;
const rangoMaximo = 10000000;

// Arreglo para almacenar los números generados
const numerosGeneradosArray = [];

// Función asincrónica para generar códigos aleatorios
async function generarCodigos() {
    // Verificar si se han generado todos los códigos posibles en el rango
    if (numerosGeneradosArray.length === rangoMaximo - rangoMinimo + 1) {
        // Si ya se generaron todos los códigos posibles, salir de la función
        return;
    }
    // Calcular la cantidad de registros que faltan por generar
    const registrosPorGenerar = nombres.length - numerosGeneradosArray.length;

    // Bucle para generar códigos aleatorios
    for (let i = 0; i < registrosPorGenerar; i++) {
        let numeroAleatorio;
        let existeEnDB;
        // Generar un número aleatorio y verificar si ya existe en el arreglo o en la base de datos
        do {
            // Generar un número aleatorio dentro del rango especificado
            numeroAleatorio = Math.floor(Math.random() * (rangoMaximo - rangoMinimo + 1)) + rangoMinimo;
            // Verificar si el número aleatorio ya está en el arreglo generado o en la base de datos
            existeEnDB = await existeEnBaseDeDatos(numeroAleatorio);
        } while (numerosGeneradosArray.includes(numeroAleatorio) || existeEnDB);

        // Agregar el número aleatorio generado al arreglo
        numerosGeneradosArray.push(numeroAleatorio);
    }
}


async function existeEnBaseDeDatos(numeroAleatorio) {
    try {
        const response = await fetch('http://localhost:8085/gafc-0.0.1-SNAPSHOT/apiCita/Cod', { // esto verifica si existe en la base de datos
            method: 'GET' //El tipo de request que va a hacer 
        });
        if (response.ok) {//verifica que todos los datos lleguen correctamente
            const data = await response.json();//Guarda la respuesta en una variable
            const existe = data.includes(numeroAleatorio);  // Comprobar si el númeroAleatorio no está en la lista de números de la base de datos
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
function leerArchivo(e) {// Función para leer el contenido de un archivo seleccionado por el usuario
    const archivo = e.target.files[0]; // Obtener el primer archivo seleccionado en el evento
    if (!archivo) {  // Verificar si no se seleccionó ningún archivo
        return; // Si no hay archivo, salir de la función
    }

    // Reiniciar los arreglos antes de cargar nuevos datos
    nombres = [];
    codigosFicha = [];
    documentos = [];
    fechasInicio = [];
    tiposPrograma = [];

    const lector = new FileReader();

    // Configurar el evento onload, que se ejecutará cuando la lectura del archivo sea exitosa
    lector.onload = function (e) {
        // Almacenar todas las líneas de datos en un arreglo
        lineasDatos = e.target.result.split('\n');
        // Iterar sobre cada línea de datos
        lineasDatos.forEach(function (linea) {
            // Definir un patrón de separación utilizando coma o punto y coma
            const separador = /,|;/;
            const datos = linea.split(separador);

            // Separar los datos de la línea utilizando el patrón de separación
            if (datos.length >= 5) {
                // Limpiar y extraer cada dato de la línea
                const nombre = datos[0].replace(/"/g, "").trim();
                const codigoFicha = datos[1].replace(/"/g, "").trim();
                const documento = datos[2].replace(/"/g, "").trim();
                const fechaInicio = datos[3].replace(/"/g, "").trim();
                const tipoPrograma = datos[4].replace(/"/g, "").trim();

                // Agregar los datos a los respectivos arreglos
                nombres.push(nombre);
                codigosFicha.push(codigoFicha);
                documentos.push(documento);
                fechasInicio.push(fechaInicio);
                tiposPrograma.push(tipoPrograma);
            }
        });
    };
    // Iniciar la lectura del archivo como texto
    lector.readAsText(archivo);
}

function Cbo() {    // Obtener el valor seleccionado del elemento con el id "cbo-prueba"

    const cbo = document.getElementById("cbo-prueba").value; // Verificar el valor seleccionado y realizar acciones correspondientes
    if (cbo == 1) {// Si el valor es 1, actualizar variables
        ipv1 = true;
        ipv2 = false;
    } else if (cbo == 2) { // Si el valor es 2, actualizar variables
        ipv1 = false;
        ipv2 = true;
    } else if (cbo == 3) {// Si el valor es 3, actualizar variables 
        ipv1 = true;
        ipv2 = true;
    } else {
        // Si no es ninguno de los casos anteriores, mostrar en la consola
        console.log(" No se seleccionó nada ");
    }
}

//Funcion para guardar los datos que viene en el archivo csv
async function enviarRegistros() {

    for (let index = 0; index < nombres.length; index++) { //Se coloca nombres.length para que solo se haga hasta el número de aprendices
        const response = await fetch("http://localhost:8085/gafc-0.0.1-SNAPSHOT/apiApe/save", {
            method: "POST",
            body: JSON.stringify({
                "docApe": documentos[index], //se manda uno por uno del documento
                "nomApe": nombres[index], //se manda uno por uno los nombres
                "tipPro": tiposPrograma[index], //se manda uno por el tipo de programa al que pertenece
                "fecIni": fechasInicio[index], //se manda una por una la fecha
                "codFic": codigosFicha[index] //se manda uno por uno el código de la ficha
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {
            console.log(`Registro ${index + 1} enviado con éxito`);//Respuesta por si fue exitosa la operación
        } else {
            console.error(`Error al enviar registro ${index + 1}`);//Respuesta por si fue erronea la operación
        }
    }
    asginarPrueba();
}
// Función asincrónica para asignar pruebas
async function asginarPrueba() {
    // Verificar si se han generado todos los números aleatorios necesarios
    if (numerosGeneradosArray.length < nombres.length) {
        console.log('Esperando a que se generen todos los números aleatorios...');
        // Si no se han generado todos los números, salir de la función
        return;
    }

    var docIns = localStorage.getItem("datos");// Obtener el documento del instructor almacenado en el localStorage

    for (let index = 0; index < nombres.length; index++) {// Iterar sobre los nombres y realizar operaciones para cada índice
        const response = await fetch("http://localhost:8085/gafc-0.0.1-SNAPSHOT/apiCita/save", {        // Enviar una solicitud POST al servidor para guardar datos

            method: "POST",
            body: JSON.stringify({
                // Datos a enviar en el cuerpo de la solicitud
                "docApe": documentos[index],
                "docIns": docIns,
                "codIng": numerosGeneradosArray[index],
                "ipv1": ipv1,
                "ipv2": ipv2
            }),
            headers: {
                // Encabezados de la solicitud
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {  // Verificar si la respuesta de la solicitud es exitosa 
            console.log(`Registro ${index + 1} enviado con éxito`);
        } else {
            console.error(`Error al enviar registro ${index + 1}`); // En caso de error, mostrar mensaje en la consola
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

    btn.addEventListener("click", async function () {// se le coloca un evento para que cuando se le de click se llamen las funciones

        const cbo = document.getElementById("cbo-prueba").value;
        if (cbo === "0") {// Verificar si se seleccionó una opción
            Swal.fire({  // Si no se seleccionó ninguna opción, mostrar en la consola y salir de la función
                position: 'center',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                stopKeydownPropagation: true,
                title: '¡ ERROR !',
                html: '<b class="texto-alerta"> ¡Debe seleccionar una opcion! </b>',
                icon: 'error',
                iconColor: '#0e810e',
                confirmButtonColor: '#0e810e',
                timer: 8000
            });
            document.getElementById("cbo-prueba").focus();
            return;
        }
        Cbo();
        await generarCodigos();
        if (numerosGeneradosArray.length === nombres.length) {//esto valida que solo se envien registros cuando este todo listo
            enviarRegistros();
            Swal.fire({//alerta de éxito
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
                location.href = 'procesosInstructor.html';//al terminar lo envia a el formulario de procesos instructor
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





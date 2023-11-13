let myChart;
let resultadoSolicitu1;

function llenarGraficaPf(select) {

    if (myChart) {
        myChart.destroy();
    }

    let datosConsulta = [];
    const documentoSeleccionado = localStorage.getItem("documentoSeleccionado");
    var cbo = document.getElementById("pruebas").value;
    var cbof = cbo - 1;

    limpiarCampos();

    //FETCH PARA TRAER LOS PUNTAJES DIRECTOS DE LA BASE DE DATOS SEGUN EL APRENDIZ
    fetch('http://localhost:8085/apiPf/directo/' + documentoSeleccionado + "/" + cbof, {
        method: 'GET'
    })
        .then(response => response.text())
        .then(data => {
            try {
                // Parsea los datos separados por comas en un array de números
                datosConsulta = data.split(',').map(Number).filter(num => !isNaN(num));
            
                // Llenar los campos td con los valores del array
                for (let i = 0; i < datosConsulta.length; i++) {
                    const campoId = 'campo' + (i + 1);
                    const campo = document.getElementById(campoId);
                    if (campo) {
                        campo.textContent = datosConsulta[i].toString();
                    }
                }
            } catch (error) {
                console.error('Error al procesar los datos:', error);
            }
        })
        .catch(error => {
            console.error('Error en la solicitud HTTP:', error);
        });

    //FETCH PARA TRAER LO PUNTAJES FINALES DEL APRENDIZ SI ES QUE LOS TIENE 
    fetch('http://localhost:8085/apiPf/final/' + documentoSeleccionado + "/" + cbof, {
        method: 'GET'
    })
        .then(response => response.text())
        .then(data => {
            // Parsea los datos separados por comas en un array de números
            datosConsulta = data.split(',').map(Number).filter(num => !isNaN(num));
     
            // Llenar los campos td con los valores del array
            for (let i = 0; i < datosConsulta.length; i++) {
                const campoId = 'campo' + (i + 1) + "f";
                const campo = document.getElementById(campoId);
                if (campo) {
                    campo.textContent = datosConsulta[i].toString();
                }
            }
            //LLENAR LA GRAFICA CON LOS VALORES QUE SE TRAEN EN EL FETCH
            const ctx = document.getElementById('myChart').getContext('2d');
            myChart = new Chart(ctx, {
                type: 'line', // Tipo de gráfico (en este caso, de línea)
                data: {
                    labels: ['A', 'B', 'C', 'E', 'F', 'G', 'H', 'I', 'L', 'M', 'N', 'O', 'Q1', 'Q2', 'Q3', 'Q4', " "], // Etiquetas para el eje X
                    datasets: [{
                        label: 'RESULTADOS',
                        data: datosConsulta,  // Usamos los datos obtenidos de la consulta
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });

            //PARA DEFINIR SI LA TABLA TIENE CARGADOS O NO LOS DATOS FINALES
            if (datosConsulta.length === 0) {
                resultadoSolicitu1 = 2; // Establece resultadoSolicitu1 en 2 si los datos están vacíos   
            } else {
                resultadoSolicitu1 = 1; // Establece resultadoSolicitu1 en 1 si la solicitud es exitosa y los datos no están vacíos
            }
            localStorage.setItem('resultadoSolicitud1', resultadoSolicitu1); //guarda en el localStorage el resultado
        })
        .catch(error => {
            console.error('Error', error);
            resultadoSolicitu1 = 2; // Establece resultadoSolicitu1 en 2 si hay un error
            localStorage.setItem('resultadoSolicitud1', resultadoSolicitu1);
        });
}

//FUNCION PARA LIMPIAR CAMPOS ANTES DE CARGAR LA GRAFICA
function limpiarCampos() {

    for (let i = 1; i <= 16; i++) {
        const campoId = 'campo' + i;
        const campo = document.getElementById(campoId);
        if (campo) {
            campo.textContent = "";
        }
        const campoIdF = 'campo' + i + "f";
        const campoF = document.getElementById(campoIdF);
        if (campoF) {
            campoF.textContent = "";
        }
    }
}

// Función para establecer el fondo blanco en el canvas
function setWhiteBackground() {
    ctx.save(); // Guardar el contexto actual
    ctx.globalCompositeOperation = 'destination-over'; // Configurar el modo de composición
    ctx.fillStyle = 'white'; // Establecer el color de fondo blanco
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Dibujar un rectángulo blanco que cubra todo el canvas
    ctx.restore(); // Restaurar el contexto original
}

// Función para restaurar el fondo original del canvas
function restoreBackground() {
    // No hace nada, pero es necesaria para evitar un problema de descarga (ver comentario en la función downloadChartAsPDF)
}

//IMPLEMENTACIÓN DE BOTON DESCARGAR PARA SIGUIENTE FASE
// document.addEventListener("DOMContentLoaded", () => {
//     // Escuchamos el click del botón
//     const $boton = document.querySelector("#btnPDF2");
//     $boton.addEventListener("click", () => {
//         html2pdf()
//             .set({
//                 margin: 1,
//                 filename: 'Pantalla_Completa',
//                 image: {
//                     type: 'jpeg',
//                     quality: 0.98
//                 },
//                 html2canvas: {
//                     scale: 5,
//                     letterRendering: true,
//                 },
//                 jsPDF: {
//                     unit: "in",
//                     format: [20, 21],
//                     orientation: 'portrait'
//                 }
//             })
//             .from(document.body) // Cambia el elemento a document.body
//             .save()
//             .catch(err => console.log(err));
//     });
// });



//FUNCION PARA LLENAR EL COMBOBOX CON LOS RESULTADOS DIRECTOS DEL APRENDIZ
function llenarCbo() {
    const cbo = document.getElementById("pruebas");
    const documentoSeleccionado = localStorage.getItem("documentoSeleccionado");
    fetch("http://localhost:8085/apiPf/prueba/" + documentoSeleccionado, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            // Obtén el número de opciones que deseas agregar
            const numeroDeOpciones = data; // Asume que data contiene el número deseado
            // Agrega la cantidad de opciones especificada
            for (let i = 1; i <= numeroDeOpciones; i++) {
                const option = document.createElement("option");
                option.value = i; // Asigna un valor
                option.textContent = `Resultado ${i}`; // Puedes personalizar el texto aquí
                cbo.appendChild(option); // Agrega la opción al select
            }
        })
        .catch(error => {
            console.error("Error en la consulta Fetch:", error);
        });
}

//FUNCIONES QUE HARA CUANDO SE LE DE AL BOTON 
document.addEventListener("DOMContentLoaded", function () {

    llenarCbo(); // Llenar el combo cuando se carga la página

    const estado = document.getElementById("pruebas");
    const btn = document.getElementById("decatipos");

    btn.addEventListener("click", function () {

        const valor1 = localStorage.getItem("resultadoSolicitud");
        const valor2 = localStorage.getItem("resultadoSolicitud1");
        const est = estado.value;

        if (est === "0") {
            Swal.fire({
                position: 'center',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                stopKeydownPropagation: true,
                title: '¡ ERROR !',
                html: '<b class="texto-alerta"> ¡Debe seleccionar una prueba! </b>',
                icon: 'error',
                iconColor: '#0e810e',
                confirmButtonColor: '#0e810e',
                timer: 8000
            });
        } else if (valor2 === "1") {
            Swal.fire({
                position: 'center',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                stopKeydownPropagation: true,
                title: '¡ ERROR !',
                html: '<b class="texto-alerta"> ¡La prueba ya tiene sus Puntajes finales! </b>',
                icon: 'error',
                iconColor: '#0e810e',
                confirmButtonColor: '#0e810e',
                timer: 8000
            });
        } else {
            location.href = 'registrarDecatipos.html'
        }
    });
});




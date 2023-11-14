let myChart;

// Función para llenar la gráfica
function llenarGrafica(select) {
    // Si ya existe un gráfico, destrúyelo antes de crear uno nuevo
    if (myChart) {
        myChart.destroy();
    }

    // Array para almacenar los datos de la consulta
    let datosConsulta = [];
    // Obtiene el documento seleccionado del almacenamiento local
    const documentoSeleccionado = localStorage.getItem("documentoSeleccionado");
    // Obtiene el valor seleccionado del elemento con el ID "pruebas"
    var cbo = document.getElementById("pruebas").value;
    // Calcula el índice para la consulta (resta 1)
    var cbof = cbo - 1;

    // Realiza una solicitud GET a la API con el documento seleccionado y el índice
    fetch('http://localhost:8085/apiPrue/' + documentoSeleccionado + "/" + cbof, {
        method: 'GET'
    })
        .then(response => response.text())
        .then(data => {
            // Parsea los datos separados por comas en un array de números
            datosConsulta = data.split(',').map(Number).filter(num => !isNaN(num));
            // Llena los campos td con los valores del array
            for (let i = 0; i < datosConsulta.length; i++) {
                const campoId = 'campo' + (i + 1); // Los IDs están numerados de campo1 a campo12
                const campo = document.getElementById(campoId);
                if (campo) {
                    campo.textContent = datosConsulta[i].toString();
                }
            }

            // Configura y crea un nuevo gráfico utilizando la biblioteca Chart.js
            const ctx = document.getElementById('myChart').getContext('2d');
            myChart = new Chart(ctx, {
                type: 'line', // Tipo de gráfico (en este caso, de línea)
                data: {
                    labels: ['DGV', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'R', 'A', ' '], // Etiquetas para el eje X
                    datasets: [{
                        label: 'RESULTADOS',
                        data: datosConsulta,  // Utiliza los datos obtenidos de la consulta
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
        })
        .catch(error => {
            console.error('Error', error);
        });
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
// function restoreBackground() {
//     // No hace nada, pero es necesaria para evitar un problema de descarga (ver comentario en la función downloadChartAsPDF)
// }


// document.addEventListener("DOMContentLoaded", () => {
//     // Escuchamos el click del botón
//     const $boton = document.querySelector("#btnPDF");
//     $boton.addEventListener("click", () => {
//         // Obtenemos el tamaño de la pantalla
//         const { width, height } = window;

//         // Creamos un canvas con el tamaño de la pantalla
//         const canvas = document.createElement("canvas");
//         canvas.width = width;
//         canvas.height = height;

//         // Dibujamos la pantalla en el canvas
//         canvas.getContext("2d").drawImage(document.body, 0, 0, width, height);

//         // Convertimos el canvas a un archivo PDF
//         html2pdf()
//             .set({
//                 margin: 1,
//                 filename: 'pantalla.pdf',
//                 image: {
//                     type: 'jpeg',
//                     quality: 0.98
//                 },
//                 html2canvas: {
//                     canvas: canvas,
//                 },
//                 jsPDF: {
//                     unit: "in",
//                     format: [width, height],
//                     orientation: 'portrait'
//                 }
//             })
//             .from(canvas)
//             .save(window.open);
//     });
// });



document.addEventListener("DOMContentLoaded", function () {
    // Llenar el combo cuando se carga la página
    llenarCbo();
});



function llenarCbo() {
    const cbo = document.getElementById("pruebas");
    const cbofi = cbo - 1;
    const documentoSeleccionado = localStorage.getItem("documentoSeleccionado");
    fetch("http://localhost:8085/apiPrue/prueba" + "/" + documentoSeleccionado, {
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





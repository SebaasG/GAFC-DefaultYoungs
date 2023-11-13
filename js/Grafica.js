// let myChart;
// function llenarGrafica(select) {

//     if (myChart) {
//         myChart.destroy();
//     }


//     let datosConsulta = [];
//     const documentoSeleccionado = localStorage.getItem("documentoSeleccionado");
//     var cbo = document.getElementById("pruebas").value;
//     var cbof = cbo-1;
//     fetch('http://localhost:8085/apiPrue/' + documentoSeleccionado+ "/"+cbof ,{
//         method: 'GET'
//     })
//         .then(response => response.text())
//         .then(data => {
//             // Parsea los datos separados por comas en un array de números
//             datosConsulta = data.split(',').map(Number).filter(num => !isNaN(num));
//             console.log('Datos de la consulta:', datosConsulta);

//             // Llenar los campos td con los valores del array
//             for (let i = 0; i < datosConsulta.length; i++) {
//                 const campoId = 'campo' + (i + 1); // Los IDs están numerados de campo1 a campo12
//                 const campo = document.getElementById(campoId);
//                 if (campo) {
//                     campo.textContent = datosConsulta[i].toString();
//                 }
//             }
//             const ctx = document.getElementById('myChart').getContext('2d');
//             myChart = new Chart(ctx, {
//                 type: 'line', // Tipo de gráfico (en este caso, de línea)
//                 data: {
//                     labels: ['DGV', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'R', 'A', ' '], // Etiquetas para el eje X
//                     datasets: [{
//                         label: 'RESULTADOS',
//                         data: datosConsulta,  // Usamos los datos obtenidos de la consulta
//                         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                         borderColor: 'rgba(255, 99, 132, 1)',
//                         borderWidth: 1
//                     }]
//                 },
//                 options: {
//                     scales: {
//                         yAxes: [{
//                             ticks: {
//                                 beginAtZero: true
//                             }
//                         }]
//                     }
//                 }
//             });


//         })
//         .catch(error => {
//             console.error('Error', error);
//         });
// }


// // Función para establecer el fondo blanco en el canvas
// function setWhiteBackground() {
//     ctx.save(); // Guardar el contexto actual
//     ctx.globalCompositeOperation = 'destination-over'; // Configurar el modo de composición
//     ctx.fillStyle = 'white'; // Establecer el color de fondo blanco
//     ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Dibujar un rectángulo blanco que cubra todo el canvas
//     ctx.restore(); // Restaurar el contexto original
// }

// // Función para restaurar el fondo original del canvas
// // function restoreBackground() {
// //     // No hace nada, pero es necesaria para evitar un problema de descarga (ver comentario en la función downloadChartAsPDF)
// // }
// document.addEventListener("DOMContentLoaded", () => {
//     // Escuchamos el click del botón
//     const $boton = document.querySelector("#btnPDF2");
//     $boton.addEventListener("click", () => {
//         const $elementoParaConvertir = document.querySelector("#pdfContainer");
//         html2pdf()
//             .set({
//                 margin: 1,
//                 filename: 'Grafica Seleccion2',
//                 image: {
//                     type: 'jpeg',
//                     quality: 0.98
//                 },
//                 html2canvas: {
//                     scale: 1,
//                     letterRendering: true,
//                 },
//                 jsPDF: {
//                     unit: "in",
//                     format: [9, 20],
//                     orientation: 'portrait'
//                 }
//             })
//             .from($elementoParaConvertir)
//             .save()
//             .catch(err => console.log(err));
//     });
// });

// document.addEventListener("DOMContentLoaded", () => {
  
//     $boton.addEventListener("click", () => {
//         const $elementoParaConvertir = document.querySelector("#pdfContainer");
        
//         if ($combobox) {
//             $combobox.style.display = "none"; // Oculta el combobox antes de la conversión
//         }

//         // Captura el contenido y genera un PDF
//         const html2canvasOptions = {
//             scale: 2, // Ajusta la escala según sea necesario
//             useCORS: true, // Permite la captura de contenido externo
//         };

//         html2canvas($elementoParaConvertir, html2canvasOptions).then(canvas => {
//             const pdf = new jsPDF('p', 'mm', 'letter');
//             const imgData = canvas.toDataURL('image/jpeg', 1.0);
//             pdf.addImage(imgData, 'JPEG', 0, 0, 210, 295); // Ajusta el tamaño según sea necesario
//             pdf.save('Pantalla_Completa.pdf');
            
//             if ($combobox) {
//                 $combobox.style.display = "block"; // Vuelve a mostrar el combobox después de la conversión
//             }
//         });
//     });
// });





// // document.addEventListener("DOMContentLoaded", () => {
// //     // Escuchamos el click del botón
// //     const $boton = document.querySelector("#btnPDF");
// //     $boton.addEventListener("click", () => {
// //         // Obtenemos el tamaño de la pantalla
// //         const { width, height } = window;

// //         // Creamos un canvas con el tamaño de la pantalla
// //         const canvas = document.createElement("canvas");
// //         canvas.width = width;
// //         canvas.height = height;

// //         // Dibujamos la pantalla en el canvas
// //         canvas.getContext("2d").drawImage(document.body, 0, 0, width, height);

// //         // Convertimos el canvas a un archivo PDF
// //         html2pdf()
// //             .set({
// //                 margin: 1,
// //                 filename: 'pantalla.pdf',
// //                 image: {
// //                     type: 'jpeg',
// //                     quality: 0.98
// //                 },
// //                 html2canvas: {
// //                     canvas: canvas,
// //                 },
// //                 jsPDF: {
// //                     unit: "in",
// //                     format: [width, height],
// //                     orientation: 'portrait'
// //                 }
// //             })
// //             .from(canvas)
// //             .save(window.open);
// //     });
// // });



// document.addEventListener("DOMContentLoaded", function () {
//     // Llenar el combo cuando se carga la página
//     llenarCbo();
// });

// function llenarCbo() {
//     const cbo = document.getElementById("pruebas");
//     const documentoSeleccionado = localStorage.getItem("documentoSeleccionado");
//     fetch("http://localhost:8085/apiPrue/prueba/"+documentoSeleccionado, {
//         method: 'GET'
//     })
//         .then(response => response.json())
//         .then(data => {
//             // Obtén el número de opciones que deseas agregar
//             const numeroDeOpciones = data; // Asume que data contiene el número deseado

//             // Agrega la cantidad de opciones especificada
//             for (let i = 1; i <= numeroDeOpciones; i++) {
//                 const option = document.createElement("option");
//                 option.value = i; // Asigna un valor
//                 option.textContent = `Resultado ${i}`; // Puedes personalizar el texto aquí

//                 cbo.appendChild(option); // Agrega la opción al select
//             }
//         })
//         .catch(error => {
//             console.error("Error en la consulta Fetch:", error);
//         });
// }




document.addEventListener("DOMContentLoaded", function () {
    llenarCbo(); // Llenar el combo cuando se carga la página

    const estado = document.getElementById("pruebas");
    const btnPDF = document.getElementById("btnPDF2");
    const btnDecatipos = document.getElementById("decatipos");

    // Función para verificar si todos los campos de decatipos están llenos
    function areDecatiposFieldsFilled() {
        for (let i = 1; i <= 16; i++) {
            const campoId = 'campo' + i;
            const campo = document.getElementById(campoId);
            if (!campo || !campo.textContent.trim()) {
                return false; // Si al menos uno de los campos está vacío, devuelve false
            }
        }
        return true; // Todos los campos están llenos, devuelve true
    }

    btnPDF.addEventListener("click", () => {
        if (areDecatiposFieldsFilled()) {
            // Todos los campos de decatipos están llenos, ejecuta el código para descargar el PDF
            html2pdf()
                .set({
                    margin: 1,
                    filename: 'Pantalla_Completa',
                    image: {
                        type: 'jpeg',
                        quality: 0.98
                    },
                    html2canvas: {
                        scale: 5,
                        letterRendering: true,
                    },
                    jsPDF: {
                        unit: "in",
                        format: [20, 21],
                        orientation: 'portrait'
                    }
                })
                .from(document.body)
                .save()
                .catch(err => console.log(err));
        } else {
            // Muestra una alerta porque no todos los campos están llenos
            Swal.fire({
                position: 'center',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                stopKeydownPropagation: true,
                title: '¡ ERROR !',
                html: '<b class="texto-alerta"> ¡Todos los campos de decatipos deben estar llenos! </b>',
                icon: 'error',
                iconColor: '#0e810e',
                confirmButtonColor: '#0e810e',
                timer: 8000
            });
        }
    });

    btnDecatipos.addEventListener("click", function () {
        const est = estado.value;
        console.log(est);
        if (est === "0") {
            Swal.fire({
                position: 'center',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                stopKeydownPropagation: true,
                title: '¡ ERROR !',
                html: '<b class="texto-alerta"> ¡Debe seleccionar la prueba! </b>',
                icon: 'error',
                iconColor: '#0e810e',
                confirmButtonColor: '#0e810e',
                timer: 8000
            });
        } else {
            location.href = 'registrarDecatipos.html';
        }
    });
});



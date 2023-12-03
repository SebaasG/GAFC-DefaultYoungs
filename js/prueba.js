// Obtiene el valor almacenado en el localStorage con clave "datos"
const valorLocalStorage = localStorage.getItem("datos");
// Obtiene referencias a los elementos con los ID "sel1" y "sel2"
const prueba1 = document.getElementById('sel1');
const prueba2 = document.getElementById('sel2');

// Realiza una solicitud GET a la API para obtener datos relacionados con la prueba
fetch('http://localhost:8085/apiCita/prueba/' + valorLocalStorage, {
    method: 'GET'
})
    .then(response => response.json()) // Convierte la respuesta a formato JSON
    .then(data1 => {
        // Verifica el valor obtenido de la respuesta JSON
        if (data1 === 2) {
            // Si el valor es 2, deshabilita y cambia el estilo del elemento con ID "sel2"
            prueba2.disabled = true;
            prueba2.style.backgroundColor = '#f2f2f2';
            prueba2.style.color = "#999";
        } else {
            // Si el valor es 3, deshabilita y cambia el estilo del elemento con ID "sel1"
            if (data1 === 3) {
                prueba1.disabled = true;
                prueba1.style.backgroundColor = "#f2f2f2";
                prueba1.style.color = "#999";
            }
        }
        console.log(JSON.stringify(data1)); // Muestra los datos en forma de cadena JSON o realiza cualquier otro procesamiento
    })
    .catch(error => {
        console.error('Error:', error);
    });

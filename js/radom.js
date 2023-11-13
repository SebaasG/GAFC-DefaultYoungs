const rangoMinimo = 1;
const rangoMaximo = 10;
const numerosGenerados = new Set();


    const resultadoElement = document.getElementById("resultado");

   async function generarcod(){
        if (numerosGenerados.size === rangoMaximo - rangoMinimo + 1) {
            alert("Se han generado todos los números en el rango.");
            return;
        }

        let numeroAleatorio;
        let existeEnDB;

        do {
            numeroAleatorio = Math.floor(Math.random() * (rangoMaximo - rangoMinimo + 1)) + rangoMinimo;
            existeEnDB = await existeEnBaseDeDatos(numeroAleatorio);
        } while (numerosGenerados.has(numeroAleatorio) || existeEnDB);

        // Agregar el número a la base de datos simulada (en este caso, el conjunto "numerosGenerados")
        numerosGenerados.add(numeroAleatorio);

        resultadoElement.textContent = `Número único generado: ${numeroAleatorio}`;
    };
;

// Simula una función para verificar si un número existe en la base de datos
async function existeEnBaseDeDatos(numeroAleatorio) {
    try {
        const response = await fetch('http://localhost:8085/apiApe/Cod', {
            method: 'GET'
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Datos', data);

            // Comprobar si el númeroAleatorio no está en la lista de números de la base de datos
            const existe = data.includes(numeroAleatorio);
            return existe; // Devolver true si el número no existe en la base de datos
        } else {
            console.error('Error en la solicitud HTTP');
            return false; // Hubo un error en la solicitud
        }
    } catch (error) {
        console.error('Error en la solicitud HTTP', error);
        return false; // Hubo un error en la solicitud
    }
}

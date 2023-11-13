const valorLocalStorage = localStorage.getItem("datos");
const prueba1 = document.getElementById('sel1');
const prueba2 = document.getElementById('sel2');
fetch('http://localhost:8085/apiCita/prueba/' + valorLocalStorage, {
    method: 'GET'
})
.then(response => response.json()) // Aquí convierte la respuesta a formato JSON
.then(data1 => {
  
    if(data1 === 2 ){
        prueba2.disabled = true;
        prueba2.style.backgroundColor = '#f2f2f2'; 
        prueba2.style.color = "#999";
    }else{
     if(data1 === 3 ){
        prueba1.disabled = true;
        prueba1.style.backgroundColor = "#f2f2f2"; // Cambiar el color de fondo
        prueba1.style.color = "#999";
        }
    }
    console.log(JSON.stringify(data1)); // Puedes mostrar los datos en forma de cadena JSON o realizar cualquier otro procesamiento
})
.catch(error => {
    console.error('Error:', error);
});

// Obtener el documento del instructor almacenado en el localStorage
const documentoinstructor = localStorage.getItem("documentoinstructor");

// Realizar una solicitud GET al servidor para obtener datos del instructor
fetch('http://localhost:8085/gafc-0.0.1-SNAPSHOT/apiIns/' + documentoinstructor, {
  method: 'GET'
})
  .then(response => response.json())
  .then(data => {
    // Actualizar los campos de entrada con los datos obtenidos del servidor
    document.getElementById('docContra').value = data.docIns;
    document.getElementById('nomContra').value = data.nomIns;
    document.getElementById('password').value = data.conIns;

    // Obtener el estado del instructor y ajustar el valor seleccionado en el elemento "estaContra"
    const valor = data.estado;
    console.log(data.estado);
    const selectElement = document.getElementById('estaContra');
    if (valor == 0) {
      selectElement.value = '2'; // "Inactivo"
    } else if (valor == 1) {
      selectElement.value = '1'; // "Activo"
    } else if (valor == 3) {
      selectElement.value = '3'; // "Admin"
    }
  });

// Función para validar los campos antes de la actualización
function validarContraseña() {
  var documento = document.getElementById("docContra").value;
  var nombre = document.getElementById("nomContra").value;
  var password = document.getElementById("password").value;
  var estado = document.getElementById("estaContra").value;

  // Verificar si alguno de los campos obligatorios está vacío
  if (documento == "" || nombre == "" || password == "" || estado == 0) {
    // Mostrar una alerta de error si hay campos vacíos
    Swal.fire({
      position: 'center',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      stopKeydownPropagation: true,
      title: '¡ERROR!',
      html: '<b class="texto-alerta"> ¡Por favor, rellene los campos ya que son obligatorios! </b>',
      icon: 'error',
      iconColor: '#0e810e',
      confirmButtonColor: '#0e810e',
      timer: 8000
    });
  } else {
    // Si los campos están completos, llamar a la función para actualizar los datos
    actualizarDatos();
  }
}

// Función asincrónica para actualizar los datos del instructor
async function actualizarDatos() {
  // Obtener el documento del instructor almacenado en el localStorage
  const documentoinstructor = localStorage.getItem("documentoinstructor");
  const nombre = document.getElementById("nomContra").value;
  const contraseña = document.getElementById("password").value;
  const estado = document.getElementById("estaContra").value;
  var estado1;

  // Asignar valores correspondientes al estado según la opción seleccionada
  if (estado == 2) {
    estado1 = 0; // "Inactivo"
  } else if (estado == 1) {
    estado1 = 1; // "Activo"
  } else if (estado == 3) {
    estado1 = 3; // "Admin"
  }

  // Crear un objeto con los datos a enviar en la solicitud PUT
  const data = {
    docIns: documentoinstructor,
    nomIns: nombre,
    conIns: contraseña,
    estado: estado1
  };

  try {
    // Enviar una solicitud PUT al servidor para actualizar los datos del instructor
    const response = await fetch("http://localhost:8085/gafc-0.0.1-SNAPSHOT/apiIns/" + documentoinstructor, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });

    // Verificar si la respuesta del servidor es exitosa (código 2xx)
    if (response.ok) {
      // Mostrar una alerta de éxito y redirigir después de un tiempo específico
      Swal.fire({
        position: 'center',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: true,
        title: '¡ÉXITO!',
        html: '<b class="texto-alerta"> ¡Datos actualizados! </b>',
        icon: 'success',
        iconColor: '#0e810e',
        confirmButtonColor: '#0e810e',
        timer: 8000
      });
      setTimeout(() => {
        location.href = 'TablaInstructor.html';
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
        html: '<b class="texto-alerta"> ¡Hubo un problema! </b>',
        icon: 'error',
        iconColor: '#0e810e',
        confirmButtonColor: '#0e810e',
        timer: 8000
      });
      setTimeout(() => {
      }, 2000);
    }
  } catch (error) {
    // Manejar errores de red e imprimir en la consola
    console.error("Error de red:", error);
  }
}

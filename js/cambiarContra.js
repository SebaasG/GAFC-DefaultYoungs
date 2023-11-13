const documentoinstructor = localStorage.getItem("documentoinstructor");
 fetch('http://localhost:8085/apiIns/' + documentoinstructor, {
    method: 'GET'
})
    .then(response => response.json())
    .then(data => {
        document.getElementById('docContra').value = data.docIns;
        document.getElementById('nomContra').value = data.nomIns;
        document.getElementById('password').value = data.conIns;
        const valor = data.estado;
        console.log(data.estado);
        const selectElement = document.getElementById('estaContra');
        if (valor == 0) {
            selectElement.value = '2'; // "Inactivo"
        } else if (valor == 1) {
            selectElement.value = '1'; // "Activo"
        }else if(valor == 3){
          selectElement.value = '3'; // "Admin"
        }
    });

function validarContraseña(){
  var documento = document.getElementById("docContra").value;
  var nombre = document.getElementById("nomContra").value;
  var password = document.getElementById("password").value;
  var estado = document.getElementById("estaContra").value;

  if(documento == "" || nombre == "" || password == "" || estado == 0){
    Swal.fire({
      position: 'center',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      stopKeydownPropagation: true,
      title: '¡ ERROR !',
      html: '<b class="texto-alerta"> ¡Por favor, rellene los campos ya que son obligatorios! </b>',
      icon: 'error',
      iconColor: '#0e810e',
      confirmButtonColor: '#0e810e',
      timer: 8000
    });
}else{  
  actualizarDatos();
}
}

async function actualizarDatos() {

  const documentoinstructor = localStorage.getItem("documentoinstructor");
  const nombre = document.getElementById("nomContra").value;
  const contraseña = document.getElementById("password").value;
  const estado = document.getElementById("estaContra").value;
  var estado1;
  if (estado == 2) {
     estado1 = 0 // "Inactivo"
} else if (estado == 1) {
   estado1 = 1; // "Activo"
}else if(estado == 3){
  estado1 = 3; // "Admin"
}

  const data = {
      docIns: documentoinstructor,
      nomIns: nombre,
      conIns: contraseña,
      estado: estado1
  };

  try {
      const response = await fetch("http://localhost:8085/apiIns/" + documentoinstructor, {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
              "Content-Type": "application/json"
          }
      });

      if (response.ok) {
        Swal.fire({
          position: 'center',
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          stopKeydownPropagation: true,
          title: '¡ ÉXITO !',
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
        Swal.fire({
          position: 'center',
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          stopKeydownPropagation: true,
          title: '¡ ERROR !',
          html: '<b class="texto-alerta"> ¡Hubo un problema ! </b>',
          icon: 'error',
          iconColor: '#0e810e',
          confirmButtonColor: '#0e810e',
          timer: 8000
      });
      setTimeout(() => {
      }, 2000);
      }
  } catch (error) {
      console.error("Error de red:", error);
  }
}


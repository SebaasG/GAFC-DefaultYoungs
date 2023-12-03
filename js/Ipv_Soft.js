//Funcion para guardar la seccion 1
async function guardar1() {
    for (let i = 1; i <= 17; i++) {
        var idPregunta = 'pregunta' + i; // construir el id de la pregunta
        var numPreRes = i; //Asigna el numero de la pregunta mientra se reproduce el ciclo
        var respRes = document.getElementById(idPregunta).value; // Trae el valor de la pregunta
        var docApe = localStorage.getItem("datos"); //Trae y guarda el valor que esta en el localStorage 
        var codPro = 1;//Se asigna el tipo de proceso al que pertenece
        console.log(idPregunta,numPreRes,respRes,docApe,codPro);
        try {
            await fetch("http://localhost:8085/apiRes/saveRes", { //Enviar la respuesta a la API
                method: "POST",
                body: JSON.stringify({
                    "numPreRes": numPreRes,
                    "respRes": respRes,
                    "docApe": docApe,
                    "codPro": codPro
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
        }
    }
}

async function guardar2() {
    for (let i = 18; i <= 34; i++) {
        var idPregunta = 'pregunta' + i;
        var numPreRes = i;
        var respRes = document.getElementById(idPregunta).value;
        var docApe = localStorage.getItem("datos");
        var codPro = 1;
        await fetch("http://localhost:8085/apiRes/saveRes", {
            method: "POST",
            body: JSON.stringify({
                "numPreRes": numPreRes,
                "respRes": respRes,
                "docApe": docApe,
                "codPro": codPro
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
};

async function guardar3() {
    for (let i = 35; i <= 51; i++) {
        var idPregunta = 'pregunta' + i;
        var numPreRes = i;
        var respRes = document.getElementById(idPregunta).value;
        var docApe = localStorage.getItem("datos");
        var codPro = 1;
        await fetch("http://localhost:8085/apiRes/saveRes", {
            method: "POST",
            body: JSON.stringify({
                "numPreRes": numPreRes,
                "respRes": respRes,
                "docApe": docApe,
                "codPro": codPro
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

}

async function guardar4() {
    for (let i = 52; i <= 68; i++) {
        var idPregunta = 'pregunta' + i; // Construir el ID de la pregunta
        var numPreRes = i;
        var respRes = document.getElementById(idPregunta).value;
        var docApe = localStorage.getItem("datos");
        var codPro = 1;
        await fetch("http://localhost:8085/apiRes/saveRes", {
            method: "POST",
            body: JSON.stringify({
                "numPreRes": numPreRes,
                "respRes": respRes,
                "docApe": docApe,
                "codPro": codPro
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

}

//Validar y guardar

function alertas() {
    Swal.fire({
        position: 'center',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: true,
        title: '¡ ERROR !',
        html: '<b class="texto-alerta"> ¡Por favor, rellene los campos y que son obligatorios! </b>',
        icon: 'error',
        iconColor: '#0e810e',
        confirmButtonColor: '#0e810e',
        timer: 8000
    });
}


async function validarSeccion1() {
    var preguntas = ['pregunta1', 'pregunta2', 'pregunta3', 'pregunta4', 'pregunta5', 'pregunta6',
        'pregunta7', 'pregunta8', 'pregunta9', 'pregunta10', 'pregunta11', 'pregunta12',
        'pregunta13', 'pregunta14', 'pregunta15', 'pregunta16', 'pregunta17'];
    for (var i = 0; i < preguntas.length; i++) {
        var pregunta = document.getElementById(preguntas[i]);
        if (pregunta.value == 0) {
            pregunta.focus();
            alertas();
            return;
        }
    }
    await guardar1();

    var nuevaPestana = window.open("Seccion2.html", "_blank");

    setTimeout(function () {
        window.open('about:blank', '_self').close();
    }, 2);
}

async function validarSeccion2() {
    var preguntas = ['pregunta18', 'pregunta19', 'pregunta20', 'pregunta21', 'pregunta22', 'pregunta23',
        'pregunta24', 'pregunta25', 'pregunta26', 'pregunta27', 'pregunta28', 'pregunta29',
        'pregunta30', 'pregunta31', 'pregunta32', 'pregunta33', 'pregunta34'];
    for (var i = 0; i < preguntas.length; i++) {
        var pregunta = document.getElementById(preguntas[i]);
        if (pregunta.value == 0) {
            pregunta.focus();
            alertas();
            return;
        }
    }
    await guardar2();
    var nuevaPestana = window.open("Seccion3.html", "_blank");

    setTimeout(function () {
        window.open('about:blank', '_self').close();
    }, 2);
}

async function validarSeccion3() {
    var preguntas = ['pregunta35', 'pregunta36', 'pregunta37', 'pregunta38', 'pregunta39', 'pregunta40',
        'pregunta41', 'pregunta42', 'pregunta43', 'pregunta44', 'pregunta45', 'pregunta46',
        'pregunta47', 'pregunta48', 'pregunta49', 'pregunta50', 'pregunta51'];
    for (var i = 0; i < preguntas.length; i++) {
        var pregunta = document.getElementById(preguntas[i]);
        if (pregunta.value == 0) {
            pregunta.focus();
            alertas();
            return;
        }
    }
    await guardar3();
    var nuevaPestana = window.open("Seccion4.html", "_blank");

    setTimeout(function () {
        window.open('about:blank', '_self').close();
    }, 2);
}

async function validarSeccion4() {
    var preguntas = ['pregunta52', 'pregunta53', 'pregunta54', 'pregunta55', 'pregunta56', 'pregunta57',
        'pregunta58', 'pregunta59', 'pregunta60', 'pregunta61', 'pregunta62', 'pregunta63',
        'pregunta64', 'pregunta65', 'pregunta66', 'pregunta67', 'pregunta68'];
    for (var i = 0; i < preguntas.length; i++) {
        var pregunta = document.getElementById(preguntas[i]);
        if (pregunta.value == 0) {
            pregunta.focus();
            alertas();
            return;
        }
    }
    await guardar4();
    var nuevaPestana = window.open("Seccion5.html", "_blank");

    setTimeout(function () {
        window.open('about:blank', '_self').close();
    }, 2);
}

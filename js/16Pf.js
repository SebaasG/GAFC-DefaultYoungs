//Funcion para guardar la seccion 1
async function guardarp1() {
    for (let i = 1; i <= 21; i++) {
        var idPreguntaP = 'preguntaP' + i; // Construir el ID de la pregunta
        var numPreRes = i; //Asigna el numero de la pregunta mientra se reproduce el ciclo
        var respRes = document.getElementById(idPreguntaP).value; // Trae el valor de la pregunta
        var docApe = localStorage.getItem("datos"); //Trae y guarda el valor que esta en el localStorage
        var codPro = 2; //Se asigna el tipo de proceso al que pertenece
        try {
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
            });
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
        }
    }
}

async function guardarp2() {
    for (let i = 22; i <= 42; i++) {
        var idPreguntaP = 'preguntaP' + i; // Construir el ID de la pregunta
        var numPreRes = i;
        var respRes = document.getElementById(idPreguntaP).value;
        var docApe = localStorage.getItem("datos");
        var codPro = 2;
        try {
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
            });
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
        }
    }
}

async function guardarp3() {
    for (let i = 43; i <= 63; i++) {
        var idPreguntaP = 'preguntaP' + i; // Construir el ID de la pregunta
        var numPreRes = i;
        var respRes = document.getElementById(idPreguntaP).value;
        var docApe = localStorage.getItem("datos");
        var codPro = 2;
        try {
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
            });
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
        }
    }
}
async function guardarp4() {
    for (let i = 64; i <= 84; i++) {
        var idPreguntaP = 'preguntaP' + i; // Construir el ID de la pregunta
        var numPreRes = i;
        var respRes = document.getElementById(idPreguntaP).value;
        var docApe = localStorage.getItem("datos");
        var codPro = 2;
        try {
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
            });
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
        }
    }
}

async function guardarp5() {
    for (let i = 85; i <= 105; i++) {
        var idPreguntaP = 'preguntaP' + i; // Construir el ID de la pregunta
        var numPreRes = i;
        var respRes = document.getElementById(idPreguntaP).value;
        var docApe = localStorage.getItem("datos");
        var codPro = 2;
        try {
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
            });
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
        }
    }
}

async function guardarp6() {
    for (let i = 106; i <= 126; i++) {
        var idPreguntaP = 'preguntaP' + i; // Construir el ID de la pregunta
        var numPreRes = i;
        var respRes = document.getElementById(idPreguntaP).value;
        var docApe = localStorage.getItem("datos");
        var codPro = 2;
        try {
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
            });
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
        }
    }
}

async function guardarp7() {
    for (let i = 127; i <= 147; i++) {
        var idPreguntaP = 'preguntaP' + i; // Construir el ID de la pregunta
        var numPreRes = i;
        var respRes = document.getElementById(idPreguntaP).value;
        var docApe = localStorage.getItem("datos");
        var codPro = 2;
        try {
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
            });
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
        }
    }
}

async function guardarp8() {
    for (let i = 148; i <= 168; i++) {
        var idPreguntaP = 'preguntaP' + i; // Construir el ID de la pregunta
        var numPreRes = i;
        var respRes = document.getElementById(idPreguntaP).value;
        var docApe = localStorage.getItem("datos");
        var codPro = 2;
        try {
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
            });
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
        }
    }
}


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

async function validarSeccionP1() {
    var preguntas = ['preguntaP1', 'preguntaP2', 'preguntaP3', 'preguntaP4', 'preguntaP5', 'preguntaP6',
        'preguntaP7', 'preguntaP8', 'preguntaP9', 'preguntaP10', 'preguntaP11', 'preguntaP12', 'preguntaP13',
        'preguntaP14', 'preguntaP15', 'preguntaP16', 'preguntaP17', 'preguntaP18', 'preguntaP19', 'preguntaP20', 'preguntaP21'];
    for (var i = 0; i < preguntas.length; i++) {
        var pregunta = document.getElementById(preguntas[i]);
        if (pregunta.value == 0) {
            pregunta.focus();
            alertas();
            return;
        }
    }
    await guardarp1();
    location.href = 'SeccionP2.html';

}

async function validarSeccionP2() {
    var preguntas = ['preguntaP22', 'preguntaP23', 'preguntaP24', 'preguntaP25', 'preguntaP26', 'preguntaP27',
        'preguntaP28', 'preguntaP29', 'preguntaP30', 'preguntaP31', 'preguntaP32', 'preguntaP33', 'preguntaP34',
        'preguntaP35', 'preguntaP36', 'preguntaP37', 'preguntaP38', 'preguntaP39', 'preguntaP40', 'preguntaP41', 'preguntaP42'];
    for (var i = 0; i < preguntas.length; i++) {
        var pregunta = document.getElementById(preguntas[i]);
        if (pregunta.value == 0) {
            pregunta.focus();
            alertas();
            return;
        }
    }
    await guardarp2();
    location.href = 'SeccionP3.html';
}

async function validarSeccionP3() {
    var preguntas = ['preguntaP43', 'preguntaP44', 'preguntaP45', 'preguntaP46', 'preguntaP47', 'preguntaP48',
        'preguntaP49', 'preguntaP50', 'preguntaP51', 'preguntaP52', 'preguntaP53', 'preguntaP54', 'preguntaP55',
        'preguntaP56', 'preguntaP57', 'preguntaP58', 'preguntaP59', 'preguntaP60', 'preguntaP61', 'preguntaP62', 'preguntaP63'];
    for (var i = 0; i < preguntas.length; i++) {
        var pregunta = document.getElementById(preguntas[i]);
        if (pregunta.value == 0) {
            pregunta.focus();
            alertas();
            return;
        }
    }
    await guardarp3();
    location.href = 'SeccionP4.html';
}

async function validarSeccionP4() {
    var preguntas = ['preguntaP64', 'preguntaP65', 'preguntaP66', 'preguntaP67', 'preguntaP68', 'preguntaP69',
        'preguntaP70', 'preguntaP71', 'preguntaP72', 'preguntaP73', 'preguntaP74', 'preguntaP75', 'preguntaP76',
        'preguntaP77', 'preguntaP78', 'preguntaP79', 'preguntaP80', 'preguntaP81', 'preguntaP82', 'preguntaP83', 'preguntaP84'];

    for (var i = 0; i < preguntas.length; i++) {
        var pregunta = document.getElementById(preguntas[i]);
        if (pregunta.value == 0) {
            pregunta.focus();
            alertas();
            return;
        }
    }
    await guardarp4();
    location.href = 'SeccionP5.html';

}

async function validarSeccionP5() {
    var preguntas = ['preguntaP85', 'preguntaP86', 'preguntaP87', 'preguntaP88', 'preguntaP89', 'preguntaP90',
        'preguntaP91', 'preguntaP92', 'preguntaP93', 'preguntaP94', 'preguntaP95', 'preguntaP96', 'preguntaP97',
        'preguntaP98', 'preguntaP99', 'preguntaP100', 'preguntaP101', 'preguntaP102', 'preguntaP103', 'preguntaP104', 'preguntaP105'];
    for (var i = 0; i < preguntas.length; i++) {
        var pregunta = document.getElementById(preguntas[i]);
        console.log(pregunta[i]);
        if (pregunta.value == 0) {
            pregunta.focus();
            alertas();
            return;
        }
    }
    await guardarp5();
    location.href = 'SeccionP6.html';

}

async function validarSeccionP6() {
    var preguntas = ['preguntaP106', 'preguntaP107', 'preguntaP108', 'preguntaP109', 'preguntaP110', 'preguntaP111',
        'preguntaP112', 'preguntaP113', 'preguntaP114', 'preguntaP115', 'preguntaP116', 'preguntaP117', 'preguntaP118',
        'preguntaP119', 'preguntaP120', 'preguntaP121', 'preguntaP122', 'preguntaP123', 'preguntaP124', 'preguntaP125', 'preguntaP126'];
    for (var i = 0; i < preguntas.length; i++) {
        var pregunta = document.getElementById(preguntas[i]);
        if (pregunta.value == 0) {
            pregunta.focus();
            alertas();
            return;
        }
    }

    await guardarp6();
    location.href = 'SeccionP7.html';

}

async function validarSeccionP7() {
    var preguntas = ['preguntaP127', 'preguntaP128', 'preguntaP129', 'preguntaP130', 'preguntaP131', 'preguntaP132',
        'preguntaP133', 'preguntaP134', 'preguntaP135', 'preguntaP136', 'preguntaP137', 'preguntaP138', 'preguntaP139',
        'preguntaP140', 'preguntaP141', 'preguntaP142', 'preguntaP143', 'preguntaP144', 'preguntaP145', 'preguntaP146', 'preguntaP147'];
    for (var i = 0; i < preguntas.length; i++) {
        var pregunta = document.getElementById(preguntas[i]);
        if (pregunta.value == 0) {
            pregunta.focus();
            alertas();
            return;
        }
    }
    await guardarp7();
    location.href = 'SeccionP8.html';
}

async function validarSeccionP8() {
    var preguntas = ['preguntaP148', 'preguntaP149', 'preguntaP150', 'preguntaP151', 'preguntaP152', 'preguntaP153',
        'preguntaP154', 'preguntaP155', 'preguntaP156', 'preguntaP157', 'preguntaP158', 'preguntaP159', 'preguntaP160',
        'preguntaP161', 'preguntaP162', 'preguntaP163', 'preguntaP164', 'preguntaP165', 'preguntaP166', 'preguntaP167', 'preguntaP168'];
    for (var i = 0; i < preguntas.length; i++) {
        var pregunta = document.getElementById(preguntas[i]);
        if (pregunta.value == 0) {
            pregunta.focus();
            alertas();
            return;
        }
    }
    await guardarp8();
    location.href = 'SeccionP9.html';
}


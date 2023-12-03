async function guardar1() {
    for (let i = 1; i <= 17; i++) {
        var idPregunta = 'pregunta' + i;
        var numPreRes = i;
        var respRes = document.getElementById(idPregunta).value;
        var docApe = localStorage.getItem("datos");
        var codPro = 1;

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
    // location.href = 'Seccion2.html';
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
    location.href = 'Seccion3.html'
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
    location.href = 'Seccion4.html'
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
    location.href = 'Seccion5.html'
}

async function guardarp1() {
    for (let i = 1; i <= 21; i++) {
        var idPreguntaP = 'preguntaP' + i; // Construir el ID de la pregunta
        var numPreRes = i;
        var respRes = document.getElementById(idPreguntaP).value;
        var docApe = localStorage.getItem("datos");
        var codPro = 2;
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
    };
    location.href = 'SeccionP2.html'
}

async function guardarp2() {
    for (let i = 22; i <= 42; i++) {
        var idPreguntaP = 'preguntaP' + i; // Construir el ID de la pregunta
        var numPreRes = i;
        var respRes = document.getElementById(idPreguntaP).value;
        var docApe = localStorage.getItem("datos");
        var codPro = 2;
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
    };
    location.href = 'SeccionP3.html'
}

async function guardarp2() {
    for (let i = 22; i <= 42; i++) {
        var idPreguntaP = 'preguntaP' + i; // Construir el ID de la pregunta
        var numPreRes = i;
        var respRes = document.getElementById(idPreguntaP).value;
        var docApe = localStorage.getItem("datos");
        var codPro = 2;
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
    };
    location.href = 'SeccionP3.html'
}

async function guardarp3() {
    for (let i = 43; i <= 63; i++) {
        var idPreguntaP = 'preguntaP' + i; // Construir el ID de la pregunta
        var numPreRes = i;
        var respRes = document.getElementById(idPreguntaP).value;
        var docApe = localStorage.getItem("datos");
        var codPro = 2;
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
    };
    location.href = 'SeccionP4.html'
}

async function guardarp4() {
    for (let i = 64; i <= 84; i++) {
        var idPreguntaP = 'preguntaP' + i; // Construir el ID de la pregunta
        var numPreRes = i;
        var respRes = document.getElementById(idPreguntaP).value;
        var docApe = localStorage.getItem("datos");
        var codPro = 2;
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
    };
    location.href = 'SeccionP5.html'
}

async function guardarp5() {
    for (let i = 85; i <= 105; i++) {
        var idPreguntaP = 'preguntaP' + i; // Construir el ID de la pregunta
        var numPreRes = i;
        var respRes = document.getElementById(idPreguntaP).value;
        var docApe = localStorage.getItem("datos");
        var codPro = 2;
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
    };
    location.href = 'SeccionP6.html'
}

async function guardarp6() {
    for (let i = 106; i <= 126; i++) {
        var idPreguntaP = 'preguntaP' + i; // Construir el ID de la pregunta
        var numPreRes = i;
        var respRes = document.getElementById(idPreguntaP).value;
        var docApe = localStorage.getItem("datos");
        var codPro = 2;
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
    };
    location.href = 'SeccionP7.html'
}
async function guardarp7() {
    for (let i = 127; i <= 147; i++) {
        var idPreguntaP = 'preguntaP' + i; // Construir el ID de la pregunta
        var numPreRes = i;
        var respRes = document.getElementById(idPreguntaP).value;
        var docApe = localStorage.getItem("datos");
        var codPro = 2;
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
    };
    location.href = 'SeccionP8.html'
}
async function guardarp8() {
    for (let i = 148; i <= 167; i++) {
        var idPreguntaP = 'preguntaP' + i; // Construir el ID de la pregunta
        var numPreRes = i;
        var respRes = document.getElementById(idPreguntaP).value;
        var docApe = localStorage.getItem("datos");
        var codPro = 2;
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
    };
    location.href = 'SeccionP9.html'
}











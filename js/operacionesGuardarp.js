const valorLocalStorage = localStorage.getItem("datos");
const valorDoc = localStorage.getItem("documentoSeleccionado");

const numPreguntas = 188;

for (let i = 0; i < numPreguntas; i++) {
    window[`pregunta${i}`] = 0;
}

let Ae = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, L = 0, M = 0, N = 0, O = 0, Q1 = 0, Q2 = 0, Q3 = 0, Q4 = 0, Q5 = 0;

let DGV1 = 0, DGV2 = 0, DGV3 = 0, DGV4 = 0, DGV5 = 0, DGV6 = 0, DGV7 = 0, DGV8 = 0, DGV9 = 0, DGV10 = 0,
    I1 = 0, I2 = 0, I3 = 0, I4 = 0, I5 = 0, I6 = 0, I7 = 0, I8 = 0, I9 = 0,
    II1 = 0, II2 = 0, II3 = 0, II4 = 0, II5 = 0, II6 = 0, II7 = 0, II8 = 0, II9 = 0,
    III1 = 0, III2 = 0, III3 = 0, III4 = 0, III5 = 0, III6 = 0, III7 = 0, III8 = 0, III9 = 0,
    IV1 = 0, IV2 = 0, IV3 = 0, IV4 = 0, IV5 = 0, IV6 = 0, IV7 = 0, IV8 = 0, IV9 = 0,
    V1 = 0, V2 = 0, V3 = 0, V4 = 0, V5 = 0, V6 = 0, V7 = 0, V8 = 0, V9 = 0,
    VI1 = 0, VI2 = 0, VI3 = 0, VI4 = 0, VI5 = 0, VI6 = 0, VI7 = 0, VI8 = 0, VI9 = 0,
    VII1 = 0, VII2 = 0, VII3 = 0, VII4 = 0, VII5 = 0, VII6 = 0, VII7 = 0, VII8 = 0, VII9 = 0,
    VIII1 = 0, VIII2 = 0, VIII3 = 0, VIII4 = 0, VIII5 = 0, VIII6 = 0, VIII7 = 0, VIII8 = 0, VIII9 = 0,
    IX1 = 0, IX2 = 0, IX3 = 0, IX4 = 0, IX5 = 0, IX6 = 0, IX7 = 0, IX8 = 0, IX9 = 0;


let f1 = 0, f2 = 0, f3 = 0, f4 = 0, f5 = 0, f6 = 0, f7 = 0, f8 = 0, f9 = 0, f10 = 0;

let sumDGV, sumI, sumII, sumIII, sumIV, sumV, sumVI, sumVII, sumVIII, sumIX, R, A, sumaA, sumaR;

console.log(valorLocalStorage);

function guardarP9() {
    for (let i = 169; i <= 187; i++) {
        var idPregunta = 'preguntaP' + i; // Construir el ID de la pregunta
        var numPreRes = i;
        var respRes = document.getElementById(idPregunta).value;
        var docApe = localStorage.getItem("datos");
        var codPro = 2;

        fetch("http://localhost:8085/apiRes/saveRes", {
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

async function validarSeccionP9() {
    var preguntas = ['preguntaP169', 'preguntaP170', 'preguntaP171', 'preguntaP172', 'preguntaP173', 'preguntaP174',
        'preguntaP175', 'preguntaP176', 'preguntaP177', 'preguntaP178', 'preguntaP179', 'preguntaP180', 'preguntaP181',
        'preguntaP182', 'preguntaP183', 'preguntaP184', 'preguntaP185', 'preguntaP186', 'preguntaP187'];

    for (var i = 0; i < preguntas.length; i++) {
        var pregunta = document.getElementById(preguntas[i]);
        if (pregunta.value == 0) {
            pregunta.focus();
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
            return;
        }
    }
    await guardarP9();
    await asignarValorPf();
    await Swal.fire({
        position: 'center',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: true,
        title: '¡Felicidades!',
        html: '<b class="texto-alerta"> !Ha terminado la prueba con éxito! </b>',
        icon: 'success',
        iconColor: '#0e810e',
        confirmButtonColor: '#0e810e',
        timer: 8000
    });

    setTimeout(() => {
        location.href = 'index.html';
    }, 3000);
}

function asignarValorPf() {

    fetch('http://localhost:8085/apiRes/2/' + valorLocalStorage, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            console.log('Datos', data);

            const valores = {};
            // Recorre cada elemento del array desde la posición 0 hasta 186
            for (let i = 0; i < 187; i++) {
                const elementoAValidar = data[i];
                valores[`valor${i}`] = elementoAValidar;

            }
            //#region aaaa
            if (valores[`valor${2}`] === "B") {
                pregunta3 = 1;
            } else {
                pregunta3 = 0;

            } if (valores[`valor${3}`] === "A") {
                pregunta4 = 2;
            } else {
                if (valores[`valor${3}`] === "B") {
                    pregunta4 = 1;
                } else {
                    pregunta4 = 0;
                }
            }

            if (valores[`valor${4}`] === "C") {
                pregunta5 = 2;

            } else {
                if (valores[`valor${4}`] === "B") {
                    pregunta5 = 1;
                } else {
                    pregunta5 = 0;
                }
            }

            if (valores[`valor${5}`] === "A") {
                pregunta6 = 2;
            } else {
                if (valores[`valor${5}`] === "B") {
                    pregunta6 = 1;
                } else {
                    pregunta6 = 0;
                }
            }

            if (valores[`valor${6}`] === "C") {
                pregunta7 = 2;
            } else {
                if (valores[`valor${6}`] === "B") {
                    pregunta7 = 1;
                } else {
                    pregunta7 = 0;
                }
            }

            if (valores[`valor${7}`] === "C") {
                pregunta8 = 2;
            } else {
                if (valores[`valor${7}`] === "B") {
                    pregunta8 = 1;
                } else {
                    pregunta8 = 0;
                }
            }

            if (valores[`valor${8}`] === "A") {
                pregunta9 = 2;
            } else {
                if (valores[`valor${8}`] === "B") {
                    pregunta9 = 1;
                } else {
                    pregunta9 = 0;
                }
            }

            if (valores[`valor${9}`] === "C") {
                pregunta10 = 2;
            } else {
                if (valores[`valor${9}`] === "B") {
                    pregunta10 = 1;
                } else {
                    pregunta10 = 0;
                }
            }

            if (valores[`valor${10}`] === "C") {
                pregunta11 = 2;
            } else {
                if (valores[`valor${10}`] === "B") {
                    pregunta11 = 1;
                } else {
                    pregunta11 = 0;
                }
            }


            if (valores[`valor${11}`] === "C") {
                pregunta12 = 2;
            } else {
                if (valores[`valor${11}`] === "B") {
                    pregunta12 = 1;
                } else {
                    pregunta12 = 0;
                }
            }


            if (valores[`valor${12}`] === "C") {
                pregunta13 = 2;
            } else {
                if (valores[`valor${12}`] === "B") {
                    pregunta13 = 1;
                } else {
                    pregunta13 = 0;
                }
            }


            if (valores[`valor${13}`] === "A") {
                pregunta14 = 2;
            } else {
                if (valores[`valor${13}`] === "B") {
                    pregunta14 = 1;
                } else {
                    pregunta14 = 0;
                }
            }


            if (valores[`valor${14}`] === "C") {
                pregunta15 = 2;
            } else {
                if (valores[`valor${14}`] === "B") {
                    pregunta15 = 1;
                } else {
                    pregunta15 = 0;
                }
            }



            if (valores[`valor${15}`] === "A") {
                pregunta16 = 2;
            } else {
                if (valores[`valor${15}`] === "B") {
                    pregunta16 = 1;
                } else {
                    pregunta16 = 0;
                }
            }


            if (valores[`valor${16}`] === "C") {
                pregunta17 = 2;
            } else {
                if (valores[`valor${16}`] === "B") {
                    pregunta17 = 1;
                } else {
                    pregunta17 = 0;
                }
            }


            if (valores[`valor${17}`] === "C") {
                pregunta18 = 2;
            } else {
                if (valores[`valor${17}`] === "B") {
                    pregunta18 = 1;
                } else {
                    pregunta18 = 0;
                }
            }

            if (valores[`valor${18}`] === "C") {
                pregunta19 = 2;
            } else {
                if (valores[`valor${18}`] === "B") {
                    pregunta19 = 1;
                } else {
                    pregunta19 = 0;
                }
            }

            if (valores[`valor${19}`] === "A") {
                pregunta20 = 2;
            } else {
                if (valores[`valor${19}`] === "B") {
                    pregunta20 = 1;
                } else {
                    pregunta20 = 0;
                }
            }

            if (valores[`valor${20}`] === "C") {
                pregunta21 = 2;
            } else {
                if (valores[`valor${20}`] === "B") {
                    pregunta21 = 1;
                } else {
                    pregunta21 = 0;
                }
            }

            if (valores[`valor${21}`] === "B") {
                pregunta22 = 1;
            } else {
                pregunta22 = 0;
            }


            if (valores[`valor${22}`] === "C") {
                pregunta23 = 2;
            } else {
                if (valores[`valor${22}`] === "B") {
                    pregunta23 = 1;
                } else {
                    pregunta23 = 0;
                }
            }


            if (valores[`valor${23}`] === "C") {
                pregunta24 = 2;
            } else {
                if (valores[`valor${23}`] === "B") {
                    pregunta24 = 1;
                } else {
                    pregunta24 = 0;
                }
            }


            if (valores[`valor${24}`] === "A") {
                pregunta25 = 2;
            } else {
                if (valores[`valor${24}`] === "B") {
                    pregunta25 = 1;
                } else {
                    pregunta25 = 0;
                }
            }


            if (valores[`valor${25}`] === "A") {
                pregunta26 = 2;
            } else {
                if (valores[`valor${25}`] === "B") {
                    pregunta26 = 1;
                } else {
                    pregunta26 = 0;
                }
            }


            if (valores[`valor${26}`] === "C") {
                pregunta27 = 2;
            } else {
                if (valores[`valor${26}`] === "B") {
                    pregunta27 = 1;
                } else {
                    pregunta27 = 0;
                }
            }


            if (valores[`valor${27}`] === "C") {
                pregunta28 = 2;
            } else {
                if (valores[`valor${27}`] === "B") {
                    pregunta28 = 1;
                } else {
                    pregunta28 = 0;
                }
            }

            if (valores[`valor${28}`] === "A") {
                pregunta29 = 2;
            } else {
                if (valores[`valor${28}`] === "B") {
                    pregunta29 = 1;
                } else {
                    pregunta29 = 0;
                }
            }

            if (valores[`valor${29}`] === "A") {
                pregunta30 = 2;
            } else {
                if (valores[`valor${29}`] === "B") {
                    pregunta30 = 1;
                } else {
                    pregunta30 = 0;
                }
            }

            if (valores[`valor${30}`] === "C") {
                pregunta31 = 2;
            } else {
                if (valores[`valor${30}`] === "B") {
                    pregunta31 = 1;
                } else {
                    pregunta31 = 0;
                }
            }

            if (valores[`valor${31}`] === "A") {
                pregunta32 = 2;
            } else {
                if (valores[`valor${31}`] === "B") {
                    pregunta32 = 1;
                } else {
                    pregunta32 = 0;
                }
            }


            if (valores[`valor${32}`] === "A") {
                pregunta33 = 2;
            } else {
                if (valores[`valor${32}`] === "B") {
                    pregunta33 = 1;
                } else {
                    pregunta33 = 0;
                }
            }

            if (valores[`valor${33}`] === "C") {
                pregunta34 = 2;
            } else {
                if (valores[`valor${33}`] === "B") {
                    pregunta34 = 1;
                } else {
                    pregunta34 = 0;
                }
            }

            if (valores[`valor${34}`] === "C") {
                pregunta35 = 2;
            } else {
                if (valores[`valor${34}`] === "B") {
                    pregunta35 = 1;
                } else {
                    pregunta35 = 0;
                }
            }

            if (valores[`valor${35}`] === "A") {
                pregunta36 = 2;
            } else {
                if (valores[`valor${35}`] === "B") {
                    pregunta36 = 1;
                } else {
                    pregunta36 = 0;
                }
            }

            if (valores[`valor${36}`] === "C") {
                pregunta37 = 2;
            } else {
                if (valores[`valor${36}`] === "B") {
                    pregunta37 = 1;
                } else {
                    pregunta37 = 0;
                }
            }

            if (valores[`valor${37}`] === "A") {
                pregunta38 = 2;
            } else {
                if (valores[`valor${37}`] === "B") {
                    pregunta38 = 1;
                } else {
                    pregunta38 = 0;
                }
            }

            if (valores[`valor${38}`] === "C") {
                pregunta39 = 2;
            } else {
                if (valores[`valor${38}`] === "B") {
                    pregunta39 = 1;
                } else {
                    pregunta39 = 0;
                }
            }

            if (valores[`valor${39}`] === "B") {
                pregunta40 = 1;
            } else {
                pregunta40 = 0;
            }

            if (valores[`valor${40}`] === "C") {
                pregunta41 = 1;
            } else {
                pregunta41 = 0;
            }

            if (valores[`valor${41}`] === "C") {
                pregunta42 = 2;
            } else {
                if (valores[`valor${41}`] === "B") {
                    pregunta42 = 1;
                } else {
                    pregunta42 = 0;
                }
            }

            if (valores[`valor${42}`] === "C") {
                pregunta43 = 2;
            } else {
                if (valores[`valor${42}`] === "B") {
                    pregunta43 = 1;
                } else {
                    pregunta43 = 0;
                }
            }

            if (valores[`valor${43}`] === "C") {
                pregunta44 = 2;
            } else {
                if (valores[`valor${43}`] === "B") {
                    pregunta44 = 1;
                } else {
                    pregunta44 = 0;
                }
            }

            if (valores[`valor${44}`] === "A") {
                pregunta45 = 2;
            } else {
                if (valores[`valor${44}`] === "B") {
                    pregunta45 = 1;
                } else {
                    pregunta45 = 0;
                }
            }

            if (valores[`valor${45}`] === "C") {
                pregunta46 = 2;
            } else {
                if (valores[`valor${45}`] === "B") {
                    pregunta46 = 1;
                } else {
                    pregunta46 = 0;
                }
            }

            if (valores[`valor${46}`] === "A") {
                pregunta47 = 2;
            } else {
                if (valores[`valor${46}`] === "B") {
                    pregunta47 = 1;
                } else {
                    pregunta47 = 0;
                }
            }

            if (valores[`valor${47}`] === "A") {
                pregunta48 = 2;
            } else {
                if (valores[`valor${47}`] === "B") {
                    pregunta48 = 1;
                } else {
                    pregunta48 = 0;
                }
            }

            if (valores[`valor${48}`] === "C") {
                pregunta49 = 2;
            } else {
                if (valores[`valor${48}`] === "B") {
                    pregunta49 = 1;
                } else {
                    pregunta49 = 0;
                }
            }

            if (valores[`valor${49}`] === "A") {
                pregunta50 = 2;
            } else {
                if (valores[`valor${49}`] === "B") {
                    pregunta50 = 1;
                } else {
                    pregunta50 = 0;
                }
            }

            if (valores[`valor${50}`] === "C") {
                pregunta51 = 2;
            } else {
                if (valores[`valor${50}`] === "B") {
                    pregunta51 = 1;
                } else {
                    pregunta51 = 0;
                }
            }

            if (valores[`valor${51}`] === "C") {
                pregunta52 = 2;
            } else {
                if (valores[`valor${51}`] === "B") {
                    pregunta52 = 1;
                } else {
                    pregunta52 = 0;
                }
            }

            if (valores[`valor${52}`] === "A") {
                pregunta53 = 2;
            } else {
                if (valores[`valor${52}`] === "B") {
                    pregunta53 = 1;
                } else {
                    pregunta53 = 0;
                }
            }

            if (valores[`valor${53}`] === "C") {
                pregunta54 = 2;
            } else {
                if (valores[`valor${53}`] === "B") {
                    pregunta54 = 1;
                } else {
                    pregunta54 = 0;
                }
            }

            if (valores[`valor${54}`] === "A") {
                pregunta55 = 2;
            } else {
                if (valores[`valor${54}`] === "B") {
                    pregunta55 = 1;
                } else {
                    pregunta55 = 0;
                }
            }

            if (valores[`valor${55}`] === "A") {
                pregunta56 = 2;
            } else {
                if (valores[`valor${55}`] === "B") {
                    pregunta56 = 1;
                } else {
                    pregunta56 = 0;
                }
            }

            if (valores[`valor${56}`] === "A") {
                pregunta57 = 2;
            } else {
                if (valores[`valor${56}`] === "B") {
                    pregunta57 = 1;
                } else {
                    pregunta57 = 0;
                }
            }

            if (valores[`valor${57}`] === "C") {
                pregunta58 = 2;
            } else {
                if (valores[`valor${57}`] === "B") {
                    pregunta58 = 1;
                } else {
                    pregunta58 = 0;
                }
            }

            if (valores[`valor${58}`] === "B") {
                pregunta59 = 1;
            } else {
                pregunta59 = 0;
            }

            if (valores[`valor${59}`] === "C") {
                pregunta60 = 1;
            } else {
                pregunta60 = 0;
            }

            if (valores[`valor${60}`] === "A") {
                pregunta61 = 2;
            } else {
                if (valores[`valor${60}`] === "B") {
                    pregunta61 = 1;
                } else {
                    pregunta61 = 0;
                }
            }

            if (valores[`valor${61}`] === "A") {
                pregunta62 = 2;
            } else {
                if (valores[`valor${61}`] === "B") {
                    pregunta62 = 1;
                } else {
                    pregunta62 = 0;
                }
            }

            if (valores[`valor${62}`] === "C") {
                pregunta63 = 2;
            } else {
                if (valores[`valor${62}`] === "B") {
                    pregunta63 = 1;
                } else {
                    pregunta63 = 0;
                }
            }

            if (valores[`valor${63}`] === "C") {
                pregunta64 = 2;
            } else {
                if (valores[`valor${63}`] === "B") {
                    pregunta64 = 1;
                } else {
                    pregunta64 = 0;
                }
            }

            if (valores[`valor${64}`] === "C") {
                pregunta65 = 2;
            } else {
                if (valores[`valor${64}`] === "B") {
                    pregunta65 = 1;
                } else {
                    pregunta65 = 0;
                }
            }

            if (valores[`valor${65}`] === "C") {
                pregunta66 = 2;
            } else {
                if (valores[`valor${65}`] === "B") {
                    pregunta66 = 1;
                } else {
                    pregunta66 = 0;
                }
            }

            if (valores[`valor${66}`] === "C") {
                pregunta67 = 2;
            } else {
                if (valores[`valor${66}`] === "B") {
                    pregunta67 = 1;
                } else {
                    pregunta67 = 0;
                }
            }

            if (valores[`valor${67}`] === "C") {
                pregunta68 = 2;
            } else {
                if (valores[`valor${67}`] === "B") {
                    pregunta68 = 1;
                } else {
                    pregunta68 = 0;
                }
            }

            if (valores[`valor${68}`] === "A") {
                pregunta69 = 2;
            } else {
                if (valores[`valor${68}`] === "B") {
                    pregunta69 = 1;
                } else {
                    pregunta69 = 0;
                }
            }

            if (valores[`valor${69}`] === "A") {
                pregunta70 = 2;
            } else {
                if (valores[`valor${69}`] === "B") {
                    pregunta70 = 1;
                } else {
                    pregunta70 = 0;
                }
            }

            if (valores[`valor${70}`] === "C") {
                pregunta71 = 2;
            } else {
                if (valores[`valor${70}`] === "B") {
                    pregunta71 = 1;
                } else {
                    pregunta71 = 0;
                }
            }


            if (valores[`valor${71}`] === "A") {
                pregunta72 = 2;
            } else {
                if (valores[`valor${71}`] === "B") {
                    pregunta72 = 1;
                } else {
                    pregunta72 = 0;
                }
            }

            if (valores[`valor${72}`] === "A") {
                pregunta73 = 2;
            } else {
                if (valores[`valor${72}`] === "B") {
                    pregunta73 = 1;
                } else {
                    pregunta73 = 0;
                }
            }

            if (valores[`valor${73}`] === "C") {
                pregunta74 = 2;
            } else {
                if (valores[`valor${73}`] === "B") {
                    pregunta74 = 1;
                } else {
                    pregunta74 = 0;
                }
            }

            if (valores[`valor${74}`] === "A") {
                pregunta75 = 2;
            } else {
                if (valores[`valor${74}`] === "B") {
                    pregunta75 = 1;
                } else {
                    pregunta75 = 0;
                }
            }

            if (valores[`valor${75}`] === "A") {
                pregunta76 = 2;
            } else {
                if (valores[`valor${75}`] === "B") {
                    pregunta76 = 1;
                } else {
                    pregunta76 = 0;
                }
            }

            if (valores[`valor${76}`] === "A") {
                pregunta77 = 2;
            } else {
                if (valores[`valor${76}`] === "B") {
                    pregunta77 = 1;
                } else {
                    pregunta77 = 0;
                }
            }

            if (valores[`valor${77}`] === "B") {
                pregunta78 = 1;
            } else {
                pregunta78 = 0;

            }

            if (valores[`valor${78}`] === "C") {
                pregunta79 = 1;
            } else {
                pregunta79 = 0;

            }

            if (valores[`valor${79}`] === "A") {
                pregunta80 = 2;
            } else {
                if (valores[`valor${79}`] === "B") {
                    pregunta80 = 1;
                } else {
                    pregunta80 = 0;
                }
            }

            if (valores[`valor${80}`] === "C") {
                pregunta81 = 2;
            } else {
                if (valores[`valor${80}`] === "B") {
                    pregunta81 = 1;
                } else {
                    pregunta81 = 0;
                }
            }

            if (valores[`valor${81}`] === "A") {
                pregunta82 = 2;
            } else {
                if (valores[`valor${81}`] === "B") {
                    pregunta82 = 1;
                } else {
                    pregunta82 = 0;
                }
            }

            if (valores[`valor${82}`] === "A") {
                pregunta83 = 2;
            } else {
                if (valores[`valor${82}`] === "B") {
                    pregunta83 = 1;
                } else {
                    pregunta83 = 0;
                }
            }

            if (valores[`valor${83}`] === "C") {
                pregunta84 = 2;
            } else {
                if (valores[`valor${83}`] === "B") {
                    pregunta84 = 1;
                } else {
                    pregunta84 = 0;
                }
            }

            if (valores[`valor${84}`] === "C") {
                pregunta85 = 2;
            } else {
                if (valores[`valor${84}`] === "B") {
                    pregunta85 = 1;
                } else {
                    pregunta85 = 0;
                }
            }

            if (valores[`valor${85}`] === "C") {
                pregunta86 = 2;
            } else {
                if (valores[`valor${85}`] === "B") {
                    pregunta86 = 1;
                } else {
                    pregunta86 = 0;
                }
            }

            if (valores[`valor${86}`] === "A") {
                pregunta87 = 2;
            } else {
                if (valores[`valor${86}`] === "B") {
                    pregunta87 = 1;
                } else {
                    pregunta87 = 0;
                }
            }

            if (valores[`valor${87}`] === "A") {
                pregunta88 = 2;
            } else {
                if (valores[`valor${87}`] === "B") {
                    pregunta88 = 1;
                } else {
                    pregunta88 = 0;
                }
            }

            if (valores[`valor${88}`] === "C") {
                pregunta89 = 2;
            } else {
                if (valores[`valor${88}`] === "B") {
                    pregunta89 = 1;
                } else {
                    pregunta89 = 0;
                }
            }

            if (valores[`valor${89}`] === "A") {
                pregunta90 = 2;
            } else {
                if (valores[`valor${89}`] === "B") {
                    pregunta90 = 1;
                } else {
                    pregunta90 = 0;
                }
            }


            if (valores[`valor${90}`] === "A") {
                pregunta91 = 2;

            } else {
                if (valores[`valor${90}`] === "B") {
                    pregunta91 = 1;
                } else {
                    pregunta91 = 0;
                }
            }

            if (valores[`valor${91}`] === "C") {
                pregunta92 = 2;
            } else {
                if (valores[`valor${91}`] === "B") {
                    pregunta92 = 1;
                } else {
                    pregunta92 = 0;
                }
            }

            if (valores[`valor${92}`] === "A") {
                pregunta93 = 2;
            } else {
                if (valores[`valor${92}`] === "B") {
                    pregunta93 = 1;
                } else {
                    pregunta93 = 0;
                }
            }

            if (valores[`valor${93}`] === "C") {
                pregunta94 = 2;
            } else {
                if (valores[`valor${93}`] === "B") {
                    pregunta94 = 1;
                } else {
                    pregunta94 = 0;
                }
            }

            if (valores[`valor${94}`] === "C") {
                pregunta95 = 2;
            } else {
                if (valores[`valor${94}`] === "B") {
                    pregunta95 = 1;
                } else {
                    pregunta95 = 0;
                }
            }

            if (valores[`valor${95}`] === "C") {
                pregunta96 = 2;
            } else {
                if (valores[`valor${95}`] === "B") {
                    pregunta96 = 1;
                } else {
                    pregunta96 = 0;
                }
            }

            if (valores[`valor${96}`] === "B") {
                pregunta97 = 1;
            } else {
                pregunta97 = 0;

            }


            if (valores[`valor${97}`] === "C") {
                pregunta98 = 2;
            } else {
                if (valores[`valor${97}`] === "B") {
                    pregunta98 = 1;
                } else {
                    pregunta98 = 0;
                }
            }


            if (valores[`valor${98}`] === "C") {
                pregunta99 = 2;
            } else {
                if (valores[`valor${98}`] === "B") {
                    pregunta99 = 1;
                } else {
                    pregunta99 = 0;
                }
            }


            if (valores[`valor${99}`] === "C") {
                pregunta100 = 2;
            } else {
                if (valores[`valor${99}`] === "B") {
                    pregunta100 = 1;
                } else {
                    pregunta100 = 0;
                }
            }


            if (valores[`valor${100}`] === "A") {
                pregunta101 = 2;
            } else {
                if (valores[`valor${100}`] === "B") {
                    pregunta101 = 1;
                } else {
                    pregunta101 = 0;
                }
            }



            if (valores[`valor${101}`] === "A") {
                pregunta102 = 2;
            } else {
                if (valores[`valor${101}`] === "B") {
                    pregunta102 = 1;
                } else {
                    pregunta102 = 0;
                }
            }


            if (valores[`valor${102}`] === "C") {
                pregunta103 = 2;
            } else {
                if (valores[`valor${102}`] === "B") {
                    pregunta103 = 1;
                } else {
                    pregunta103 = 0;
                }
            }


            if (valores[`valor${103}`] === "A") {
                pregunta104 = 2;
            } else {
                if (valores[`valor${103}`] === "B") {
                    pregunta104 = 1;
                } else {
                    pregunta104 = 0;
                }
            }

            if (valores[`valor${104}`] === "A") {
                pregunta105 = 2;
            } else {
                if (valores[`valor${104}`] === "B") {
                    pregunta105 = 1;
                } else {
                    pregunta105 = 0;
                }
            }

            if (valores[`valor${105}`] === "C") {
                pregunta106 = 2;
            } else {
                if (valores[`valor${105}`] === "B") {
                    pregunta106 = 1;
                } else {
                    pregunta106 = 0;
                }
            }

            if (valores[`valor${106}`] === "C") {
                pregunta107 = 2;
            } else {
                if (valores[`valor${106}`] === "B") {
                    pregunta107 = 1;
                } else {
                    pregunta107 = 0;
                }
            }

            if (valores[`valor${107}`] === "C") {
                pregunta108 = 2;
            } else {
                if (valores[`valor${107}`] === "B") {
                    pregunta108 = 1;
                } else {
                    pregunta108 = 0;
                }
            }


            if (valores[`valor${108}`] === "A") {
                pregunta109 = 2;
            } else {
                if (valores[`valor${108}`] === "B") {
                    pregunta109 = 1;
                } else {
                    pregunta109 = 0;
                }
            }


            if (valores[`valor${109}`] === "C") {
                pregunta110 = 2;
            } else {
                if (valores[`valor${109}`] === "B") {
                    pregunta110 = 1;
                } else {
                    pregunta110 = 0;
                }
            }


            if (valores[`valor${110}`] === "C") {
                pregunta111 = 2;
            } else {
                if (valores[`valor${110}`] === "B") {
                    pregunta111 = 1;
                } else {
                    pregunta111 = 0;
                }
            }


            if (valores[`valor${111}`] === "C") {
                pregunta112 = 2;
            } else {
                if (valores[`valor${111}`] === "B") {
                    pregunta112 = 1;
                } else {
                    pregunta112 = 0;
                }
            }


            if (valores[`valor${112}`] === "A") {
                pregunta113 = 2;
            } else {
                if (valores[`valor${112}`] === "B") {
                    pregunta113 = 1;
                } else {
                    pregunta113 = 0;
                }
            }


            if (valores[`valor${113}`] === "C") {
                pregunta114 = 2;
            } else {
                if (valores[`valor${113}`] === "B") {
                    pregunta114 = 1;
                } else {
                    pregunta114 = 0;
                }
            }

            if (valores[`valor${114}`] === "A") {
                pregunta115 = 2;
            } else {
                if (valores[`valor${114}`] === "B") {
                    pregunta115 = 1;
                } else {
                    pregunta115 = 0;
                }
            }

            if (valores[`valor${115}`] === "A") {
                pregunta116 = 1;
            } else {
                pregunta116 = 0;

            }

            if (valores[`valor${116}`] === "A") {
                pregunta117 = 2;
            } else {
                if (valores[`valor${116}`] === "B") {
                    pregunta117 = 1;
                } else {
                    pregunta117 = 0;
                }
            }

            if (valores[`valor${117}`] === "A") {
                pregunta118 = 2;
            } else {
                if (valores[`valor${117}`] === "B") {
                    pregunta118 = 1;
                } else {
                    pregunta118 = 0;
                }
            }


            if (valores[`valor${118}`] === "C") {
                pregunta119 = 2;
            } else {
                if (valores[`valor${118}`] === "B") {
                    pregunta119 = 1;
                } else {
                    pregunta119 = 0;
                }
            }

            if (valores[`valor${119}`] === "C") {
                pregunta120 = 2;
            } else {
                if (valores[`valor${119}`] === "B") {
                    pregunta120 = 1;
                } else {
                    pregunta120 = 0;
                }
            }

            if (valores[`valor${120}`] === "C") {
                pregunta121 = 2;
            } else {
                if (valores[`valor${120}`] === "B") {
                    pregunta121 = 1;
                } else {
                    pregunta121 = 0;
                }
            }

            if (valores[`valor${121}`] === "A") {
                pregunta122 = 2;
            } else {
                if (valores[`valor${121}`] === "B") {
                    pregunta122 = 1;
                } else {
                    pregunta122 = 0;
                }
            }

            if (valores[`valor${122}`] === "A") {
                pregunta123 = 2;
            } else {
                if (valores[`valor${122}`] === "B") {
                    pregunta123 = 1;
                } else {
                    pregunta123 = 0;
                }
            }

            if (valores[`valor${123}`] === "C") {
                pregunta124 = 2;
            } else {
                if (valores[`valor${123}`] === "B") {
                    pregunta124 = 1;
                } else {
                    pregunta124 = 0;
                }
            }

            if (valores[`valor${124}`] === "A") {
                pregunta125 = 2;
            } else {
                if (valores[`valor${124}`] === "B") {
                    pregunta125 = 1;
                } else {
                    pregunta125 = 0;
                }
            }

            if (valores[`valor${125}`] === "A") {
                pregunta126 = 2;
            } else {
                if (valores[`valor${125}`] === "B") {
                    pregunta126 = 1;
                } else {
                    pregunta126 = 0;
                }
            }

            if (valores[`valor${126}`] === "C") {
                pregunta127 = 2;
            } else {
                if (valores[`valor${126}`] === "B") {
                    pregunta127 = 1;
                } else {
                    pregunta127 = 0;
                }
            }

            if (valores[`valor${127}`] === "A") {
                pregunta128 = 2;
            } else {
                if (valores[`valor${127}`] === "B") {
                    pregunta128 = 1;
                } else {
                    pregunta128 = 0;
                }
            }

            if (valores[`valor${128}`] === "C") {
                pregunta129 = 2;
            } else {
                if (valores[`valor${128}`] === "B") {
                    pregunta129 = 1;
                } else {
                    pregunta129 = 0;
                }
            }

            if (valores[`valor${129}`] === "C") {
                pregunta130 = 2;
            } else {
                if (valores[`valor${129}`] === "B") {
                    pregunta130 = 1;
                } else {
                    pregunta130 = 0;
                }
            }

            if (valores[`valor${130}`] === "A") {
                pregunta131 = 2;
            } else {
                if (valores[`valor${130}`] === "B") {
                    pregunta131 = 1;
                } else {
                    pregunta131 = 0;
                }
            }

            if (valores[`valor${131}`] === "A") {
                pregunta132 = 2;
            } else {
                if (valores[`valor${131}`] === "B") {
                    pregunta132 = 1;
                } else {
                    pregunta132 = 0;
                }
            }

            if (valores[`valor${132}`] === "C") {
                pregunta133 = 2;
            } else {
                if (valores[`valor${132}`] === "B") {
                    pregunta133 = 1;
                } else {
                    pregunta133 = 0;
                }
            }

            if (valores[`valor${133}`] === "A") {
                pregunta134 = 2;
            } else {
                if (valores[`valor${133}`] === "B") {
                    pregunta134 = 1;
                } else {
                    pregunta134 = 0;
                }
            }

            if (valores[`valor${134}`] === "C") {
                pregunta135 = 1;
            } else {
                pregunta135 = 0;

            }

            if (valores[`valor${135}`] === "C") {
                pregunta136 = 2;
            } else {
                if (valores[`valor${135}`] === "B") {
                    pregunta136 = 1;
                } else {
                    pregunta136 = 0;
                }
            }

            if (valores[`valor${136}`] === "A") {
                pregunta137 = 2;
            } else {
                if (valores[`valor${136}`] === "B") {
                    pregunta137 = 1;
                } else {
                    pregunta137 = 0;
                }
            }

            if (valores[`valor${137}`] === "A") {
                pregunta138 = 2;
            } else {
                if (valores[`valor${137}`] === "B") {
                    pregunta138 = 1;
                } else {
                    pregunta138 = 0;
                }
            }

            if (valores[`valor${138}`] === "C") {
                pregunta139 = 2;
            } else {
                if (valores[`valor${138}`] === "B") {
                    pregunta139 = 1;
                } else {
                    pregunta139 = 0;
                }
            }

            if (valores[`valor${139}`] === "A") {
                pregunta140 = 2;
            } else {
                if (valores[`valor${139}`] === "B") {
                    pregunta140 = 1;
                } else {
                    pregunta140 = 0;
                }
            }

            if (valores[`valor${140}`] === "A") {
                pregunta141 = 2;
            } else {
                if (valores[`valor${140}`] === "B") {
                    pregunta141 = 1;
                } else {
                    pregunta141 = 0;
                }
            }

            if (valores[`valor${141}`] === "A") {
                pregunta142 = 2;
            } else {
                if (valores[`valor${141}`] === "B") {
                    pregunta142 = 1;
                } else {
                    pregunta142 = 0;
                }
            }

            if (valores[`valor${142}`] === "A") {
                pregunta143 = 2;
            } else {
                if (valores[`valor${142}`] === "B") {
                    pregunta143 = 1;
                } else {
                    pregunta143 = 0;
                }
            }

            if (valores[`valor${143}`] === "A") {
                pregunta144 = 2;
            } else {
                if (valores[`valor${143}`] === "B") {
                    pregunta144 = 1;
                } else {
                    pregunta144 = 0;
                }
            }

            if (valores[`valor${144}`] === "A") {
                pregunta145 = 2;
            } else {
                if (valores[`valor${144}`] === "B") {
                    pregunta145 = 1;
                } else {
                    pregunta145 = 0;
                }
            }

            if (valores[`valor${145}`] === "A") {
                pregunta146 = 2;
            } else {
                if (valores[`valor${145}`] === "B") {
                    pregunta146 = 1;
                } else {
                    pregunta146 = 0;
                }
            }

            if (valores[`valor${146}`] === "A") {
                pregunta147 = 2;
            } else {
                if (valores[`valor${146}`] === "B") {
                    pregunta147 = 1;
                } else {
                    pregunta147 = 0;
                }
            }

            if (valores[`valor${147}`] === "A") {
                pregunta148 = 2;
            } else {
                if (valores[`valor${147}`] === "B") {
                    pregunta148 = 1;
                } else {
                    pregunta148 = 0;
                }
            }

            if (valores[`valor${148}`] === "A") {
                pregunta149 = 2;
            } else {
                if (valores[`valor${148}`] === "B") {
                    pregunta149 = 1;
                } else {
                    pregunta149 = 0;
                }
            }

            if (valores[`valor${149}`] === "C") {
                pregunta150 = 2;
            } else {
                if (valores[`valor${149}`] === "B") {
                    pregunta150 = 1;
                } else {
                    pregunta150 = 0;
                }
            }

            if (valores[`valor${150}`] === "A") {
                pregunta151 = 2;
            } else {
                if (valores[`valor${150}`] === "B") {
                    pregunta151 = 1;
                } else {
                    pregunta151 = 0;
                }
            }

            if (valores[`valor${151}`] === "C") {
                pregunta152 = 2;
            } else {
                if (valores[`valor${151}`] === "B") {
                    pregunta152 = 1;
                } else {
                    pregunta152 = 0;
                }
            }

            if (valores[`valor${152}`] === "C") {
                pregunta153 = 2;
            } else {
                if (valores[`valor${152}`] === "B") {
                    pregunta153 = 1;
                } else {
                    pregunta153 = 0;
                }
            }

            if (valores[`valor${153}`] === "A") {
                pregunta154 = 2;
            } else {
                if (valores[`valor${153}`] === "B") {
                    pregunta154 = 1;
                } else {
                    pregunta154 = 0;
                }
            }

            if (valores[`valor${154}`] === "C") {
                pregunta155 = 2;
            } else {
                if (valores[`valor${154}`] === "B") {
                    pregunta155 = 1;
                } else {
                    pregunta155 = 0;
                }
            }

            if (valores[`valor${155}`] === "A") {
                pregunta156 = 2;
            } else {
                if (valores[`valor${155}`] === "B") {
                    pregunta156 = 1;
                } else {
                    pregunta156 = 0;
                }
            }

            if (valores[`valor${156}`] === "A") {
                pregunta157 = 2;
            } else {
                if (valores[`valor${156}`] === "B") {
                    pregunta157 = 1;
                } else {
                    pregunta157 = 0;
                }
            }


            if (valores[`valor${157}`] === "A") {
                pregunta158 = 2;
            } else {
                if (valores[`valor${157}`] === "B") {
                    pregunta158 = 1;
                } else {
                    pregunta158 = 0;
                }
            }

            if (valores[`valor${158}`] === "A") {
                pregunta159 = 2;
            } else {
                if (valores[`valor${158}`] === "B") {
                    pregunta159 = 1;
                } else {
                    pregunta159 = 0;
                }
            }

            if (valores[`valor${159}`] === "C") {
                pregunta160 = 2;
            } else {
                if (valores[`valor${159}`] === "B") {
                    pregunta160 = 1;
                } else {
                    pregunta160 = 0;
                }
            }

            if (valores[`valor${160}`] === "C") {
                pregunta161 = 2;
            } else {
                if (valores[`valor${160}`] === "B") {
                    pregunta161 = 1;
                } else {
                    pregunta161 = 0;
                }
            }

            if (valores[`valor${161}`] === "C") {
                pregunta162 = 2;
            } else {
                if (valores[`valor${161}`] === "B") {
                    pregunta162 = 1;
                } else {
                    pregunta162 = 0;
                }
            }
            if (valores[`valor${162}`] === "A") {
                pregunta163 = 2;
            } else {
                if (valores[`valor${162}`] === "B") {
                    pregunta163 = 1;
                } else {
                    pregunta163 = 0;
                }
            }

            if (valores[`valor${163}`] === "A") {
                pregunta164 = 2;
            } else {
                if (valores[`valor${163}`] === "B") {
                    pregunta164 = 1;
                } else {
                    pregunta164 = 0;
                }
            }

            if (valores[`valor${164}`] === "A") {
                pregunta165 = 2;
            } else {
                if (valores[`valor${164}`] === "B") {
                    pregunta165 = 1;
                } else {
                    pregunta165 = 0;
                }
            }

            if (valores[`valor${165}`] === "A") {
                pregunta166 = 2;
            } else {
                if (valores[`valor${165}`] === "B") {
                    pregunta166 = 1;
                } else {
                    pregunta166 = 0;
                }
            }

            if (valores[`valor${166}`] === "A") {
                pregunta167 = 2;
            } else {
                if (valores[`valor${166}`] === "B") {
                    pregunta167 = 1;
                } else {
                    pregunta167 = 0;
                }
            }

            if (valores[`valor${167}`] === "A") {
                pregunta168 = 2;
            } else {
                if (valores[`valor${167}`] === "B") {
                    pregunta168 = 1;
                } else {
                    pregunta168 = 0;
                }
            }

            if (valores[`valor${168}`] === "A") {
                pregunta169 = 2;
            } else {
                if (valores[`valor${168}`] === "B") {
                    pregunta169 = 1;
                } else {
                    pregunta169 = 0;
                }
            }

            if (valores[`valor${169}`] === "A") {
                pregunta170 = 2;
            } else {
                if (valores[`valor${169}`] === "B") {
                    pregunta170 = 1;
                } else {
                    pregunta170 = 0;
                }
            }

            if (valores[`valor${170}`] === "C") {
                pregunta171 = 2;
            } else {
                if (valores[`valor${170}`] === "B") {
                    pregunta171 = 1;
                } else {
                    pregunta171 = 0;
                }
            }

            if (valores[`valor${171}`] === "A") {
                pregunta172 = 2;
            } else {
                if (valores[`valor${171}`] === "B") {
                    pregunta172 = 1;
                } else {
                    pregunta172 = 0;
                }
            }

            if (valores[`valor${172}`] === "A") {
                pregunta173 = 1;
            } else {
                pregunta173 = 0;

            }

            if (valores[`valor${173}`] === "A") {
                pregunta174 = 2;
            } else {
                if (valores[`valor${173}`] === "B") {
                    pregunta174 = 1;
                } else {
                    pregunta174 = 0;
                }
            }

            if (valores[`valor${174}`] === "A") {
                pregunta175 = 2;
            } else {
                if (valores[`valor${174}`] === "B") {
                    pregunta175 = 1;
                } else {
                    pregunta175 = 0;
                }
            }

            if (valores[`valor${175}`] === "A") {
                pregunta176 = 2;
            } else {
                if (valores[`valor${175}`] === "B") {
                    pregunta176 = 1;
                } else {
                    pregunta176 = 0;
                }
            }

            if (valores[`valor${176}`] === "A") {
                pregunta177 = 2;
            } else {
                if (valores[`valor${176}`] === "B") {
                    pregunta177 = 1;
                } else {
                    pregunta177 = 0;
                }
            }
            if (valores[`valor${177}`] === "A") {
                pregunta178 = 2;
            } else {
                if (valores[`valor${177}`] === "B") {
                    pregunta178 = 1;
                } else {
                    pregunta178 = 0;
                }
            }

            if (valores[`valor${178}`] === "A") {
                pregunta179 = 2;
            } else {
                if (valores[`valor${178}`] === "B") {
                    pregunta179 = 1;
                } else {
                    pregunta179 = 0;
                }
            }

            if (valores[`valor${179}`] === "A") {
                pregunta180 = 2;
            } else {
                if (valores[`valor${179}`] === "B") {
                    pregunta180 = 1;
                } else {
                    pregunta180 = 0;
                }
            }

            if (valores[`valor${180}`] === "A") {
                pregunta181 = 2;
            } else {
                if (valores[`valor${180}`] === "B") {
                    pregunta181 = 1;
                } else {
                    pregunta181 = 0;
                }
            }

            if (valores[`valor${181}`] === "C") {
                pregunta182 = 2;
            } else {
                if (valores[`valor${181}`] === "B") {
                    pregunta182 = 1;
                } else {
                    pregunta182 = 0;
                }
            }

            if (valores[`valor${182}`] === "C") {
                pregunta183 = 2;
            } else {
                if (valores[`valor${182}`] === "B") {
                    pregunta183 = 1;
                } else {
                    pregunta183 = 0;
                }
            }

            if (valores[`valor${183}`] === "A") {
                pregunta184 = 2;
            } else {
                if (valores[`valor${183}`] === "B") {
                    pregunta184 = 1;
                } else {
                    pregunta184 = 0;
                }
            }

            if (valores[`valor${184}`] === "C") {
                pregunta185 = 2;
            } else {
                if (valores[`valor${184}`] === "B") {
                    pregunta185 = 1;
                } else {
                    pregunta185 = 0;
                }
            }

            if (valores[`valor${185}`] === "C") {
                pregunta186 = 2;
            } else {
                if (valores[`valor${185}`] === "B") {
                    pregunta186 = 1;
                } else {
                    pregunta186 = 0;
                }
            }
            opc();
        })
}

//#endregion

async function opc() {

    Ae = pregunta1 + pregunta2 + pregunta20 + pregunta39 + pregunta58 + pregunta77 + pregunta96 + pregunta115 + pregunta134 + pregunta153
    console.log(Ae);
    B = pregunta3 + pregunta22 + pregunta40 + pregunta41 + pregunta59 + pregunta60 + pregunta78 + pregunta79 + pregunta97 + pregunta116 + pregunta135 + pregunta154 + pregunta173;
    console.log(B);
    C = pregunta4 + pregunta23 + pregunta42 + pregunta61 + pregunta80 + pregunta98 + pregunta99 + pregunta117 + pregunta118 + pregunta136 + pregunta137 + pregunta155 + pregunta174;
    console.log(C);
    E = pregunta5 + pregunta6 + pregunta24 + pregunta43 + pregunta62 + pregunta81 + pregunta100 + pregunta119 + pregunta138 + pregunta156 + pregunta157 + pregunta175 + pregunta176;
    console.log(E);
    F = pregunta7 + pregunta25 + pregunta26 + pregunta44 + pregunta45 + pregunta63 + pregunta64 + pregunta82 + pregunta101 + pregunta120 + pregunta139 + pregunta158 + pregunta177;
    console.log(F);
    G = pregunta8 + pregunta27 + pregunta46 + pregunta65 + pregunta83 + pregunta102 + pregunta121 + pregunta140 + pregunta159 + pregunta178;
    console.log(G);
    H = pregunta9 + pregunta28 + pregunta47 + pregunta66 + pregunta84 + pregunta85 + pregunta104 + pregunta103 + pregunta122 + pregunta123 + pregunta141 + pregunta160 + pregunta179;
    console.log(H);
    I = pregunta10 + pregunta29 + pregunta48 + pregunta67 + pregunta86 + pregunta105 + pregunta124 + pregunta142 + pregunta151 + pregunta180;
    console.log(I);
    L = pregunta11 + pregunta30 + pregunta49 + pregunta68 + pregunta87 + pregunta106 + pregunta125 + pregunta143 + pregunta162 + pregunta181;
    console.log(L);
    M = pregunta12 + pregunta31 + pregunta50 + pregunta69 + pregunta88 + pregunta107 + pregunta126 + pregunta144 + pregunta145 + pregunta163 + pregunta164 +
        pregunta182 + pregunta183;
    console.log(M);
    N = pregunta13 + pregunta32 + pregunta51 + pregunta70 + pregunta89 + pregunta108 + pregunta127 + pregunta146 + pregunta165 + pregunta184;
    console.log(N);
    O = pregunta14 + pregunta15 + pregunta33 + pregunta34 + pregunta52 + pregunta53 + pregunta71 + pregunta90 + pregunta109 + pregunta128 + pregunta147 + pregunta166 + pregunta185;
    console.log(O);
    Q1 = pregunta16 + pregunta35 + pregunta54 + pregunta72 + pregunta91 + pregunta110 + pregunta129 + pregunta148 + pregunta167 + pregunta186;
    console.log(Q1);
    Q2 = pregunta17 + pregunta36 + pregunta73 + pregunta74 + pregunta92 + pregunta111 + pregunta130 + pregunta149 + pregunta168;
    console.log(Q2);
    Q3 = pregunta18 + pregunta37 + pregunta56 + pregunta75 + pregunta93 + pregunta94 + pregunta112 + pregunta131 + pregunta150 + pregunta169;
    console.log(Q3);
    Q4 = pregunta19 + pregunta38 + pregunta57 + pregunta76 + pregunta95 + pregunta113 + pregunta114 + pregunta132 + pregunta133 + pregunta151 + pregunta152 + pregunta170 + pregunta171;
    console.log(Q4);
    Q5 = pregunta20 + pregunta39 + pregunta58 + pregunta77 + pregunta95 + pregunta96 + pregunta114 + pregunta133 + pregunta152 + pregunta171;
    console.log(Q5);
    await guardarPrueb();
}



function guardarPrueb() {
    fetch("http://localhost:8085/apiPf/saveRes", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            "resu1": Ae,
            "resu2": B,
            "resu3": C,
            "resu4": E,
            "resu5": F,
            "resu6": G,
            "resu7": H,
            "resu8": I,
            "resu9": L,
            "resu10": M,
            "resu11": N,
            "resu12": O,
            "resu13": Q1,
            "resu14": Q2,
            "resu15": Q3,
            "resu16": Q4,
            "docApe": valorDoc,
            "tipo": 0
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al guardar los datos");
            }
            console.log("Datos guardados exitosamente");
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

const btn1 = document.getElementById("SeccionP9")
btn1.addEventListener("click", async function () {
    await validarSeccionP9();
});






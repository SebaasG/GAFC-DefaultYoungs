const valorLocalStorage = localStorage.getItem("datos");


const numPreguntas = 88;

for (let i = 0; i < numPreguntas; i++) {
    window[`pregunta${i}`] = 0;
}
let pregunta7a = 0, pregunta7b = 0;


let DGV, I, II, III, c, IV, V, VI, VII, VIII, IX;

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

async function guardar5() {
    for (let i = 69; i <= 87; i++) {
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

async function validarSeccion5() {
    var preguntas = ['pregunta69', 'pregunta70', 'pregunta71', 'pregunta72', 'pregunta73', 'pregunta74',
        'pregunta75', 'pregunta76', 'pregunta77', 'pregunta78', 'pregunta79', 'pregunta80',
        'pregunta81', 'pregunta82', 'pregunta83', 'pregunta84', 'pregunta85', 'pregunta86', 'pregunta87'];

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

    await guardar5();
    await asignarValor();
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
        var nuevaPestana = window.open("index.html", "_blank");

        setTimeout(function () {
            window.open('about:blank', '_self').close();
        }, 2);
    }, 3000);
}


function asignarValor() {


    fetch('http://localhost:8085/apiRes/' + valorLocalStorage, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            console.log('Datos', data);

            const valores = {};
            // Recorre cada elemento del array desde la posición 0 hasta 86
            for (let i = 0; i < 87; i++) {
                // Accede al elemento en el índice i
                const elementoAValidar = data[i];

                // Asigna el valor al objeto con un nombre dinámico (por ejemplo, "valor0", "valor1", ...)
                valores[`valor${i}`] = elementoAValidar;

            }
            //#region aaaa
            if (valores[`valor${0}`] === "B") {
                pregunta0 = 1;
                console.log('Pregunta 0:', pregunta0);
            } else {
                pregunta0 = 0;
                console.log('Pregunta 0:', pregunta0);
            } if (valores[`valor${1}`] === "B") {
                pregunta1 = 1;
                console.log('Pregunta 1:', pregunta1);
            } else {
                pregunta1 = 0;
                console.log('Pregunta 1:', pregunta1);
            }
            if (valores[`valor${2}`] === "B") {
                pregunta2 = 1;
                console.log('Pregunta 2:', pregunta2);
            } else {
                pregunta2 = 0;
                console.log('Pregunta 2:', pregunta2);
            }
            if (valores[`valor${3}`] === "B") {
                pregunta3 = 1;
                console.log('Pregunta 3:', pregunta3);
            } else {
                pregunta3 = 0;
                console.log('Pregunta 3:', pregunta3);
            }
            if (valores[`valor${4}`] === "A") {
                pregunta4 = 1;
                console.log('Pregunta 4:', pregunta4);
            } else {
                pregunta4 = 0;
                console.log('Pregunta 4:', pregunta4);
            }
            if (valores[`valor${5}`] === "C") {
                pregunta5 = 1;
                console.log('Pregunta 5:', pregunta5);
            } else {
                pregunta5 = 0;
                console.log('Pregunta 5:', pregunta5);
            }
            if (valores[`valor${6}`] === "A") {
                pregunta6 = 1;
                console.log('Pregunta 6:', pregunta6);
            } else {
                pregunta6 = 0;
                console.log('Pregunta 6:', pregunta6);
            }
            if (valores[`valor${7}`] === "A") {
                pregunta7 = 1;
                pregunta7a = 0;
                pregunta7b = 0;
                console.log('Pregunta 7:', pregunta7);
                console.log('Pregunta 7a:', pregunta7a);
                console.log('Pregunta 7b:', pregunta7b);
            } else {
                if (valores[`valor${7}`] === "B") {
                    pregunta7 = 0;
                    pregunta7a = 1;
                    pregunta7b = 0;
                    console.log('Pregunta 7:', pregunta7);
                    console.log('Pregunta 7a:', pregunta7a);
                    console.log('Pregunta 7b:', pregunta7b);

                }
                else {
                    if (valores[`valor${7}`] === "C") {
                        pregunta7 = 0;
                        pregunta7a = 0;
                        pregunta7b = 1;
                        console.log('Pregunta 7:', pregunta7);
                        console.log('Pregunta 7a:', pregunta7a);
                        console.log('Pregunta 7b:', pregunta7b);
                    }
                }
            } if (valores[`valor${8}`] === "A") {
                pregunta8 = 1;
                console.log('Pregunta 8:', pregunta8);
            } else {
                pregunta8 = 0;
                console.log('Pregunta 8:', pregunta8);
            }
            if (valores[`valor${9}`] === "B") {
                pregunta9 = 1;
                console.log('Pregunta 9:', pregunta9);
            } else {
                pregunta9 = 0;
                console.log('Pregunta 9:', pregunta9);
            }
            if (valores[`valor${10}`] === "B") {
                pregunta10 = 1;
                console.log('Pregunta 10:', pregunta10);
            } else {
                pregunta10 = 0;
                console.log('Pregunta 10:', pregunta10);
            }
            if (valores[`valor${11}`] === "C") {
                pregunta11 = 1;
                console.log('Pregunta 11:', pregunta11);
            } else {
                pregunta11 = 0;
                console.log('Pregunta 11:', pregunta11);
            }
            if (valores[`valor${12}`] === "B") {
                pregunta12 = 1;
                console.log('Pregunta 12:', pregunta12);
            } else {
                pregunta12 = 0;
                console.log('Pregunta 12:', pregunta12);
            }
            if (valores[`valor${13}`] === "B") {
                pregunta13 = 1;
                console.log('Pregunta 13:', pregunta13);
            } else {
                pregunta13 = 0;
                console.log('Pregunta 13:', pregunta13);
            }
            if (valores[`valor${14}`] === "A") {
                pregunta14 = 1;
                console.log('Pregunta 14:', pregunta14);
            } else {
                pregunta14 = 0;
                console.log('Pregunta 14:', pregunta14);
            }
            if (valores[`valor${15}`] === "C") {
                pregunta15 = 1;
                console.log('Pregunta 15:', pregunta15);
            } else {
                pregunta15 = 0;
                console.log('Pregunta 15:', pregunta15);
            }
            if (valores[`valor${16}`] === "B") {
                pregunta16 = 1;
                console.log('Pregunta 16:', pregunta16);
            } else {
                pregunta16 = 0;
                console.log('Pregunta 16:', pregunta16);
            }
            if (valores[`valor${17}`] === "C") {
                pregunta17 = 1;
                console.log('Pregunta 17:', pregunta17);
            } else {
                pregunta17 = 0;
                console.log('Pregunta 17:', pregunta17);
            }
            if (valores[`valor${18}`] === "C") {
                pregunta18 = 1;
                console.log('Pregunta 18:', pregunta18);
            } else {
                pregunta18 = 0;
                console.log('Pregunta 18:', pregunta18);
            }
            if (valores[`valor${19}`] === "B") {
                pregunta19 = 1;
                console.log('Pregunta 19:', pregunta19);
            } else {
                pregunta19 = 0;
                console.log('Pregunta 19:', pregunta19);
            }
            if (valores[`valor${20}`] === "C") {
                pregunta20 = 1;
                console.log('Pregunta 20:', pregunta20);
            } else {
                pregunta20 = 0;
                console.log('Pregunta 20:', pregunta20);
            }
            if (valores[`valor${21}`] === "C") {
                pregunta21 = 1;
                console.log('Pregunta 21:', pregunta21);
            } else {
                pregunta21 = 0;
                console.log('Pregunta 21:', pregunta21);
            }
            if (valores[`valor${22}`] === "B") {
                pregunta22 = 1;
                console.log('Pregunta 22:', pregunta22);
            } else {
                pregunta22 = 0;
                console.log('Pregunta 22:', pregunta22);
            }
            if (valores[`valor${23}`] === "C") {
                pregunta23 = 1;
                console.log('Pregunta 23:', pregunta23);
            } else {
                pregunta23 = 0;
                console.log('Pregunta 23:', pregunta23);
            }
            if (valores[`valor${24}`] === "C") {
                pregunta24 = 1;
                console.log('Pregunta 24:', pregunta24);
            } else {
                pregunta24 = 0;
                console.log('Pregunta 24:', pregunta24);
            }
            if (valores[`valor${25}`] === "B") {
                pregunta25 = 1;
                console.log('Pregunta 25:', pregunta25);
            } else {
                pregunta25 = 0;
                console.log('Pregunta 25:', pregunta25);
            }
            if (valores[`valor${26}`] === "A") {
                pregunta26 = 1;
                console.log('Pregunta 26:', pregunta26);
            } else {
                pregunta26 = 0;
                console.log('Pregunta 26:', pregunta26);
            }
            if (valores[`valor${27}`] === "C") {
                pregunta27 = 1;
                console.log('Pregunta 27:', pregunta27);
            } else {
                pregunta27 = 0;
                console.log('Pregunta 27:', pregunta27);
            }
            if (valores[`valor${28}`] === "C") {
                pregunta28 = 1;
                console.log('Pregunta 28:', pregunta28);
            } else {
                pregunta28 = 0;
                console.log('Pregunta 28:', pregunta28);
            }
            if (valores[`valor${29}`] === "B") {
                pregunta29 = 1;
                console.log('Pregunta 29:', pregunta29);
            } else {
                pregunta29 = 0;
                console.log('Pregunta 29:', pregunta29);
            }
            if (valores[`valor${30}`] === "C") {
                pregunta30 = 1;
                console.log('Pregunta 30:', pregunta30);
            } else {
                pregunta30 = 0;
                console.log('Pregunta 30:', pregunta30);
            }
            if (valores[`valor${31}`] === "C") {
                pregunta31 = 1;
                console.log('Pregunta 31:', pregunta31);
            } else {
                pregunta31 = 0;
                console.log('Pregunta 31:', pregunta31);
            }
            if (valores[`valor${32}`] === "B") {
                pregunta32 = 1;
                console.log('Pregunta 32:', pregunta32);
            } else {
                pregunta32 = 0;
                console.log('Pregunta 32:', pregunta32);
            }
            if (valores[`valor${33}`] === "C") {
                pregunta33 = 1;
                console.log('Pregunta 33:', pregunta33);
            } else {
                pregunta33 = 0;
                console.log('Pregunta 33:', pregunta33);
            }
            if (valores[`valor${34}`] === "A") {
                pregunta34 = 1;
                console.log('Pregunta 34:', pregunta34);
            } else {
                pregunta34 = 0;
                console.log('Pregunta 34:', pregunta34);
            }
            if (valores[`valor${35}`] === "C") {
                pregunta35 = 1;
                console.log('Pregunta 35:', pregunta35);
            } else {
                pregunta35 = 0;
                console.log('Pregunta 35:', pregunta35);
            }
            if (valores[`valor${36}`] === "A") {
                pregunta36 = 1;
                console.log('Pregunta 36:', pregunta36);
            } else {
                pregunta36 = 0;
                console.log('Pregunta 36:', pregunta36);
            }
            if (valores[`valor${37}`] === "C") {
                pregunta37 = 1;
                console.log('Pregunta 37:', pregunta37);
            } else {
                pregunta37 = 0;
                console.log('Pregunta 37:', pregunta37);
            }
            if (valores[`valor${38}`] === "A") {
                pregunta38 = 1;
                console.log('Pregunta 38:', pregunta38);
            } else {
                pregunta38 = 0;
                console.log('Pregunta 38:', pregunta38);
            }
            if (valores[`valor${39}`] === "A") {
                pregunta39 = 1;
                console.log('Pregunta 39:', pregunta39);
            } else {
                pregunta39 = 0;
                console.log('Pregunta 39:', pregunta39);
            }
            if (valores[`valor${40}`] === "A") {
                pregunta40 = 1;
                console.log('Pregunta 40:', pregunta40);
            } else {
                pregunta40 = 0;
                console.log('Pregunta 40:', pregunta40);
            }
            if (valores[`valor${41}`] === "A") {
                pregunta41 = 1;
                console.log('Pregunta 41:', pregunta41);
            } else {
                pregunta41 = 0;
                console.log('Pregunta 41:', pregunta41);
            }
            if (valores[`valor${42}`] === "B") {
                pregunta42 = 1;
                console.log('Pregunta 42:', pregunta42);
            } else {
                pregunta42 = 0;
                console.log('Pregunta 42:', pregunta42);
            }
            if (valores[`valor${43}`] === "A") {
                pregunta43 = 1;
                console.log('Pregunta 43:', pregunta43);
            } else {
                pregunta43 = 0;
                console.log('Pregunta 43:', pregunta43);
            }
            if (valores[`valor${44}`] === "B") {
                pregunta44 = 1;
                console.log('Pregunta 44:', pregunta44);
            } else {
                pregunta44 = 0;
                console.log('Pregunta 44:', pregunta44);
            }
            if (valores[`valor${45}`] === "B") {
                pregunta45 = 1;
                console.log('Pregunta 45:', pregunta45);
            } else {
                pregunta45 = 0;
                console.log('Pregunta 45:', pregunta45);
            }
            if (valores[`valor${46}`] === "C") {
                pregunta46 = 1;
                console.log('Pregunta 46:', pregunta46);
            } else {
                pregunta46 = 0;
                console.log('Pregunta 46:', pregunta46);
            }
            if (valores[`valor${47}`] === "A") {
                pregunta47 = 1;
                console.log('Pregunta 47:', pregunta47);
            } else {
                pregunta47 = 0;
                console.log('Pregunta 47:', pregunta47);
            }
            if (valores[`valor${48}`] === "A") {
                pregunta48 = 1;
                console.log('Pregunta 48:', pregunta48);
            } else {
                pregunta48 = 0;
                console.log('Pregunta 48:', pregunta48);
            }
            if (valores[`valor${49}`] === "C") {
                pregunta49 = 1;
                console.log('Pregunta 49:', pregunta49);
            } else {
                pregunta49 = 0;
                console.log('Pregunta 49:', pregunta49);
            }
            if (valores[`valor${50}`] === "B") {
                pregunta50 = 1;
                console.log('Pregunta 50:', pregunta50);
            } else {
                pregunta50 = 0;
                console.log('Pregunta 50:', pregunta50);
            }
            if (valores[`valor${51}`] === "A") {
                pregunta51 = 1;
                console.log('Pregunta 51:', pregunta51);
            } else {
                pregunta51 = 0;
                console.log('Pregunta 51:', pregunta51);
            }
            if (valores[`valor${52}`] === "B") {
                pregunta52 = 1;
                console.log('Pregunta 52:', pregunta52);
            } else {
                pregunta52 = 0;
                console.log('Pregunta 52:', pregunta52);
            }
            if (valores[`valor${53}`] === "A") {
                pregunta53 = 1;
                console.log('Pregunta 53:', pregunta53);
            } else {
                pregunta53 = 0;
                console.log('Pregunta 53:', pregunta53);
            }
            if (valores[`valor${54}`] === "B") {
                pregunta54 = 1;
                console.log('Pregunta 54:', pregunta54);
            } else {
                pregunta54 = 0;
                console.log('Pregunta 54:', pregunta54);
            }
            if (valores[`valor${55}`] === "A") {
                pregunta55 = 1;
                console.log('Pregunta 55:', pregunta55);
            } else {
                pregunta55 = 0;
                console.log('Pregunta 55:', pregunta55);
            }
            if (valores[`valor${56}`] === "A") {
                pregunta56 = 1;
                console.log('Pregunta 1:', pregunta56);
            } else {
                pregunta56 = 0;
                console.log('Pregunta 56:', pregunta56);
            }
            if (valores[`valor${57}`] === "C") {
                pregunta57 = 1;
                console.log('Pregunta 57:', pregunta57);
            } else {
                pregunta57 = 0;
                console.log('Pregunta 57:', pregunta57);
            }
            if (valores[`valor${58}`] === "B") {
                pregunta58 = 1;
                console.log('Pregunta 58:', pregunta58);
            } else {
                pregunta58 = 0;
                console.log('Pregunta 58:', pregunta58);
            }
            if (valores[`valor${59}`] === "B") {
                pregunta59 = 1;
                console.log('Pregunta 59:', pregunta59);
            } else {
                pregunta59 = 0;
                console.log('Pregunta 59:', pregunta59);
            }
            if (valores[`valor${60}`] === "B") {
                pregunta60 = 1;
                console.log('Pregunta 60:', pregunta60);
            } else {
                pregunta60 = 0;
                console.log('Pregunta 60:', pregunta60);
            }
            if (valores[`valor${61}`] === "A") {
                pregunta61 = 1;
                console.log('Pregunta 61:', pregunta61);
            } else {
                pregunta61 = 0;
                console.log('Pregunta 61:', pregunta61);
            }
            if (valores[`valor${62}`] === "B") {
                pregunta62 = 1;
                console.log('Pregunta 62:', pregunta62);
            } else {
                pregunta62 = 0;
                console.log('Pregunta 62:', pregunta62);
            }
            if (valores[`valor${63}`] === "A") {
                pregunta63 = 1;
                console.log('Pregunta 63:', pregunta63);
            } else {
                pregunta63 = 0;
                console.log('Pregunta 63:', pregunta63);
            }
            if (valores[`valor${64}`] === "C") {
                pregunta64 = 1;
                console.log('Pregunta 64:', pregunta64);
            } else {
                pregunta64 = 0;
                console.log('Pregunta 64:', pregunta64);
            }
            if (valores[`valor${65}`] === "A") {
                pregunta65 = 1;
                console.log('Pregunta 65:', pregunta65);
            } else {
                pregunta65 = 0;
                console.log('Pregunta 65:', pregunta65);
            }
            if (valores[`valor${66}`] === "B") {
                pregunta66 = 1;
                console.log('Pregunta 66:', pregunta66);
            } else {
                pregunta66 = 0;
                console.log('Pregunta 66:', pregunta66);
            }
            if (valores[`valor${67}`] === "A") {
                pregunta67 = 1;
                console.log('Pregunta 67:', pregunta67);
            } else {
                pregunta67 = 0;
                console.log('Pregunta 67:', pregunta67);
            }
            if (valores[`valor${68}`] === "B") {
                pregunta68 = 1;
                console.log('Pregunta 68:', pregunta68);
            } else {
                pregunta68 = 0;
                console.log('Pregunta 68:', pregunta68);
            }
            if (valores[`valor${69}`] === "C") {
                pregunta69 = 1;
                console.log('Pregunta 69:', pregunta69);
            } else {
                pregunta69 = 0;
                console.log('Pregunta 69:', pregunta69);
            }
            if (valores[`valor${70}`] === "B") {
                pregunta70 = 1;
                console.log('Pregunta 70:', pregunta70);
            } else {
                pregunta70 = 0;
                console.log('Pregunta 70:', pregunta70);
            }
            if (valores[`valor${71}`] === "A") {
                pregunta71 = 1;
                console.log('Pregunta 71:', pregunta71);
            } else {
                pregunta71 = 0;
                console.log('Pregunta 71:', pregunta71);
            }
            if (valores[`valor${72}`] === "C") {
                pregunta72 = 1;
                console.log('Pregunta 72:', pregunta72);
            } else {
                pregunta72 = 0;
                console.log('Pregunta 72:', pregunta72);
            }
            if (valores[`valor${73}`] === "A") {
                pregunta73 = 1;
                console.log('Pregunta 73:', pregunta73);
            } else {
                pregunta73 = 0;
                console.log('Pregunta 73:', pregunta73);
            }
            if (valores[`valor${74}`] === "C") {
                pregunta74 = 1;
                console.log('Pregunta 74:', pregunta74);
            } else {
                pregunta74 = 0;
                console.log('Pregunta 74:', pregunta74);
            }
            if (valores[`valor${75}`] === "C") {
                pregunta75 = 1;
                console.log('Pregunta 75:', pregunta75);
            } else {
                pregunta75 = 0;
                console.log('Pregunta 75:', pregunta75);
            }
            if (valores[`valor${76}`] === "B") {
                pregunta76 = 1;
                console.log('Pregunta 76:', pregunta76);
            } else {
                pregunta76 = 0;
                console.log('Pregunta 76:', pregunta76);
            }
            if (valores[`valor${77}`] === "B") {
                pregunta77 = 1;
                console.log('Pregunta 77:', pregunta77);
            } else {
                pregunta77 = 0;
                console.log('Pregunta 77:', pregunta77);
            }
            if (valores[`valor${78}`] === "B") {
                pregunta78 = 1;
                console.log('Pregunta 78:', pregunta78);
            } else {
                pregunta78 = 0;
                console.log('Pregunta 78:', pregunta78);
            }
            if (valores[`valor${79}`] === "C") {
                pregunta79 = 1;
                console.log('Pregunta 79:', pregunta79);
            } else {
                pregunta79 = 0;
                console.log('Pregunta 79:', pregunta79);
            }
            if (valores[`valor${80}`] === "C") {
                pregunta80 = 1;
                console.log('Pregunta 80:', pregunta80);
            } else {
                pregunta80 = 0;
                console.log('Pregunta 80:', pregunta80);
            }
            if (valores[`valor${81}`] === "C") {
                pregunta81 = 1;
                console.log('Pregunta 81:', pregunta81);
            } else {
                pregunta81 = 0;
                console.log('Pregunta 81:', pregunta81);
            }
            if (valores[`valor${82}`] === "B") {
                pregunta82 = 1;
                console.log('Pregunta 82:', pregunta82);
            } else {
                pregunta82 = 0;
                console.log('Pregunta 82:', pregunta82);
            }
            if (valores[`valor${83}`] === "A") {
                pregunta83 = 1;
                console.log('Pregunta 83:', pregunta83);
            } else {
                pregunta83 = 0;
                console.log('Pregunta 83:', pregunta83);
            }
            if (valores[`valor${84}`] === "C") {
                pregunta84 = 1;
                console.log('Pregunta 84:', pregunta84);
            } else {
                pregunta84 = 0;
                console.log('Pregunta 84:', pregunta84);
            }
            if (valores[`valor${85}`] === "A") {
                pregunta85 = 1;
                console.log('Pregunta 85:', pregunta85);
            } else {
                pregunta85 = 0;
                console.log('Pregunta 85:', pregunta85);
            }
            if (valores[`valor${86}`] === "A") {
                pregunta86 = 1;
                console.log('Pregunta 86:', pregunta86);
            } else {
                pregunta86 = 0;
                console.log('Pregunta 86:', pregunta86);
            }

            console.log('Valores:', valores);

            opc();

        })
}
//#endregion

async function opc() {

    //p1+p2+p3+p4+p5+p6+p7+p8i+p9+p10+p11+p12+p13+p14+p15+p16+p17+p18+p26+p35

    DGV = pregunta0 + pregunta1 + pregunta2 + pregunta3 + pregunta4 + pregunta5 + pregunta6 + pregunta7 + pregunta8 + pregunta9 + pregunta10 + pregunta11 + pregunta12 + pregunta13 + pregunta14 + pregunta15 + pregunta16 + pregunta17 + pregunta25 + pregunta34;
    console.log(DGV);

    // p1+p2+p20+p19p37+p38+p55+p56+p73+p74+p75    
    I = pregunta0 + pregunta1 + pregunta19 + pregunta18 + pregunta36 + pregunta37 + pregunta54 + pregunta55 + pregunta72 + pregunta73 + pregunta74;
    console.log(I);

    // p3+p4+p21+p22+p39+p40+p57+p58+p59+p76+p77
    II = pregunta2 + pregunta3 + pregunta20 + pregunta21 + pregunta38 + pregunta39 + pregunta56 + pregunta57 + pregunta58 + pregunta75 + pregunta76;
    console.log(II);

    // p5+p6+p7+p23+p24+p25+p41+p42+p43+p60+p78
    III = pregunta4 + pregunta5 + pregunta6 + pregunta22 + pregunta23 + pregunta24 + pregunta40 + pregunta41 + pregunta42 + pregunta59 + pregunta77;
    console.log(III);

    // p8a+p26+p44+p61+p62+p79+p80+p81
    c = pregunta7a + pregunta25 + pregunta43 + pregunta60 + pregunta61 + pregunta78 + pregunta79 + pregunta80;
    IV = 8 - c;
    console.log(IV);

    // p9+p10+p11+p27+p28+p29+p45+p46+p63+p64+p82
    V = pregunta8 + pregunta9 + pregunta10 + pregunta26 + pregunta27 + pregunta28 + pregunta44 + pregunta45 + pregunta62 + pregunta63 + pregunta81;
    console.log(V);

    // p12+p13+p30+p31+p47+p48+p49+p65+p66+p83+p84
    VI = pregunta11 + pregunta12 + pregunta29 + pregunta30 + pregunta46 + pregunta47 + pregunta48 + pregunta64 + pregunta65 + pregunta82 + pregunta83;
    console.log(VI);

    // p14+p32+p50+p67+p68+p85+p86+p87 
    VII = pregunta13 + pregunta31 + pregunta49 + pregunta66 + pregunta67 + pregunta84 + pregunta85 + pregunta86;
    console.log(VII);

    // p15+p33+p34+p51+p52+p69+p70+p71
    VIII = pregunta14 + pregunta32 + pregunta33 + pregunta50 + pregunta51 + pregunta68 + pregunta69 + pregunta70;
    console.log(VIII);

    // p16+p17+p18+p35+p36+p53+p54+p72
    IX = pregunta15 + pregunta16 + pregunta17 + pregunta34 + pregunta35 + pregunta52 + pregunta53 + pregunta71;
    console.log(IX);
    console.log("aaaa")

    DGVO();
    dec1();
    dec2();
    dec3();
    dec4();
    dec5();
    dec6();
    dec7();
    dec8();
    dec9();
    decR();
    decA();
    await guardarPrueb();

}
function DGVO() {
    if (DGV <= 5) {
        DGV1 = 1;
    } else {
        DGV1 = 0;
        if (DGV === 6) {
            DGV2 = 2;
        } else {
            DGV2 = 0;
            if (DGV === 7 || DGV === 8) {
                DGV3 = 3;
            } else {
                DGV3 = 0;
                if (DGV === 9) {
                    DGV4 = 4;
                } else {
                    DGV4 = 0;
                    if (DGV === 10) {
                        DGV5 = 5;
                    } else {
                        DGV5 = 0;
                        if (DGV === 11) {
                            DGV6 = 6;
                        } else {
                            DGV6 = 0;
                            if (DGV === 12) {
                                DGV7 = 7;
                            } else {
                                DGV7 = 0;
                                if (DGV === 13 || DGV === 14) {
                                    DGV8 = 8;
                                } else {
                                    DGV8 = 0;
                                    if (DGV == 15) {
                                        DGV9 = 9;
                                    } else {
                                        DGV9 = 0;
                                        if (DGV >= 16) {
                                            DGV10 = 10;
                                        } else {
                                            DGV10 = 0;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    sumDGV = DGV1 + DGV2 + DGV3 + DGV4 + DGV5 + DGV6 + DGV7 + DGV8 + DGV9 + DGV10;
    console.log(sumDGV);
}

function dec1() {

    if (I <= 1) {
        I1 = 1;
    } else {
        I1 = 0;
        if (I === 2) {
            I2 = 2;
        } else {
            I2 = 0;
            if (I === 3) {
                I3 = 3;
            } else {
                I3 = 0;
                if (I === 4) {
                    I4 = 5;
                } else {
                    I4 = 0;
                    if (I === 5) {
                        I5 = 6;
                    } else {
                        I5 = 0;
                        if (I === 6) {
                            I6 = 7;
                        } else {
                            I6 = 0;
                            if (I === 7) {
                                I7 = 8;
                            } else {
                                I7 = 0;
                                if (I === 8) {
                                    I8 = 9;
                                } else {
                                    I8 = 0;
                                    if (I >= 9) {
                                        I9 = 10;
                                    } else {
                                        I9 = 0;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    sumI = I1 + I2 + I3 + I4 + I5 + I6 + I7 + I8 + I9;
    console.log(sumI);
}

function dec2() {

    if (II <= 1) {
        II1 = 1;
    } else {
        II1 = 0;
        if (II === 2) {
            II2 = 2;
        } else {
            II2 = 0;
            if (II === 3) {
                II3 = 4;
            } else {
                II3 = 0;
                if (II === 4) {
                    II4 = 5;
                } else {
                    II4 = 0;
                    if (II === 5) {
                        II5 = 6;
                    } else {
                        II5 = 0;
                        if (II === 6) {
                            II6 = 7;
                        } else {
                            II6 = 0;
                            if (II === 7) {
                                II7 = 8;
                            } else {
                                II7 = 0;
                                if (II >= 8) {
                                    II8 = 10;
                                } else {
                                    II8 = 0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    sumII = II1 + II2 + II3 + II4 + II5 + II6 + II7 + II8;
    console.log(sumII);
}

function dec3() {

    if (III <= 1) {
        III1 = 1;
    } else {
        III1 = 0;
        if (III === 2) {
            III2 = 2;
        } else {
            III2 = 0;
            if (III === 3) {
                III3 = 3;
            } else {
                III3 = 0;
                if (III === 4) {
                    III4 = 4;
                } else {
                    III4 = 0;
                    if (III === 5) {
                        III5 = 5;
                    } else {
                        III5 = 0;
                        if (III === 6) {
                            III6 = 6;
                        } else {
                            III6 = 0;
                            if (III === 7) {
                                III7 = 8;
                            } else {
                                III7 = 0;
                                if (III === 8) {
                                    III8 = 9;
                                } else {
                                    III8 = 0;
                                    if (III >= 9) {
                                        III9 = 10;
                                    } else {
                                        III9 = 0;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    sumIII = III1 + III2 + III3 + III4 + III5 + III6 + III7 + III8 + III9;
    console.log(sumIII);
}

function dec4() {

    if (IV <= 3) {
        IV1 = 1;
    } else {
        IV1 = 0;
        if (IV === 4) {
            IV2 = 2;
        } else {
            IV2 = 0;
            if (IV === 5) {
                IV3 = 4;
            } else {
                IV3 = 0;
                if (IV === 6) {
                    IV4 = 5;
                } else {
                    IV4 = 0;
                    if (IV === 7) {
                        IV5 = 7;
                    } else {
                        IV5 = 0;
                        if (IV === 8) {
                            IV6 = 9;
                        } else {
                            IV6 = 0;
                        }
                    }
                }
            }
        }
    }

    sumIV = IV1 + IV2 + IV3 + IV4 + IV5 + IV6;
    console.log(sumIV);
}

function dec5() {

    if (V <= 1) {
        V1 = 1;
    } else {
        V1 = 0;
        if (V === 2) {
            V2 = 2;
        } else {
            V2 = 0;
            if (V === 3) {
                V3 = 3;
            } else {
                V3 = 0;
                if (V === 4) {
                    V4 = 4;
                } else {
                    V4 = 0;
                    if (V === 5) {
                        V5 = 6;
                    } else {
                        V5 = 0;
                        if (V === 6) {
                            V6 = 7;
                        } else {
                            V6 = 0;
                            if (V === 7) {
                                V7 = 8;
                            } else {
                                V7 = 0;
                                if (V === 8) {
                                    V8 = 9;
                                } else {
                                    V8 = 0;
                                    if (V >= 9) {
                                        V9 = 10;
                                    } else {
                                        V9 = 0;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    sumV = V1 + V2 + V3 + V4 + V5 + V6 + V7 + V8 + V9;
    console.log(sumV);
}

function dec6() {

    if (VI <= 0) {
        VI1 = 1;
    } else {
        VI1 = 0;
        if (VI === 1) {
            VI2 = 2;
        } else {
            VI2 = 0;
            if (VI === 2) {
                VI3 = 3;
            } else {
                VI3 = 0;
                if (VI === 3) {
                    VI4 = 5;
                } else {
                    VI4 = 0;
                    if (VI === 4) {
                        VI5 = 6;
                    } else {
                        VI5 = 0;
                        if (VI === 5) {
                            VI6 = 7;
                        } else {
                            VI6 = 0;
                            if (VI === 6) {
                                VI7 = 8;
                            } else {
                                VI7 = 0;
                                if (VI === 7) {
                                    VI8 = 9;
                                } else {
                                    VI8 = 0;
                                    if (VI >= 8) {
                                        VI9 = 10;
                                    } else {
                                        VI9 = 0;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    sumVI = VI1 + VI2 + VI3 + VI4 + VI5 + VI6 + VI7 + VI8 + VI9;
    console.log(sumVI);
}

function dec7() {

    if (VII <= 0) {
        VII1 = 1;
    } else {
        VII1 = 0;
        if (VII === 1) {
            VII2 = 2;
        } else {
            VII2 = 0;
            if (VII === 2) {
                VII3 = 4;
            } else {
                VII3 = 0;
                if (VII === 3) {
                    VII4 = 5;
                } else {
                    VII4 = 0;
                    if (VII === 4) {
                        VII5 = 7;
                    } else {
                        VII5 = 0;
                        if (VII === 5) {
                            VII6 = 8;
                        } else {
                            VII6 = 0;
                            if (VII === 6) {
                                VII7 = 9;
                            } else {
                                VII7 = 0;
                                if (VII >= 7) {
                                    VII8 = 10;
                                } else {
                                    VII8 = 0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    sumVII = VII1 + VII2 + VII3 + VII4 + VII5 + VII6 + VII7 + VII8;
    console.log(sumVII);
}

function dec8() {

    if (VIII === 0) {
        VIII1 = 3;
    } else {
        VIII1 = 0;
        if (VIII === 1) {
            VIII2 = 5;
        } else {
            VIII2 = 0;
            if (VIII === 2) {
                VIII3 = 6;
            } else {
                VIII3 = 0;
                if (VIII === 3) {
                    VIII4 = 8;
                } else {
                    VIII4 = 0;
                    if (VIII === 4) {
                        VIII5 = 9;
                    } else {
                        VIII5 = 0;
                        if (VIII >= 5) {
                            VIII6 = 10;
                        } else {
                            VIII6 = 0;
                        }
                    }
                }
            }
        }
    }

    sumVIII = VIII1 + VIII2 + VIII3 + VIII4 + VIII5 + VIII6;
    console.log(sumVIII);
}

function dec9() {

    if (IX <= 1) {
        IX1 = 1;
    } else {
        IX1 = 0;
        if (IX === 2) {
            IX2 = 2;
        } else {
            IX2 = 0;
            if (IX === 3) {
                IX3 = 3;
            } else {
                IX3 = 0;
                if (IX === 4) {
                    IX4 = 4;
                } else {
                    IX4 = 0;
                    if (IX === 5) {
                        IX5 = 5;
                    } else {
                        IX5 = 0;
                        if (IX === 6) {
                            IX6 = 7;
                        } else {
                            IX6 = 0;
                            if (IX === 7) {
                                IX7 = 8;
                            } else {
                                IX7 = 0;
                                if (IX >= 8) {
                                    IX8 = 10;
                                } else {
                                    IX8 = 0;

                                }
                            }
                        }
                    }
                }
            }
        }
    }

    sumIX = IX1 + IX2 + IX3 + IX4 + IX5 + IX6 + IX7 + IX8;
    console.log(sumIX);
}

function decR() {

    R = I + II + III + IV


    if (R <= 13) {
        f1 = 1;
    } else {
        f1 = 0;
        if (R === 14 || R == 15) {
            f2 = 2;
        } else {
            f2 = 0;
            if (R === 16 || R === 17) {
                f3 = 3;
            } else {
                f3 = 0;
                if (R === 18) {
                    f4 = 4;
                } else {
                    f4 = 0;
                    if (R === 19 || R === 20) {
                        f5 = 5;
                    } else {
                        f5 = 0;
                        if (R === 21 || R === 22) {
                            f6 = 6;
                        } else {
                            f6 = 0;
                            if (R === 23 || R === 24) {
                                f7 = 7;
                            } else {
                                f7 = 0;
                                if (R === 25 || R === 26) {
                                    f8 = 8;
                                } else {
                                    f8 = 0;
                                    if (R === 27) {
                                        f9 = 9;
                                    } else {
                                        f9 = 0;
                                        if (R >= 28) {
                                            f10 = 10;
                                        } else {
                                            f10 = 0;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    sumaR = f1 + f2 + f3 + f4 + f5 + f6 + f7 + f8 + f9 + f10;
    console.log(sumaR);
}

function decA() {
    f1 = 0;
    f2 = 0;
    f3 = 0;
    f4 = 0;
    f5 = 0;
    f6 = 0;
    f7 = 0;
    f8 = 0;
    f9 = 0;
    f10 = 0;
    A = V + VI + VII + VIII

    if (A <= 7) {
        f1 = 1;
    } else {
        f1 = 0;
        if (A === 8) {
            f2 = 2;
        } else {
            f2 = 0;
            if (A === 9 || A === 10) {
                f3 = 3;
            } else {
                f3 = 0;
                if (A === 11) {
                    f4 = 4;
                } else {
                    f4 = 0;
                    if (A === 12 || A === 13) {
                        f5 = 5;
                    } else {
                        f5 = 0;
                        if (A === 14 || A === 15) {
                            f6 = 6;
                        } else {
                            f6 = 0;
                            if (A === 16) {
                                f7 = 7;
                            } else {
                                f7 = 0;
                                if (A === 17 || A === 18) {
                                    f8 = 8;
                                } else {
                                    f8 = 0;
                                    if (A === 19 || A === 20) {
                                        f9 = 9;
                                    } else {
                                        f9 = 0;
                                        if (R >= 21) {
                                            f10 = 10;
                                        } else {
                                            f10 = 0;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    sumaA = f1 + f2 + f3 + f4 + f5 + f6 + f7 + f8 + f9 + f10;
    console.log(sumaA);
}
function guardarPrueb() {
    fetch("http://localhost:8085/apiPrue/saveRes", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            "resu1": sumDGV,
            "resu2": sumI,
            "resu3": sumII,
            "resu4": sumIII,
            "resu5": sumIV,
            "resu6": sumV,
            "resu7": sumVI,
            "resu8": sumVII,
            "resu9": sumVIII,
            "resu10": sumIX,
            "resu11": sumaR,
            "resu12": sumaA,
            "docApe": valorLocalStorage,
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

const btn = document.getElementById("Seccion5");

btn.addEventListener("click", async function () {
    await validarSeccion5();

});




















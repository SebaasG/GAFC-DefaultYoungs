const SeccionP1 = document.getElementById("SeccionP1");

let array = [];

SeccionP1.addEventListener("click", function () {

    array = [];

    for (let i = 0; i < 3; i++) {

        let value = parseInt(document.getElementById(`preguntaP${i+1}`).value);

        array.push(value);

    }

    const repositorio = [
        {
            "Pregunta1" : array[0],  
        },
        {
            "Pregunta2" : array[1]
        }
    ]

    console.log(parseInt(repositorio[0]["Pregunta1"]) + parseInt(repositorio[1]["Pregunta2"]));

    console.log("Elementos del array: "+array[2]);

    let variable1;
    let variable2;
    let variable3;

    switch (array[2]){
        case 1:
            variable1 = 1
            variable2 = 0
            variable3 = 0
            break;
        case 2:
            variable1 = 0
            variable2 = 1
            variable3 = 0
            break;
        case 3:
            variable1 = 0
            variable2 = 0
            variable3 = 1
            break;
    }

    console.log("variable 1: "+variable1)
    console.log("variable 2: "+variable2)
    console.log("variable 3: "+variable3)

})
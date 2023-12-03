// Apartado para la tabla de resultados.
let dataTable;
let dataTableIsInitialized = false;

const dataTableOptions = {
    //scrollX: "2000px",
    lengthMenu: [5, 10, 15],
    columnDefs: [
        { className: "centered", targets: [0, 1, 2, 3, 4, 5, 6, 7] },
        { orderable: false, targets: [5, 6] },
    ],
    pageLength: 3,
    destroy: true,
    language: {
        lengthMenu: "Mostrar _MENU_ registros por página",
        zeroRecords: "Ningún usuario encontrado",
        info: "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
        infoEmpty: "Ningún usuario encontrado",
        infoFiltered: "(filtrados desde _MAX_ registros totales)",
        search: "Buscar:",
        loadingRecords: "Cargando...",
        paginate: {
            first: "Primero",
            last: "Último",
            next: "Siguiente",
            previous: "Anterior"
        }
    }
};

const initDataTable = async () => {
    if (dataTableIsInitialized) {
        dataTable.destroy();
    }
    await listUsers();
    dataTable = $("#datatable_users").DataTable(dataTableOptions);
    dataTableIsInitialized = true;
};

const listUsers = async () => {
    try {
        const response = await fetch("http://localhost:8085/apiCita/datos");
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }
        const aprendiz = await response.json();
        console.log(aprendiz);
        let content = ``;
        aprendiz.forEach((aprendiz, index) => {
            content += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${aprendiz.docApe}</td>
                    <td>${aprendiz.nomApe}</td>
                    <td>${aprendiz.fecIni}</td>
                    <td>${aprendiz.codFic}</td>
                    <td>${aprendiz.codIng}</td>
                    <td>${aprendiz.docIns}</td>
                    <td>
                        <button class="button1" data-doc="${aprendiz.docApe}">
                            <i class="fa-solid fa-chart-simple"></i>
                        </button>
                        <button class="button2" data-doc="${aprendiz.docApe}"> 
                            <i class="fa-solid fa-chart-simple"></i>
                        </button>
                    </td>
                </tr>`;
        });
        $("#datatable_users tbody").html(content); // Modifiqué cómo se inserta el contenido en la tabla
    } catch (ex) {
        alert(ex.message);
    }
}

// Agregar listeners de eventos para los botones
$(document).on("click", ".button1", function () {
    showDocument(this);
});

$(document).on("click", ".button2", function () {
    showDocument1(this);
});

function showDocument(graf1) {
    const document = $(graf1).data("doc");
    localStorage.setItem("documentoSeleccionado", document);
    window.location.href = "grafica.html";
}

function showDocument1(graf2) {
    const document = $(graf2).data("doc");
    localStorage.setItem("documentoSeleccionado", document);
    window.location.href = "grafica2.html";
}

$(document).ready(async () => {
    await initDataTable();
});

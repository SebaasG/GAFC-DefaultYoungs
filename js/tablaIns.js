// Apartado para la tabla de resultados.
let dataTable;
let dataTableIsInitialized = false;

const dataTableOptions = {
    //scrollX: "2000px",
    lengthMenu: [5, 10, 15],
    columnDefs: [
        { className: "centered", targets: [0, 1, 2, 3, 4] },
        { orderable: false, targets: [1, 2] },
        //{ searchable: false, targets: [3] } <-- Para buscar por una columna en especifico.
        //{ width: "50%", targets: [0] }
    ],
    pageLength: 3,
    destroy: true,
    language: {
        lengthMenu: "Mostrar _MENU_ registros por página",
        zeroRecords: "Ningún usuario encontrado",
        info: "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros", // <-- Para mostrar en la parte inferior la cantidad de registros que se muestran.
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

    dataTable = $("#datatable_ins").DataTable(dataTableOptions);

    dataTableIsInitialized = true;
};

const listUsers = async () => {
try {
    const response = await fetch("http://localhost:8085/apiIns/get");
    const instructores = await response.json();
    let content = ``;

    instructores.forEach((instructor, index) => {
        let estado;
        if (instructor.estado === 1) {
            estado = "Activo";
        } else if (instructor.estado === 0) {
            estado = "Inactivo";
        } else if (instructor.estado === 3) {
            estado = "Admin";
        }

        content += `
            <tr>
                <td>${index + 1}</td>
                <td>${instructor.docIns}</td>
                <td>${instructor.nomIns}</td>
                <td>${estado}</td>
                <td> 
                    <center>
                        <button class="button1" data-doc="${instructor.docIns}"> 
                        <i class="fa-solid fa-arrow-rotate-right"></i> </button>
                    </center>                         
                </td>  
            </tr>`;
    });

    tableBody_ins.innerHTML = content;
} catch (ex) {
    alert(ex);
}
};
$(document).on("click", ".button1", function () {
    showDocument(this);
});

function showDocument(actualizar) {
    const document = $(actualizar).data("doc");
    localStorage.setItem("documentoinstructor", document);
    window.location.href = "contraAdmin.html";
}

window.addEventListener("load", async () => {
    await initDataTable();
});

// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
  // Obtén la referencia al elemento de entrada de fecha con el ID "fecIniApe"
  const dateInput = document.getElementById("fecIniApe");

  // Obtén la fecha actual
  const today = new Date();
  
  // Calcula la fecha mínima como tres años antes de la fecha actual
  const minDate = new Date(today);
  minDate.setFullYear(today.getFullYear() - 2);

  // Formatea la fecha mínima en el formato YYYY-MM-DD
  const year = minDate.getFullYear();
  const month = String(minDate.getMonth() + 1).padStart(2, "0");
  const day = String(minDate.getDate()).padStart(2, "0");
  const minDateString = `${year}-${month}-${day}`;

  // Obtiene la fecha actual en el formato YYYY-MM-DD
  const currentYear = today.getFullYear();
  const currentMonth = String(today.getMonth() + 1).padStart(2, "0");
  const currentDay = String(today.getDate()).padStart(2, "0");
  const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

  // Establece la fecha mínima y máxima en el campo de fecha
  dateInput.min = minDateString; // Establece la fecha mínima como tres años antes
  dateInput.max = currentDate;   // Establece la fecha máxima como la fecha actual
});

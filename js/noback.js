// Agregar una entrada al historial
window.history.pushState({ page: "index" }, "index", "index.html");

// Manejar el evento popstate
window.addEventListener("popstate", function(event) {
  // Aquí puedes controlar la navegación hacia atrás y realizar acciones personalizadas
  history.pushState() 
});

  
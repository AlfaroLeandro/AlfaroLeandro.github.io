
window.onload=init;

function init() {
    var icono = document.getElementById("icono-correo")

    icono.addEventListener("click", function(e) {
        navigator.clipboard.writeText("leandro.ezequiel.alfaro.01@gmail.com");
        alert("'leandro.ezequiel.alfaro.01@gmail.com' copiado al portapapeles");
    });

    cargar_tooltips();

    // icono.addEventListener("over", function() {
        
    // });
}

function cargar_tooltips() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
}


window.onload=init;

function init() {
    var icono = document.getElementById("icono-correo")

    icono.addEventListener("click", function(e) {
        navigator.clipboard.writeText("leandro.ezequiel.alfaro.01@gmail.com");
        alert("'leandro.ezequiel.alfaro.01@gmail.com' copiado al portapapeles");
    });

    // icono.addEventListener("over", function() {
        
    // });
}

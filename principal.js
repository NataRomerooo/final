function validarCredenciales() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Supongamos una lista de usuarios y contraseñas
    const usuarios = [
        { usuario: 'usuario1', contraseña: 'contraseña1' },
        { usuario: 'usuario2', contraseña: 'contraseña2' },
        // Agrega más usuarios si es necesario
    ];

    const usuarioValido = usuarios.find(user => user.usuario === username && user.contraseña === password);

    if (usuarioValido) {
        window.location.href = 'usuarios.html';
    } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
}
$(document).ready(function(){
    $("input").focus(function(){
        $(this).next("span").show().fadeOut("slow");
    });
});
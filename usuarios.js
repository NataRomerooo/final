let usuariosRegistrados = [];

function registrarUsuario() {
    const nuevoUsuario = document.getElementById('nuevoUsuario').value;
    const nuevaContraseña = document.getElementById('nuevaContraseña').value;

    // Validar si los campos están vacíos
    if (!nuevoUsuario || !nuevaContraseña) {
        alert('Por favor, ingresa tanto el nombre de usuario como la contraseña.');
        return; // Detener la función si los campos están vacíos
    }

    // Crear un objeto de usuario y contraseña
    const nuevoUsuarioObj = {
        usuario: nuevoUsuario,
        contraseña: nuevaContraseña
    };

    usuariosRegistrados.push(nuevoUsuarioObj);

    mostrarUsuariosEnTabla();
}


        function mostrarUsuariosEnTabla() {
            const usuariosTablaBody = document.getElementById('usuariosTablaBody');
            usuariosTablaBody.innerHTML = ''; // Limpiar la tabla antes de mostrar los usuarios

            usuariosRegistrados.forEach(usuario => {
                const row = `<tr><td>${usuario.usuario}</td><td>${usuario.contraseña}</td></tr>`;
                usuariosTablaBody.innerHTML += row;
            });
        }
        function irAOtraPagina() {
            window.location.href = 'productos.html'; 
        }
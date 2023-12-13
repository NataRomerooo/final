let productosRegistrados = [];

function registrarProducto() {
    const nombre = document.getElementById('nombreProducto').value;
    const precio = document.getElementById('precioProducto').value;
    const foto = document.getElementById('fotoProducto').value;
    const descripcion = document.getElementById('descripcionProducto').value;

    // Validar si los campos están vacíos
    if (!nombre || !precio) {
        alert('Por favor, ingresa tanto el nombre como el precio del producto.');
        return; // Detener la función si los campos están vacíos
    }

    const nuevoProducto = {
        nombre: nombre,
        precio: parseFloat(precio),
        foto: foto,
        descripcion: descripcion
    };

    productosRegistrados.push(nuevoProducto);
    mostrarProductosRegistrados();
}


        function mostrarProductosRegistrados() {
            const productosTableBody = document.querySelector('#productosTable tbody');

            // Clear existing rows
            productosTableBody.innerHTML = '';

            productosRegistrados.forEach(producto => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${producto.nombre}</td>
                    <td>$${producto.precio}</td>
                    <td><img src="${producto.foto}" alt="${producto.nombre}" style="max-width: 100px; height: auto;"></td>
                    <td>${producto.descripcion}</td>
                `;
                productosTableBody.appendChild(row);
            });
        }
        function irAOtraPagina() {
            window.location.href = 'usuarios.html';
        }
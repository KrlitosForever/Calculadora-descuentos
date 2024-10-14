function calcularDescuento() {
    var precio = parseFloat(document.getElementById('precio').value);
    var descuento = parseFloat(document.getElementById('descuento').value);

    // Si los campos están vacíos, no hacemos nada
    if (isNaN(precio) || isNaN(descuento)) {
        document.getElementById('resultado').innerText = '';
        return;
    }

    // Aseguramos que los valores sean positivos
    if (precio < 0 || descuento < 0) {
        alert('Por favor, ingrese valores positivos.');
        return;
    }

    // Calculamos el descuento y el precio final
    var descuentoAplicado = precio * (descuento / 100);
    var precioFinal = precio - descuentoAplicado;

    // Formateamos el precio final con separadores de miles
    var precioFormateado = precioFinal.toLocaleString('es-ES');

    document.getElementById('resultado').innerText = 
        'El precio con descuento es: $' + precioFormateado;
}

// Simulador de compras de steam, pasandolo a pesos y con el IVA incluido (No se que otro impuesto lleva a si que solo le puse ese)
function simularCompraSteam() {
    let dolarTarjeta = 1475; // Dólar tarjeta
    let iva = 0.21; // 21% de IVA en Argentina

    // Bienvenida
    let nombreUsuario = prompt("¡Bienvenido al simulador de compras en Steam!\nPor favor, ingrese su nombre:");

    if (!nombreUsuario) {
        alert("No ingresaste un nombre. Saliendo del simulador.");
        return;
    }

    // Saludo con nombre
    alert("¡Hola " + nombreUsuario + "!, Bienvenido al simulador de compras en Steam. ¡Comencemos!");

    while (true) {
        let precioUSD = prompt("Ingrese el precio en USD de la compra, " + nombreUsuario + " (o 'fin' para salir)");

        // Despedida si el usuario pone fin
        if (precioUSD.toLowerCase() === 'fin') {
            alert("¡Hasta luego, " + nombreUsuario + "! Saliendo del simulador.");
            break;
        }

        // Validación de precio
        precioUSD = parseFloat(precioUSD);
        if (precioUSD > 0) {
            // Cálculo completo
            let precioEnARS = (precioUSD * dolarTarjeta) * (1 + iva);

            // Mostrar el resultado 
            alert(nombreUsuario + ", el precio en ARS incluyendo impuestos es: $" + precioEnARS.toFixed(2));
        } else {
            alert("Por favor, ingrese un valor numérico válido mayor que cero.");
        }
    }
}

simularCompraSteam();

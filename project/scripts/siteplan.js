const botonesMostrarMas = document.querySelectorAll('.mostrar-mas');

botonesMostrarMas.forEach(boton => {
    boton.addEventListener('click', () => {
        const imagenContenedor = boton.closest('.imagen-contenedor');
        if (imagenContenedor) {
            imagenContenedor.style.overflow = 'visible';
            boton.style.display = 'none';
            imagenContenedor.style.height = 'auto';
        }
    });
});
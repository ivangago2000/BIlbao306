// Capturar elementos del DOM
const generarBtn = document.getElementById('generar');

// Función principal para generar el itinerario
function generarItinerario() {
    // Obtener preferencias del usuario
    const preferencias = {
        restaurantes: document.getElementById('restaurantes').checked,
        museos: document.getElementById('museos').checked,
        parques: document.getElementById('parques').checked,
        monumentos: document.getElementById('monumentos').checked,
        playas: document.getElementById('playas').checked,
        montes: document.getElementById('montes').checked
    };

    // Filtrar lugares por las preferencias seleccionadas
    const lugaresSeleccionados = lugares.filter(lugar => preferencias[lugar.tipo]);

    if (lugaresSeleccionados.length === 0) {
        alert("Selecciona al menos una preferencia.");
        return;
    }

    // Limpiar marcadores anteriores del mapa
    limpiarMapa();

    // Generar el itinerario optimizado
    const itinerario = optimizarItinerario(lugaresSeleccionados);

    // Mostrar el itinerario en el mapa
    mostrarItinerario(itinerario);
}

// Limpiar marcadores anteriores
function limpiarMapa() {
    mapa.eachLayer((layer) => {
        if (!!layer.toGeoJSON) {
            mapa.removeLayer(layer);
        }
    });
}

// Optimizar el itinerario (ordenar por proximidad)
function optimizarItinerario(lugares) {
    return lugares.sort((a, b) => a.lat - b.lat);
}

// Mostrar el itinerario en el mapa con popups numerados
function mostrarItinerario(itinerario) {
    itinerario.forEach((lugar, index) => {
        L.marker([lugar.lat, lugar.lng])
            .addTo(mapa)
            .bindPopup(`<strong>${index + 1}. ${lugar.nombre}</strong>`);
    });
}

// Evento del botón
generarBtn.addEventListener('click', generarItinerario);

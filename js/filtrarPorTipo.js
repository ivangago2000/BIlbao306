function filtrarPorTipo(lugares, tipo) {
    return lugares.filter(lugar => lugar.tipo === tipo);
}

module.exports = filtrarPorTipo;
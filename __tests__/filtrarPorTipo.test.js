const filtrarPorTipo = require('../js/filtrarPorTipo');

test('filtra lugares por tipo', () => {
    const lugares = [
        { nombre: "Museo Guggenheim", tipo: "museos" },
        { nombre: "Playa de La Arena", tipo: "playas" }
    ];
    const resultado = filtrarPorTipo(lugares, "playas");
    expect(resultado).toEqual([
        { nombre: "Playa de La Arena", tipo: "playas" }
    ]);
});
document.getElementById('taxCalculator').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const valorInmueble = parseFloat(document.getElementById('houseCost').value);

    const rangos = [
        { inferior: 0.00, superior: 81611.20, cuota: 0.00, cifra: 0.03999999197 },
        { inferior: 81611.21, superior: 143307.72, cuota: 3264.45, cifra: 0.04476282369 },
        { inferior: 143307.73, superior: 251645.65, cuota: 6026.17, cifra: 0.04705766918 },
        { inferior: 251645.66, superior: 441885.00, cuota: 11124.31, cifra: 0.04947010434 },
        { inferior: 441885.01, superior: 775941.70, cuota: 20535.48, cifra: 0.05200614302 },
        { inferior: 775941.71, superior: 1362538.94, cuota: 37908.49, cifra: 0.05467223225 },
        { inferior: 1362538.95, superior: 2392592.59, cuota: 69979.08, cifra: 0.05747495829 },
        { inferior: 2392592.60, superior: Infinity, cuota: 129181.38, cifra: 0.06042137653 }
    ];

    let impuesto = 0;

    for (const rango of rangos) {
        if (valorInmueble >= rango.inferior && valorInmueble <= rango.superior) {
            const excedente = valorInmueble - rango.inferior;
            impuesto = excedente * rango.cifra + rango.cuota;
            break;
        }
    }

    // Genera el HTML explicativo del cálculo
    const resultHtml = `
        <h2>Resultado del Cálculo</h2>
        <p>Valor del Inmueble: $${valorInmueble}</p>
        <p>El impuesto a pagar es: $${impuesto.toFixed(2)}</p>
    `;

    document.getElementById('result').innerHTML = resultHtml;
});

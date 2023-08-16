document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('taxCalculator');
    const resultContainer = document.getElementById('result');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const houseCost = parseFloat(document.getElementById('houseCost').value);
        const tax = houseCost * 0.35;
        resultContainer.innerHTML = `Impuesto resultante: $${tax.toFixed(2)}`;
    });
});

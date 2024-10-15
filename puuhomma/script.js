function randomDiameter(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateWoodVolume(length, height, depth) {
    const numLogs = Math.floor(Math.random() * 20) + 5; // Satunnaisesti 5-25 puuta
    let totalVolume = 0;

    for (let i = 0; i < numLogs; i++) {
        const baseDiameter = randomDiameter(11, 25); // Paksu pää
        const topDiameter = randomDiameter(5, 10); // Ohut pää
        const radiusBase = baseDiameter / 2 / 100; // Muutetaan senttimetrit metreiksi
        const radiusTop = topDiameter / 2 / 100; // Muutetaan senttimetrit metreiksi
        const heightLog = length / numLogs; // Lasketaan kunkin puun korkeus

        // Lasketaan puun tilavuus: V = (1/3) * π * h * (r1² + r1 * r2 + r2²)
        const volume = (1/3) * Math.PI * heightLog * (radiusBase ** 2 + radiusBase * radiusTop + radiusTop ** 2);
        totalVolume += volume;
    }

    // Kuutioiden tilavuus
    const totalCubicVolume = length * height * depth;
    const woodPercentage = (totalVolume / totalCubicVolume) * 100;

    return { totalVolume, woodPercentage };
}

document.getElementById('calculateBtn').addEventListener('click', () => {
    const length = parseFloat(document.getElementById('length').value);
    const height = parseFloat(document.getElementById('height').value);
    const depth = parseFloat(document.getElementById('depth').value);

    if (length > 0 && height > 0 && depth > 0) {
        const { totalVolume, woodPercentage } = calculateWoodVolume(length, height, depth);
        document.getElementById('results').innerHTML = `
            <p>Yhteensä puuaineksen tilavuus: ${totalVolume.toFixed(2)} m³</p>
            <p>Puuaineksen prosenttiosuus: ${woodPercentage.toFixed(2)}%</p>
        `;
    } else {
        alert('Kaikkien kenttien tulee olla positiivisia lukuja.');
    }
});

// FUNZIONE CHE MI PERMETTE DI CARICARE IL FILE SVG
document.addEventListener("DOMContentLoaded", function () {
    // Effettuo una richiesta per il file symbols.svg
    fetch('symbols.svg')
        .then(response => response.text()) // Ottengo il contenuto del file come testo
        .then(data => {
            const div = document.createElement('div');
            div.style.display = 'none';
            // Inserisco il contenuto del file SVG nel div
            div.innerHTML = data;
            // Inserisco il div nascosto all'inizio del body del documento
            document.body.insertBefore(div, document.body.childNodes[0]);
        })
        .catch(error => console.error('Error loading SVG:', error));
});

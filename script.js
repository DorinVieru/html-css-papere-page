/* FUNZIONE CHE MI PERMETTE DI CARICARE IL FILE SVG
   Nel servizio esterno di Netlify, che recupera il mio progetto direttamente da github, non viene visualizzato correttamente il file symbols.svg che contiene le icone, di conseguenza questa funziona può funzionare correttamente solo in locale al momento.

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
*/

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    },
});
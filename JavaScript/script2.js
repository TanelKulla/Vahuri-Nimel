//Autor: ChatGPT
//Mudis Rene

// Leia kõik nupud
const buttons = document.querySelectorAll('.toggleButton');

// Käi läbi kõik nupud ja lisa igale sündmuste kuulaja
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Leia vastav lisatekst
        const extraText = button.parentElement.previousElementSibling;

        // Vaheta tekst ja nupu sisu
        if (extraText.style.display === 'none' || !extraText.style.display) {
            extraText.style.display = 'block'; // Näita lisateksti
            button.innerText = 'Loe vähem';  // Muuda nupu tekst
        } else {
            extraText.style.display = 'none'; // Peida lisatekst
            button.innerText = 'Loe rohkem'; // Muuda nupu tekst tagasi
        }
    });
});
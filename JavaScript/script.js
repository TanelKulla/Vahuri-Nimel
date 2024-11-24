// Autor: ChatGPT
// Natukene muudetud tiimiliikme Tanel Kulla poolt

const filePath = document.currentScript.getAttribute('data-file-path'); // Saa faili asukoht

// Loe faili sisu
fetch(filePath)
    .then(response => {
        // Midagi läks valesti
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    // Midagi ei läinud valesti
    .then(data => {
        const formatted_text = convertLinksToHypertext(data); // Muuda lingid tekstis <a> elementideks
        document.getElementById('file_content').innerHTML = `<p>${formatted_text}</p>`; // tagasta kraam uuel kujul
    })
    // Midagi läks vist uuesti valesti
    .catch(error => {
        document.getElementById('file_content').textContent = 'Error loading file: ' + error.message;
    });


function convertLinksToHypertext(text) {
    // regex, mille ma tõmbasin kuskil välja
    const regex = /(https?:\/\/[^\s)]+)(?=\s|\)|$)/g;
    
    // muuda tekstis regex'ile vastavad osad kujule: <a> href="[url]" >[url]</a>
    return text.replace(regex, (url) => {
      return `<a href="${url}" >${url}</a>`;
    });
}

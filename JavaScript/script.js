// Autor ChatGPT
// Natukene muudetud tiimiliikme Tanel Kulla poolt

const script = document.currentScript;
const filePath = script.getAttribute('data-file-path'); // Saa faili asukoht

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
        const formatted_text = convertLinksToHypertext(data);
        document.getElementById('file_content').innerHTML = `<p>${formatted_text}</p>`;
    })
    // Midagi läks vist uuesti valesti
    .catch(error => {
        document.getElementById('file_content').textContent = 'Error loading file: ' + error.message;
    });

// Muuda URL'id kujule <a> href="[url]"</a>
function convertLinksToHypertext(text) {
    // regex mille ma tõmbasin kuskil välja
    const regex = /(https?:\/\/[^\s)]+)(?=\s|\)|$)/g;
    
    // asenda url
    return text.replace(regex, (url) => {
      return `<a href="${url}" >${url}</a>`;
    });
}

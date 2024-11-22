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
        document.getElementById('file_content').textContent = data;
    })
    .catch(error => {
        document.getElementById('file_content').textContent = 'Error loading file: ' + error.message;
    });


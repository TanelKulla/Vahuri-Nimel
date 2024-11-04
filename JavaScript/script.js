// Get the script element to retrieve the data attribute
const script = document.currentScript; // Gets the currently executing script
const filePath = script.getAttribute('data-file-path'); // Retrieve the data-file-path attribute

// Fetch the content of the file
fetch(filePath)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('fileContent').textContent = data;
    })
    .catch(error => {
        document.getElementById('fileContent').textContent = 'Error loading file: ' + error.message;
    });


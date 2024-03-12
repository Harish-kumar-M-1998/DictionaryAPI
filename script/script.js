function search() {
    const searchInput = document.getElementById('search-input').value;
    // to alert if there was no input
    if (searchInput === '') {
        alert('Please enter a word to search.');
        return;
    }
    
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`)
        .then(response => response.json())
        .then(data => {
            showResults(data);
        })
        .catch(error => {
            console.log('Error:', error);
        });
}
// fuction to show results of the input word
function showResults(data) {
    
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    data.forEach(result => {    
        // Creating variables to get the input word,definition and pronunciation
        const word = result.word;
        const definition = result.meanings[0].definitions[0].definition;
        const pronunciation = result.phonetics[0].text;

        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');

        const wordElement = document.createElement('div');
        wordElement.classList.add('word');
        wordElement.textContent = word;

        const definitionElement = document.createElement('div');
        definitionElement.classList.add('definition');
        definitionElement.textContent = definition;

        const pronunciationElement = document.createElement('div');
        pronunciationElement.classList.add('pronunciation');
        pronunciationElement.textContent = `Pronunciation: ${pronunciation}`;

        resultDiv.appendChild(wordElement);
        resultDiv.appendChild(definitionElement);
        resultDiv.appendChild(pronunciationElement);

        resultsContainer.appendChild(resultDiv);
    });
}



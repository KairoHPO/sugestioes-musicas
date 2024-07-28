document.getElementById('suggestionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const category = document.getElementById('category').value;
    const suggestion = document.getElementById('suggestion').value;

    let listId;
    if (category === 'musica') {
        listId = 'musicaList';
    } else if (category === 'album') {
        listId = 'albumList';
    } else if (category === 'artista') {
        listId = 'artistaList';
    }

    const listItem = document.createElement('li');
    listItem.textContent = suggestion;
    document.getElementById(listId).appendChild(listItem);

    document.getElementById('suggestionForm').reset();
});

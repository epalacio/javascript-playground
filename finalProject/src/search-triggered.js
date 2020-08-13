export default handler => {
    const searchText = document.getElementById('search-text');
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', () => {
        if(!searchText.value.length) {
            return;
        };
        handler(searchText.value);
    });
    searchText.addEventListener('keyup', (e) => {
        if(!searchText.value.length || e.keyCode !== 13) {
            return;
        };
        handler(searchText.value);
    })
};
const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains('clickable')) {
        clickableClicked(e);
    };
})
function buildBackButton(hasText = true) {
    const backButton = document.createElement('button');
    backButton.innerHTML = `<i class="fa fa-angle-left"></i>`;
    if (hasText) {
        backButton.innerHTML += 'Назад';
    }
    const container = document.createElement('div');
    container.setAttribute('class', 'backbutton');
    container.append(backButton);
    container.addEventListener('click', () => {
        window.history.back();
    });
    return container;
}
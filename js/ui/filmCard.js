function buildFilmCard(film) {
    const card = document.createElement('div');
    card.setAttribute('id', film.id);
    card.setAttribute('class', 'card');
    card.append(buildFilmPreview(film));
    card.innerHTML += `
        <div class="card-title"><h3>${film.name}</h3></div>
        <div class="card-rate">Кинопоиск - ${film.userRatings.kinopoisk}</div>
        <button class="card-button"><a href="./film.html?film_id=${film.id}">Подробнее</a></button>
    `;
    return card;
}

function buildFilmPreview(film) {
    const preview = document.createElement('div');
    preview.setAttribute('class', 'card-preview');
    preview.style.background = `url("${getUrlOfFilmImg(film)}")`;
    preview.style.backgroundSize = 'cover';
    preview.style.backgroundPosition = 'center';
    preview.innerHTML = `
        <div class="card-preview-genre">
            <p>
                <strong>${film.genres[0]}</strong></br>
                ${film.country.name}, ${film.releaseDate.substr(-4, 4)}
            </p>
        </div >
        `;
    return preview;
}
const isMobile = window.innerWidth < 768;

async function main() {
    changeHeader('О фильме');
    window.addEventListener('resize', adoptLayout, { once: true });
    if (!isMobile) {
        document.querySelector('main').before(buildBackButton());
    }
    const film_id = getFilmId();
    const film = await getFilmById(film_id);
    showFilmInfo(film);
}

function adoptLayout() {
    changeHeader('О фильме');
    if (window.innerWidth < 768) {
        document.getElementsByClassName('backbutton')[1].remove();
    }
    if (document.getElementsByClassName('backbutton').length < 1) {
        document.querySelector('main').before(buildBackButton());
    }
    if (isMobile === (window.innerWidth < 768)) {
        window.addEventListener('resize', adoptLayout, { once: true });
    }
}

function showFilmInfo(film) {
    const filmHeader = document.getElementsByClassName('film')[0];
    const filmPoster = buildFilmPreview(film);
    filmPoster.classList.add('film-poster');
    filmHeader.append(filmPoster);
    filmHeader.innerHTML += `
        <div class="film-info">
            <h1>${film.name}</h1>
            <div class="card-rate">Кинопоиск - ${film.userRatings.kinopoisk}</div>
            <div class="film-description">${film.description}</div>
        </div>
    `;
}

function getFilmId() {
    const query = window.location.search;
    const params = new URLSearchParams(query);
    return params.get('film_id');
}

main();

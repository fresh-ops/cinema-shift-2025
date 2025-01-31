async function showFilms() {
    const films = await getTodayFilms();
    const poster = document.querySelector('#poster');

    for (let film of Array.from(films)) {
        poster.append(buildFilmCard(film));
    }
}

showFilms();
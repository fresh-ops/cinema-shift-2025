const isMobile = window.innerWidth < 768;

function main() {
    changeHeader();
    window.addEventListener('resize', adoptLayout, { once: true });
    showFilms();
}

function adoptLayout() {
    changeHeader();
    if (isMobile === (window.innerWidth < 768)) {
        window.addEventListener('resize', adoptLayout, { once: true });
    }
}

async function showFilms() {
    const films = await getTodayFilms();
    const poster = document.querySelector('#poster');

    for (let film of Array.from(films)) {
        poster.append(buildFilmCard(film));
    }
}

main();

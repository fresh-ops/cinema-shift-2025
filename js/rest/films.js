const API_URL = 'https://shift-intensive.ru/api';

async function getTodayFilms() {
    const response = await fetch(API_URL + '/cinema/today');
    const data = await response.json();
    return data['films'];
}

async function getFilmById(id) {
    const response = await fetch(API_URL + '/cinema/film/' + id);
    const data = await response.json();
    return data['film'];
}
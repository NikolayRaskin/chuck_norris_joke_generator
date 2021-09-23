export const BASE_URL = 'https://api.chucknorris.io';

export const _GET_JOKE = `${BASE_URL}/jokes/random`;
export const _GET_JOKE_BY_ID = (id) => `${BASE_URL}/jokes/${id}`;
export const _GET_CATEGORIES = `${BASE_URL}/jokes/categories`;
export const _SEARCH_JOKE = `${BASE_URL}/jokes/search`;
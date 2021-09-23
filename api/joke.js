import {
    _GET_JOKE,
    _GET_CATEGORIES,
    _SEARCH_JOKE,
    _GET_JOKE_BY_ID,
} from '@/api/endpoints';
import { parseParamsObject, isEmpty } from '@/helper';

export async function fetchRandomJoke($axios, params = {}) {
    try {
        let paramsString = '';
        if (!isEmpty(params)) {
            paramsString = parseParamsObject(params);
        }

        return await $axios.$get(_GET_JOKE + paramsString);
    } catch (error) {
        return Promise.reject(error);
    }
}
export async function fetchJokeById($axios, params = {}) {
    try {
        if (!params.id) return Promise.reject(new Error('Joke id is missing'));
        let paramsString = '';

        if (!isEmpty(params)) {
            paramsString = parseParamsObject(params);
        }

        return await $axios.$get(_GET_JOKE_BY_ID(params.id) + paramsString);
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function fetchCategories($axios, params = {}) {
    try {
        let paramsString = '';
        let url = _GET_CATEGORIES;
        if (!isEmpty(params)) {
            if (params.id) url += `/${params.id}`;
            paramsString = parseParamsObject(params);
        }
        return await $axios.$get(url + paramsString);
    } catch (error) {
        return Promise.reject(error);
    }
}
export async function searchJoke($axios, params = {}) {
    try {
        let paramsString = '';
        if (!isEmpty(params)) {
            paramsString = parseParamsObject(params);
        }
        return await $axios.$get(_SEARCH_JOKE + paramsString);
    } catch (error) {
        return Promise.reject(error);
    }
}
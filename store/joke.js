import {
    fetchRandomJoke,
    fetchCategories,
    searchJoke,
    fetchJokeById,
} from '@/api/joke';

export const state = () => ({
    joke: {},
    jokes: [],
    categories: [],
});

export const mutations = {
    SET_JOKE(state, args) {
        state.joke = args.content;
    },
    SET_JOKES(state, args) {
        state.jokes = args.content;
    },
    SET_CATEGORIES(state, args) {
        state.categories = args.content;
    },
};

export const getters = {};

export const actions = {
    async fetchRandomJoke({ commit }, args) {
        try {
            const result = await fetchRandomJoke(args.$axios, args.params);
            commit('SET_JOKE', { content: result });
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    async fetchJokeById({ commit }, args) {
        try {
            const result = await fetchJokeById(args.$axios, args.params);
            commit('SET_JOKE', { content: result });
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    async fetchCategories({ commit }, args) {
        try {
            const result = await fetchCategories(args.$axios, args.params);
            commit('SET_CATEGORIES', { content: result });
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    async searchJoke({ commit }, args) {
        try {
            const result = await searchJoke(args.$axios, args.params);
            commit('SET_JOKES', { content: result });
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }
    },
};
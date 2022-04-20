import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index.js";

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_NEWS', response.data)
                // this.users = response.data
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(({ data }) => {
                console.log(data);
                commit('SET_ASK', data)
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({ data }) => {
                console.log(data);
                commit('SET_JOBS', data)
            })
            .catch(error => {
                console.log(error);
            })
    }
}
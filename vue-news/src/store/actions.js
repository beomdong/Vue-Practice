import {
    // fetchNewsList,
    // fetchJobsList,
    // fetchAskList,
    fetchUserInfo,
    fetchCommentItem,
    fetchList
} from "../api/index.js";

export default {
    // FETCH_NEWS(context) {
    //     fetchNewsList()
    //         .then(response => {
    //             context.commit('SET_NEWS', response.data)
    //             return response
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // },
    // FETCH_ASK({ commit }) {
    //     fetchAskList()
    //         .then(({ data }) => {
    //             console.log(data)
    //             commit('SET_ASK', data)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // },
    // FETCH_JOBS({ commit }) {
    //     fetchJobsList()
    //         .then(({ data }) => {
    //             console.log(data)
    //             commit('SET_JOBS', data)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // },
    FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
            .then(({ data }) => {
                commit('SET_USER', data)
            })
            .catch(error => {
                console.log(error)
            })
    },
    FETCH_ITEM({ commit }, id) {
        return fetchCommentItem(id)
            .then(({ data }) => {
                commit('SET_ITEM', data)
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
            .then(({ data }) => commit('SET_LIST', data))
            .catch(error => console.log(error))

    }
}
import axios from 'axios'

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// function fetchNewsList() {
//     // return axios.get(config.baseUrl + "news/1.json")
//     return axios.get(`${config.baseUrl}news/1.json`)
// }

// function fetchAskList() {
//     return axios.get(`${config.baseUrl}ask/1.json`)
// }

// function fetchJobsList() {
//     return axios.get(`${config.baseUrl}jobs/1.json`)
// }

async function fetchList(pageName) {
    try {
        return await axios.get(`${config.baseUrl}${pageName}/1.json`)
    } catch (error) {
        console.log(error);
    }

}

async function fetchUserInfo(username) {
    try {
        return await axios.get(`${config.baseUrl}user/${username}.json`)
    } catch (error) {
        console.log(error);
    }
}
async function fetchCommentItem(id) {
    try {
        return await axios.get(`${config.baseUrl}item/${id}.json`)
    } catch (error) {
        console.log(error);
    }
}


export {
    // fetchNewsList,
    // fetchAskList,
    // fetchJobsList,
    fetchUserInfo,
    fetchCommentItem,
    fetchList
}


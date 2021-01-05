import axios from 'axios'
const url = "https://randomuser.me/api"
//fetch random user data
const api = {
    getUser() {
        return axios.get(url)
    }
}

export default api
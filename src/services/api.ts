import axios from 'axios'

//variavel para facilitar o acesso a api
const api = axios.create({
    baseURL:  "https://api.github.com/"
})

export default api;
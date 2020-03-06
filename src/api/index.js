import Axios from 'axios';

const api = Axios.create({
    baseURL: "https://meu-compromisso-backend.herokuapp.com"
})
export default api;
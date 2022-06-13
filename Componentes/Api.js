import axios from "axios";

const APIMoedas = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/',
});

export default APIMoedas;
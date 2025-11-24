import axios from 'axios';

const BASE_URL = '/api/Colores';

class ColoresService {

    getAllColores() {
        return axios.get(BASE_URL);
    }

    getColoresById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createColores(colores) {
        return axios.post(BASE_URL, colores);
    }

    updateColores(id, colores) {
        return axios.put(`${BASE_URL}/${id}`, colores);
    }

    deleteColores(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new ColoresService();
import axios from 'axios';

const BASE_URL = '/api/Colaboraciones';

class ColaboracionesService {

    getAllColaboraciones() {
        return axios.get(BASE_URL);
    }

    getColaboracionesById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createColaboraciones(colab) {
        return axios.post(BASE_URL, colab);
    }

    updateColaboraciones(id, colab) {
        return axios.put(`${BASE_URL}/${id}`, colab);
    }

    deleteColaboraciones(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new ColaboracionesService();
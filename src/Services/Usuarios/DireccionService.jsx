import axios from 'axios';

const BASE_URL = '/api/Direccion';

class DireccionService {

    getAllDireccion() {
        return axios.get(BASE_URL);
    }

    getDireccionById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createDireccion(dire) {
        return axios.post(BASE_URL, dire);
    }

    updateDireccion(id, dire) {
        return axios.put(`${BASE_URL}/${id}`, dire);
    }

    deleteDireccion(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new DireccionService();
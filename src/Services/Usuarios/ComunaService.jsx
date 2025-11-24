import axios from 'axios';

const BASE_URL = '/api/Comuna';

class ComunaService {

    getAllComuna() {
        return axios.get(BASE_URL);
    }

    getComunaById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createComuna(com) {
        return axios.post(BASE_URL, com);
    }

    updateComuna(id, com) {
        return axios.put(`${BASE_URL}/${id}`, com);
    }

    deleteComuna(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new ComunaService();
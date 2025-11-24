import axios from 'axios';

const BASE_URL = '/api/Material';

class MaterialService {

    getAllMaterial() {
        return axios.get(BASE_URL);
    }

    getMaterialById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createMaterial(mat) {
        return axios.post(BASE_URL, mat);
    }

    updateMaterial(id, mat) {
        return axios.put(`${BASE_URL}/${id}`, mat);
    }

    deleteMaterial(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new MaterialService();
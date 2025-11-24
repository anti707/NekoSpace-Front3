import axios from 'axios';

/**
 * Instancia central de axios para el proyecto
 * Cambios realizados:
 * - CORRECCIÓN: `baseUrl` -> `baseURL` (axios usa `baseURL`).
 * - Uso de la variable de entorno `VITE_API_BASE_URL` (recomendado) con fallback.
 * - Protección en el interceptor para evitar fallos si `localStorage` o `headers` no existen.
 * - Comentarios indicativos para saber qué se cambió.
 *
 * Nota: algunas partes del proyecto usan URLs hardcodeadas; recomiendo migrarlas
 * para reutilizar esta instancia `api` y así centralizar la configuración.
 */

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || 'https://nekospace-1.onrender.com/api',
    // Si el backend usa cookies httpOnly para auth, cambiar a true y configurar CORS/credentials en backend
    withCredentials: false,
});

// Interceptor para inyectar Authorization header si existe token en localStorage
api.interceptors.request.use(
    (config) => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers = config.headers || {};
                config.headers['Authorization'] = `Bearer ${token}`;
            }
        } catch (e) {
            // localStorage no disponible en ciertos entornos; ignorar y continuar
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
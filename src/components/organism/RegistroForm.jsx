import React, { useState } from "react";
import FormF from "../molecules/FormF";
import Button from "../atoms/Button";
import { AuthC } from "../../context/AuthC";
import api from "../../Service/api.jsx";

function RegistroForm(){
    const [FormData, setFormData] = useState({
        nombre:"",
        correo:"",
        numero:"",
        password:"",
        confirmPassword:""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prevData => ({ ...prevData, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (FormData.password !== FormData.confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        try {
            const response = await api.post('/auth/register', {
                nombre: FormData.nombre,
                correo: FormData.correo,
                numero: FormData.numero,
                password: FormData.password
            });
            console.log('Registro exitoso:', response.data);
            setFormData({
                nombre:"",
                correo:"",
                numero:"",
                password:"",
                confirmPassword:""
            });
        } catch (error) {
            setError('Error en el registro. Inténtalo de nuevo.');
            console.error('Error en el registro:', error);
        } finally {
            setLoading(false);
        }
    };
    


    return(
        <form onSubmit={handleSubmit} className="formC">

            <FormF label="nombre" id="nombre" type="text" placeholder="nombre" value={FormData.nombre} onChange={handleChange} name="nombre"/>
            <FormF label="correo" id="correo" type="email" placeholder="ejemplo@gmail.com" value={FormData.correo} onChange={handleChange} name="correo"/>
            <FormF label="numero" id="numero" type="tel" placeholder="000-000-0000" value={FormData.numero} onChange={handleChange} name="numero"/>
            <FormF label="contraseña" id="contraseña" type="password" placeholder="contraseña" value={FormData.password} onChange={handleChange} name="contraseña" requiered/>
            <FormF label="confirmarContraseña" id="confirmarContraseña" type="password" placeholder="confirmar Contraseña" value={FormData.confirmPassword} onChange={handleChange} name="confirmarContraseña"/>

            <Button type="submit">Enviar</Button>
        </form>

    );
}
export default RegistroForm;
import React, { useState } from "react";
import FormF from "../molecules/FormF";
import Button from "../atoms/Button";
import api from "../Service/api.jsx";

function ContactoForm(){
    const [FormData, setFormData] = useState({
        nombre:"",
        correo:"",
        numero:"",
        tipoMensaje:"",
        mensaje:""
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleCgange = (e) => {
        const {name, value} = e.target
        setFormData(prevData => ({ ...prevData, [name]: value}));
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);
        setLoading(true);

        try {
            const response = await api.post('/contacto', FormData);
            console.log('Formulario enviado con exito:', response.data);
            setSuccess(true);
            setFormData({
                nombre:"",
                correo:"",
                numero:"",
                tipoMensaje:"",
                mensaje:""
            });
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setError('Error al enviar el formulario. Por favor, intente de nuevo.');
        } finally {
            setLoading(false);
        }

    };


    return(
        <form onSubmit={handlesubmit} className="formC">

            <FormF label="nombre" id="nombre" type="text" placeholder="nombre" value={FormData.nombre} onChange={handleCgange} name="nombre"/>
            <FormF label="correo" id="correo" type="email" placeholder="ejemplo@gmail.com" value={FormData.correo} onChange={handleCgange} name="correo"/>
            <FormF label="numero" id="numero" type="tel" placeholder="000-000-0000" value={FormData.numero} onChange={handleCgange} name="numero"/>
            <FormF label="tipo de mensaje" id="tipoMensaje" type="text" placeholder="consulta, sugerencia, reclamo" value={FormData.tipoMensaje} onChange={handleCgange} name="tipoMensaje"/>
            <FormF label="mensaje" id="mensaje" type="textarea" placeholder="deja aqui tu mensaje" value={FormData.mensaje} onChange={handleCgange} name="mensaje"/>

            <Button type="submit">Enviar</Button>
        </form>

    );
}

export default ContactoForm;
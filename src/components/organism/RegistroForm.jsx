import React, { useState } from "react";
import FormF from "../molecules/FormF";
import Button from "../atoms/Button";

function RegistroForm(){
    const [FormData, setFormData] = useState({
        nombre:"",
        correo:"",
        numero:"",
        contraseña:"",
        confirmarContraseña:""
    });

    const handleCgange = (e) => {
        const {name, value} = e.target
        setFormData(prevData => ({ ...prevData, [name]: value}));
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log("datos del formulario:", FormData);
        setFormData({nombre:"", correo:"",numero:"",contraseña:"", confirmarContraseña:""});

    };


    return(
        <form onSubmit={handlesubmit} className="formC">

            <FormF label="nombre" id="nombre" type="text" placeholder="nombre" value={FormData.nombre} onChange={handleCgange} name="nombre"/>
            <FormF label="correo" id="correo" type="email" placeholder="ejemplo@gmail.com" value={FormData.correo} onChange={handleCgange} name="correo"/>
            <FormF label="numero" id="numero" type="tel" placeholder="000-000-0000" value={FormData.numero} onChange={handleCgange} name="numero"/>
            <FormF label="contraseña" id="contraseña" type="contraseña" placeholder="contraseña" value={FormData.contraseña} onChange={handleCgange} name="contraseña"/>
            <FormF label="confirmarContraseña" id="confirmarContraseña" type="confiContraseña" placeholder="confirmar Contraseña" value={FormData.mensaje} onChange={handleCgange} name="confirmarContraseña"/>

            <Button type="submit">Enviar</Button>
        </form>

    );
}

export default RegistroForm;
import React, { useState } from "react";
import FormF from "../molecules/FormF";
import Button from "../atoms/Button";

function ContactoForm(){
    const [FormData, setFormData] = useState({
        nombre:"",
        correo:"",
        mensaje:""
    });

    const handleCgange = (e) => {
        const {name, value} = e.target
        setFormData(prevData => ({ ...prevData, [name]: value}));
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log("datos del formulario:", FormData);
        setFormData({nombre:"", correo:"", mensaje:""});

    };


    return(
        <form onSubmit={handlesubmit} className="formC">

            <FormF label="nombre" id="nombre" type="text" placeholder="nombre" value={FormData.nombre} onChange={handleCgange} name="nombre"/>
            <FormF label="correo" id="correo" type="email" placeholder="ejemplo@gmail.com" value={FormData.correo} onChange={handleCgange} name="correo"/>
            <FormF label="mensaje" id="mensaje" type="textarea" placeholder="deja aqui tu mensaje" value={FormData.mensaje} onChange={handleCgange} name="mensaje"/>

            <Button type="submit">Enviar</Button>
        </form>

    );
}

export default ContactoForm;
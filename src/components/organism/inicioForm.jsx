import React, { useState } from "react";
import FormF from "../molecules/FormF";
import Button from "../atoms/Button";
import ButtonL from "../molecules/ButtonL";

function InicioForm(){
  const [FormData, setFormData] = useState({
        correo:"",
        contraseña:""
    });

    const handleCgange = (e) => {
        const {name, value} = e.target
        setFormData(prevData => ({ ...prevData, [name]: value}));
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log("datos del formulario:", FormData);
        setFormData({correo:"",contraseña:""});

    };


    return(
        <form onSubmit={handlesubmit} className="formC">

            <FormF label="correo" id="correo" type="email" placeholder="ejemplo@gmail.com" value={FormData.correo} onChange={handleCgange} name="correo"/>
            <FormF label="contraseña" id="contraseña" type="contraseña" placeholder="contraseña" value={FormData.contraseña} onChange={handleCgange} name="contraseña"/>

            <Button type="submit">Ingresar</Button>
            <ButtonL to="/login">Registrarse</ButtonL>
        </form>

    );
}

export default InicioForm;
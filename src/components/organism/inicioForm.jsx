import React, { useState } from "react";
import FormF from "../molecules/FormF";
import Button from "../atoms/Button";
import ButtonL from "../molecules/ButtonL";
import { useAuth } from "../../context/AuthC";

function InicioForm(){
  const [FormData, setFormData] = useState({
        correo:"",
        contraseña:""
    });

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prevData => ({ ...prevData, [name]: value}));
    };

    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {correo, contraseña} = FormData;
        try {
          await login(correo, contraseña);
          setFormData({ correo: "", contraseña: "" });
        } catch (error) {
          console.error(error.message);
        }   

    };

    return(
        <form onSubmit={handleSubmit} className="formC">

            <FormF label="correo" id="correo" type="email" placeholder="ejemplo@gmail.com" value={FormData.correo} onChange={handleCgange} name="correo"/>
            <FormF label="contraseña" id="contraseña" type="password" placeholder="contraseña" value={FormData.contraseña} onChange={handleCgange} name="contraseña"/>

            <Button type="submit">Ingresar</Button>
            <ButtonL to="/create-user">Registrarse</ButtonL>
        </form>

    );
}

export default InicioForm;
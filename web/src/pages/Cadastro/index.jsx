import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

const Cadastro = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
   });

   function handleInputChange(event) {
      const { name, value } = event.target;

      setFormData({ ...formData, [name]: value });
   }

   async function submitForm(event) {
      event.preventDefault();
      await api.post("users", formData);
   }

   return (
      <div className="cadastro">
         <form onSubmit={submitForm}>
            <h1>Cadastro de usuários</h1>
            <input
               type="text"
               name="name"
               id="name"
               placeholder="nome"
               onChange={handleInputChange}
            />
            <input
               type="email"
               name="email"
               id="email"
               placeholder="email"
               onChange={handleInputChange}
            />

            <button type="submit">Cadastrar</button>
         </form>
         <Link className="link" to="/">
            Voltar
         </Link>
      </div>
   );
};

export default Cadastro;

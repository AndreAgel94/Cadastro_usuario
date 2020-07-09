import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import UserComponent from "../../components/userComponent";
import "./styles.css";

const Listar = () => {
   const [users, setUsers] = useState([]);
   const [name, setName] = useState("");

   async function fetchData() {
      const response = await api.get(`users/name/${name}`);
      console.log(response.data);
      setUsers(response.data);
   }

   return (
      <div className="listar">
         <div className="title">
            <h1>Filtrar por nome</h1>
         </div>

         <div className="menu">
            <form>
               <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="nome"
                  onChange={(e) => setName(e.target.value)}
               />
               <button type="button" onClick={fetchData}>
                  Listar
               </button>
            </form>
            <Link className="toHome" to="/">
               Voltar
            </Link>
         </div>

         {users.map((user) => (
            <UserComponent key={user.id} name={user.name} email={user.email} />
         ))}
      </div>
   );
};

export default Listar;

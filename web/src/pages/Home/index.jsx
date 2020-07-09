import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import UserComponent from "../../components/userComponent";
import "./styles.css";

const Home = () => {
   const [users, setUsers] = useState([]);

   async function fetchData() {
      const response = await api.get("users");
      setUsers(response.data);
   }

   return (
      <div className="homePage">
         <div className="title">
            <h1>Sistema de cadastro</h1>
         </div>
         <div className="menu">
            <div className="byName">
               <Link to="/listar">
                  <button type="button">Pesquisar por nome</button>
               </Link>
            </div>
            <div>
               <Link to="/cadastro">
                  <button type="button">Cadastrar Usuários</button>
               </Link>
            </div>
            <button type="button" onClick={fetchData}>
               Listar usuários
            </button>
         </div>

         {users.map((user) => (
            <UserComponent key={user.id} name={user.name} email={user.email} />
         ))}
      </div>
   );
};

export default Home;

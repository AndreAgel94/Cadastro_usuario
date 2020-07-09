import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Listar from "./pages/Listar";

const Routes = () => {
   return (
      <Switch>
         <Route component={Home} path="/" exact />
         <Route component={Cadastro} path="/cadastro" />
         <Route component={Listar} path="/listar" />
      </Switch>
   );
};

export default Routes;

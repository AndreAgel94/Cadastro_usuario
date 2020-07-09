import React from "react";
import "./styles.css";

const userComponent = (props) => {
   return (
      <div className="card">
         <div className="data">
            <h3>
               <span>Nome: {props.name}</span>
               <br />
               <span>Email: {props.email}</span>
            </h3>
         </div>
      </div>
   );
};

export default userComponent;

import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {data} = useContext(ContextGlobal)
  console.log("data", data)

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {data.map((dentist) => {
          return (
          <Card key={dentist.id} name={dentist.name} id={dentist.id} username={dentist.username}/>
          )
        })}
      </div>
    </>
  );
};

export default Favs;

import React from 'react'
import { ContextGlobal } from "../Components/utils/global.context";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { theme } = useContext(ContextGlobal);
  const [dentist, setDentist] = useState(undefined);
  const { id } = useParams();
  const isDarkMode = theme === "dark" || false;

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)  //URL por id de dentista
      .then((res) => res.json())
      .then((data) => {
        setDentist(data);
       })}, [id]);
  return (
    <>
      <h1> Dentist Information {dentist?.name} </h1>
      {dentist ? (
        <section>

          <div className="detailDentist">

            <div className={`card ${isDarkMode ? "dark" : "light"}`}>

              <div>
                <img src="/images/doctor.jpg" alt="dentist placeholder" width="145 px"/>
              </div>

              <div>
                <ul>
                  <li>Name: {dentist.name}</li>
                  <li>Email: {dentist.email}</li>
                  <li>Phone: {dentist.phone}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
export default Detail;
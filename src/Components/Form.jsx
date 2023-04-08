import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [send, setSend] = useState(false);
  const [errorSelect, setErrorSelect] = useState("");

  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };
  const onChangeUserMail = (event) => {
    setUserMail(event.target.value);
  };

  const validUserName = (userName) => {

    const nameLength = userName.trim();

    if (nameLength.length >= 5) {
      return true;
    } else {
      setErrorSelect("Por favor verifique su información nuevamente");
      return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isNameValid = validUserName(userName);

    if (isNameValid) {
      setSend(true);
      setErrorSelect("");
    }
  }

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User name"
          value={userName}
          onChange={onChangeUserName}
          required
        />

        <input
          type="email"
          placeholder="User email"
          value={userMail}
          onChange={onChangeUserMail}
          required
        />
        <input type="submit" value="Send" />
      </form>
      <div className="error">{errorSelect}</div>

      {send && (
        `Gracias ${userName}, te contactaremos cuanto antes via mail`
      )}
    </div>
  );
};

export default Form;

import React, { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";
const HomePage = ({ eName }) => {
  const [name, setName] = useState("");
  const [isName, setIsName] = useState(false);

  useEffect(() => {
    eName(isName);
  });
  const onHandleSubmit = (e) => {
    e.preventDefault();

    console.log(name);

    if (name === "terdorian") {
      setIsName(true);
    }
  };

  if (isName === true) {
    return <Navigate to="SecondPage" />;
  } else {
    return (
      <div>
        <h1>Ola, estamos aqui</h1>
        <h2>Estamos ai</h2>
        <form onSubmit={onHandleSubmit}>
          <label htmlFor="name"></label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            value={name}
          />
          <button type="submit">enviar</button>
        </form>
      </div>
    );
  }
};

export default HomePage;

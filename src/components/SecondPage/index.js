import React, { useState } from "react";
import "./style.css";

const SecondPage = () => {
  const [atr, setAtr] = useState({ nome: "", email: "", idade: "" });
  const [vet, setVet] = useState([{ key: 0, nome: "", email: "", idade: "" }]);

  const onHandleSubmit = (e) => {
    e.preventDefault();
  };

  const onPress = () => {
    setVet([
      ...vet,
      { key: vet.length, nome: atr.nome, email: atr.email, idade: atr.idade },
    ]);
  };

  const execute = () => {
    const v = vet.map((value) => {
      return (
        <tr key={value.key}>
          <td>{value.nome}</td>
          <td>{value.email}</td>
          <td>{value.idade}</td>
        </tr>
      );
    });

    return v;
  };

  return (
    <div className="pai">
      <form onSubmit={onHandleSubmit}>
        <label>Input de registros na tabela</label>
        <h2>Nome</h2>
        <input
          onChange={(event) =>
            setAtr({
              nome: event.target.value,
              email: atr.email,
              idade: atr.idade,
            })
          }
          type="text"
          name="name"
          value={atr.nome}
          id="name"
        />
        <h2>Email</h2>
        <input
          onChange={(event) =>
            setAtr({
              nome: atr.nome,
              email: event.target.value,
              idade: atr.idade,
            })
          }
          type="email"
          name="email"
          value={atr.email}
          id="email"
        />
        <h2>idade</h2>
        <input
          onChange={(event) =>
            setAtr({
              nome: atr.nome,
              email: atr.email,
              idade: event.target.value,
            })
          }
          type="number"
          name="idade"
          value={atr.idade}
          id="idade"
        />
        <button type="submit" onClick={onPress}>
          cadastrar
        </button>
      </form>

      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>E-mail</td>
            <td>Age</td>
          </tr>
          {execute()}
        </tbody>
      </table>
    </div>
  );
};

export default SecondPage;

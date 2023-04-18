import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { container, title, input, label, button } from './styles';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "gabriel" && password === "ultracar") {
      navigate("/carros", { state: { username: username } });
    } else {
      setErrorMessage("Cliente não encontrado ou senha incorreta.");
      setUsername("");
      setPassword("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (username === "gabriel" && password === "ultracar") {
        navigate("/carros", { state: { username: username } });
      } else {
        setErrorMessage("Cliente não encontrado ou senha incorreta.");
        setUsername("");
        setPassword("");
      }
    }
  };

  return (
    <div style={container}>
      <h1 style={title}>Olá! Efetue seu login.</h1>
      <label htmlFor="username" style={label}>
        Nome do cliente:
        <input
          type="text"
          id="username"
          style={input}
          value={username}
          placeHolder="Nome: gabriel"
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label htmlFor="password" style={label}>
        Senha do cliente:
        <input
          type="password"
          id="password"
          style={input}
          value={password}
          placeHolder="Senha: ultracar"
          onKeyPress={handleKeyPress}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {errorMessage && <p>{errorMessage}</p>}
      <button style={button} onClick={handleLogin}>
        Entrar
      </button>
    </div>
  );
};

export default Login;

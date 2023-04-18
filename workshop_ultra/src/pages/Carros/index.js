import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';
import { container, title, input, label, qrcode, button, secondaryColor } from './styles';
import { useLocation } from "react-router-dom";

const Carros = ({ cliente }) => {
  const [carroSelecionado, setCarroSelecionado] = useState('');
  const [confirmarDisabled, setConfirmarDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { username } = location.state;


  const handleChange = (e) => {
    setCarroSelecionado(e.target.value);
    setConfirmarDisabled(false);
  }

  const handleConfirmar = () => {
    navigate("/funcionario", {state: {username: username, carroSelecionado: carroSelecionado}})
  }

  const handleLogout = () => {
    navigate({
      pathname: '/login',
    });
  };

  return (
    <div style={container}>
      <h1 style={title}>Selecione o carro do cliente</h1>
      <h2>Cliente: {username}</h2>
      <label style={label}>Selecione o carro   
      <select style={input} value={carroSelecionado} onChange={handleChange}>
      <option value="">Nenhum carro selecionado</option>
        <option value="ABC123" >ABC123</option>
        <option value="DEF456">DEF456</option>
        <option value="GHI789">GHI789</option>
      </select>
      </label>
      {carroSelecionado && (
        <QRCode value={carroSelecionado} style={qrcode} />
      )}
      <button style={{ ...button, backgroundColor: secondaryColor }} onClick={handleConfirmar} disabled={confirmarDisabled}>Confirmar</button>
      <button style={button} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Carros;


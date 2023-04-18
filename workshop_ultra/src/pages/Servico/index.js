import React, { useState, useEffect } from 'react';
import { container, title, button, label, input } from './styles';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Servico() {
  const [inicioServico, setInicioServico] = useState(new Date());
  const [fimServico, setFimServico] = useState(null);
  const [servicoFinalizado, setServicoFinalizado] = useState(false);
  const location = useLocation();
  const {
          username,
          carroSelecionado,
          colaboradorSelecionado,
          pecasSelecionadas,
          total,
        }
           = location.state;

  const navigate = useNavigate();

  useEffect(() => {
    setInicioServico(new Date());
  }, []);

  const handleFimServico = () => {
    setFimServico(new Date());
    setServicoFinalizado(true);
  };

  const handleNovoServico = () => {
    navigate({
      pathname: '/carros',
    });
  };

  const handleLogout = () => {
    navigate({
      pathname: '/login',
    });
  };

  const formatTime = (time) => {
    const hour = time.getHours().toString().padStart(2, '0');
    const minute = time.getMinutes().toString().padStart(2, '0');
    const second = time.getSeconds().toString().padStart(2, '0');
    return `${hour}:${minute}:${second}`;
  };

  return (
    <div style={container}>
      <h1 style={title}>Serviço</h1>
      <h3 style={input}>Cliente: {username}</h3>
      <h3 style={input}>Carro selecionado: {carroSelecionado}</h3>
      <h3 style={input}>Colaborador que está realizando o serviço: {colaboradorSelecionado}</h3>
      <h3 style={input}>Peças utilizadas no serviço: {pecasSelecionadas}</h3>
      <h3 style={input}>Valor total do serviço: R$ {total},00</h3>
      <p style={label}>Horário de início de serviço: {formatTime(inicioServico)}</p>
      {fimServico && (
        <p>Horário de fim de serviço: {formatTime(fimServico)}</p>
      )}
      {!servicoFinalizado && (
        <button style={button} onClick={handleFimServico}>Finalizar Serviço</button>
      )}
      {servicoFinalizado && (
        <>
          <button style={button} onClick={handleNovoServico}>Novo Serviço</button>
          <button style={button} onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default Servico;

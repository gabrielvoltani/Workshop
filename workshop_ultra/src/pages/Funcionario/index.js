import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { container, title, label, button, secondaryColor, input, checkbox, forTotal} from './styles';

const Funcionario = () => {
  const location = useLocation();
  const { username, carroSelecionado} = location.state;
  const navigate = useNavigate();
  const [colaboradorSelecionado, setColaboradorSelecionado] = useState('');
  const [pecasSelecionadas, setPecasSelecionadas] = useState([]);
  const [confirmarDisabled, setConfirmarDisabled] = useState(true);

  const colaboradores = ['João', 'Maria', 'José'];

  const handleChangeColaborador = (e) => {
    setColaboradorSelecionado(e.target.value);
    setConfirmarDisabled(false);
  }

  const pecas = [
    { nome: 'Filtro de óleo', preco: 50 },
    { nome: 'Vela de ignição', preco: 80 },
    { nome: 'Amortecedor', preco: 120 },
    { nome: 'Pastilha de freio', preco: 150 },
    { nome: 'Volante', preco: 200 },
    { nome: 'Embreagem', preco: 250 },
    { nome: 'Bateria', preco: 300 },
    { nome: 'Radiador', preco: 350 },
  ];

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setPecasSelecionadas([...pecasSelecionadas, name]);
    } else {
      setPecasSelecionadas(pecasSelecionadas.filter((peca) => peca !== name));
    }
  };

  const handleConfirmar = () => {
    navigate("/servico", {state:
      {username: username,
      carroSelecionado: carroSelecionado,
      colaboradorSelecionado: colaboradorSelecionado,
      pecasSelecionadas: pecasSelecionadas,
      total: total}})
  }

  const handleLogout = () => {
    navigate({
      pathname: '/login',
    });
  };

  const total = pecasSelecionadas.reduce((sum, peca) => {
    const item = pecas.find((item) => item.nome === peca);
    return sum + item.preco;
  }, 0);

  return (
    <div style={container}>
      <h1 style={title}>Selecione o colaborador e as peças</h1>
      <h2>Cliente: {username}</h2>
      <h2>Carro selecionado: {carroSelecionado}</h2>
      <label style={label}>
        Selecione o colaborador:
        <select style={input} value={colaboradorSelecionado} onChange={handleChangeColaborador}>
          <option value="">Selecione um colaborador</option>
          {colaboradores.map((colaborador, index) => (
            <option key={index} value={colaborador}>{colaborador}</option>
          ))}
        </select>
      </label>
      <h2 style={label}>Selecione as peças:</h2>
      <div >
        {pecas.map((peca, index) => (
          <div key={index}>
            <input
              style={checkbox}
              type="checkbox"
              name={peca.nome}
              checked={pecasSelecionadas.includes(peca.nome)}
              onChange={handleChange}
            />
            <label style={label}>{peca.nome} - R$ {peca.preco}</label>
          </div>
        ))}
      </div>
      <div style={forTotal}> 
        <label >Total: R$ {total}</label>
      </div>
      <button style={{ ...button, backgroundColor: secondaryColor }} onClick={handleConfirmar} disabled={confirmarDisabled}>Confirmar</button>
      <button style={button} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Funcionario;
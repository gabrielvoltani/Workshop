import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Carros from "../pages/Carros";
import Funcionario from "../pages/Funcionario";
import Servico from "../pages/Servico";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/carros" element={<Carros />} />
          <Route exact path="/funcionario" element={<Funcionario />} />
          <Route exact path="/servico" element={<Servico />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
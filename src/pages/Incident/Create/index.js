import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

import logoImg from "../../../assets/logo.svg";

import './styles.css';

function createIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>
          
          <h1>Cadastrar novo caso</h1>
          <p>Decreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size="16" color="#E02041"/>
            Voltar para home
          </Link>
        </section>

        <form>
          <input placeholder="Titulo do caso"/>
          <textarea placeholder="Descrição"/>
          <input placeholder="Valor em reais"/>
          
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default createIncident;
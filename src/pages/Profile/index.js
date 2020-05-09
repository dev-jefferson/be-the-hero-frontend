import React from 'react';

import { Link } from 'react-router-dom';
import { FiPower } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import './styles.css';

function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero"/>
        <span>Bem vindo, GAC</span>

        <Link className="button" to="/incidens/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size="18" color="#E02041"/>
        </button>
      </header>
    </div>
  );
}

export default Profile;
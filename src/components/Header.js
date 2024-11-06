// src/components/Header.js
import React from 'react';
import './Header.css';  // Estilo do cabeçalho
import logo from '../img/logo.png'; // Certifique-se de que a imagem do logo esteja na pasta correta

const Header = () => {
    return (
      <header className="header">
        <div className="header-content">
          <img src={logo} alt="Logo Receitas Literárias" className="header-logo" />
          <h1 className="header-title">Receitas Literárias</h1>
        </div>
      </header>
    );
  };

export default Header;

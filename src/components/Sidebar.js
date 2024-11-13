import React, { useState } from 'react';
import '../index.css'; // Certifique-se de ter um arquivo CSS específico para o Sidebar

const Sidebar = ({ enfermidades, selecionarEnfermidade }) => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const handleSelectEnfermidade = (enfermidade) => {
    selecionarEnfermidade(enfermidade);
    setMenuAberto(false); // Fecha o menu após selecionar uma enfermidade
  };

  return (
    <div>
      {/* Botão de hambúrguer para telas menores */}
      <button className="hamburguer-btn" onClick={toggleMenu}>
        ☰ Enfermidades
      </button>

      {/* Menu lateral de enfermidades */}
      <div className={`sidebar ${menuAberto ? 'open' : ''}`}>
        <h2>Enfermidades</h2>
        <ul>
          {enfermidades.map((enfermidade, index) => (
            <li key={index} onClick={() => handleSelectEnfermidade(enfermidade)}>
              {enfermidade}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;

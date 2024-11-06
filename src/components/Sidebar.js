// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({ enfermidades, selecionarEnfermidade }) => {
  return (
    <div className="sidebar">
      <h2>Enfermidades</h2>
      <ul>
        {enfermidades.map((enfermidade, index) => (
          <li key={index} onClick={() => selecionarEnfermidade(enfermidade)}>
            {enfermidade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;


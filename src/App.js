// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Receita from './components/Receita';
import './index.css';  // Importando o CSS global
import Header from './components/Header';
import './components/Header.css';  // Importando o CSS do Header

const App = () => {
  const [enfermidadeSelecionada, setEnfermidadeSelecionada] = useState(null);

  const receitas = {
    "Ansiedade": {
      descricao: "Viver com ansiedade é viver com uma ...",
      prescricao: "Retrato de uma Senhora de Henry James - 10 a 20 páginas por dia",
    },
    "Depressão": {
      descricao: "Para momentos de tristeza profunda...",
      prescricao: "As Pequenas Virtudes de Natalia Ginzburg - 5 a 10 páginas ao dia",
    },
    // Adicione outras enfermidades e receitas aqui
  };

  return (
    <div className="app">
      <Header />  {/* Cabeçalho */}
      <div className="main-content">  {/* Flex container para Sidebar e Receita */}
        <Sidebar 
          enfermidades={Object.keys(receitas)} 
          selecionarEnfermidade={setEnfermidadeSelecionada} 
        />
        <div className="receita-container">
          <Receita 
            enfermidade={enfermidadeSelecionada} 
            receita={receitas[enfermidadeSelecionada]} 
          />
        </div>
      </div>
    </div>
  );
};

export default App;

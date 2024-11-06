// src/components/Receita.js
import React, { useState, useEffect } from 'react';

const Receita = ({ enfermidade, receita }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [novoFeedback, setNovoFeedback] = useState("");

  // Carregar feedbacks do localStorage quando a página for carregada
  useEffect(() => {
    const feedbacksSalvos = JSON.parse(localStorage.getItem(enfermidade)) || [];
    setFeedbacks(feedbacksSalvos);
  }, [enfermidade]);

  // Salvar feedbacks no localStorage sempre que eles forem atualizados
  useEffect(() => {
    if (enfermidade) {
      localStorage.setItem(enfermidade, JSON.stringify(feedbacks));
    }
  }, [feedbacks, enfermidade]);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (novoFeedback.trim()) {
      setFeedbacks([...feedbacks, novoFeedback]);
      setNovoFeedback("");
    }
  };

  const handleDeleteFeedback = (index) => {
    const novosFeedbacks = feedbacks.filter((_, i) => i !== index);
    setFeedbacks(novosFeedbacks);
  };

  if (!enfermidade) {
    return <div className="receita">Selecione uma enfermidade para ver a receita literária.</div>;
  }

  return (
    <div className="receita">
      <h2>Receituário</h2>
      <h3>Enfermidade: {enfermidade}</h3>
      <p><strong>Descrição:</strong> {receita.descricao}</p>
      <p><strong>Prescrição:</strong> {receita.prescricao}</p>
      
      <h3>Comentários:</h3>
      <ul>
        {feedbacks.map((feedback, index) => (
          <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{feedback}</span>
            <button
              onClick={() => handleDeleteFeedback(index)}
              style={{
                backgroundColor: '#a07d52',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                padding: '5px 10px',
                cursor: 'pointer',
                marginLeft: '10px'
              }}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
      
      <form onSubmit={handleFeedbackSubmit}>
        <textarea
          value={novoFeedback}
          onChange={(e) => setNovoFeedback(e.target.value)}
          placeholder="Deixe seu comentário aqui"
          rows="3"
          style={{ width: "97%", padding: "10px", marginTop: "10px", borderRadius: "4px", border: "1px solid #e1cbb1" }}
        ></textarea>
        <button type="submit" style={{ marginTop: "10px", padding: "10px 20px", backgroundColor: "#5b4e3c", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Enviar 
        </button>
      </form>
    </div>
  );
};

export default Receita;

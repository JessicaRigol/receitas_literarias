// src/components/Feedback.js
import React, { useState } from 'react';

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [input, setInput] = useState('');

    const handleFeedbackSubmit = () => {
        if (input.trim()) {
            setFeedbacks([...feedbacks, input]);
            setInput('');
        }
    };

    return (
        <div className="feedback">
            <h3>Feedback dos Usuários</h3>
            <ul>
                {feedbacks.map((feedback, index) => (
                    <li key={index}>{feedback}</li>
                ))}
            </ul>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Deixe seu feedback..."
            />
            <button onClick={handleFeedbackSubmit}>Enviar</button>
        </div>
    );
};

export default Feedback;

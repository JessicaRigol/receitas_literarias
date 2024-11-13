import React, { useState, useEffect } from 'react';

const Receita = ({ enfermidade, receita }) => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [novoFeedback, setNovoFeedback] = useState("");
    const [curtidas, setCurtidas] = useState([]);
    const [quantidadeCurtidas, setQuantidadeCurtidas] = useState([]);
    const [editando, setEditando] = useState(null);

    // Carrega os feedbacks, curtidas e quantidades quando o componente é montado
    useEffect(() => {
        const feedbacksSalvos = JSON.parse(localStorage.getItem(enfermidade)) || [];
        setFeedbacks(feedbacksSalvos);

        const curtidasSalvas = JSON.parse(localStorage.getItem("curtidas")) || [];
        setCurtidas(curtidasSalvas);

        const quantidadeCurtidasSalvas = JSON.parse(localStorage.getItem("quantidadeCurtidas")) || [];
        setQuantidadeCurtidas(quantidadeCurtidasSalvas);
    }, [enfermidade]);

    // Salva os feedbacks, curtidas e quantidades sempre que houver alteração
    useEffect(() => {
        localStorage.setItem(enfermidade, JSON.stringify(feedbacks));
        localStorage.setItem("curtidas", JSON.stringify(curtidas));
        localStorage.setItem("quantidadeCurtidas", JSON.stringify(quantidadeCurtidas));
    }, [feedbacks, curtidas, quantidadeCurtidas, enfermidade]);

    // Função para submeter um novo feedback
    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        if (novoFeedback.trim()) {
            setFeedbacks([...feedbacks, novoFeedback]);
            setCurtidas([...curtidas, false]);  // Inicializa a curtida como 'não curtido'
            setQuantidadeCurtidas([...quantidadeCurtidas, 0]);  // Inicializa a quantidade de curtidas como 0
            setNovoFeedback("");  // Limpa o campo de input
        }
    };

    // Função para deletar um feedback
    const handleDeleteFeedback = (index) => {
        if (window.confirm("Você tem certeza que deseja excluir este comentário?")) {
            setFeedbacks(feedbacks.filter((_, i) => i !== index));
            setCurtidas(curtidas.filter((_, i) => i !== index));
            setQuantidadeCurtidas(quantidadeCurtidas.filter((_, i) => i !== index));
        }
    };

    // Função para curtir ou descurtir um feedback
    const handleCurtir = (index) => {
        const novosCurtidas = [...curtidas];
        novosCurtidas[index] = !novosCurtidas[index];
        setCurtidas(novosCurtidas);

        const novaQuantidadeCurtidas = [...quantidadeCurtidas];
        novaQuantidadeCurtidas[index] = novosCurtidas[index]
            ? novaQuantidadeCurtidas[index] + 1
            : novaQuantidadeCurtidas[index] - 1;
        setQuantidadeCurtidas(novaQuantidadeCurtidas);
    };

    // Função para iniciar a edição de um feedback
    const handleEditFeedback = (index) => {
        setEditando(index);  // Marca o comentário como editável
    };

    // Função para salvar as alterações no feedback
    const handleSaveEdit = (index) => {
        setEditando(null);  // Salva a edição e sai do modo de edição
    };

    return (
        <div className="receita-comentarios-container">
            <div className="receita">
                <h2>Receituário</h2>
                <h3>Enfermidade: {enfermidade}</h3>
                <p><strong>Descrição:</strong> {receita.descricao}</p>
                <p>
                    <strong>Prescrição:</strong><br />
                    {receita.prescricao.split("\n").map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                    ))}
                </p>
                <hr />

                <div className="fonte">
                    <p><strong>Fonte:</strong> BERTHOUD, Ella; ELDERKIN, Susan. <i>Farmácia literária</i>. 4 ed. Campinas: Verus, 2021.</p>
                </div>
            </div>

            <div className="comentarios">
                <h3>Comentários:</h3>
                <ul>
                    {feedbacks.map((feedback, index) => (
                        <li key={index}>
                            <div className="comentario">
                                {editando === index ? (
                                    <textarea
                                        value={feedback}
                                        onChange={(e) => {
                                            const novosFeedbacks = [...feedbacks];
                                            novosFeedbacks[index] = e.target.value;
                                            setFeedbacks(novosFeedbacks);
                                        }}
                                        rows="3"
                                    />
                                ) : (
                                    <p>{feedback}</p>
                                )}

                                <div className="comentario-botoes">
                                    {editando === index ? (
                                        <button onClick={() => handleSaveEdit(index)}>Salvar</button>
                                    ) : (
                                        <button onClick={() => handleEditFeedback(index)}>Editar</button>
                                    )}
                                    <button onClick={() => handleDeleteFeedback(index)}>Excluir</button>
                                    <button onClick={() => handleCurtir(index)}>
                                        {curtidas[index] ? 'Descurtir' : 'Curtir'} ({quantidadeCurtidas[index]})
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <form onSubmit={handleFeedbackSubmit}>
                    <textarea
                        value={novoFeedback}
                        onChange={(e) => setNovoFeedback(e.target.value)}
                        placeholder="Deixe seu comentário aqui"
                        rows="3"
                        className="input-feedback"
                    ></textarea>
                    <button type="submit" className="botao-enviar">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Receita;

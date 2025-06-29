import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Atendimento Psicológico Online</h1>
      <p>Acolhimento, sigilo e profissionalismo para adultos, adolescentes e idosos.</p>
      <p>Psicóloga registrada no CRP, com foco em escuta acolhedora e respeitosa.</p>
      <img src="https://cdn.pixabay.com/photo/2023/05/25/15/25/psychology-8017457_1280.png" alt="Simbolo da Psicologia" width="100" />
      <div style={{ marginTop: '20px' }}>
        <a href="mailto:lidiabeatrizfreire@gmail.com" style={{ marginRight: '10px' }}>Enviar e-mail</a>
        <a href="https://wa.me/5594992783435" target="_blank" rel="noreferrer">Fale pelo WhatsApp</a>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
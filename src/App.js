import React, { useState } from 'react';
import './styles.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === 'admin' && password === 'admin') {
      setMessage('Usuário cadastrado');
    } else {
      setMessage('Usuário não cadastrado');
    }

    setUsername('');
    setPassword('');
  };

  return (
    <div className="container">
      <div className="login-container">
      <h1 className="app-title">InventoryControl</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="input-field"
              placeholder="Nome de usuário"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="input-field"
              placeholder="Senha"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
        <div className="message">{message}</div>
      </div>
    </div>
  );
}

export default App;

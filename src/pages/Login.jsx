import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!username || !password) {
      setError('Todos los campos son requeridos');
      return;
    }

    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedUser && savedUser.username === username && savedUser.password === password) {
      setUser(savedUser);
      setMessage('¡Login exitoso! Bienvenido.');
      setTimeout(() => navigate('/Perfil'), 500);
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={() => navigate('/Principal')}>
        ⬅ Volver a Principal
      </button>
      <div style={styles.box}>
        <h2 style={styles.title}>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label htmlFor="username" style={styles.label}>
            Usuario:
          </label>
          <input
            type="text"
            id="username"
            placeholder="Escribe tu nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <label htmlFor="password" style={styles.label}>
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Escribe tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Iniciar sesión
          </button>
        </form>
        {error && <p style={styles.messageError}>{error}</p>}
        {message && <p style={styles.messageSuccess}>{message}</p>}
        <p style={styles.registerPrompt}>
          ¿No tienes una cuenta?{' '}
          <Link to="/register" style={styles.linkText}>
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #E8E8E8, #254559)',
    fontFamily: "'Lato'",
  },
  backButton: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    background: 'transparent',
    border: 'none',
    color: '#2C3E50',
    fontFamily: "'Lato'",
    fontSize: '1.2em',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  box: {
    backgroundColor: '#1c1c1c',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
    maxWidth: '400px',
    width: '100%',
  },
  title: {
    fontFamily: "'Lato'",
    fontSize: '2em',
    color: '#A7D9D4',
    marginBottom: '20px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  label: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: "'Lato'",
    fontSize: '1.2em',
    color: '#F2ECD8',
  },
  input: {
    padding: '10px',
    fontFamily: "'Lato'",
    fontSize: '1.2em',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#F2ECD8',
    color: '#2C3E50',
  },
  button: {
    backgroundColor: '#99BFBB',
    color: '#1B2424',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    fontFamily: "'Lato'",
    fontSize: '1.2em',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    margin: '20px 0',
  },
  messageError: {
    color: 'red',
    fontFamily: "'Lato'",
    fontSize: '1.2em',
    marginTop: '20px',
    textAlign: 'center',
  },
  messageSuccess: {
    color: 'green',
    fontFamily: "'Lato'",
    fontSize: '1.2em',
    marginTop: '20px',
    textAlign: 'center',
  },
  registerPrompt: {
    color: '#F2ECD8',
    fontFamily: "'Lato'",
    fontSize: '1.1em',
    marginTop: '20px',
    textAlign: 'center',
  },
  linkText: {
    fontFamily: "'Lato'",
    fontSize: '1.2em',
    color: '#A7D9D4',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
};

export default Login;

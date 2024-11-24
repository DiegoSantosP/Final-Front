import React, { useState } from 'react';
import { useUser  } from '../context/UserContext'; // Asegúrate de que la ruta sea correcta
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const { setUser   } = useUser (); // Accede a setUser  desde el contexto
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const userData = { username, email, password };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser (userData); // Asegúrate de que setUser  sea una función
    setMessage('¡Registro exitoso! Ahora puedes iniciar sesión.');
    navigate('/Perfil');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!username || !email || !password) {
      setError('Todos los campos son requeridos');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setError('Por favor ingresa un correo electrónico válido');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    handleRegister();
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={() => navigate('/Principal')}>
        ⬅ Volver a Principal
      </button>
      <div style={styles.box}>
        <h2 style={styles.title}>Crear Cuenta</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label htmlFor="username" style={styles.label}>Nombre de Usuario:</label>
          <input
            type="text"
            id="username"
            placeholder="Escribe tu nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <label htmlFor="email" style={styles.label}>Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            placeholder="Escribe tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <label htmlFor="password" style={styles.label}>Contraseña:</label>
          <input
            type="password"
            id="password"
            placeholder="Escribe tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Registrar</button>
        </form>
        {error && <p style={styles.messageError}>{error}</p>}
        {message && <p style={styles.messageSuccess}>{message}</p>}
        <p style={styles.registerPrompt}>
         ¿Ya tienes una cuenta?  <Link to="/login" style={styles.linkText}>Inicia sesión aquí</Link>
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
    fontSize : '2em',
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
    fontFamily: "'Lato'",
    fontWeight: 'bold',
    textAlign: 'left',
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
    fontFamily: "'Lato'",
    backgroundColor: '#99BFBB',
    color: '#1B2424',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
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
    fontFamily: "'Lato'",
    color: 'green',
    fontSize: '1.2em',
    marginTop: '20px',
    textAlign: 'center',
  },
  registerPrompt: {
    fontFamily: "'Lato'",
    color: '#F2ECD8',
    fontSize: '1.2em',
    marginTop: '20px',
    textAlign: 'center',
  },
  linkText: {
    fontFamily: "'Lato'",
    color: '#A7D9D4',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
};

export default Register;
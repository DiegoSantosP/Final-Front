import React, { useState } from 'react';
import { useUser } from '../context/UserContext'; // Asegúrate de que la ruta sea correcta
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const { setUser } = useUser(); // Accede a setUser desde el contexto
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Estado de carga
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true); // Iniciar carga mientras se hace la solicitud
    const loginData = { username: usuario, password };

    try {
      // Enviar los datos al backend
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      // Verificar si la respuesta es JSON
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        let data;
        try {
          // Intentar convertir la respuesta a JSON
          data = await response.json();
        } catch (err) {
          console.error('Error al procesar JSON:', err);
          setError('Hubo un error al procesar la respuesta del servidor.');
          return;
        }

        // Verificar si la respuesta fue exitosa
        if (response.ok) {
          console.log('Respuesta del backend:', data);
          localStorage.setItem('user', JSON.stringify(data.user));
          setUser(data.user);
          setMessage('¡Inicio de sesión exitoso!');
          navigate('/Perfil'); // Redirigir al perfil
        } else {
          console.error('Error del backend:', data);
          setError(data.message || 'Usuario o contraseña incorrectos');
        }
      } else {
        console.error('El servidor no devolvió un JSON válido.');
        setError('Hubo un error con la respuesta del servidor.');
      }
    } catch (err) {
      console.error('Error al conectar con el servidor:', err);
      setError('Hubo un error al conectar con el servidor.');
    } finally {
      setLoading(false); // Detener carga
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!usuario || !password) {
      setError('Todos los campos son requeridos');
      return;
    }

    // Llamar a la función handleLogin para autenticar al usuario
    handleLogin();
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={() => navigate('/Principal')}>
        ⬅ Volver a Principal
      </button>
      <div style={styles.box}>
        <h2 style={styles.title}>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label htmlFor="usuario" style={styles.label}>Usuario:</label>
          <input
            type="text"
            id="usuario"
            placeholder="Escribe tu usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
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
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? 'Cargando...' : 'Iniciar Sesión'}
          </button>
        </form>
        {error && <p style={styles.messageError}>{error}</p>}
        {message && <p style={styles.messageSuccess}>{message}</p>}
        <p style={styles.registerPrompt}>
          ¿No tienes una cuenta? <Link to="/register" style={styles.linkText}>Regístrate aquí</Link>
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
    color: 'green',
    fontFamily: "'Lato'",
    fontSize: '1.2em',
    marginTop: '20px',
    textAlign: 'center',
  },
  registerPrompt: {
    color: '#F2ECD8',
    fontFamily: "'Lato'",
    fontSize: '1em',
    textAlign: 'center',
  },
  linkText: {
    color: '#99BFBB',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
};

export default Login;

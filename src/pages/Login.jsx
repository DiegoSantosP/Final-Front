import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  // Estados para manejar los valores y mensajes
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    // Validación básica
    if (!username || !password) {
      setError('Todos los campos son requeridos');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Si todo está bien, mostrar mensaje de éxito
    setMessage('¡Login exitoso! Bienvenido.');
  };

  return (
    <Container>
      <BackButton onClick={() => navigate('/principal')}>⬅ Volver a Principal</BackButton>
      <Box>
        <Title>Iniciar sesión</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="username">Usuario:</Label>
          <Input
            type="text"
            id="username"
            placeholder="Escribe tu nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Label htmlFor="password">Contraseña:</Label>
          <Input
            type="password"
            id="password"
            placeholder="Escribe tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit">Iniciar sesión</Button>
        </Form>
        {error && <MessageError>{error}</MessageError>}
        {message && <MessageSuccess>{message}</MessageSuccess>}
        
        <LinkContainer>
          <StyledLink to="/Register">¿No tienes una cuenta? Regístrate aquí</StyledLink>
        </LinkContainer>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #1A3C40, #254559);
  color: #F2ECD8;
  font-family: 'Lato', sans-serif;
  position: relative;
`;

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: transparent;
  border: none;
  color: #A7D9D4;
  font-size: 1em;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: #F2ECD8;
  }
`;

const Box = styled.div`
  background-color: #1c1c1c;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2em;
  color: #A7D9D4;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  text-align: left;
  font-size: 1em;
  color: #F2ECD8;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  background-color: #F2ECD8;
  color: #2C3E50;
`;

const Button = styled.button`
  background-color: #99BFBB;
  color: #2C3E50;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #7CAAA5;
  }
`;

const MessageError = styled.p`
  color: red;
  font-size: 1em;
  margin-top: 20px;
  text-align: center;
`;

const MessageSuccess = styled.p`
  color: green;
  font-size: 1em;
  margin-top: 20px;
  text-align: center;
`;

const LinkContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: #A7D9D4;
  font-size: 1em;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default Login;

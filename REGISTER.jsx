import React from 'react';
import styled from 'styled-components';

const Register = () => {
  return (
    <Container>
      <h2>Registro</h2>
      <Form>
        <label htmlFor="username">Usuario:</label>
        <input type="text" id="username" placeholder="Escribe tu nombre de usuario" />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Escribe tu email" />
        
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" placeholder="Escribe tu contraseña" />
        
        <button>Registrar</button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 0 auto;
  input, button {
    padding: 10px;
    font-size: 1em;
  }
  button {
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
  }
`;

export default Register;
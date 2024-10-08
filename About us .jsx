import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Container>
      <h2>Contacto</h2>
      <Form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" placeholder="Escribe tu nombre" />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Escribe tu email" />
        
        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" placeholder="Escribe tu mensaje" />
        
        <button>Enviar</button>
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
  max-width: 400px;
  margin: 0 auto;
  input, textarea, button {
    padding: 10px;
    font-size: 1em;
  }
  textarea {
    height: 100px;
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

export default Contact;
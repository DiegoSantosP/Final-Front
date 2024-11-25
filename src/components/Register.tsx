import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #e8e8e8, #254559);
  font-family: 'Lato';
`;

export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: transparent;
  border: none;
  color: #2c3e50;
  font-family: 'Lato';
  font-size: 1.2em;
  cursor: pointer;
  font-weight: bold;
`;

export const Box = styled.div`
  background-color: #1c1c1c;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
`;

export const Title = styled.h2`
  font-family: 'Lato';
  font-size: 2em;
  color: #a7d9d4;
  margin-bottom: 20px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  font-family: 'Lato';
  font-weight: bold;
  text-align: left;
  font-size: 1.2em;
  color: #f2ecd8;
`;

export const Input = styled.input`
  padding: 10px;
  font-family: 'Lato';
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  background-color: #f2ecd8;
  color: #2c3e50;
`;

export const Button = styled.button`
  font-family: 'Lato';
  background-color: #99bfbb;
  color: #1b2424;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 20px 0;

  &:hover {
    background-color: #88aba8;
  }
`;

export const MessageError = styled.p`
  color: red;
  font-family: 'Lato';
  font-size: 1.2em;
  margin-top: 20px;
  text-align: center;
`;

export const MessageSuccess = styled.p`
  font-family: 'Lato';
  color: green;
  font-size: 1.2em;
  margin-top: 20px;
  text-align: center;
`;

export const RegisterPrompt = styled.p`
  font-family: 'Lato';
  color: #f2ecd8;
  font-size: 1.2em;
  margin-top: 20px;
  text-align: center;
`;

export const LinkText = styled.a`
  font-family: 'Lato';
  color: #a7d9d4;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

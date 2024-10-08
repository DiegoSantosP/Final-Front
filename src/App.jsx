import React from 'react';
import styled from 'styled-components';

const App = () => {
    return (
      <Container>
        <Header>
          <Logo>PillowQuest</Logo>
          <Nav>
            <a href="#">Inicio</a>
            <a href="#">Ofertas</a>
            <a href="#">Contacto</a>
          </Nav>
          <AuthButtons>
            <a href="#" className="button">Register</a>
            <a href="#" className="button">Login</a>
          </AuthButtons>
        </Header>
  
        <SearchSection>
          <h1>Compara precios de hoteles alrededor del mundo</h1>
          <SearchBar>
            <label htmlFor="destino">Destino:</label>
            <input type="text" id="destino" placeholder="Escribe tu destino..." />
            <label htmlFor="checkin">Check-in:</label>
            <input type="text" id="checkin" placeholder="dd/mm/aaaa" />
            <label htmlFor="checkout">Check-out:</label>
            <input type="text" id="checkout" placeholder="dd/mm/aaaa" />
            <button>Buscar</button>
          </SearchBar>
        </SearchSection>
  
        <Resultados>
          <h3>Resultados de búsqueda</h3>
          <HotelList>
            <Hotel>
              <img src="imagenes/Hotel1.jpg" alt="Hotel 1" />
              <h4>Sofitel Legend Santa Clara (Cartagena)</h4>
              <p>Reputación: 5 Estrellas</p>
              <p>1000 USD por noche</p>
              <a href="https://sofitel.accor.com/es/hotels/1871.html" target="_blank" rel="noopener noreferrer">
                Ver detalles
               </a>
            </Hotel>
  
            <Hotel>
              <img src="imagenes/Hotel2.jpg" alt="Hotel 2" />
              <h4>Grand Hyatt (Bogotá)</h4>
              <p>Reputación: 4 Estrellas</p>
              <p>100 USD por noche</p>
              <a href="https://www.guestreservations.com/grand-hyatt-bogota/booking" target="_blank" rel="noopener noreferrer">
                Ver detalles
               </a>
            </Hotel>
  
            <Hotel>
              <img src="imagenes/Hotel3.jpg" alt="Hotel 3" />
              <h4>Four Seasons Hotel Casa Medina (Bogotá)</h4>
              <p>Reputación: 5 Estrellas</p>
              <p>1500 USD por noche</p>
              <a href="https://www.fourseasons.com/es/casamedina/" target="_blank" rel="noopener noreferrer">
                Ver detalles
              </a>
  
            </Hotel>
  
            <Hotel>
            <img src="imagenes/Hotel4.jpg" alt="Hotel 4" />
                  <h4>Conrad (Cartagena)</h4>
                  <p>Reputación: 4.5 Estrellas</p>
                  <p>480 USD por noche</p>
                  <a href="https://conradcartagenahiltonhotel.com-hotel.com/es/" target="_blank" rel="noopener noreferrer">
                Ver detalles
               </a>
            </Hotel>
          </HotelList>
        </Resultados>
  
        <Footer>
          <p>© 2024 PillowQuest - Comparador de Hoteles. Todos los derechos reservados.</p>
          <p>Prohíbese el expendio de bebidas embriagantes a menores de edad</p>
          <p>PillowQuest, Kesselstraße 5 - 7, 42521 Düsseldorf, Rusian</p>
        </Footer>
      </Container>
    );
  };
  
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #007BFF;
    color: white;
  `;
  
  const Header = styled.header`
    width: 100%;
    padding: 10px 20px;
    background-color: #0056b3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  `;
  
  const Logo = styled.div`
    font-size: 1.5em;
    font-weight: bold;
  `;
  
  const Nav = styled.nav`
    display: flex;
    a {
      color: white;
      text-decoration: none;
      margin: 0 10px;
      font-weight: bold;
      &:hover {
        color: #ffeb3b;
      }
    }
  `;
  
  const AuthButtons = styled.div`
    display: flex;
    .button {
      border: 2px solid white;
      padding: 5px 10px;
      border-radius: 5px;
      margin-left: 10px;
      color: white;
      text-decoration: none;
      &:hover {
        color: #ffeb3b;
      }
    }
  `;
  
  const SearchSection = styled.section`
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
    text-align: center;
    h1 {
      font-size: 1.8em;
      margin-bottom: 10px;
    }
  `;
  
  const SearchBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  
    input, button {
      padding: 6px;
      font-size: 0.9em;
      border: none;
      border-radius: 4px;
    }
  
    input {
      flex: 1;
      min-width: 150px;
    }
  
    button {
      background-color: #0056b3;
      color: white;
      font-weight: bold;
      &:hover {
        background-color: #004494;
      }
    }
  `;
  
  const Resultados = styled.section`
    width: 100%;
    max-width: 800px;
    margin: 20px auto;
    text-align: center;
    color: white;
  
  h3 {
      font-size: 1.5em;
      margin-bottom: 20px;
    }
  `;
  
  const HotelList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  `;
  
  const Hotel = styled.article`
    background-color: #0056b3;
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
    padding: 10px;
    width: 250px;
  
    img {
      width: 100%;
      height: auto;
    }
  
    h4 {
      margin-top: 10px;
      font-size: 1.2em;
    }
  
    p {
      margin: 5px 0;
    }
  
    a {
      display: inline-block;
      margin-top: 10px;
      color: #ffeb3b;
      text-decoration: none;
      font-weight: bold;
      &:hover {
        color: #fff;
      }
    }
  `;
  
  const Footer = styled.footer`
    width: 100%;
    padding: 10px 0;
    background-color: #333;
    text-align: center;
    color: white;
    margin-top: 20px;
  `;
  
export default App;

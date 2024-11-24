import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ConfReserva = () => {
  const { state } = useLocation();
  const { hotel, checkInDate, checkOutDate } = state || {};
  const navigate = useNavigate();

  // Si no hay datos de la reserva, mostramos un mensaje de error
  if (!hotel || !checkInDate || !checkOutDate) {
    return <div>Información no disponible.</div>;
  }

  // Guardar la reserva en localStorage
  const saveReservation = () => {
    // Crear el objeto de reserva
    const reservation = {
      hotelName: hotel.name,
      hotelImage: hotel.image,
      hotelLocation: hotel.location,
      stars: hotel.stars,
      price: hotel.price,
      checkInDate,
      checkOutDate
    };

    // Obtener las reservas existentes desde localStorage
    const savedReservations = JSON.parse(localStorage.getItem('userBookings')) || [];

    // Agregar la nueva reserva
    savedReservations.push(reservation);

    // Guardar las reservas actualizadas en localStorage
    localStorage.setItem('userBookings', JSON.stringify(savedReservations));

    // Redirigir a la página de perfil
    navigate('/Perfil');
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <div style={styles.logo}>
          <a href="/Principal" style={styles.logoLink}>PillowQuest</a>
        </div>
      </header>

      <main style={styles.main}>
        <h1 style={styles.title}>Confirmación de Reserva</h1>
        <div style={styles.container}>
          <div style={styles.results}>
            <h2 style={styles.subtitle}>Tu Reserva</h2>
            <div style={styles.hotel}>
              <img src={hotel.image} alt={hotel.name} style={styles.hotelImage} />
              <h3 style={styles.hotelName}>{hotel.name}</h3>
              <p style={styles.hotelInfo}>Ubicación: {hotel.location}</p>
              <p style={styles.hotelInfo}>Estrellas: {hotel.stars} ⭐</p>
              <p style={styles.hotelInfo}>Precio por noche: {hotel.price} USD</p>
              <p style={styles.hotelInfo}>Fechas de estancia: {checkInDate} - {checkOutDate}</p>
            </div>
            <button onClick={saveReservation} style={styles.reserveButton}>Guardar y ir a Perfil</button>
          </div>
        </div>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2024 PillowQuest - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "'Lato'",
    backgroundColor: '#E8E8E8',
    color: '#F2ECD8',
    margin: 0,
    padding: 0,
    minHeight: '100vh',
  },
  header: {
    backgroundColor: '#2C3E50',
    color: '#F2ECD8',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '2.5em',
    fontWeight: 'bold',
  },
  logoLink: {
    color: '#F2ECD8',
    textDecoration: 'none',
  },
  main: {
    padding: '40px 20px',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5em',
    color: '#000',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '1.8em',
    marginBottom: '20px',
    color: '#000',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  results: {
    width: '80%',
    maxWidth: '800px',
  },
  hotel: {
    backgroundColor: '#2C3E50',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    color: '#F2ECD8',
  },
  hotelImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  hotelName: {
    fontSize: '1.5em',
    marginTop: '15px',
    fontWeight: 'bold',
  },
  hotelInfo: {
    marginTop: '10px',
    fontSize: '1.2em',
  },
  reserveButton: {
    backgroundColor: '#99BFBB',
    color: '#2C3E50',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1.2em',
    marginTop: '20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  footer: {
    fontSize: '1.3em',
    backgroundColor: '#2C3E50',
    color: '#F2ECD8',
    padding: '20px 0',
    textAlign: 'center',
  },
};

export default ConfReserva;

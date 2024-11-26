import React, { useEffect, useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; // Íconos
import { useNavigate } from 'react-router-dom';

const Perfil = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    bookings: [],
  });
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña
  const [undoBooking, setUndoBooking] = useState(null); // Para deshacer eliminación de reserva
  const navigate = useNavigate();

  // Cargar datos de usuario y reservas desde localStorage
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user')) || {};
    const savedBookings = JSON.parse(localStorage.getItem('userBookings')) || [];

    setUser({
      username: savedUser.username || '',
      email: savedUser.email || '',
      password: savedUser.password || '',
      bookings: savedBookings,
    });
  }, []);

  // Guardar reservas en localStorage
  const saveBookings = (updatedBookings) => {
    localStorage.setItem('userBookings', JSON.stringify(updatedBookings));
    setUser((prevState) => ({
      ...prevState,
      bookings: updatedBookings,
    }));
  };

  // Eliminar una reserva
  const removeBooking = (index) => {
    const updatedBookings = user.bookings.filter((_, idx) => idx !== index);
    const removedBooking = user.bookings[index];

    saveBookings(updatedBookings);
    setUndoBooking(removedBooking);
  };

  // Deshacer eliminación de una reserva
  const undoRemoveBooking = () => {
    if (undoBooking) {
      const updatedBookings = [...user.bookings, undoBooking];
      saveBookings(updatedBookings);
      setUndoBooking(null);
    }
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={() => navigate('/Principal')}>
        ⬅ Volver a Principal
      </button>
      <div style={styles.box}>
        <h2 style={styles.title}>Perfil de Usuario</h2>
        <div style={styles.section}>
          <p style={styles.infoText}>
            <FaUser /> Usuario: {user.username}
          </p>
          <p style={styles.infoText}>
            <FaEnvelope /> Correo: {user.email}
          </p>
          <p style={styles.infoText}>
            <FaLock /> Contraseña:{' '}
            {showPassword ? user.password : '*'.repeat(user.password.length)}
            <button
              style={styles.togglePassword}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </button>
          </p>
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Reservas:</h3>
          <ul style={styles.list}>
            {user.bookings.length === 0 ? (
              <li style={styles.listItem}>No tienes reservas</li>
            ) : (
              user.bookings.map((booking, index) => (
                <li key={index} style={styles.listItem}>
                  <p style={styles.listItemTitle}>Hotel: {booking.hotelName}</p>
                  <p style={styles.infoText}>Ubicación: {booking.hotelLocation}</p>
                  <p style={styles.infoText}>Entrada: {booking.checkInDate}</p>
                  <p style={styles.infoText}>Salida: {booking.checkOutDate}</p>
                  <p style={styles.infoText}>Precio: {booking.price}</p>
                  <button
                    style={styles.removeButton}
                    onClick={() => removeBooking(index)}
                  >
                    Eliminar
                  </button>
                </li>
              ))
            )}
          </ul>
          {undoBooking && (
            <div style={styles.undoContainer}>
              <p style={styles.undoText}>Reserva eliminada</p>
              <button style={styles.undoButton} onClick={undoRemoveBooking}>
                Deshacer
              </button>
            </div>
          )}
        </div>
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
    color: '#F2ECD8',
    fontFamily: "'Lato'",
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    background: 'transparent',
    border: 'none',
    color: '#2C3E50',
    fontFamily: "'Lato'",
    fontSize: '1.5em',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  box: {
    backgroundColor: '#1c1c1c',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
    maxWidth: '600px',
    width: '100%',
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2em',
    color: '#A7D9D4',
    textAlign: 'center',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '1.5em',
    color: '#A7D9D4',
    marginBottom: '10px',
  },
  infoText: {
    fontSize: '1.2em',
    color: '#F2ECD8',
    marginBottom: '10px',
  },
  togglePassword: {
    marginLeft: '10px',
    background: '#4CAF50',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    fontFamily: "'Lato'",
    fontSize: '1em',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  listItem: {
    backgroundColor: '#2C3E50',
    padding: '15px',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  listItemTitle: {
    fontSize: '1.2em',
    color: '#A7D9D4',
  },
  removeButton: {
    backgroundColor: '#E74C3C',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    fontFamily: "'Lato'",
    fontSize: '1.2em',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  undoContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  undoText: {
    color: '#F2ECD8',
    fontSize: '1em',
  },
  undoButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1em',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default Perfil;
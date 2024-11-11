import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaHotel, FaCreditCard, FaPaypal } from 'react-icons/fa';

const UserProfile = () => {
  const user = {
    name: "Marcos",
    email: "juan.perez@example.com",
    phone: "+57 300 123 4567",
    bookings: [
      {
        id: 1,
        hotelName: "Hotel Caribe",
        checkIn: "2024-12-15",
        checkOut: "2024-12-20",
        status: "Confirmed",
      },
      {
        id: 2,
        hotelName: "Hotel San Carlos",
        checkIn: "2025-01-10",
        checkOut: "2025-01-15",
        status: "Pending",
      },
    ],
    paymentMethods: [
      {
        type: "Credit Card",
        last4: "1234",
        expiration: "12/25",
      },
      {
        type: "Paypal",
        email: "paypaluser@example.com",
      },
    ],
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Perfil del Usuario</h2>

        <section style={styles.section}>
          <h3 style={styles.sectionTitle}><FaUser /> Información Personal</h3>
          <p style={styles.infoText}><FaUser /> <strong>Nombre:</strong> {user.name}</p>
          <p style={styles.infoText}><FaEnvelope /> <strong>Email:</strong> {user.email}</p>
          <p style={styles.infoText}><FaPhone /> <strong>Teléfono:</strong> {user.phone}</p>
        </section>

        <section style={styles.section}>
          <h3 style={styles.sectionTitle}><FaHotel /> Reservas</h3>
          {user.bookings.length ? (
            <ul style={styles.list}>
              {user.bookings.map((booking) => (
                <li key={booking.id} style={styles.listItem}>
                  <h4 style={styles.listItemTitle}><FaHotel /> {booking.hotelName}</h4>
                  <p style={styles.infoText}><strong>Check-In:</strong> {booking.checkIn}</p>
                  <p style={styles.infoText}><strong>Check-Out:</strong> {booking.checkOut}</p>
                  <p style={styles.infoText}><strong>Estado:</strong> {booking.status}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p style={styles.infoText}>No tienes reservas.</p>
          )}
        </section>

        <section style={styles.section}>
          <h3 style={styles.sectionTitle}><FaCreditCard /> Métodos de Pago</h3>
          {user.paymentMethods.length ? (
            <ul style={styles.list}>
              {user.paymentMethods.map((method, index) => (
                <li key={index} style={styles.listItem}>
                  <p style={styles.infoText}><strong>Tipo:</strong> {method.type === "Credit Card" ? <FaCreditCard /> : <FaPaypal />} {method.type}</p>
                  {method.type === "Credit Card" ? (
                    <>
                      <p style={styles.infoText}><strong>Últimos 4 dígitos:</strong> {method.last4}</p>
                      <p style={styles.infoText}><strong>Expiración:</strong> {method.expiration}</p>
                    </>
                  ) : (
                    <p style={styles.infoText}><strong>Email:</strong> {method.email}</p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p style={styles.infoText}>No tienes métodos de pago registrados.</p>
          )}
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #1A3C40, #254559)',
    color: '#F2ECD8',
    fontFamily: 'Lato, sans-serif',
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
    fontFamily: 'Playfair Display, serif',
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
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  infoText: {
    fontSize: '1em',
    color: '#F2ECD8',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
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
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
};

export default UserProfile;

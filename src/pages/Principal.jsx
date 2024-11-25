import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { motion } from 'framer-motion';

const Principal = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState(1500);
  const [starRating, setStarRating] = useState('1');
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredHotels, setFilteredHotels] = useState([]);

  useEffect(() => {
    // Cargar datos de hoteles
    const hotelData = [
      { name: 'Sofitel Legend Santa Clara', location: 'Cartagena', stars: 5, price: 1000, image: 'imagenes/Hotel1.jpg' },
      { name: 'Grand Hyatt', location: 'Bogotá', stars: 4, price: 100, image: 'imagenes/Hotel2.jpg' },
      { name: 'Four Seasons Hotel Casa Medina', location: 'Bogotá', stars: 5, price: 1500, image: 'imagenes/Hotel3.jpg' },
      { name: 'Conrad', location: 'Cartagena', stars: 4.5, price: 480, image: 'imagenes/Hotel4.jpg' },
      { name: 'Lofuers', location: 'Blanc', stars: 3.5, price: 700, image: 'imagenes/Hotel5.jpg' },
      { name: 'Migdar', location: 'DESDE', stars: 4, price: 400, image: 'imagenes/Hotel6.jpg' },
    ];
    setFilteredHotels(hotelData);

    // Recuperar el nombre del usuario desde localStorage (si está logueado)
    const loggedUser = localStorage.getItem('user');
    if (loggedUser) {
      setUser(loggedUser); // Establecer el nombre del usuario logueado
    }
  }, [setUser]); // Agregar setUser a las dependencias

  // Filtrado en base a los valores seleccionados
  const finalFilteredHotels = filteredHotels.filter(hotel => {
    return (
      hotel.price <= priceRange &&
      (starRating ? hotel.stars >= parseFloat(starRating) : true) &&
      (hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) || hotel.location.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const handleReserve = () => {
    if (!checkInDate || !checkOutDate) {
      alert("Por favor, selecciona las fechas de ingreso y salida.");
      return;
    }
    if (!selectedHotel) {
      alert("Por favor, selecciona un hotel.");
      return;
    }

    navigate('/ConfReserva', {
      state: { hotel: selectedHotel, checkInDate, checkOutDate }
    });
  };

  const handleLogin = () => {
    navigate('/Login');
  };

  const handleRegister = () => {
    navigate('/Register');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Eliminar el usuario del localStorage
    navigate('/Principal'); // Redirigir a la página principal
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <div style={styles.logo}>
          <a href="/" style={styles.logoLink}>PillowQuest</a>
        </div>
        <nav style={styles.nav}>
          <a href="/Principal" style={styles.navLink}>Inicio</a>
          <a href="/Ofertas" style={styles.navLink}>Ofertas</a>
          <a href="/Contactos" style={styles.navLink}>Contacto</a>
          <a href="/AcercaDe" style={styles.navLink}>Acerca de Nosotros</a>
        </nav>
        <div style={styles.authButtons}>
          {user ? (
            <div style={styles.userSection}>
              {/* Icono de usuario con imagen y tamaño 50x50 */}
              <span onClick={() => navigate('/Perfil')}>
                <img src={process.env.PUBLIC_URL + '/imagenes/Perfil.png'} alt="Icono de usuario" style={{ width: 50, height: 50, borderRadius: '50%' }} />
              </span>

              <button
                onClick={handleLogout}
                style={{ ...styles.button, ...styles.logoutButton }}
                onMouseEnter={(e) => e.target.style.backgroundColor = styles.logoutButtonHover.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = styles.logoutButton.backgroundColor}
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <div style={styles.authButtonsContainer}>
              <button
                onClick={handleLogin}
                style={{ ...styles.button, ...styles.loginButton }}
                onMouseEnter={(e) => e.target.style.backgroundColor = styles.loginButtonHover.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = styles.loginButton.backgroundColor}
              >
                Login
              </button>
              <button
                onClick={handleRegister}
                style={{ ...styles.button, ...styles.registerButton }}
                onMouseEnter={(e) => e.target.style.backgroundColor = styles.registerButtonHover.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = styles.registerButton.backgroundColor}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </header>
      <main style={styles.main}>
        <motion.section
          style={styles.searchSection}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={styles.title}>Compara precios de hoteles alrededor del mundo</h1>
          <div style={styles.searchBar}>
            <div style={styles.inputContainer}>
              <p style={styles.label}>Búsqueda</p>
              <input
                type="text"
                placeholder="Buscar hotel..."
                style={styles.input}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div style={styles.inputContainer}>
              <p style={styles.label}>Check-in</p>
              <input
                type="date"
                style={styles.input}
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
            </div>

            <div style={styles.inputContainer}>
              <p style={styles.label}>Check-out</p>
              <input
                type="date"
                style={styles.input}
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
              />
            </div>
          </div>
        </motion.section>

        <div style={styles.container}>
          <aside style={styles.filterPanel}>
            <div style={styles.filterContainer}>
              <div style={styles.filterOption}>
                <label>Rango de Precio: {priceRange} USD</label>
                <input
                  type="number"
                  min="50"
                  max="1500"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  style={styles.filterInput}
                />
              </div>
              <div style={{ ...styles.filterOption, marginTop: '20px' }}>
                <label>Clasificación de Estrellas:</label>
                <div style={styles.starRating}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => setStarRating(star.toString())}
                      style={{
                        cursor: 'pointer',
                        color: starRating >= star ? '#FFD700' : '#ccc',
                        fontSize: '2em',
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <section style={styles.results}>
            <h2 style={styles.subtitle}>Resultados de búsqueda</h2>
            <div style={styles.hotelList}>
              {finalFilteredHotels.map((hotel, index) => (
                <motion.div
                  key={index}
                  style={styles.hotel}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  onClick={() => setSelectedHotel(hotel)}
                >
                  <img src={hotel.image} alt={hotel.name} style={styles.hotelImage} />
                  <h3 style={styles.hotelName}>{hotel.name} ({hotel.location})</h3>
                  <p style={styles.hotelInfo}>Reputación: {hotel.stars} Estrellas</p>
                  <p style={styles.hotelInfo}>{hotel.price} USD por noche</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {selectedHotel && (
          <div style={styles.modal}>
            <div style={styles.modalContent}>
              <h2>{selectedHotel.name} - Detalles</h2>
              <img src={selectedHotel.image} alt={selectedHotel.name} style={styles.hotelImage} />
              <p>{selectedHotel.location}</p>
              <p>{selectedHotel.stars} Estrellas</p>
              <p>{selectedHotel.price} USD por noche</p>
              <p>Fechas: {checkInDate} - {checkOutDate}</p>
              <div style={styles.modalButtons}>
                <button onClick={handleReserve} style={styles.reserveButton}>Reservar ahora</button>
                <button onClick={() => setSelectedHotel(null)} style={styles.closeButton}>Cerrar</button>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer style={styles.footer}>
        <p>© 2024 PillowQuest - Comparador de Hoteles. Todos los derechos reservados.</p>
        <p>Prohíbese el expendio de bebidas embriagantes a menores de edad</p>
        <p>PillowQuest, Kesselstraße 5 - 7, 42521 Düsseldorf, Rusian</p>
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
  nav: {
    display: 'flex',
    gap: '30px',
  },
  navLink: {
    fontSize: '1.5em',
    color: '#F2ECD8',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  authButtons: {
    display: 'flex',
    gap: '30px',
    marginRight: '20px',
  },
  authButtonsContainer: {
    display: 'flex',
    gap: '10px',
  },
  main: {
    padding: '40px 20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
    backgroundColor: '#0066cc',
    color: '#ffffff',
  },
  buttonHover: {
    backgroundColor: '#005bb5', 
    transform: 'scale(1.05)',
  },
  loginButton: {
    fontFamily: "'Lato'",
    backgroundColor: '#28a745', 
  },
  loginButtonHover: {
    fontFamily: "'Lato'",
    backgroundColor: '#218838', 
  },
  registerButton: {
    fontFamily: "'Lato'",
    backgroundColor: '#ffc107', 
  },
  registerButtonHover: {
    fontFamily: "'Lato'",
    backgroundColor: '#e0a800', 
  },
  logoutButton: {
    fontFamily: "'Lato'",
    backgroundColor: '#dc3545', 
  },
  logoutButtonHover: {
    backgroundColor: '#c82333', 
    fontFamily: "'Lato'",
  },
  userInitial: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px', 
  },
  userIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '50%', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
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
  },
  searchSection: {
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '1em',
    margin: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  searchBar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  label: {
    fontSize: '1.2em',
    marginBottom: '8px',
    color: '#2C3E50',
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
  },
  filterPanel: {
    width: '30%',
    maxHeight: '180px',
    overflowY: 'auto',
    padding: '20px',
    backgroundColor: '#34495E',
    borderRadius: '8px',
    marginRight: '20px',
  },
  filterContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  filterOption: {
    marginBottom: '15px',
  },
  filterInput: {
    marginTop: '5px',
    padding: '5px',
    width: '100%',
    fontSize: '1em',
    borderRadius: '5px',
  },
  starRating: {
    display: 'flex',
    gap: '5px',
    marginTop: '10px',
  },
  results: {
    flexGrow: 1,
  },
  hotelList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  hotel: {
    backgroundColor: '#2C3E50',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
  },
  hotelImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  hotelName: {
    fontSize: '1.2em',
    marginTop: '15px',
    fontWeight: 'bold',
  },
  hotelInfo: {
    marginTop: '10px',
    fontSize: '1.2em',
    color: '#E8E8E8',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#2C3E50',
    padding: '30px',
    borderRadius: '8px',
    textAlign: 'center',
    width: '80%',
    fontSize: '1.2em',
    maxWidth: '400px',
  },
  modalButtons: {
    display: 'flex',
    justifyContent: 'center', 
    gap: '50px', 
    marginTop: '10px', 
  },
  reserveButton: {
    backgroundColor: '#99BFBB',
    color: '#2C3E50',
    border: 'none',
    padding: '10px 5px',
    fontFamily: "'Lato'",
    fontSize: '1.2em',
    borderRadius: '5px',
    flex: 1, 
    maxWidth: '100px', 
    textAlign: 'center',
  },
  
  closeButton: {
    backgroundColor: '#99BFBB',
    color: '#2C3E50',
    border: 'none',
    padding: '10px 15px',
    fontFamily: "'Lato'",
    fontSize: '1.5em',
    borderRadius: '5px',
    flex: 1,
    maxWidth: '100px',
    textAlign: 'center',
  },
  footer: {
    fontSize: '1.3em',
    backgroundColor: '#2C3E50',
    color: '#F2ECD8',
    padding: '20px 0',
    textAlign: 'center',
  },
};

export default Principal;
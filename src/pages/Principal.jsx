import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HotelSearch from '../components/HotelSearch';

const Ppal = () => {
  const [showFilters, setShowFilters] = React.useState(false);
  const [priceRange, setPriceRange] = React.useState(1500); 
  const [starRating, setStarRating] = React.useState('1'); 
  const [selectedHotel, setSelectedHotel] = React.useState(null);
  const [destination, setDestination] = React.useState('');
  const [checkInDate, setCheckInDate] = React.useState('');
  const [checkOutDate, setCheckOutDate] = React.useState('');

  const handleHotelClick = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleFilterChange = (e) => {
    if (e.target.name === 'priceRange') {
      setPriceRange(e.target.value);
    } else if (e.target.name === 'starRating') {
      setStarRating(e.target.value);
    }
  };

  const handleSearch = () => {
    const filteredHotels = hotels.filter(hotel => 
      hotel.location.toLowerCase().includes(destination.toLowerCase()) || 
      hotel.name.toLowerCase().includes(destination.toLowerCase())
    );
    <HotelSearch /> 
  };
  

  const hotels = [
    { name: 'Sofitel Legend Santa Clara', location: 'Cartagena', stars: 5, price: 1000, image: 'imagenes/Hotel1.jpg' },
    { name: 'Grand Hyatt', location: 'Bogotá', stars: 4, price: 100, image: 'imagenes/Hotel2.jpg' },
    { name: 'Four Seasons Hotel Casa Medina', location: 'Bogotá', stars: 5, price: 1500, image: 'imagenes/Hotel3.jpg'},
    { name: 'Conrad', location: 'Cartagena', stars: 4.5, price: 480, image: 'imagenes/Hotel4.jpg'},
    { name: 'Lofuers', location: 'Blanc', stars: 3.5, price: 700, image: 'imagenes/Hotel5.jpg'},
    { name: 'Migdar', location: 'DESDE', stars: 4, price: 400, image: 'imagenes/Hotel6.jpg'},
  ];

  const filteredHotels = hotels.filter(hotel => {
    return (
      hotel.price <= priceRange && 
      (starRating ? hotel.stars >= parseFloat(starRating) : true)
    );
  });

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <div style={styles.logo}>
          <Link to="/" style={styles.logoLink}>PillowQuest</Link>
        </div>
        <nav style={styles.nav}>
          <Link to="/Principal" style={styles.navLink}>Inicio</Link>
          <Link to="/Ofertas" style={styles.navLink}>Ofertas</Link>
          <Link to="/Contactos" style={styles.navLink}>Contacto</Link>
          <Link to="/AcercaDe" style={styles.navLink}>Acerca de Nosotros</Link>
          <Link to="/Test" style={styles.navLink}>Test</Link>
          <Link to="/Profile" style={styles.navLink}>Profile</Link>
        </nav>
        <div style={styles.authButtons}>
          <Link to="/Register" style={styles.authButton}>Register</Link>
          <Link to="/Login" style={styles.authButton}>Login</Link>
        </div>
      </header>

      <main style={styles.main}>
        <section style={styles.searchSection}>
          <h1 style={styles.title}>Compara precios de hoteles alrededor del mundo</h1>
          <div style={styles.searchBar}>
            <input 
              type="text" 
              placeholder="Destino" 
              style={styles.input} 
              value={destination}
              onChange={(e) => setDestination(e.target.value)} 
            />
            <input 
              type="date" 
              placeholder="Check-in" 
              style={styles.input} 
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)} 
            />
            <input 
              type="date" 
              placeholder="Check-out" 
              style={styles.input} 
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)} 
            />
            <button style={styles.searchButton} onClick={handleSearch}>Buscar</button>
          </div>
        </section>

        <div style={styles.filterButtonContainer}>
          <button onClick={() => setShowFilters(!showFilters)} style={styles.filterButton}>
            {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
          </button>
        </div>
        {showFilters && (
          <motion.div
            style={styles.filterPanel}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 style={styles.filterTitle}>Filtros</h3>
            <div style={styles.filterOption}>
              <label>Rango de Precio: {priceRange} USD</label>
              <input
                type="range"
                min="50"
                max="1500"
                value={priceRange}
                name="priceRange"
                onChange={handleFilterChange}
                style={styles.filterInput}
              />
            </div>
            <div style={styles.filterOption}>
              <label>Clasificación de Estrellas: {starRating} Estrellas</label>
              <input
                type="range"
                min="1"
                max="5"
                value={starRating}
                name="starRating"
                onChange={handleFilterChange}
                style={styles.filterInput}
              />
            </div>
          </motion.div>
        )}
  
        <section style={styles.results}>
          <h2 style={styles.subtitle}>Resultados de búsqueda</h2>
          <div style={styles.hotelList}>
            {filteredHotels.map((hotel, index) => (
              <motion.div
                key={index}
                style={styles.hotel}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => handleHotelClick(hotel)}
              >
                <img src={hotel.image} alt={hotel.name} style={styles.hotelImage} />
                <h3 style={styles.hotelName}>{hotel.name} ({hotel.location})</h3>
                <p style={styles.hotelInfo}>Reputación: {hotel.stars} Estrellas</p>
                <p style={styles.hotelInfo}>{hotel.price} USD por noche</p>
              </motion.div>
            ))}
          </div>
        </section>

        {selectedHotel && (
          <div style={styles.modal}>
            <div style={styles.modalContent}>
              <h2>{selectedHotel.name} - Detalles</h2>
              <img src={selectedHotel.image} alt={selectedHotel.name} style={styles.hotelImage} />
              <p>{selectedHotel.location}</p>
              <p>{selectedHotel.stars} Estrellas</p>
              <p>{selectedHotel.price} USD por noche</p>
              <p>Fechas: {checkInDate} - {checkOutDate}</p>
              <button onClick={() => {
                alert(`Reservando ${selectedHotel.name} del ${checkInDate} al ${checkOutDate}`);
              }} style={styles.reserveButton}>Reservar ahora</button>
              <button onClick={() => setSelectedHotel(null)} style={styles.closeButton}>Cerrar</button>
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
    background: 'linear-gradient(to bottom, #284B59, #254559)',
    fontFamily: "'Lato', sans-serif",
    color: '#F2ECD8',
    padding: 0,
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#2C3E50',
  },
  logo: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  logoLink: {
    color: '#A7D9D4',
    textDecoration: 'none',
    fontFamily: "'Playfair Display', serif",
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    color: '#F2ECD8',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  authButtons: {
    display: 'flex',
    gap: '10px',
  },
  authButton: {
    backgroundColor: '#99BFBB',
    color: '#2C3E50',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  main: {
    padding: '50px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  searchSection: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  title: {
    fontSize: '2.5em',
    marginBottom: '20px',
    fontFamily: "'Playfair Display', serif",
  },
  searchBar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  input: {
    padding: '10px',
    fontSize: '1em',
    borderRadius: '5px',
    border: 'none',
  },
  searchButton: {
    backgroundColor: '#99BFBB',
    color: '#2C3E50',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '1em',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  filterButtonContainer: {
    display: 'flex',
    justifyContent: 'center', 
    marginTop: '20px',
  },
  filterButton: {
    padding: '10px 20px',
    backgroundColor: '#99BFBB',
    color: '#2C3E50',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
  filterPanel: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#34495E',
    borderRadius: '8px',
  },
  filterTitle: {
    fontSize: '1.2em',
    marginBottom: '20px',
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
  results: {
    marginTop: '50px',
  },
  subtitle: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  hotelList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  hotel: {
    backgroundColor: '#2C3E50',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s',
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
    fontSize: '1em',
  },
  hotelLink: {
    marginTop: '15px',
    display: 'block',
    color: '#A7D9D4',
    fontWeight: 'bold',
    textDecoration: 'none',
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
    maxWidth: '500px',
  },
  reserveButton: {
    backgroundColor: '#99BFBB',
    color: '#2C3E50',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1.2em',
    marginTop: '20px',
    marginRight: '10px',
    borderRadius: '5px',
  },
  closeButton: {
    backgroundColor: '#A7D9D4',
    color: '#2C3E50',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1.2em',
    marginTop: '20px',
    marginBottom: '10px',
    borderRadius: '5px',
  },
  
  footer: {
    backgroundColor: 'black',
    color: '#F2ECD8',
    padding: '20px 0',
    textAlign: 'center',
  },
};

export default Ppal;
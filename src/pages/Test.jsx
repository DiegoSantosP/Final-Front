import React, { useState } from 'react';

const hotels = [
  {
    name: 'Eden Roc Cap Cana',
    price: 4736.296,
    rating: 9.7,
    reviews: 2624,
    imageUrl: 'https://images.unsplash.com/photo-1563381202-6353f118e931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Impresionantes vistas al mar, Comunidad cerrada con servicios de clase mundial, Playa Bávaro, a 24.5 km de: Centro de la ciudad',
  },
  {
    name: 'Grand Hyatt',
    price: 450,
    rating: 8.9,
    reviews: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1606149754266-9e3e67d5e5be?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDJ8fGdyYW5kJTIwaHlhdHR8ZW58MHx8fHwxNjc4NzI0NzI5&ixlib=rb-4.0.3&q=80&w=1080',
    description: 'Ubicado en el centro de la ciudad, cercano a restaurantes, bares y centros comerciales.',
  },
];

const filters = [
  { name: 'Recomendados', isActive: true },
  { name: 'Precio', isActive: false },
  { name: 'Puntuación', isActive: false },
  { name: 'Tipo de alojamiento', isActive: false },
  { name: 'Ubicación', isActive: false },
];

const Test = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = (filterName) => {
    setActiveFilter(activeFilter === filterName ? null : filterName);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUserName('Marcos'); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const filteredHotels = hotels.filter(hotel =>
    hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderHotels = filteredHotels.map((hotel, index) => (
    <div key={index} style={styles.hotel}>
      <img src={hotel.imageUrl} alt={hotel.name} style={styles.hotelImage} />
      <h3 style={styles.hotelName}>{hotel.name}</h3>
      <p style={styles.hotelInfo}>{hotel.description}</p>
      <p style={styles.hotelInfo}>$ {hotel.price} USD por noche</p>
      <p style={styles.hotelInfo}>Puntuación: {hotel.rating} ({hotel.reviews} reseñas)</p>
      <a href="#" style={styles.hotelLink}>Ver más</a>
    </div>
  ));

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <div style={styles.logo}>
          <a href="/" style={styles.logoLink}>PillowQuest</a>
        </div>
        <nav style={styles.nav}>
          <a href="/Principal" style={styles.navLink}>Inicio</a>
          <a href="/ofertas" style={styles.navLink}>Ofertas</a>
          <a href="/contactos" style={styles.navLink}>Contacto</a>
          <a href="/acerca" style={styles.navLink}>Acerca de</a>
        </nav>
        <div style={styles.authSection}>
          {isLoggedIn ? (
            <div style={styles.userProfileContainer}>
              <div style={styles.avatar} onClick={toggleProfileMenu}>
                <span>{userName[0]}</span> {/* First letter of the username */}
              </div>
              {showProfileMenu && (
                <div style={styles.profileMenu}>
                  <p href="/Profile" style={styles.profileMenuItem}>Ver perfil</p>
                  <p style={styles.profileMenuItem} onClick={handleLogout}>Cerrar sesión</p>
                </div>
              )}
            </div>
          ) : (
            <div style={styles.authButtons}>
              <button onClick={handleLogin} href="/Login" style={styles.authButton}>Login</button>
              <button href="/Register"style={styles.authButton}>Registrar</button>
            </div>
          )}
        </div>
      </header>

      <main style={styles.main}>
        <section style={styles.searchSection}>
          <input
            type="text"
            placeholder="Buscar hotel..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={styles.input}
          />
          <div style={styles.filterSection}>
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => handleFilterClick(filter.name)}
                style={styles.filterButton}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </section>

        <section style={styles.results}>
          <h2>Resultados de búsqueda</h2>
          <div style={styles.hotelList}>
            {renderHotels}
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>© 2024 PillowQuest - Comparador de Hoteles. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

const styles = {
  body: {
    background: '#F4F6F8',
    fontFamily: 'Arial, sans-serif',
    padding: '0',
    margin: '0',
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
  authSection: {
    display: 'flex',
    alignItems: 'center',
  },
  authButtons: {
    display: 'flex',
    gap: '10px',
  },
  authButton: {
    backgroundColor: '#99BFBB',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  userProfileContainer: {
    position: 'relative',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#F2ECD8',
    color: '#2C3E50',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    cursor: 'pointer',
  },
  profileMenu: {
    position: 'absolute',
    top: '50px',
    right: '0',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    padding: '10px',
  },
  profileMenuItem: {
    margin: '10px 0',
    cursor: 'pointer',
  },
  main: {
    padding: '20px',
  },
  searchSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '1em',
    borderRadius: '5px',
    border: '1px solid #ddd',
    width: '100%',
  },
  filterSection: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  filterButton: {
    padding: '8px 16px',
    backgroundColor: '#A7D9D4',
    border: 'none',
    borderRadius: '20px',
    color: '#2C3E50',
    cursor: 'pointer',
  },
  hotelList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  hotel: {
    backgroundColor: '#fff',
    width: '300px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    padding: '10px',
  },
  hotelImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  hotelName: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    marginTop: '10px',
  },
  hotelInfo: {
    margin: '5px 0',
    fontSize: '0.9em',
    color: '#555',
  },
  hotelLink: {
    marginTop: '10px',
    textDecoration: 'none',
    color: '#2C3E50',
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#2C3E50',
    color: '#fff',
  },
};

export default Test;

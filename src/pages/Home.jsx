import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    const hotels = [
        {
          title: 'Referencia A',
          info: 'Ubicado en el centro de la ciudad, cerca de las principales atracciones.',
          image: '/imagenes/Reference1.jpg', 
        },
        {
          title: 'Referencia B',
          info: 'Un hotel de lujo con spa y piscina, ideal para relajarse.',
          image: '/imagenes/Reference2.jpg', 
        },
        {
          title: 'Referencia C',
          info: 'Perfecto para familias, con habitaciones amplias y actividades para niños.',
          image: '/imagenes/Reference3.jpg', 
        },
    ];

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <div style={styles.logo}>PillowQuest</div>
        <nav style={styles.nav}>
        </nav>
        <div style={styles.icon}>
          <img 
            src="imagenes/Logo.jpg" 
            alt="Logo de PillowQuest" 
            style={styles.logoImage}
          />
        </div>
      </header>

      <main style={styles.main}>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={styles.bienvenido}
        >
          <h1 style={styles.title}>¡¡ Bienvenido !!</h1>
          <p style={styles.subText}>Explora nuestros hoteles y encuentra la mejor opción para ti.</p>
        </motion.div>

        <div style={styles.cards}>
          {hotels.map((hotel, index) => (
            <motion.div 
              key={index} 
              style={styles.card}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div style={styles.cardImageContainer}>
                <img src={hotel.image} alt={hotel.title} style={styles.cardImage} />
              </div>
              <h2 style={styles.cardTitle}>{hotel.title}</h2>
              <p style={styles.cardInfo}>{hotel.info}</p>
            </motion.div>
          ))}
        </div>

        <Link to="./Principal">
          <motion.button 
            style={styles.button}
            whileHover={{ 
              backgroundColor: '#1a2530',
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
          >
            Reservar Ahora
          </motion.button>
        </Link>
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
    color: '#A7D9D4',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 'bold',
  },
  nav: {
    flexGrow: 1,
  },
  icon: {
    color: '#A7D9D4',
  },
  logoImage: {
    width: '75px',
    height: '75px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  main: {
    textAlign: 'center',
    padding: '50px 20px',
  },
  bienvenido: {
    marginBottom: '30px',
  },
  title: {
    fontSize: '2.5em',
    fontFamily: "'Playfair Display', serif",
    marginBottom: '10px',
  },
  subText: {
    fontSize: '1.2em',
    color: '#F2ECD8',
  },
  cards: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '30px',
    flexWrap: 'wrap',
  },
  card: {
    background: '#99BFBB',
    color: '#23282b',
    padding: '20px',
    borderRadius: '10px',
    width: '30%',
    textAlign: 'center',
    marginBottom: '20px',
  },
  cardImageContainer: {
    width: '100%',
    height: '250px',
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '0 auto 10px',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardTitle: {
    fontSize: '1.5em',
    margin: '10px 0',
    fontFamily: "'Playfair Display', serif",
  },
  cardInfo: {
    fontSize: '1em',
  },
  button: {
    backgroundColor: '#2C3E50',
    color: '#F2ECD8',
    border: 'none',
    padding: '15px 30px',
    fontSize: '1em',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    borderRadius: '25px',
    fontFamily: "'Lato', sans-serif",
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'black',
    color: '#F2ECD8',
    fontFamily: "'Lato', sans-serif",
  },
};

export default Home;
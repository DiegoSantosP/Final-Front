import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Ofertas = () => {
  const ofertas = [
    {
      title: 'Oferta Especial A',
      description: 'Aprovecha un descuento del 30% en tu estancia este mes.',
      image: '/imagenes/Promo1.jpg',
    },
    {
      title: 'Oferta Especial B',
      description: 'Paquete todo incluido para una estancia de lujo.',
      image: '/imagenes/Promo2.jpg',
    },
    {
      title: 'Oferta Especial C',
      description: 'Escapada romántica con cena para dos incluida.',
      image: '/imagenes/Promo3.jpg',
    },
  ];

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <Link to="/Principal" style={styles.logo}>PillowQuest</Link> 
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
          <h1 style={styles.title}>Ofertas Especiales</h1>
          <p style={styles.subText}>
            Disfruta de nuestras increíbles ofertas y ahorra en tu próxima estancia.
          </p>
        </motion.div>

        <div style={styles.cards}>
          {ofertas.map((oferta, index) => (
            <motion.div
              key={index}
              style={styles.card}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div style={styles.cardImageContainer}>
                <img
                  src={oferta.image}
                  alt={oferta.title}
                  style={styles.cardImage}
                />
              </div>
              <h2 style={styles.cardTitle}>{oferta.title}</h2>
              <p style={styles.cardDescription}>{oferta.description}</p>
              <Link to="/Principal">
                <motion.button
                  style={styles.button}
                  whileHover={{
                    backgroundColor: '#99BFBB',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Oferta
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
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
    background: '#E8E8E8',
    fontFamily: "'Lato'",
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
    color: '#E8E8E8',
    fontFamily: "'Lato'",
    fontSize: '2.5em',
    fontWeight: 'bold',
    textDecoration: 'none',
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
    fontFamily: "'Lato'",
    marginBottom: '10px',
    color: '#000',
  },
  subText: {
    fontSize: '1.2em',
    fontFamily: "'Lato'",
    color: '#000',
  },
  cards: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#2C3E50',
    borderRadius: '15px',
    width: '300px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  cardImageContainer: {
    overflow: 'hidden',
    borderRadius: '10px',
  },
  cardImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  cardTitle: {
    fontSize: '1.6em',
    fontWeight: 'bold',
    margin: '15px 0',
    fontFamily: "'Lato'",
  },
  cardDescription: {
    fontSize: '1em',
    color: '#E8E8E8',
    fontFamily: "'Lato'",
  },
  button: {
    backgroundColor: '#1A2530',
    color: '#D4D4D4',
    border: 'none',
    padding: '15px 30px',
    fontSize: '1em',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    borderRadius: '25px',
    fontFamily: "'Lato'",
  },
  footer: {
    fontFamily: "'Lato'",
    fontSize: '1.3em',
    backgroundColor: '#2C3E50',
    color: '#E8E8E8',
    padding: '20px 0',
    textAlign: 'center',
  },
};

export default Ofertas;

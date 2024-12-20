import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Contactos = () => {
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
          <h1 style={styles.title}>Contacto de la Empresa</h1>
          <p style={styles.subText}>
            Si tienes alguna consulta o deseas obtener más información sobre nuestros servicios, no dudes en ponerte en contacto con nosotros a través de los siguientes medios.
          </p>
        </motion.div>

        <div style={styles.contactoContainer}>
          <motion.div
            style={styles.contactoBox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Dirección:</h2>
            <p>PillowQuest, Kesselstraße 5 - 7, 42521 Düsseldorf, Rusian</p>
          </motion.div>

          <motion.div
            style={styles.contactoBox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Teléfono:</h2>
            <p>+49 123 456 789</p>
          </motion.div>

          <motion.div
            style={styles.contactoBox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Email:</h2>
            <p>contacto@pillowquest.com</p>
          </motion.div>
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
    fontFamily: "'Lato'",
    marginBottom: '30px',
  },
  title: {
    fontSize: '2.5em',
    fontFamily: "'Lato'",
    marginBottom: '10px',
    color: '#000',

  },
  subText: {
    fontFamily: "'Lato'",
    fontSize: '1.2em',
    color: '#000',
  },
  contactoContainer: {
    fontFamily: "'Lato'",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    marginTop: '40px',
  },
  contactoBox: {
    fontFamily: "'Lato'",
    backgroundColor: '#2C3E50',
    padding: '20px',
    width: '80%',
    maxWidth: '600px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    fontFamily: "'Lato'",
    fontSize: '1.3em',
    backgroundColor: '#2C3E50',
    color: '#F2ECD8',
    padding: '20px 0',
    textAlign: 'center',
  },
};

export default Contactos;

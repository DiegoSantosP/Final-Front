import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AcercaDe = () => {
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
        <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} style={styles.bienvenido}>
          <h1 style={styles.title}>Acerca de PillowQuest</h1>
          <p style={styles.subText}>
            PillowQuest es una empresa dedicada a la creación de soluciones innovadoras
            en la industria del turismo. Nuestro objetivo es proporcionar a los viajeros
            una experiencia personalizada y única a través de nuestra plataforma de comparación
            de hoteles, asegurando la mejor calidad y las mejores ofertas en alojamiento.
          </p>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>Nuestra Misión</h2>
          <p style={styles.text}>
            En PillowQuest, nos comprometemos a ofrecer a los viajeros las mejores opciones
            de alojamiento, ayudándolos a encontrar lugares cómodos y accesibles que se adapten
            a sus necesidades. Creemos en la innovación constante para mejorar la experiencia de
            cada usuario en su proceso de búsqueda y reserva de hospedaje.
          </p>
        </section>
        

        <section style={styles.section}>
          <h2 style={styles.subtitle}>Nuestra Visión</h2>
          <p style={styles.text}>
            Ser una empresa líder en el mercado de la tecnología aplicada al turismo,
            transformando la manera en que los viajeros eligen sus destinos y se hospedan.
            Aspiramos a ser reconocidos por nuestra confiabilidad, innovación y compromiso con
            la excelencia.
          </p>
        </section>
        </motion.div>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>Nuestros Valores</h2>
          <ul style={styles.valuesList}>
            <li>Compromiso con la excelencia.</li>
            <li>Innovación constante.</li>
            <li>Atención personalizada.</li>
            <li>Transparencia y confianza.</li>
          </ul>
        </section>
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
    margin: 0,
    minHeight: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#2C3E50',
    margin: 0, 
  },
  logo: {
    fontSize: '1.5em',
    color: '#A7D9D4',
    fontFamily: "'Playfair Display', serif",
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
    margin: 0, 
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
    marginBottom: '0', 
  },
  section: {
    margin: '40px 0',
    padding: 0, 
  },
  subtitle: {
    fontSize: '2em',
    color: '#A7D9D4',
    fontFamily: "'Playfair Display', serif",
    marginBottom: '15px',
  },
  text: {
    fontSize: '1.2em',
    color: '#F2ECD8',
    textAlign: 'left',
    lineHeight: '1.6',
    margin: 0,
  },
  valuesList: {
    listStyleType: 'none',
    paddingLeft: '0',
    fontSize: '1.2em',
    color: '#F2ECD8',
    margin: 0, 
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'black',
    color: '#F2ECD8',
    fontFamily: "'Lato', sans-serif",
    margin: 0, 
  },
};

export default AcercaDe;

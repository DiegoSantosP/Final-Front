import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AcercaDe = () => {
  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <Link to="/Principal" style={styles.logo}>PillowQuest</Link>
        <div style={styles.icon}>
          <img src="imagenes/Logo.jpg" alt="Logo de PillowQuest" style={styles.logoImage} />
        </div>
      </header>

      <main style={styles.main}>
        <AnimatedSection title="Acerca de PillowQuest">
          <p style={styles.subText}>
            PillowQuest es una empresa pionera en la creación de soluciones innovadoras en la industria del turismo. Nuestro objetivo es proporcionar a los viajeros una experiencia excepcional y única a través de nuestra avanzada plataforma de comparación de hoteles, garantizando la mejor calidad y las ofertas más competitivas en alojamiento.
          </p>
        </AnimatedSection>

        <AnimatedSection title="Nuestra Misión">
          <p style={styles.text}>
            En PillowQuest, nos comprometemos a ofrecer a los viajeros las mejores opciones de alojamiento, facilitando la búsqueda de lugares cómodos y accesibles que se adapten a sus necesidades. Creemos firmemente en la innovación constante para enriquecer la experiencia de cada usuario en su proceso de búsqueda y reserva de hospedaje.
          </p>
        </AnimatedSection>

        <AnimatedSection title="Nuestra Visión">
          <p style={styles.text}>
            Aspiramos a ser una empresa líder en el mercado de la tecnología aplicada al turismo, revolucionando la forma en que los viajeros seleccionan sus destinos y se hospedan. Nos proponemos ser reconocidos por nuestra confiabilidad, innovación y un firme compromiso con la excelencia.
          </p>
        </AnimatedSection>

        <AnimatedSection title="Nuestros Valores">
          <ul style={styles.valuesList}>
            <li>Compromiso con la excelencia.</li>
            <li>Innovación constante.</li>
            <li>Atención personalizada.</li>
            <li>Transparencia y confianza.</li>
          </ul>
        </AnimatedSection>
      </main>

      <footer style={styles.footer}>
        <p>© 2024 PillowQuest - Comparador de Hoteles. Todos los derechos reservados.</p>
        <p>Prohíbese el expendio de bebidas embriagantes a menores de edad</p>
        <p>PillowQuest, Kesselstraße 5 - 7, 42521 Düsseldorf, Rusian</p>
      </footer>
    </div>
  );
};

const AnimatedSection = ({ title, children }) => {
  return (
    <section style={styles.section}>
      <h2 style={styles.subtitle}>{title}</h2>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={styles.contentBox}
      >
        {children}
      </motion.div>
    </section>
  );
};

const styles = {
  body: {
    background: '#E8E8E8',
    fontFamily: "'Lato'",
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
  },
  logo: {
    color: '#E8E8E8',
    fontFamily: "'Playfair Display', serif",
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
    margin: 0,
  },
  subText: {
    fontSize: '1.2em',
    color: '# E8E8E8',
    marginBottom: '0',
  },
  section: {
    margin: '40px 0',
    padding: 0,
  },
  subtitle: {
    fontSize: '2em',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: '15px',
  },
  contentBox: { 
    backgroundColor: '#2C3E50',
    padding: '20px',
    borderRadius: '8px',
    color: '#E8E8E8',
  },
  text: {
    fontSize: '1.2em',
    color: '#E8E8E8',
    textAlign: 'justify',
    lineHeight: '1.6',
    margin: 0,
  },
  valuesList: {
    listStyleType: 'none',
    paddingLeft: '0',
    fontSize: '1.2em',
    color: '#E8E8E8',
    margin: 0,
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

export default AcercaDe;
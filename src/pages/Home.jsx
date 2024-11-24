import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const popularHotels = [
    {
      title: 'Gran Palacio de Costa Blanca',
      info: 'Relájate en la cima del lujo frente al mar.',
      image: '/imagenes/Reference6.jpg',
    },
    {
      title: 'Hotel Mirador del Lujo',
      info: 'Un refugio de elegancia conjunto al glamour.',
      image: '/imagenes/Reference2.jpg',
    },
    {
      title: 'The Royal Bay Resort',
      info: 'Lujo sin límites en el paraíso tropical.',
      image: '/imagenes/Reference3.jpg',
    },
    {
      title: 'Palacio Sereno',
      info: 'Donde la historia se encuentra con el confort moderno.',
      image: '/imagenes/Reference4.jpg',
    },
    {
      title: 'Hotel Isla de los Cielos',
      info: 'Exclusividad y serenidad en una zona privada.',
      image: '/imagenes/Reference5.jpg',
    },
    {
      title: 'Le Château du Luxe',
      info: 'Donde la nobleza encuentra el confort moderno.',
      image: '/imagenes/Reference1.jpg',
    },
  ];

  const recurrentHotels = [
    {
      title: 'La Perla del Glamour',
      info: 'Un oasis de tranquilidad y lujo junto al mar.',
      image: '/imagenes/Reference2.jpg',
    },
    {
      title: 'Villa Étoile',
      info: 'Un retiro de lujo en el corazón de la ciudad.',
      image: '/imagenes/Reference4.jpg',
    },
    {
      title: 'The Majestic Sands Resort',
      info: 'Un refugio costero que redefine el lujo.',
      image: '/imagenes/Reference5.jpg',
    },
    {
      title: 'Hotel Palacio Imperial',
      info: 'Un viaje al lujo y la elegancia imperial.',
      image: '/imagenes/Reference6.jpg',
    },
    {
      title: 'The Emerald Lagoon Resort',
      info: 'Donde el lujo se encuentra con la naturaleza.',
      image: '/imagenes/Reference1.jpg',
    },
    {
      title: 'Hotel Altura Dorada',
      info: 'Vistas infinitas y lujo a gran altura.',
      image: '/imagenes/Reference7.jpg',
    },
  ];

  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate('/Principal');
    window.scrollTo(0, 0);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div style={styles.body}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>¡¡ Bienvenido !!</div>
        <div style={styles.icon}>
          <img
            src="imagenes/Logo.jpg"
            alt="Logo de PillowQuest"
            style={styles.logoImage}
          />
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        {/* Welcome Section */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={styles.bienvenido}
        >
          <h1 style={styles.title}>PillowQuest</h1>
          <p style={styles.subText}>
            Explora nuestros hoteles y encuentra la mejor opción para ti.
          </p>
        </motion.div>

        {/* Popular Hotels Carousel */}
        <section>
          <h2 style={styles.carouselTitle}>Populares</h2>
          <Slider {...settings}>
            {popularHotels.map((hotel, index) => (
              <div key={index} style={styles.carouselSlide}>
                <div style={styles.card}>
                  <img
                    src={hotel.image}
                    alt={hotel.title}
                    style={styles.carouselImage}
                  />
                  <h2 style={styles.cardTitle}>{hotel.title}</h2>
                  <p style={styles.cardInfo}>{hotel.info}</p>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        {/* Recurrent Hotels */}
        <section>
          <h2 style={styles.carouselTitle}>Recurrentes</h2>
          <div style={styles.cardContainer}>
            {recurrentHotels.map((hotel, index) => (
              <div key={index} style={styles.card}>
                <img
                  src={hotel.image}
                  alt={hotel.title}
                  style={styles.carouselImage}
                />
                <h2 style={styles.cardTitle}>{hotel.title}</h2>
                <p style={styles.cardInfo}>{hotel.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reservation Button */}
        <div style={styles.buttonContainer}>
          <motion.button
            style={styles.button}
            onClick={handleReservationClick}
            whileHover={{
              backgroundColor: '#1a2530',
              boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
          >
            Reservar Ahora
          </motion.button>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2024 PillowQuest - Comparador de Hoteles. Todos los derechos reservados.</p>
        <p>Prohíbese el expendio de bebidas embriagantes a menores de edad</p>
        <p>PillowQuest, Kesselstraße 5 - 7, 42521 Düsseldorf, Rusian</p>
      </footer>
    </div>
  );
};

// Custom Arrow Components
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-next"
      onClick={onClick}
      style={{ ...arrowStyles, right: '10px' }}
    >
      ➜
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev"
      onClick={onClick}
      style={{ ...arrowStyles, left: '10px' }}
    >
      ➜
    </div>
  );
};

const arrowStyles = {
  backgroundColor: '#2C3E50',
  color: '#F2ECD8',
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: 1,
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
    fontFamily: "'Lato'",
  },
  logo: {
    fontSize: '2em', 
    color: '#fff',
    fontFamily: "'Lato'",
    fontWeight: 'bold',
    textAlign: 'center', 
    justifyContent: 'center', 
    alignItems: 'center', 
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
    color: '#000',
    fontSize: '5em',
    fontFamily: "'Lato'",
    marginBottom: '10px',
  },
  subText: {
    fontSize: '1.7em',
    color: '#000',
  },
  carouselTitle: {
    fontSize: '2em',
    margin: '40px 0 20px',
    color: '#000',
  },
  carouselSlide: {
    marginTop: '70px',
    textAlign: 'center',
    margin: '0 auto',
  },
  carouselImage: {
    width: '100%',
    height: '180px',
    borderRadius: '10px',
    objectFit: 'cover',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 20px',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  card: {
    backgroundColor: '#2C3E50',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '15px',
    maxWidth: '220px',
    margin: '10px',
  },
  cardTitle: {
    fontSize: '1.3em',
    margin: '10px 0',
    fontFamily: "'Lato'",
  },
  cardInfo: {
    fontSize: '0.9em',
  },
  button: {
    backgroundColor: '#2C3E50',
    color: '#F2ECD8',
    border: 'none',
    marginTop: '70px',
    padding: '15px 30px',
    fontSize: '1em',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    borderRadius: '25px',
    fontFamily: "'Lato'",
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#2C3E50',
    color: '#F2ECD8',
    fontFamily: "'Lato'",
  },
};

export default Home;
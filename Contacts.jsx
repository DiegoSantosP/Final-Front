import React from 'react';
import styled from 'styled-components';

const AboutUs = () => {
  return (
    <Container>
      {/* Espacio para el ícono */}
      <IconSpace>
        {/* Aquí puedes agregar el componente de ícono */}
      </IconSpace>

      <h2>Acerca de Nosotros</h2>
      <p>
        Somos una empresa comprometida con ofrecer los mejores servicios de alojamiento. Con años de experiencia en la industria,
        nos dedicamos a garantizar una experiencia cómoda y memorable para todos nuestros huéspedes. Nos enorgullece trabajar con
        estándares de calidad que superan las expectativas, brindando un servicio personalizado y enfocado en el detalle.
      </p>
      <p>
        Nuestro equipo está formado por profesionales apasionados que entienden la importancia de crear un ambiente acogedor.
        Nos esforzamos por mantener una relación cercana con nuestros clientes, y siempre estamos dispuestos a escuchar y adaptarnos
        a sus necesidades.
      </p>
      <p>
        Nos encontramos en diversas ciudades alrededor del mundo, ofreciendo instalaciones modernas y bien equipadas. Estamos
        comprometidos con la sostenibilidad y nos aseguramos de implementar prácticas que respeten el medio ambiente.
      </p>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const IconSpace = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: #e0e0e0; /* Espacio para el ícono, puedes cambiar el color de fondo o agregar un borde */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export default AboutUs;
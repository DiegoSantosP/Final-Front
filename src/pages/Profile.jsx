import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaHotel, FaCreditCard, FaPaypal } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const UserProfile = () => {
  const navigate = useNavigate();
  
  const user = {
    name: "Marcos",
    email: "juan.perez@example.com",
    phone: "+57 300 123 4567",
    bookings: [
      {
        id: 1,
        hotelName: "Hotel Caribe",
        checkIn: "2024-12-15",
        checkOut: "2024-12-20",
        status: "Confirmed",
      },
      {
        id: 2,
        hotelName: "Hotel San Carlos",
        checkIn: "2025-01-10",
        checkOut: "2025-01-15",
        status: "Pending",
      },
    ],
    paymentMethods: [
      {
        type: "Credit Card",
        last4: "1234",
        expiration: "12/25",
      },
      {
        type: "Paypal",
        email: "paypaluser@example.com",
      },
    ],
  };

  return (
    <Container>
      <BackButton onClick={() => navigate('/principal')}>⬅ Volver a Principal</BackButton>
      <Box>
        <Title>Perfil del Usuario</Title>

        <Section>
          <SectionTitle><FaUser /> Información Personal</SectionTitle>
          <InfoText><FaUser /> <strong>Nombre:</strong> {user.name}</InfoText>
          <InfoText><FaEnvelope /> <strong>Email:</strong> {user.email}</InfoText>
          <InfoText><FaPhone /> <strong>Teléfono:</strong> {user.phone}</InfoText>
        </Section>

        <Section>
          <SectionTitle><FaHotel /> Reservas</SectionTitle>
          {user.bookings.length ? (
            <List>
              {user.bookings.map((booking) => (
                <ListItem key={booking.id}>
                  <ListItemTitle><FaHotel /> {booking.hotelName}</ListItemTitle>
                  <InfoText><strong>Check-In:</strong> {booking.checkIn}</InfoText>
                  <InfoText><strong>Check-Out:</strong> {booking.checkOut}</InfoText>
                  <InfoText><strong>Estado:</strong> {booking.status}</InfoText>
                </ListItem>
              ))}
            </List>
          ) : (
            <InfoText>No tienes reservas.</InfoText>
          )}
        </Section>

        <Section>
          <SectionTitle><FaCreditCard /> Métodos de Pago</SectionTitle>
          {user.paymentMethods.length ? (
            <List>
              {user.paymentMethods.map((method, index) => (
                <ListItem key={index}>
                  <InfoText><strong>Tipo:</strong> {method.type === "Credit Card" ? <FaCreditCard /> : <FaPaypal />} {method.type}</InfoText>
                  {method.type === "Credit Card" ? (
                    <>
                      <InfoText><strong>Últimos 4 dígitos:</strong> {method.last4}</InfoText>
                      <InfoText><strong>Expiración:</strong> {method.expiration}</InfoText>
                    </>
                  ) : (
                    <InfoText><strong>Email:</strong> {method.email}</InfoText>
                  )}
                </ListItem>
              ))}
            </List>
          ) : (
            <InfoText>No tienes métodos de pago registrados.</InfoText>
          )}
        </Section>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #1A3C40, #254559);
  color: #F2ECD8;
  font-family: 'Lato', sans-serif;
  position: relative;
`;

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: transparent;
  border: none;
  color: #A7D9D4;
  font-size: 1em;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: #F2ECD8;
  }
`;

const Box = styled.div`
  background-color: #1c1c1c;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  width: 100%;
`;

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2em;
  color: #A7D9D4;
  text-align: center;
  margin-bottom: 20px;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 1.5em;
  color: #A7D9D4;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const InfoText = styled.p`
  font-size: 1em;
  color: #F2ECD8;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: #2C3E50;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ListItemTitle = styled.h4`
  font-size: 1.2em;
  color: #A7D9D4;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export default UserProfile;

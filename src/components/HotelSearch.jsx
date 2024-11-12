import React, { useState } from 'react';

const HotelSearch = () => {
  const [destination, setDestination] = useState('');
  const [filteredHotels, setFilteredHotels] = useState(hotels);

  const handleSearch = () => {
    // Filtra los hoteles que coincidan con el nombre o ubicación
    const results = hotels.filter(hotel => 
      hotel.location.toLowerCase().includes(destination.toLowerCase()) || 
      hotel.name.toLowerCase().includes(destination.toLowerCase())
    );
    
    // Actualiza el estado con los resultados filtrados
    setFilteredHotels(results);
  };

  const hotels = [
    { name: 'Sofitel Legend Santa Clara', location: 'Cartagena', stars: 5, price: 1000, image: 'imagenes/Hotel1.jpg' },
    { name: 'Grand Hyatt', location: 'Bogotá', stars: 4, price: 100, image: 'imagenes/Hotel2.jpg' },
    { name: 'Four Seasons Hotel Casa Medina', location: 'Bogotá', stars: 5, price: 1500, image: 'imagenes/Hotel3.jpg' },
    { name: 'Conrad', location: 'Cartagena', stars: 4.5, price: 480, image: 'imagenes/Hotel4.jpg' },
    { name: 'Lofuers', location: 'Blanc', stars: 3.5, price: 700, image: 'imagenes/Hotel5.jpg' },
    { name: 'Migdar', location: 'DESDE', stars: 4, price: 400, image: 'imagenes/Hotel6.jpg' },
  ];

  return (
    <div>
      <input 
        type="text" 
        value={destination} 
        onChange={(e) => setDestination(e.target.value)} 
        placeholder="Buscar por ciudad o hotel" 
      />
      <button onClick={handleSearch}>Buscar</button>

      <div>
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel, index) => (
            <div key={index}>
              <h3>{hotel.name}</h3>
              <p>{hotel.location}</p>
              <p>Estrellas: {hotel.stars}</p>
              <p>Precio: ${hotel.price}</p>
              <img src={hotel.image} alt={hotel.name} />
            </div>
          ))
        ) : (
          <p>No se encontraron hoteles.</p>
        )}
      </div>
    </div>
  );
};

export default HotelSearch;

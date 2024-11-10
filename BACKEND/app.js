import express from "express";
import bodyParser from "body-parser";
import CiudadRoutes from './routes/CiudadRoutes.js'; // Asegúrate de que sea "CiudadRoutes"
import HabitacionRoutes from "./routes/HabitacionRoutes.js";
import HotelRoutes from "./routes/HotelRoutes.js";
import PrecioPorCiudadRoutes from "./routes/PrecioCiudadRoutes.js";
import PuntuacionRoutes from "./routes/PuntuacionRoutes.js";
import ReservaRoutes from "./routes/ReservaRoutes.js";
import UsuarioRoutes from "./routes/UsuarioRoutes.js";
import { sequelize } from "./config/database.js"; 

const app = express();
const PORT = 3000; // Puerto definido en 3000

// Middleware
app.use(bodyParser.json());

// Rutas
app.use("/api/ciudades", CiudadRoutes); // Cambié la ruta a /api/ciudades
app.use('/api/habitaciones', HabitacionRoutes); // Cambié a /api/habitaciones
app.use("/api/hoteles", HotelRoutes);
app.use("/api/preciosPorCiudad", PrecioPorCiudadRoutes);
app.use("/api/puntuaciones", PuntuacionRoutes);
app.use("/api/reservas", ReservaRoutes);
app.use("/api/usuarios", UsuarioRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("API funcionando correctamente.");
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Algo salió mal.");
});

// Sincronización de base de datos y arranque del servidor
sequelize.sync({ force: true }) // Opcional: Elimina tablas existentes
    .then(() => {
        console.log('Base de datos sincronizada');

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch(error => {
        console.error('Error al sincronizar la base de datos', error);
    });

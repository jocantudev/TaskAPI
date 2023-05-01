const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const tareasRoutes = require("./routes/tareas");

// Configuracion lectura de variables de entorno
require("dotenv").config({ path: "./config/.env" });

// Establecer conexion a base de datos
connectDB();

const app = express();
app.use(express.json()); // Requerido para leer json contenido en el body del request.

// Definir ruta de la API
app.use("/api/tareas", tareasRoutes);

// Middleware rutas no defininas
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    menssage: `No se pude encontrar la ruta ${req.originalUrl}`,
  });
});

// Arrancar el servidor
app.listen(process.env.PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${process.env.PORT}`);
});

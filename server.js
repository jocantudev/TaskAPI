const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const tareasRoutes = require("./routes/tareas");

require("dotenv").config({ path: "./config/.env" });

connectDB();

app.use(express.json()); // Requerido para leer json del request.
app.use("/api/tareas", tareasRoutes);

app.listen(process.env.PORT, () => {
  console.log(`El servicor esta corriendo en el puerto ${process.env.PORT}`);
});

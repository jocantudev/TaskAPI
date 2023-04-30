const mongoose = require("mongoose");

const TareaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  completado: {
    type: Boolean,
    required: true,
    default: false,
  },
  fechaEntrega: {
    type: Date,
    required: true,
  },
  comentarios: {
    type: String,
  },
  responsable: {
    type: String,
  },
  tags: {
    type: Array,
  },
  autor: {
    type: String,
    default: "Anonimo",
  },
});

module.exports = mongoose.model("Tarea", TareaSchema);

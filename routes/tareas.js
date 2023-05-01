const express = require("express");
const router = express.Router();
const tareasController = require("../controllers/tareas");

router
  .route("/")
  .get(tareasController.getTareas)
  .post(tareasController.createTarea);

router
  .route("/:id")
  .get(tareasController.getTarea)
  .put(tareasController.updateTarea)
  .delete(tareasController.deleteTarea);

module.exports = router;

const express = require("express");
const router = express.Router();
const tareasController = require("../controllers/tareas");

router.get("/", tareasController.getTareas);
router.get("/:id", tareasController.getTarea);
router.post("/", tareasController.createTarea);
router.put("/:id", tareasController.updateTarea);
router.delete("/:id", tareasController.deleteTarea);

module.exports = router;

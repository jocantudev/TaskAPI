const Tarea = require("../models/Tarea");

module.exports = {
  getTareas: async (req, res) => {
    try {
      const tareas = await Tarea.find().select("-__v");
      res.json(tareas);
    } catch (err) {
      console.log(err);
    }
  },
  getTarea: async (req, res) => {
    try {
      const tarea = await Tarea.findById(req.params.id).select("-__v");
      res.json(tarea);
    } catch (err) {
      console.log(err);
    }
  },
  createTarea: async (req, res) => {
    try {
      await Tarea.create(req.body);
      console.log(req.body);
      console.log("Todo has been added!");
      return res.json(req.body);
      //   res.redirect('/todos')
    } catch (err) {
      console.log(err);
    }
  },
  updateTarea: async (req, res) => {
    try {
      const filter = {
        _id: req.params.id,
      };
      const update = req.body;
      updatedTask = await Tarea.findOneAndUpdate(filter, update, {
        new: true,
      }).select("-__v");
      console.log("Tarea actualizada");
      res.json(updatedTask);
    } catch (err) {
      console.log(err);
    }
  },
  deleteTarea: async (req, res) => {
    try {
      await Tarea.findOneAndDelete({ _id: req.params.id });
      console.log("Tarea borrada");
      res.json("Tarea borrada");
    } catch (err) {
      console.log(err);
    }
  },
};

const express = require("express");
const router = express.Router();
const path = require("path");
const { addRoommate, getRoommates } = require("../controllers/roommates.js");
const {
  addGasto,
  getGastos,
  editarGasto,
  borrarGasto,
} = require("../controllers/gastos.js");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

// Rutas para agregar y ver roommates
router.post("/roommate", addRoommate);
router.get("/roommates", getRoommates);

// Gastos
router.get("/gastos", getGastos);
router.post("/gasto", addGasto);
router.put("/gasto", editarGasto);
router.delete("/gasto", borrarGasto);

module.exports = router;

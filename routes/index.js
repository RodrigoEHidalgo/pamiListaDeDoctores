const express = require("express");
const router = express.Router();

// Ruta principal
router.get("/", (req, res) => {
  const doctors = [
    {
      name: "Generico",
      specialty: "",
      zone: "",
      clinics: "",
      availability: "No disponible hasta el 00/00",
    },
    {
      name: "Generico",
      specialty: "",
      zone: "",
      clinics: "",
      availability: "Actualmente disponible",
    },
  ];
  res.render("index", { doctors });
});

module.exports = router;

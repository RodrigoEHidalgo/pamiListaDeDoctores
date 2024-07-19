const express = require("express");
const router = express.Router();

router.get("/doctors", (req, res) => {
  const doctors = [
    {
      name: "Generico",
      specialty: "",
      zone: "",
      clinics: "",
      availability: "no disponible",
      availableUntil: "00/00",
    },
    {
      name: "Generico",
      specialty: "",
      zone: "",
      clinics: "",
      availability: "disponible",
      availableUntil: "",
    },
  ];
  res.render("doctores", { doctors });
});

module.exports = router;

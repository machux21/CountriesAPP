const axios = require("axios");
const { Router } = require("express");
const router = Router();
const { Activity } = require("../db.js");

router.get("/", async (req, res) => {
  try {
    const response = await Activity.findAll({
      attributes: ["name"],
    });
    res.json(response);
  } catch (e) {
    send.status(404).json({ error: e.message });
  }
});

router.post("/", async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  if (!name || !difficulty || !duration || !season)
    return res.status(404).json("All field must be completed");
  try {
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    await newActivity.addCountries(countries);
    res.json("Activity was created successfully");
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
});

module.exports = router;

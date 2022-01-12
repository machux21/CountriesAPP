const { Op } = require("sequelize");
const axios = require("axios");
const { Router } = require("express");
const router = Router();
const { Country, Activity } = require("../db.js");

//Order A-Z
router.get("/countries/az", async (req, res) => {
  try {
    const response = await Country.findAll({
      order: [["name", "asc"]],
    });
    res.json(response);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
});

//Order Z-A
router.get("/countries/za", async (req, res) => {
  try {
    const response = await Country.findAll({
      order: [["name", "desc"]],
    });
    res.json(response);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
});

//ORDER BY POPULATION

//Ascendent
router.get("/population/asc", async (req, res) => {
  try {
    const response = await Country.findAll({
      order: [["population", "asc"]],
    });
    res.json(response);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
});

//Descendent
router.get("/population/desc", async (req, res) => {
  try {
    const response = await Country.findAll({
      order: [["population", "desc"]],
    });
    res.json(response);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
});

//FILTER BY ACTIVITY

router.get("/activity/:ActName", async (req, res) => {
  const { ActName } = req.params;
  try {
    const response = await Country.findAll({
      include: {
        model: Activity,
        attributes: ["name"],
        where: {
          name: {
            [Op.iLike]: `%${ActName}`,
          },
        },
      },
    });
    res.json(response);
  } catch (e) {
    res.status(404).json({ error: e.msessage });
  }
});

module.exports = router;

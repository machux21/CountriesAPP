const { Op } = require("sequelize");
const axios = require("axios");
const { Router } = require("express");
const router = Router();
const { Country, Activity } = require("../db.js");

//GET
router.get("/", async (req, res) => {
  /*
  //Push data into data base
  const query = await axios.get("https://restcountries.com/v3/all");
  Promise.all(
    query.data.map((c) =>
      Country.create({
        id: c.cca3,
        name: c.name.common,
        flag: c.flags[0],
        continent:(c.continents) ? c.continents?.join(", ") : "Belongs to no continent",
        capital: (c.capital) ? c.capital?.join(" ") : "No capital city",
        subregion: c.subregion,
        area: c.area,
        population: c.population,
      })
    )
  )
    .then(res.json("success"))
    .catch(res.status(404).send("Error"));
    */

  const { name } = req.query;

  try {
    //Countries response
    const response = await Country.findAll();

    //Query response
    if (name) {
      const response = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
      if (!response) return res.status(404).json("Country not found");
      return res.json(response);
    }

    //Countries response
    res.json(response);
  } catch (e) {
    res.status(404).json("Not Found");
  }
});

//GET/:id

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Country.findByPk(id, {
      include: Activity,
    });
    response ? res.json(response) : res.status(404).json("Country not found");
  } catch (e) {
    res.status(404).json("Not found");
  }
});

module.exports = router;

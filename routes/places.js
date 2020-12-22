const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

const searchString = "https://epok.buenosaires.gob.ar/buscar?texto=chicos&clase=actividades_para_chicos%7C1"
let placesList;

router.get('/', async (req, res) => {
  try {
    getPlaces(searchString).then(data => {
      //placesList = data;
      console.log(data);
      res.render('places', {
        places: data.instancias
      });
      //res.status(200).json(placesList.instancias);
      //placesList.instancias.forEach(el => {
    });  
  } catch(err) {
    res.status(500).json({ message: err });
  }
});

async function getPlaces(string) {
  try {
    const result = await fetch(string);
    const data = await result.json();
    return data;
  } catch(err) {
    return err;
  }
}

module.exports = router;
const router = require("express").Router();
const Beer = require("../models/Beer.model");

// GET /beers
router.get("/beers", (req, res, next) => {
  Beer.find()
    .then((beersFromDB) => {
      res.status(200).json(beersFromDB);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Post /beers

router.post("/beers", (req, res, next) => {
  Beer.create(req.body)
    .then((newBeer) => {
      res.status(200).json(newBeer);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Get /beers/:id

router.get("/beers/:id", (req, res, next) => {
  Beer.findById(req.params.id)
    .then((beerFromDB) => {
      if (!beerFromDB) {
        return res.status(404).json({ message: "Beer not found" });
      }
      res.status(200).json(beerFromDB);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Put /beers/:id

router.put("/beers/:id", (req, res, next) => {
  Beer.findByIdAndUpdate(req.params.id, req.body)
    .then((beerFromDB) => {
      if (!beerFromDB) {
        return res.status(404).json({ message: "Beer not found" });
      }
      res.status(200).json(beerFromDB);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Delete /beers/:id

router.delete("/beers/:id", (req, res, next) => {
  Beer.findByIdAndDelete(req.params.id)
    .then((beerFromDB) => {
      if (!beerFromDB) {
        return res.status(404).json({ message: "Beer not found" });
      }
      res.status(200).json({ message: "Beer deleted" });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

module.exports = router;

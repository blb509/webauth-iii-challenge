const router = require("express").Router();

const Model = require("../models/model");

router.get("/", (req, res) => {
  Model.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;

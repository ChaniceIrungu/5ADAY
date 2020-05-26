var express = require('express');
var router = express.Router();
const db = require("../model/helper");

const getSeasons = (req, res) => {

  db("SELECT * FROM seasons;")
  .then(results => {
    res.send(results.data);
  })
     .catch(err => res.status(500).send(err));
};


router.get("/", getSeasons);




router.get("/:id", function(req, res, next) {
  
  const {id} = req.params;

  db(`SELECT * FROM seasons WHERE id = ${id}`)
  .then(results => {
    res.send(results.data[0])
  })
  .catch(err => res.status(500).send(err));
});

router.post("/", function(req, res, next) {

  const {image, title, description, list} = req.body;
  db(`INSERT INTO seasons (image, title, description, list) VALUES ('${image}', '${title}', '${description}', '${list}');`)
  .then(results => {
    res.send({ msg: "Your data was inputted correctly"});
  })
  .catch(err => res.status(500).send(err))

});

router.delete("/:id", function(req, res, next) {

const {id} = req.params;
db(`DELETE FROM seasons WHERE id = ${id};`)
.then(results => {
  res.send({ msg: "Your data was deleted correctly"});
 })
 .catch(err => res.status(500).send(err))
});

module.exports = router;

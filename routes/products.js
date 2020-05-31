var express = require("express");
var router = express.Router();
const db = require("../model/helper");

getProducts = (req, res, next) => {
  db(`SELECT * FROM products;`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
};

router.get("/", getProducts);

router.get("/:id", function (req, res, next) {
  const { id } = req.params;

  db(`SELECT * FROM products WHERE id = ${id}`)
    .then((results) => {
      res.send(results.data[0]);
    })
    .catch((err) => res.status(500).send(err));
});

router.post("/", function (req, res, next) {
  const { title, price, image } = req.body;
  db(
    `INSERT INTO products (title, price, image) VALUES ('${title}', '${price}', 'orange.jpg');`
  )
    .then(() => {
      getProducts(req, res);
    })
    .catch((err) => res.status(500).send(err));
});

router.delete("/:id", function (req, res, next) {
  const { id } = req.params;
  db(`DELETE FROM products WHERE id = ${id};`)
    .then((results) => {
      res.send({ msg: "Your data was deleted correctly" });
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;

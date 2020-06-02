var express = require("express");
var router = express.Router();
const db = require("../model/helper");

getCarts = (req, res, next) => {
  db(`SELECT * FROM carts;`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
};

router.get("/", getCarts);

router.get("/:id", function (req, res, next) {
  const { id } = req.params;

  db(`SELECT * FROM carts WHERE id = ${id}`)
    .then((results) => {
      res.send(results.data[0]);
    })
    .catch((err) => res.status(500).send(err));
});

router.post("/", function (req, res, next) {
  const { quantity } = req.body;
  const { productsId } = req.params;
  db(
    `INSERT INTO products (productsId, quantity ) VALUES ('${productsId}', '${quantity}');`
  )
    .then(() => {
      getCarts(req, res);
    })
    .catch((err) => res.status(500).send(err));
});

router.delete("/:id", function (req, res, next) {
  const { id } = req.params;
  db(`DELETE FROM carts WHERE id = ${id};`)
    .then((results) => {
      res.send({ msg: "Your data was deleted correctly" });
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;

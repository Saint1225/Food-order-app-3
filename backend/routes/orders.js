const fs = require("fs");
const path = require("path");
const express = require("express");
const orderData = require("../data/orders.json");

const p = path.join(path.resolve("./"), "data", "orders.json");

const router = express.Router();

router.get("/fetchOrder", (req, res) => {
  res.status(200).send(orderData ? orderData : []);
});

router.post("/submitOrder", (req, res) => {
  fs.writeFile(p, JSON.stringify(req.body), (error) => console.log(error));
  res.status(200).send("Order updated!");
});

router.use((req, res) => {
  res.status(400).send("Order API error loh");
});

module.exports = router;

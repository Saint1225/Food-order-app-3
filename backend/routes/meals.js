const express = require("express");
const mealItems = require("../data/available-meals.json");

const router = express.Router();

router.get("/mealItems", (req, res) => {
  console.log(mealItems);
  res.status(200).send(mealItems);
});

router.use((req, res) => {
  res.status(404).send("404 not found lah.");
});

module.exports = router;

// const express = require("express");

// const router = express.Router();

// router.get("/add-product", (req, res, next) => {
//   res.send(
//     "<form action='/admin/add-product' method='POST'><input name='title' type='text'><button type='submit'>Add</button/></form>"
//   );
// });

// router.post("/add-product", (req, res) => {
//   console.log(req.body);
//   res.redirect("/");
// });

// module.exports = router;

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const mealsRoute = require("./routes/meals");
const orderRoute = require("./routes/orders");

app.use("/meals", mealsRoute);
app.use("/order", orderRoute);
app.get("/", (req, res) => {
  res.status(200).send("<h1>NodeJS server running...</h1>");
});

app.listen(3000);

// // const http = require("http");
// // const server = http.createServer(app);
// // server.listen(3000);
// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// const adminRoute = require("./routes/admin");
// const shopRoute = require("./routes/shop");

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/admin", adminRoute);
// app.use(shopRoute);

// app.use((req, res) => {
//   res.status(404).send("<h1>404 not found</h1>");
// });

// app.listen(3000);

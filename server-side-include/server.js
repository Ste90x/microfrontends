const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const fs = require("fs");

const _ = require("underscore");

const port = 5000;

// add static folder
app.use("/", express.static("public"));
app.use("/static", express.static("public/teamBlue/server-side-product/.next/server/static"))

//add the router
app.use("/", router);

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

router.get("/products", function (req, res) {
  console.log("Request at /products incoming...");
  res.sendFile(path.join(__dirname + "/database/products.json"));
});

router.get("/products/:id", function (req, res) {
  console.log("Request at /products/" + req.params.id + " incoming...");
  let products = JSON.parse(
    fs.readFileSync(path.join(__dirname + "/database/products.json"))
  );
  let filteredProduct = _.where(products, { id: req.params.id });
  res.send(filteredProduct[0]);
});

router.get("/react", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/teamBlue/server-side-product/build/index.html"));
})

// router.get("/angular", (req, res) => {
//   res.sendFile(path.join(__dirname + "/public/teamBlue/server-side-product/build/index.html"));
// })

// router.get("/vue", (req, res) => {
//   res.sendFile(path.join(__dirname + "/public/teamBlue/server-side-product/build/index.html"));
// })

app.listen(process.env.port || port);

console.log("Running at Port " + port);

const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const fs = require("fs");

const _ = require("underscore");

const port = 5000;

app.use(function(req, res, next) {
  var allowedOrigins = [
    "http://localhost:3000", // react
    "http://localhost:4200", // angular
    "http://localhost:8080", // vue
    "http://localhost:1000" // proxy
  ];
  var origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", true);
  return next();
});

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

router.get("/products", function(req, res) {
  console.log("Request at /products incoming...");
  res.sendFile(path.join(__dirname + "/database/products.json"));
});

router.get("/products/:id", function(req, res) {
  console.log("Request at /products/" + req.params.id + " incoming...");
  let products = JSON.parse(
    fs.readFileSync(path.join(__dirname + "/database/products.json"))
  );
  let filteredProduct = _.where(products, { id: req.params.id });
  res.send(filteredProduct[0]);
});

//add static folder
app.use(express.static("public"));

//add the router
app.use("/", router);

app.listen(process.env.port || port);

console.log("Running at Port " + port);

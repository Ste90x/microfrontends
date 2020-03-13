const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

const port = 5000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

router.get("/products", function(req, res) {
  console.log("Request at /products incoming...");
  res.sendFile(path.join(__dirname + "/database/products.json"));
});

router.get("/products/:id", function(req, res) {
  console.log("Request at /products/:id incoming...");
  //TODO scarluccio: JSON-Parser for sending only the element with the specific id
  res.sendFile(path.join(__dirname + "/database/products.json"));
});

//add static folder
app.use(express.static("public"));

//add the router
app.use("/", router);

app.listen(process.env.port || port);

console.log("Running at Port " + port);

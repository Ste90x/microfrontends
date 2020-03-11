const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

const port = 5000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
  //__dirname : It will resolve to your project folder.
});

router.get("/products", function(req, res) {
  console.log("Request at /products incoming...");
  res.sendFile(path.join(__dirname + "/database/products.json"));
});

//add static folder
app.use(express.static("public"));

//add the router
app.use("/", router);

app.listen(process.env.port || port);

console.log("Running at Port "  + port);

const express = require("express");
const proxy = require("express-http-proxy");
const ESI = require("nodesi");
const esiMiddleware = require("nodesi").middleware;

const port = 1000;
const esi = new ESI({});

const app = express();

app.use(esiMiddleware());

app.use("/", proxy("http://localhost:5000", {
    userResDecorator: (proxyRes, proxyResData) => {
        return proxyRes.headers["content-type"] === "text/html" ?
            esi.process(proxyResData.toString()) : proxyResData;
    }
}));

app.listen(process.env.port || port);

console.log("Running at Port " + port);
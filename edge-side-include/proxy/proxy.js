const express = require("express");
const proxy = require("express-http-proxy");
const ESI = require("nodesi");
const esiMiddleware = require("nodesi").middleware;
const http = require("http");

const port = 1000;
const esi = new ESI({});

const app = express();

app.use(esiMiddleware());

app.use("/", proxy("http://localhost:5000", {
    userResDecorator: (userReq, proxyRes, proxyResData) => {
        if (proxyRes.header !== undefined) {
            return proxyRes.headers["content-type"] === "text/html" ?
                esi.process(proxyResData.toString()) : proxyResData;
        } else
            return null;
    }
}));

app.listen(process.env.port || port);

console.log("Running at Port " + port);
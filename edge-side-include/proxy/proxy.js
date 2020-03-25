const express = require("express");
const axios = require("axios");
const proxy = require("express-http-proxy");
const ESI = require("nodesi");
const esiMiddleware = require("nodesi").middleware;

const port = 1000;
const esi = new ESI({});

const app = express();

const proxyUrl = "http://localhost:5000";
const reactUrl = "http://localhost:3000";

app.use(esiMiddleware());

app.use("/", proxy(proxyUrl,
    {
        userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
            if (proxyRes.headers["content-type"] === "text/html") {
                return esi.process(proxyResData.toString());
            }
            return proxyResData;
        }
    }
));


app.listen(process.env.port || port, () => {
    console.log("Running at Port " + port);
});
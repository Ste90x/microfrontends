const express = require("express");
const axios = require("axios");
const proxy = require("express-http-proxy");
const ESI = require("nodesi");
const esiMiddleware = require("nodesi").middleware;
const cors = require("cors");

const port = 1000;

const proxyUrl = "http://localhost:5000";
const angularUrl = "http://localhost:4200";
const reactUrl = "http://localhost:3000";

const esi = new ESI({
    allowedHosts: [angularUrl, reactUrl]
});

const app = express();

const api = "/api";

app.use(esiMiddleware());
app.use(cors());

// react middleware
app.use("/_next/*", (req, res, next) => {
    res.redirect(`${reactUrl}${req.originalUrl}`);
});

//TODO scarluccio: to be implemented better
// angular middleware
app.use("/runtime*.js", (req, res, next) => {
    res.redirect(`${angularUrl}${api}${req.originalUrl}`);
});
app.use("/vendor*.js", (req, res, next) => {
    res.redirect(`${angularUrl}${api}${req.originalUrl}`);
});
app.use("/polyfills*.js", (req, res, next) => {
    res.redirect(`${angularUrl}${api}${req.originalUrl}`);
});
app.use("/main*.js", (req, res, next) => {
    res.redirect(`${angularUrl}${api}${req.originalUrl}`);
});
app.use("/browser-sync-client*", (req, res, next) => {
    res.redirect(`${angularUrl}${api}${req.originalUrl}`);
});
app.use("/styles*", (req, res, next) => {
    res.redirect(`${angularUrl}${api}${req.originalUrl}`);
});
//---------------

app.use("(/)", (req, res, next) => { console.log(req.url); next(); }, proxy(proxyUrl,
    {
        timeout: 2000,
        userResDecorator: (proxyRes, proxyResData) => {
            return proxyRes.headers["content-type"] === "text/html" ?
                esi.process(proxyResData.toString("utf-8")) : proxyResData;
        },
        proxyErrorHandler: (err, res, next) => {
            switch (err && err.code) {
                case 'ECONNRESET': { return res.status(405).send('504 became 405'); }
                case 'ECONNREFUSED': { return res.status(200).send('gotcher back'); }
                default: { next(err); }
            }
        }
    }
));

app.listen(process.env.port || port, () => {
    console.log("Running at Port " + port);
});
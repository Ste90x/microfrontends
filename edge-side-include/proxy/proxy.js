const express = require("express");
const proxy = require("express-http-proxy");
const ESI = require("nodesi");
const esiMiddleware = require("nodesi").middleware;
const cors = require("cors");

const port = 1000;

const originUrl = "http://localhost:5000";
const angularUrl = "http://localhost:4200";
const reactUrl = "http://localhost:3000";

const esi = new ESI({
    allowedHosts: [reactUrl, angularUrl]
});

const app = express();

const api = "";
// const api = "/api";

app.use(esiMiddleware());
app.use(cors());

app.use("*", (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

// react middleware
app.use("/_next/*", (req, res, next) => {
    res.redirect(`${reactUrl}${req.originalUrl}`);
    next();
});

//TODO scarluccio: to be implemented better
// angular middleware
app.use("/runtime*.js", cors(), (req, res, next) => {
    res.redirect(`${angularUrl}${api}${req.originalUrl}`);
    next();
});
app.use("/vendor*.js", (req, res, next) => {
    res.redirect(`${angularUrl}${api}${req.originalUrl}`);
    next();
});
app.use("/polyfills*.js", (req, res, next) => {
    res.redirect(`${angularUrl}${api}${req.originalUrl}`);
    next();
});
app.use("/main*.js", (req, res, next) => {
    res.redirect(`${angularUrl}${api}${req.originalUrl}`);
    next();
});
app.use("/browser-sync-client*", (req, res, next) => {
    res.redirect(`${angularUrl}${api}${req.originalUrl}`);
    next();
});
app.use("/styles*", (req, res, next) => {
    res.redirect(`${angularUrl}${api}${req.originalUrl}`);
    next();
});
//---------------

app.use("(/)", (req, res, next) => { console.log(req.url); next(); },
    proxy(originUrl,
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
@echo OFF
echo Starting Servers...

echo starting express.js-server..
CD %~dp0edge-side-include
start npm start

echo starting react-client...
CD %~dp0edge-side-include\public\teamBlue\edge-side-product
start npm run dev

echo starting angular-client...
CD %~dp0edge-side-include\public\teamRed\edge-side-product-details
start npm run dev:ssr

REM echo starting vue-client...
REM CD %~dp0edge-side-include\public\teamGreen\edge-side-cart
REM start npm run serve

echo starting proxy-server...
CD %~dp0edge-side-include\proxy
start npm start

CD %~dp0
start "" http://localhost:1000
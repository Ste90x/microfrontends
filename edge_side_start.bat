@echo OFF
echo Starting Servers...

echo starting express.js-server..
CD %~dp0edge-side-include
start npm start

echo starting react-client...
CD %~dp0edge-side-include\public\teamBlue\edge-side-product
start npm start

echo starting angular-client...
CD %~dp0edge-side-include\public\teamRed\edge-side-product-details
start npm start

echo starting vue-client...
CD %~dp0edge-side-include\public\teamGreen\edge-side-cart
start npm start

echo starting proxy-server...
CD %~dp0edge-side-include\proxy
start npm start

CD %~dp0
timeout 5
start "" http://localhost:1000
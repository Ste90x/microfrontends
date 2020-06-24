@echo OFF
echo Starting Servers...

echo starting express.js-server..
start npm start

echo starting react-client...
CD %~dp0src\react\edge-side-product
start npm start

echo starting angular-client...
CD %~dp0src\angular\edge-side-product-details
start npm start

echo starting vue-client...
CD %~dp0src\vue\edge-side-cart
start npm start

echo starting proxy-server...
CD %~dp0proxy
start npm start

CD %~dp0
timeout 5
start "" http://localhost:3001
@echo OFF
echo Starting Servers...

echo starting express.js-server..
CD %~dp0client-side-include
start npm start

echo starting react-client...
CD %~dp0client-side-include\src\react\client-side-product
start npm start

echo starting angular-client...
CD %~dp0client-side-include\src\angular\client-side-product-details
start npm start

echo starting vue-client...
CD %~dp0client-side-include\src\vue\client-side-cart
start npm start

CD %~dp0
TIMEOUT 5
start "" http://localhost:5000
@echo OFF
echo Starting Servers...

echo starting express.js-server..
CD %~dp0single-spa-app
start npm start

echo starting react-client...
CD %~dp0single-spa-app\src\react\single-spa-product-list
start npm start

echo starting angular-client...
CD %~dp0single-spa-app\src\angular\single-spa-product-details
start npm start

echo starting vue-client...
CD %~dp0single-spa-app\src\vue\single-spa-cart
start npm start

CD %~dp0
timeout 5
start "" http://localhost:5000
@echo OFF
echo Starting Setup

echo setting up express.js-server...
CD %~dp0single-spa-app
call npm install

echo setting up react-client..
CD %~dp0single-spa-app\src\react\single-spa-product-list
call npm install

echo setting up angular-client..
CD %~dp0single-spa-app\src\angular\single-spa-product-details
call npm install

echo setting up vue-client..
CD %~dp0single-spa-app\src\vue\single-spa-cart
call npm install

CD %~dp0
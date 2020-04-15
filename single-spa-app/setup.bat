@echo OFF
echo Starting Setup

echo setting up express.js-server...
call npm install

echo setting up react-client..
CD %~dp0src\react\single-spa-product-list
call npm install

echo setting up angular-client..
CD %~dp0src\angular\single-spa-product-details
call npm install

echo setting up vue-client..
CD %~dp0src\vue\single-spa-cart
call npm install

CD %~dp0
@echo OFF
echo Starting Setup

echo setting up express.js-server...
call npm install

echo setting up react-client..
CD %~dp0src\react\client-side-product
call npm install

echo setting up angular-client..
CD %~dp0src\angular\client-side-product-details
call npm install

echo setting up vue-client..
CD %~dp0src\vue\client-side-cart
call npm install

CD %~dp0
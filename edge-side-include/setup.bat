@echo OFF
echo Starting Setup

echo setting up express.js-server...
CD %~dp0
call npm install

echo setting up react-client..
CD %~dp0src\react\edge-side-product
call npm install

echo setting up angular-client..
CD %~dp0src\angular\edge-side-product-details
call npm install

echo setting up vue-client..
CD %~dp0src\vue\edge-side-cart
call npm install

echo setting up proxy-server for edge side include...
CD %~dp0proxy
call npm install

CD %~dp0
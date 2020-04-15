@echo OFF
echo Starting Setup

echo setting up express.js-server...
CD %~dp0edge-side-include
call npm install

echo setting up react-client..
CD %~dp0edge-side-include\src\react\edge-side-product
call npm install

echo setting up angular-client..
CD %~dp0edge-side-include\src\angular\edge-side-product-details
call npm install

echo setting up vue-client..
CD %~dp0edge-side-include\src\vue\edge-side-cart
call npm install

echo setting up proxy-server for edge side include...
CD %~dp0edge-side-include\proxy
call npm install

CD %~dp0
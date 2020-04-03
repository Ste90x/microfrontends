@echo OFF
echo Starting Setup

echo setting up express.js-server...
CD %~dp0client-side-include
call npm install

CD %~dp0edge-side-include
call npm install

echo setting up react-client..
CD %~dp0client-side-include\public\teamBlue\client-side-product
call npm install -g create-react-app
call npm install

CD %~dp0edge-side-include\public\teamBlue\edge-side-product
call npm install

echo setting up angular-client..
CD %~dp0client-side-include\public\teamRed\client-side-product-details
call npm install -g @angular/cli
call npm install

CD %~dp0edge-side-include\public\teamRed\edge-side-product-details
call npm install

echo setting up vue-client..
CD %~dp0client-side-include\public\teamGreen\client-side-cart
call npm install -g @vue/cli
call npm install

CD %~dp0edge-side-include\public\teamGreen\edge-side-cart
call npm install

echo setting up proxy-server for edge side include...
CD %~dp0edge-side-include\proxy
call npm install

CD %~dp0
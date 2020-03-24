@echo OFF
echo Starting Servers...

echo starting express.js-server..
CD %~dp0client-side-include
start nodemon server.js

echo starting react-client...
CD %~dp0client-side-include\public\teamBlue\client-side-product
start npm start

echo starting angular-client...
CD %~dp0client-side-include\public\teamRed\client-side-product-details
start ng serve

echo starting vue-client...
CD %~dp0client-side-include\public\teamGreen\client-side-cart
start npm run serve

CD %~dp0
start "" http://localhost:5000
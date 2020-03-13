@echo OFF
echo Starting Servers...

CD %~dp0client-side-include
start nodemon server.js

CD %~dp0client-side-include\public\teamBlue\client-side-product
start npm start

CD %~dp0client-side-include\public\teamRed\client-side-product-details
start ng serve

CD %~dp0
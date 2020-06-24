#!/bin/bash

echo Starting Setup

ABSOLUTE_PATH=$( cd "$(dirname "$0")" ; pwd -P )

echo setting up express.js-server...
npm install

echo setting up react-client..
cd $ABSOLUTE_PATH/src/react/single-spa-product-list ; npm install

echo setting up angular-client..
cd $ABSOLUTE_PATH/src/angular/single-spa-product-details ; npm install

echo setting up vue-client..
cd $ABSOLUTE_PATH/src/vue/single-spa-cart ; npm install
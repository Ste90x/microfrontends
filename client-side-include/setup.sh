#!/bin/bash

echo Starting Setup

ABSOLUTE_PATH=$( cd "$(dirname "$0")" ; pwd -P )

echo setting up express.js-server...
npm install

echo setting up react-client..
cd $ABSOLUTE_PATH/src/react/client-side-product ; npm install

echo setting up angular-client..
cd $ABSOLUTE_PATH/src/angular/client-side-product-details ; npm install

echo setting up vue-client..
cd $ABSOLUTE_PATH/src/vue/client-side-cart ; npm install
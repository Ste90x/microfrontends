#!/bin/bash

echo Starting Setup

ABSOLUTE_PATH=$( cd "$(dirname "$0")" ; pwd -P )

echo setting up express.js-server...
npm install

echo setting up react-client..
cd $ABSOLUTE_PATH/src/react/edge-side-product ; npm install

echo setting up angular-client..
cd $ABSOLUTE_PATH/src/angular/edge-side-product-details ; npm install

echo setting up vue-client..
cd $ABSOLUTE_PATH/src/vue/edge-side-cart ; npm install

echo setting up proxy-server for edge side include...
cd $ABSOLUTE_PATH/proxy ; npm install
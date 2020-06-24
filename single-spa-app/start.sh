#!/bin/bash

echo Starting Servers...

ABSOLUTE_PATH=$( cd "$(dirname "$0")" ; pwd -P )

echo starting express.js-server..
osascript -e 'tell app "Terminal"
    do script "cd '$ABSOLUTE_PATH' ; npm start"
end tell'

echo starting react-client...
osascript -e 'tell app "Terminal"
    do script "cd '$ABSOLUTE_PATH'/src/react/single-spa-product-list ; npm start"
end tell'

echo starting angular-client...
osascript -e 'tell app "Terminal"
    do script "cd '$ABSOLUTE_PATH'/src/angular/single-spa-product-details ; npm start"
end tell'

echo starting vue-client...
osascript -e 'tell app "Terminal"
    do script "cd '$ABSOLUTE_PATH'/src/vue/single-spa-cart ; npm start"
end tell'

sleep 5
open http://localhost:5000
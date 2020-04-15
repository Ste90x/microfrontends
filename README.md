# Edge Side Composition/Include Microfrontends

#### Requirements:

- Node.js

#### Instructions

1. Use the "setup.bat" to install all packages and dependencies

2. Use the "start.bat" to start all servers and open up the browserpage

## !!! The main page may take a while to render everything correctly due to the servers of all frameworks that need to be started first. Check the current status of the servers in their respective terminals. !!!

## FIXMEs:

- Proxy-server can be implemented better with a custom webpack-script that reduces bundles to single distinct files!
- CORS issues when the proxy tries to access to the scripts from the frameworks -> especially angular. Probably also fixable with better Webpack knowledge.
- #### To try the implementation right now you require Mozilla Firefox and the browser-extension: "Cors Everywhere" https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere

#### Domains

- Proxy -> Express.js -> http://localhost:1000 (MAIN PAGE)
- Portal -> VanillaJS/Express.js -> http://localhost:5000
- Product list -> React 16 -> http://localhost:3000
- Product details -> Angular 9 -> http://localhost:4200
- Cart -> Vue 2 -> http://localhost:8080

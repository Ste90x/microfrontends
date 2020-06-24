# Single SPA Microfrontends

#### Requirements:

- Node.js

#### Instructions

1. `cd single-spa-app` & `setup.bat` on Windows or `./setup.sh` on OSX to install all packages and dependencies

2. `start.bat` on Windows or `./start.sh` on OSX after installation to start all servers and open up the browserpage

#### Information:

### !!! The mainpage may take a while to render everything correctly due to the servers of all frameworks that need to be started first. Especially Angular is pretty slow. Check the current status of the servers in their respective terminals. !!!

### Single SPA uses Angular 8 because it doesn't support 9 yet.

#### Domains

- Portal -> VanillaJS/Express.js -> http://localhost:5000 (MAIN PAGE)
- Product list -> React 16 -> http://localhost:3000
- Product details -> Angular 8 -> http://localhost:4200
- Cart -> Vue 2 -> http://localhost:8080

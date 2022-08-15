# Email App Frontend

[![Actions Status](https://github.com/JessieFrance/email-app-frontend/workflows/Build%20and%20Test/badge.svg)](https://github.com/JessieFrance/email-app-frontend/actions)

This is the frontend user interface (UI) for an experimental email scheduler. To use this UI in development:

1. Clone this repository.

2. Install dependencies with `npm ci`. If you do not have `npm` installed, please install [Node.js and NPM](https://nodejs.org/en/). If you encounter any issues here but you have `node` installed, it may be a result of your Node.js version (type `node -v` in the terminal to check), as this project was developed using Node.js version `v16.14.0`. To change Node.js version to the one in this project, you can use the [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) package.

3. Make sure the [backend API](https://github.com/JessieFrance/email-app) and its database are running (please see instructions at that link).

4. Start the application with `npm start`.

You can also run tests with `npm test`, and build the application for production with `npm run build`.

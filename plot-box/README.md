# Getting Started with Plot Box

React application to plot random coordinates on a map

## Requirements
Plot Box requires the following to be installed:
- [React](https://reactjs.org/) - Front-End Environment
- [Node.JS](https://nodejs.org/en/) - Back-End Environemnt
- Download this repository and change directory to `plot-box/`
- Run the following code to install dependencies:
- `npm install`


## Starting The Back-End Environment

- Open terminal
- Change directory to `api/`
- Enter the following code:
- `node index.js`

This will start the back-end api and listen on default port: `5000`

### Configuring The Back-End Environment
- Creating you own `.env` file and declaring your desired port value
- `api/config.js` allows you to configure the following:
  - `PORT: 5000` - change `5000` to your desired port value. This will be the default value if `.env` does not exist.
  - `CEILING: 10` - The maximum amount of random coordinates to be generated.  


## Starting The Front-End Environment

- Open second terminal
- Enter the following code:
- `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Congiguring The Front-End Environment

- `plot-box/config.js` allows you to configure the default settings for the Map component.

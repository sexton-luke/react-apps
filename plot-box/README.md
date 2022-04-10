# Getting Started with Plot Box

React application to plot random coordinates on a map

## Requirements

Plot Box requires the following to be installed:
- [React](https://reactjs.org/) - Front-End Environment
- [Node.JS](https://nodejs.org/en/) - Back-End Environemnt
- Download [this repository](https://github.com/sexton-luke/react-apps) and change directory to `plot-box/`
- Run the following code to install dependencies:
- `npm install`

## Enabling Mapbox Access

- [Mapbox Account](https://account.mapbox.com/) - Create free account to generate default access token.
- Create `.env` file in `plot-box/`
- Add the following the file:
  - `REACT_APP_MAP_ACCESS_TOKEN=` then your access token in quotation marks `'pk.'`


## Starting The Back-End Environment

- Open terminal `plot-box/`
- Change directory to `api/`
- Enter the following code:
- `node index.js`

This will start the back-end api and listen on default port: `5000`

### Configuring The Back-End Environment

- Declare your desired port number to your `.env` file by adding the 'API_PORT=` variable. 
- `api/config.js` allows you to configure the following:
  - `PORT: 5000` - This will be the default value if `.env` does not exist.
  - `CEILING: 10` - The maximum amount of random coordinates to be generated.  


## Starting The Front-End Environment

- Open second terminal `plot-box/`
- Enter the following code:
- `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Configuring The Front-End Environment

- `plot-box/config.js` allows you to configure the default settings for the Map component.
  - `DEFAULT_URL="http://localhost:5000/api/coordinates` - This will be the default URL if `.env` does not exist.

## Unit Testing

### Back-End Environment

- Jest is used as the testing framework for the api functionality.

- Testing functions can be found here: `api/functions/__test__/`

### Front-End Environment

- Enzyme is used as the testing framework for rendering components.

- Component testing can be found here: `plot-box/src/App.test.js`

# Coding Challenge

## [Requirements](planning/requirements.md)

Please see project requirements for the synopsis breakdown and tasks taken to complete this coding challenge.

## Reflection

### Overall Experience
I found the coding an overall good and enjoyable experience. I felt confident with the following:
- Understanding and implementation of the synopsis breakdown
- Delivered an appropriate and functional product

### What Could Be Better?

#### Unit testing
I felt comfortable with basic unit testing, however, I found it difficult to comprehend and identify if I needed to apply some of these unit testing methods. For example, **how** and if I would need to implement jest mock functions, and deeper levels of testing with enzyme.
This made me question and restructure certain components and functions. I feel this is something I need to work on and will achieve better results with further experience.

#### CSS Styling
Would like to have finished styling the site. 
- Redoing icons/logo's for better resolution.
- Extra research for CSS rules and layouts.

## Thank You!
Thank you very much for this coding challenge. I have definitely learned a lot and am glad to have had the opportunity to showcase my abilities.

Luke Sexton

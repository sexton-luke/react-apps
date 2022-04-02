# Requirements

## Backend API Framework:

### Synopsis Breakdown

Using **node.js** with an **Express NPM** component as the **backend API framework**, create a **single API endpoint** which will **generate a number** of **randomly located geometry coordinates** within a given **boundary box** and **return coordinates** as an **array of lat/long dictionaries or named arrays**.

- environment: node.js
- component: express npm
- endpoints: 1
- parameters:
  - integer number
  - boundary values (possibly 4 sets of coordinates)
- functions:
  - generateGeometryCoordinates(boundaryValues)
  - sendGeometryCoordinates(arrayOfDictionaries)

### Tasks:

1.  Setup node.js environment
2.  Understand what and how to implement Express NPM
3.  Research and create endpoint

- Write test for how endpoint works

4.  Create and fine tune functions
5.  Create and define tests with test data

## Front End:

### Synopsis Breakdown

Create a simple **React.js** based front end using the **above API endpoint** and **plot the coordinates on a map**. We use **Mapbox** as our **mapping component**, but you can use any of your preferred tools.

- environment: react.js
- component: mapbox, setBoundaryBoxButton, plotCoordinatesButton, inputViews
- functions:
  - setBoundaryBoxButton(topLeftCoordinate, topRightCoordinate, bottomLeftCoordinate, bottomRightCoordinate)
  - setNumberOfCoordinates(userInput)
  - getCoordinates(boundaryBox)
  - plotCoordinates(coordinates)

### Tasks:

1.  Setup React project
2.  Understand and implement MapBox component
3.  Request data from endpoint
4.  Create functions to handle and plot received data

## Submission

Submit the completed work to a **public GitHub repository** with a **Readme file** clearly outlining **how we can download your completed project and run your work**. Extra points for good **code styling, structure and testing**.

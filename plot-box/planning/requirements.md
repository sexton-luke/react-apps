# Requirements

## Backend API Framework:

### Synopsis Breakdown

Using **node.js** with an **Express NPM** component as the **backend API framework**, create a **single API endpoint** which will **generate a number** of **randomly located geometry coordinates** within a given **boundary box** and **return coordinates** as an **array of lat/long dictionaries or named arrays**.


** **Initial thoughts** **
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

1.  ~~Setup node.js environment~~
2.  ~~Understand what and how to implement Express NPM~~
3.  ~~Create api endpoint~~

    - ~~Get data~~
    - ~~Validate data~~
    - ~~getRandomCoordinates(randomNumber, boundaryBoxValues)~~
    - ~~Send coordindates in JSON response~~
    - ~~Incorporate unit testing for functions~~

## Front End:

### Synopsis Breakdown

Create a simple **React.js** based front end using the **above API endpoint** and **plot the coordinates on a map**. We use **Mapbox** as our **mapping component**, but you can use any of your preferred tools.

** **Initial thoughts** **
- environment: react.js
- component: mapbox, setBoundaryBoxButton, plotCoordinatesButton, inputViews
- functions:
  - setBoundaryBoxButton(topLeftCoordinate, topRightCoordinate, bottomLeftCoordinate, bottomRightCoordinate)
  - setNumberOfCoordinates(userInput)
  - getCoordinates(boundaryBox)
  - plotCoordinates(coordinates)

### Tasks:

1.  ~~Setup React project~~
2.  ~~Implement custom components:~~
    - ~~Header~~
    - ~~Description~~
    - ~~Map~~
    - ~~Footer~~
3.  ~~Understand and implement MapBox component~~
4.  ~~Send request to api endpoint~~
5.  ~~Handle response and plot coordinates on Map component~~
6.  ~~Fix Map on move~~
7.  ~~Create function files~~
8.  ~~Unit testing~~
9.  ~~CSS styling:~~
    - ~~Logo~~
    - ~~Custom Markers~~
      - ~~Marker Popups~~
    - ~~Colour theme~~
    - ~~All Components~~

## Submission

Submit the completed work to a **public GitHub repository** with a **Readme file** clearly outlining **how we can download your completed project and run your work**. Extra points for good **code styling, structure and testing**.

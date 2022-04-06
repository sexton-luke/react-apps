import React, { PureComponent } from 'react';
import './PlotButton.css';

export default class PlotButton extends PureComponent {
  // prop types
  // handle sending request to api

  render() {
    return (
      <div>
        <button className="App-plot-button">Plot Coordinates!</button>
      </div>
    );
  }
}

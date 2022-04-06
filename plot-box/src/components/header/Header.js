import React, { PureComponent } from 'react';
import './Header.css';

export default class Header extends PureComponent {
  render() {
    return (
      <header className="App-header">
        {/* replace <p> tag with logo */}
        <p>Add LOGO here</p>
        <title>Plot Box</title>
        <h1 className="App-header-heading">PLOT BOX</h1>
      </header>
    );
  }
}

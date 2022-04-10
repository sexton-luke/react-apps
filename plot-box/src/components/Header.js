import React, { PureComponent } from 'react';
import logoUrl from '../plot-box-logo.png'
export default class Header extends PureComponent {
  render() {
    return (
      <header>
        <img src={logoUrl} alt="Plot Box Header" />
      </header>
    );
  }
}

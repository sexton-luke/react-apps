import React, { PureComponent } from 'react';
import logoUrl from '../plot-box-logo-512x512.png'
export default class Header extends PureComponent {
  render() {
    return (
      <header>
        <img src={logoUrl} alt="Plot Box Header" />
      </header>
    );
  }
}

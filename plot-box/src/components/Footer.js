import React, { PureComponent } from 'react';
import logoURL from '../plot-box-footer.png'

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className='footer'>
        <img src={logoURL} alt="Plot Box Footer" />
      </footer>
    );
  }
}

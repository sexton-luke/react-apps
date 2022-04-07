import './App.css';
import { PureComponent } from 'react';

// import custom components
import Header from './components/header/Header';
import Description from './components/description/Description';
import Map from './components/map/Map';
import Footer from './components/footer/Footer';

export default class App extends PureComponent {
  // add constructor for setting state

  // event handler functions

  // render
  render() {
    return (
      <div className="App">
        <Header />
        <Description />
        <Map />
        <Footer />
      </div>
    );
  }
}

import logo from './logo.svg';
import './App.css';
import { PureComponent } from 'react';

// import custom components
import Header from './components/header/Header';
import Description from './components/description/Description';
import Mapbox from './components/mapbox/Mapbox';
import PlotButton from './components/plot-button/PlotButton';
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
        <Mapbox />
        <PlotButton />
        <Footer />
      </div>
    );
  }
}

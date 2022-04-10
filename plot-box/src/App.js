import './App.css';
import { Component } from 'react';

// import custom components
import Header from './components/Header';
import Map from './components/map/Map';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Map />
        <Footer />
      </div>
    );
  }
}

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Add LOGO here</p>
        <title className="App-header-title">Plot Box</title>
        <h1 className="App-header-heading">PLOT BOX</h1>
      </header>
      <div className="Body">
        <h2>Plot random points within your map view!</h2>
        {/* Mapbox component */}
        <button className="Plot-button"></button>
      </div>
    </div>
  );
}

export default App;

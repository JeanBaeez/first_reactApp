import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//App component as class
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello @JeanBaeez
          </p>
          <button type="button" className='btn btn-info'>Change</button>
        </header>
      </div>
    );
  }
}

export default App;

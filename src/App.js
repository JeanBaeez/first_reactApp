import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Botones from './Components/Buttons';
import Monsters from './Components/monsters';

//App component as class
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Jean Baez',
      GitHubProfileLink: 'https://github.com/JeanBaeez'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Wellcome {this.state.name}
          </p>

          <Button variant="contained" color="success" onClick={() => {
            this.setState({ name: 'JLZNER' });
            console.log(this.state.name)
          }
          } >Change</Button>
          <Button variant='contained' onClick={() => window.open} href={this.state.GitHubProfileLink}>Github</Button>
        </header>
        <Monsters />
      </div>
    );
  }
}

export default App;

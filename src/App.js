import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const BASE_URL = 'https://us-central1-firecast-fa179.cloudfunctions.net';

class App extends Component {

  state = {
    stores: []
  }

  handleCreateStore = (e) => {
    e.preventDefault();
    const uri = `${BASE_URL}/createStore`;
    
    fetch(uri)
    .then(result => {
      console.log('store created with success!!');
    })
    .catch(error => console.error(error.code, error.message));
  }
  
  componentDidMount() {
    const uri = `${BASE_URL}/getStores`;

    fetch(uri)
    .then(data => data.json())
    .then(result => {
      const { data, message } = result;
      console.log(data);
      this.setState({
        stores: data,
      });

    })
    .catch(error => console.log(error));
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <code>{ JSON.stringify(this.state.stores)}</code>
        </p>
        <p>
          <button
            onClick={this.handleCreateStore}
          >
            Create Store
          </button>
        </p>
      </div>
    );
  }
}

export default App;

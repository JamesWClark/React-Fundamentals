import React from 'react';
import Intro from '../Intro';
import Series from '../../containers/Series';
import './App.css';

// class component
class App extends React.Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you will find all your most loved series." />
        <Series />
      </div>
    );
  }
}

export default App;

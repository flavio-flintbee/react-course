import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Flavio', age: 27 },
      { name: 'Stephanie', age: 29 }

    ]
  }

  switchNameHandler = () => {
    //console.log('was clicked!');
    // DONT DO THIS this.state.persons[0].name = 'Bártolo';
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Bártolo', age: 27 },
        { name: 'Stephanie', age: 29 }

      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Hi, Iam a React App</h1>
        <p>This is Really working </p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

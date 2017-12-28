import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Flavio', age: 27 },
      { name: 'Stephanie', age: 35 }

    ]
  }

  switchNameHandler = (newName) => {
    //console.log('was clicked!');
    // DONT DO THIS this.state.persons[0].name = 'Bártolo';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Bártolo', age: 27 },
        { name: 'Stephanie', age: 29 }

      ],
      showPersons: false
    })
  }

  nameChangedHandler = (event)  => {
    this.setState({
      persons: [
        { name: 'Flávio', age: 28 },
        { name: event.target.value, age: 27 },
        { name: 'Stephanie', age: 29 }

      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Bártolo!')} 
              changed={this.nameChangedHandler} > My Hobbies: Racing </Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age} />
          </div> 
      );
    } 

    return (
      <div className="App">
        <h1> Hi, Iam a React App</h1>
        <p>This is Really working </p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

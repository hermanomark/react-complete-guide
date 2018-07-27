import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      {id: 'wq123', name: "Mark", age: 22}, 
      {id: '213dsa', name: "Mic", age: 23}, 
      {id: '213dad', name: "Jmik", age: 30}
    ],
    otherState: "some value",
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice , this line of code works just exactly the same as line below
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]); this code works excaxtly the same as above

    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = ()=> {
    let doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons =
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div> 
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
          />
          {persons}
        </div>
      );

    //Understanding JSX
    // Writing this one is cumbersome that's why we don't use this
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'));
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Mark", age: 22}, 
      {name: "Mic", age: 23}, 
      {name: "Jmik", age: 30}
    ],
    otherState: "some value"
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked');
    // DON'T do this!! this.state.person[0].name = "Jason";
    this.setState({
      persons: [
        {name: newName, age: 22}, 
        {name: "Mic", age: 23}, 
        {name: "Jmik", age: 29}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Mark", age: 22}, 
        {name: event.target.value, age: 23}, 
        {name: "Jmik", age: 29}
      ]
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

    return (
      <div className="App">
        <h1>Hi I'm a React App </h1>
        <p> this is really working </p>
        <button
          style={style} 
          onClick={() => this.switchNameHandler("Jason")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, "Jason!!")}
          changed={this.nameChangedHandler}> My Hobbies: Racing </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );

    //Understanding JSX
    // Writing this one is cumbersome that's why we don't use this
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'));
  }
}

export default App;

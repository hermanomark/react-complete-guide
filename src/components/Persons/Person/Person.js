import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Peson.js] Inside a constructor', props);
  }

  componentWillMount() {
    console.log('[Peson.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[Peson.js] Inside componentDidMount()');
  }

  render() {
    console.log('[Person.js] Inside render()');
    return (
    <div className={classes.Person}>
      <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!! </p>
      <span>{this.props.children}</span>
      <input type="text" onChange={this.props.changed} value={this.props.name} />
    </div>
    );
  }
}

export default Person;
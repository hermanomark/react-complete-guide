import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

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
    if (this.props.position === 0) { 
      this.inputElement.focus();
    }
  }

  render() {
    console.log('[Person.js] Inside render()');
    return (
      <Aux>
        <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!! </p>
        <span>{this.props.children}</span>
        <input
          ref={(inp) => { this.inputElement = inp}} 
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} />
      </Aux>
      );
    // return [
    //   <p key="1" onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!! </p>,
    //   <span key="2" >{this.props.children}</span>,
    //   <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
    // ]
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func 
};

export default withClass(Person, classes.Person);
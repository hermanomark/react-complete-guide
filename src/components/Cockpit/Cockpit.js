import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  let btnClasses = '';
  if (props.showPersons) {
    btnClasses = classes.Red;
  }
   
  const assignedClasses = []; 
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); 
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}> this is really working </p>
      <button
        className={btnClasses}
        onClick={props.clicked}>Switch Name
      </button>
    </div>
    );
};

export default cockpit;


import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
const [enteredValue, setEnteredValue] = useState('');

  // const [initailValue , updatedValue] = useState('');


  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value); 
  };

  var isValid = enteredValue.trim().length>0;
  console.log("Valid"+ isValid)

  const formSubmitHandler = event => {
    event.preventDefault();

    (enteredValue.length>0 ? props.onAddGoal(enteredValue) : alert("Not Valid"))
     
      // used here value 
    setEnteredValue("");        // setEntered Value null here for  null in the form after submisssion ..
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler}   />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;


// Null in  form after Submitting ...
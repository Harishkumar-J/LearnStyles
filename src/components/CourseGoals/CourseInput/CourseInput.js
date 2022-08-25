import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

<<<<<<< HEAD
const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
=======
const CourseInput = (props) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [validGoal, setValidGoal] = useState(true);
	const goalInputChangeHandler = (event) => {
		if (event.target.value.trim().length > 0) {
			setValidGoal(true);
		}
		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (enteredValue.trim().length === 0) {
			setValidGoal(false);
			return;
		}
		props.onAddGoal(enteredValue);
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div className='form-control'>
				<label style={{ color: validGoal ? 'black' : 'red' }}>
					Course Goal
				</label>
				<input
					style={{
						borderColor: validGoal ? '#ccc' : 'red',
						background: validGoal ? 'transparent' : 'salmon',
					}}
					type='text'
					onChange={goalInputChangeHandler}
				/>
			</div>
			<Button type='submit'>Add Goal</Button>
		</form>
	);
>>>>>>> f4ab9a8 (Start Over)
};

export default CourseInput;

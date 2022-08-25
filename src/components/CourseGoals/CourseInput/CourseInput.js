import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

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
};

export default CourseInput;

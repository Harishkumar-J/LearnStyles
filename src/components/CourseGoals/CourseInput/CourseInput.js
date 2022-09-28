// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Button from '../../UI/Button/Button';

// //import './CourseInput.css';

// //Below block is DYNAMIC STYLED COMPONENT :
// const FormControl = styled.div`
// 	margin: 0.5rem 0;

// 	& label {
// 		font-weight: bold;
// 		display: block;
// 		margin-bottom: 0.5rem;
// 	}

// 	& input {
// 		display: block;
// 		width: 100%;
// 		border: 1px solid #ccc;
// 		font: inherit;
// 		line-height: 1.5rem;
// 		padding: 0 0.25rem;
// 	}

// 	& input:focus {
// 		outline: none;
// 		background: #fad0ec;
// 		border-color: #8b005d;
// 	}

// 	&.invalid input {
// 		border-color: red;
// 		background: #f36767;
// 	}

// 	&.invalid label {
// 		color: red;
// 	}
// `;

// const CourseInput = (props) => {
// 	const [enteredValue, setEnteredValue] = useState('');
// 	const [validGoal, setValidGoal] = useState(true);
// 	const goalInputChangeHandler = (event) => {
// 		if (event.target.value.trim().length > 0) {
// 			setValidGoal(true);
// 		}
// 		setEnteredValue(event.target.value);
// 	};

// 	const formSubmitHandler = (event) => {
// 		event.preventDefault();
// 		if (enteredValue.trim().length === 0) {
// 			setValidGoal(false);
// 			return;
// 		}
// 		props.onAddGoal(enteredValue);
// 		setEnteredValue('');
// 	};

// 	return (
// 		<form onSubmit={formSubmitHandler}>
// 			{/* <div className='form-control'> */}

// 			{/* to include the dynmic css use template literals */}
// 			{/* <div className={`form-control ${!validGoal ? 'invalid' : ''}`}> */}
// 			{/* <label style={{ color: validGoal ? 'black' : 'red' }}> */}

// 			{/* DYNAMIC STYLED COMPONENT */}
// 			<FormControl className={!validGoal && 'invalid'}>
// 				<label>Course Goal</label>
// 				{/* <input
// 					style={{
// 						borderColor: validGoal ? '#ccc' : 'red',
// 						background: validGoal ? 'transparent' : 'salmon',
// 					}}
// 					type='text'
// 					onChange={goalInputChangeHandler}
// 				/> */}
// 				<input
// 					type='text'
// 					onChange={goalInputChangeHandler}
// 					value={enteredValue}
// 				/>
// 				{/* </div> */}
// 			</FormControl>
// 			<Button type='submit'>Add Goal</Button>
// 		</form>
// 	);
// };

// export default CourseInput;

// const CourseInput = props => {
//   const [enteredValue, setEnteredValue] = useState('');
//   const [isValid, setIsValid] = useState(true);

//   const goalInputChangeHandler = event => {
//     if (event.target.value.trim().length > 0) {
//       setIsValid(true);
//     }
//     setEnteredValue(event.target.value);
//   };

//   const formSubmitHandler = event => {
//     event.preventDefault();
//     if (enteredValue.trim().length === 0) {
//       setIsValid(false);
//       return;
//     }
//     props.onAddGoal(enteredValue);
//   };

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div
//         className={`${styles['form-control']} ${!isValid && styles.invalid}`}
//       >
//         <label>Course Goal</label>
//         <input type="text" onChange={goalInputChangeHandler} />
//       </div>
//       <Button type="submit">Add Goal</Button>
//     </form>
//   );
// };

// export default CourseInput;

//--------------------------------------------------
//Dynamic styles with module.css
//-----------------------------------------------------

import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = (props) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [isValid, setIsValid] = useState(true);

	const goalInputChangeHandler = (event) => {
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
		}
		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (enteredValue.trim().length === 0) {
			setIsValid(false);
			return;
		}
		props.onAddGoal(enteredValue);
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div
				className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
				<label>Course Goal</label>
				<input type='text' onChange={goalInputChangeHandler} />
			</div>
			<Button type='submit'>Add Goal</Button>
		</form>
	);
};

export default CourseInput;

import { useState } from 'react';
import styles from './UserForm.module.css';
import UserFormDetails from './UserFormDetails';

const UserForm = () => {
	const [userName, setUserName] = useState('');
	const [age, setAge] = useState('');
	const [userDetails, setUserDetails] = useState([
		{ userName: '', age: '', id: '' },
	]);

	const ageHandler = (e) => {
		setAge(e.target.value);
	};
	const userNameHandler = (e) => {
		setUserName(e.target.value);
	};
	const addUserHandler = (e) => {
		e.preventDefault();
		console.log('UserName = ', userName);
		console.log('Age = ', age);
		if (userName.trim().length === 0 || age === '') {
			alert('Please enter a valid name and age (non-empty values)');
		} else {
			setUserDetails((prevDetails) => {
				const updatedUserDetails = [
					...prevDetails,
					{
						userName: userName,
						age: age,
						id: Math.random().toString(),
					},
				];
				return updatedUserDetails;
			});
		}
		setUserName('');
		setAge('');
	};
	const deleteUserHandler = (user_id) => {
		setUserDetails((prevDetails) => {
			const updatedUserDetails = prevDetails.filter(
				(user) => user.id !== user_id
			);
			return updatedUserDetails;
		});
	};
	return (
		<>
			<form onSubmit={addUserHandler}>
				<div className={styles.form}>
					<label>Username</label>
					<input type='text' onChange={userNameHandler} value={userName} />

					<label>Age(Years)</label>
					<input type='number' onChange={ageHandler} value={age} />
					<button type='submit'>Add User</button>
				</div>
			</form>
			<UserFormDetails
				formDetails={userDetails}
				onDeleteUser={deleteUserHandler}
			/>
		</>
	);
};

export default UserForm;

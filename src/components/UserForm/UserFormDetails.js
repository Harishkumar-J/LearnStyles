import styles from './UserFormDetails.module.css';
const UserFormDetails = (props) => {
	return (
		<div>
			<ul>
				{props.formDetails.length > 1
					? props.formDetails.slice(1).map((user) => (
							<li
								className={styles.userDetail}
								key={user.id}
								onClick={() => props.onDeleteUser(user.id)}>
								<p>
									{user.userName} ({user.age} years old)
								</p>
							</li>
					  ))
					: null}
			</ul>
		</div>
	);
};
export default UserFormDetails;

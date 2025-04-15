import { useDispatch, useSelector } from 'react-redux'
import { clearSelectedUser } from './userDetailSlice.js'

function SelectedUserDetails() {
	const dispatch = useDispatch()
	const selectedUserId = useSelector((state) => state.userDetail.selectedUserId)
	const users = useSelector((state) => state.userData.users)

	if (!selectedUserId) {
		return <div></div>
	}

	const user = users.find((user) => user.id === selectedUserId)
	if (!user) {
		return <p>User Not Found</p>
	}

	return (
		<div className="selected-user-details">
			<h2>Selected User</h2>
			<p>
				<strong>Name: </strong>
				{user.name}
			</p>
			<p>
				<strong>Email: </strong>
				{user.email}
			</p>

			<button
				className="clear-btn"
				onClick={() => dispatch(clearSelectedUser())}
			>
				Clear Selection
			</button>
		</div>
	)
}

export default SelectedUserDetails

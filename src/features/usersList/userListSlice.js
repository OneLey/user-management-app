const initalState = {
	users: [],
	loading: false,
	error: null,
}

export default function userListReducer(state = initalState, action) {
	switch (action.type) {
		case 'userList/fetchData':
			return { ...state, loading: true, error: null }
		case 'userList/fetchSuccess':
			return { ...state, loading: false, users: action.payload }
		case 'userList/fetchError':
			return { ...state, loading: false, error: action.payload }
		case 'userList/addUser':
			return {
				...state,
				users: [...state.users, action.payload],
			}
		case 'userList/deleteUser':
			return {
				...state,
				users: state.users.filter((user) => user.id !== action.payload),
			}
		default: {
			return state
		}
	}
}

export function fetchData() {
	return async function (dispatch) {
		dispatch({ type: 'userList/fetchData' })
		try {
			const res = await fetch('https://jsonplaceholder.typicode.com/users')
			const data = await res.json()
			dispatch({ type: 'userList/fetchSuccess', payload: data })
		} catch (err) {
			dispatch({ type: 'userList/fetchError', payload: err.message })
		}
	}
}

export function addUser(user) {
	return { type: 'userList/addUser', payload: user }
}

export function deleteUser(userId) {
	return { type: 'userList/deleteUser', payload: userId }
}

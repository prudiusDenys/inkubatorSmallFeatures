import React, {useReducer} from "react";

export type ActionType = {
	type: string
}
export type StateType = {
	commutator: boolean
}

export const SET_BUTTON_ON = 'SET_BUTTON_ON';
export const SET_BUTTON_OFF = 'SET_BUTTON_OFF';


export const state: StateType = {
	commutator: false
}

export const reducer = (state: StateType, action: ActionType) => {
	switch (action.type) {
		case SET_BUTTON_ON:
			return {
				...state,
				commutator: state.commutator = true
			}
		case SET_BUTTON_OFF:
			return {
				...state,
				commutator: state.commutator = false
			}
		default:
			throw new Error('Bad action type')
	}
}

export const UnControlledOnOff = () => {

	const [style, dispatch] = useReducer(reducer, state)

	const OnnStyle = {
		display: 'inline-block',
		width: '40px',
		height: '40px',
		border: '2px solid black',
		cursor: 'pointer',
		backgroundColor: (style.commutator) ? 'green' : 'white'
	}
	const OffStyle = {
		display: 'inline-block',
		width: '40px',
		height: '40px',
		border: '2px solid black',
		marginLeft: '10px',
		cursor: 'pointer',
		backgroundColor: (!style.commutator) ? 'red' : 'white'
	}
	const circle = {
		width: '20px',
		height: '20px',
		borderRadius: '10px',
		display: 'inline-block',
		marginLeft: '10px',
		backgroundColor: (style.commutator) ? 'green' : 'red'
	}

	let onClickHandlerOnn = () => {
		dispatch({type: SET_BUTTON_ON})
	}
	let onClickHandlerOff = () => {
		dispatch({type: SET_BUTTON_OFF})
	}

	return (
		<div>
			<div>
				<h2>
					UnControlledOnOff
				</h2>
			</div>
			<div onClick={onClickHandlerOnn} style={OnnStyle}>ONN</div>
			<div onClick={onClickHandlerOff} style={OffStyle}>OFF</div>
			<div style={circle}></div>
		</div>
	)
}
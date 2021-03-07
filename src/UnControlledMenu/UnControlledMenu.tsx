import React, {useReducer} from "react";
import {MenuList} from "../Menu/MenuList";
import {UserName} from "../App";
import {reducer, TOGGLE_COLLAPSED} from "./UnControlledMenuReducer";


export const UnControlledMenu = () => {

	let usersName: Array<UserName> = [
		{id: 1, name: 'Denis'},
		{id: 2, name: 'Andrey'},
		{id: 3, name: 'Petya'},
		{id: 4, name: 'Vova'},
	]

	let [state, dispatch] = useReducer(reducer, {collapsed: false})

	let onClickHandler = () => {
		dispatch({type: TOGGLE_COLLAPSED})
	}

	return (
		<div>
			<div>
				<h3 onClick={onClickHandler}>
					UnControlledMenu
				</h3>
			</div>
			{state.collapsed && <MenuList usersName={usersName} onClick={onClickHandler}/>}
		</div>
	)
}
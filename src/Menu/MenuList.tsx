import React from "react";
import {UserName} from "../App";



type PropsType = {
	usersName: Array<UserName>
	onClick: (id:number)=>void
}

export const MenuList = (props: PropsType) => {

	let getUser = props.usersName.map(u=> <li onClick={()=>props.onClick(u.id)} key={u.id}>{u.name}</li>)

	return (
		<div>
			<ul>
				{getUser}
			</ul>
		</div>
	)
}
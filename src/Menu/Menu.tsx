import React from "react";
import {MenuList} from "./MenuList";
import {UserName} from "./Menu.stories";

type PropsType = {
	showList : boolean
	setShowList:(showList: boolean)=>void
	usersName: Array<UserName>
	onClickHandler: ()=>void
	onClick:(id: number)=>void
}


const MenuMemo = (props: PropsType) => {
	console.log('MENU')
	return(
		<div>
			<div>
				<h3 onClick={props.onClickHandler}>
					Menu
				</h3>
			</div>
			{props.showList && <MenuList usersName={props.usersName} onClick={props.onClick} />}
		</div>
	)
}
export const Menu = React.memo(MenuMemo)
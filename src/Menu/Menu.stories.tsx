import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Menu} from "./Menu";

export default {
	title: 'Menu',
	component: Menu,
};

const callback = action('show or hide menu')

export type UserName = {
	id: number
	name: string
}

export const HideMenu = () => <Menu showList={false}
																		setShowList={callback}
																		usersName={[]}
																		onClick={()=>''}
																		onClickHandler={callback}/>
export const ShowMenu = () =>{
	let usersName: Array<UserName> = [
		{id: 1, name: 'Denis'},
		{id: 2, name: 'Andrey'},
		{id: 3, name: 'Petya'},
		{id: 4, name: 'Vova'},
	]
	return(
		<Menu showList={true}
					setShowList={()=>''}
					usersName={usersName}
					onClick={callback}
					onClickHandler={()=>'s'}/>
	)
}
export const ChangingMenu = () => {

	const [showList, setShowList] = useState(false)
	let usersName: Array<UserName> = [
		{id: 1, name: 'Denis'},
		{id: 2, name: 'Andrey'},
		{id: 3, name: 'Petya'},
		{id: 4, name: 'Vova'},
	]

	let onClickHandler = () => {
		setShowList((!showList))
	}
	let onClick = (id: number)=>{
		alert(`User with ID ${id} should be happy`)
	}

	return <Menu showList={showList}
							 setShowList={setShowList}
							 usersName={usersName}
							 onClickHandler={onClickHandler}
							 onClick={onClick}/>
}
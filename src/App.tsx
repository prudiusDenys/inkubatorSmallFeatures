import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./OnOff/OnOff";
import {Menu} from "./Menu/Menu";
import {Rating} from "./Rating/Rating";
import {Select} from "./Select/Select";
import {HashRouter, Route} from 'react-router-dom';
import {Chat} from "./WebSocket/Chat/Chat";

export type UserName = {
	id: number
	name: string
}
export  type CitiesType = {
	id: number
	city: string
}

function App() {

	let [color, setColor] = useState(false)
	let [showList, setShowList] = useState(false)
	let [value, setValue] = useState(0)
	const [cityValue, setCityValue] = useState('Choose your city')

	let usersName: Array<UserName> = [
		{id: 1, name: 'Denis'},
		{id: 2, name: 'Andrey'},
		{id: 3, name: 'Petya'},
		{id: 4, name: 'Vova'},
	]
	let cities: Array<CitiesType> = [
		{id: 1, city: 'none'},
		{id: 2, city: 'Kiev'},
		{id: 3, city: 'Minsk'},
		{id: 4, city: 'Rome'},
		{id: 5, city: 'Moscow'},
	]


	let onClickHandler = () => {
		setShowList((!showList))
	}
	let onClick = (id: number) => {
		alert(`User with ID ${id} should be happy`)
	}

	return (
		<div className="App">
			<HashRouter>
				{/*<OnOff setColor={setColor} color={color}/>*/}
				{/*<Menu showList={showList}*/}
				{/*			setShowList={setShowList}*/}
				{/*			usersName={usersName}*/}
				{/*			onClickHandler={onClickHandler}*/}
				{/*			onClick={onClick}/>*/}
				{/*<Rating value={value}*/}
				{/*				setValue={setValue}/>*/}
				{/*<Select cities={cities}*/}
				{/*				cityValue={cityValue}*/}
				{/*				setCityValue={setCityValue}/>*/}
				<Route path={'/chat'} render={() => <Chat/>}/>
			</HashRouter>
		</div>
	);
}

export default App;

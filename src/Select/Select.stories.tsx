import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";
import {CitiesType} from "../App";

export default {
	title: 'Select',
	component: Select
}

export const SelectChanging = () => {
	const [cityValue, setCityValue] = useState('Choose your city')
	let cities: Array<CitiesType> = [
		{id: 1, city: 'none'},
		{id: 2, city: 'Kiev'},
		{id: 3, city: 'Minsk'},
		{id: 4, city: 'Rome'},
		{id: 5, city: 'Moscow'},
	]

	return <Select cities={cities}
								 cityValue={cityValue}
								 setCityValue={setCityValue} />
}
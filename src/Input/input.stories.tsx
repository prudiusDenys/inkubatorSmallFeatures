import React, {ChangeEvent, useState} from 'react';
import {linkTo} from '@storybook/addon-links';

export default {
	title: 'input',
	//component: input,
};

export const ControlledInput = () => {
	const [parentValue, setParentValue] = useState('')
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setParentValue(e.currentTarget.value);
	}
	return <input value={parentValue} onChange={onChangeHandler}/>
}
export const ControlledCheckbox = () => {
	const [parentValue, setParentValue] = useState(true)
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setParentValue(e.currentTarget.checked);
	}
	return <input type={'checkbox'} checked={parentValue} onChange={onChangeHandler}/>
}
export const ControlledSelect = () => {
	const [parentValue, setParentValue] = useState<string | undefined>('2')
	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		setParentValue(e.currentTarget.value);
	}
	return <select
		onChange={onChangeHandler}>
		<option>none</option>
		<option value={'1'}>Minsk</option>
		<option value={'2'}>Moscow</option>
		<option value={'3'}>Kiev</option>
	</select>
}
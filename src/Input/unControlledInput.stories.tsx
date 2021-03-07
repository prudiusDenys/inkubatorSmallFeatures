import React, {useRef, useState} from 'react';
import { action } from '@storybook/addon-actions';

export default {
	title: 'unControlledInput',
	//component: Input,
};

export const UnControlledInput = () => <input/>
export const TrackValueOfUnControlledInput = () => {
	const [value, setValue] = useState('');
	return(
			<><input onChange={(e)=>{
				const actualValue = e.currentTarget.value
				setValue(actualValue)
			}}/> - {value}</>
		)
}
export const GetValueOfUnControlledInputByButtonPress = () => {
	const [value, setValue] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	const save = ()=> {
		const el = inputRef.current as HTMLInputElement;
		setValue(el.value)
	}

	return(
		<><input ref={inputRef} />
			<button onClick={save}>save</button> - actual value:  {value}</>
	)
}
export const ControlledInputWithFixedValue = () => <input value={'IT-INKUBATOR'}/>

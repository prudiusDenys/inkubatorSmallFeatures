import React from "react";

export type PropsType = {
	selected: boolean
	value: 1 | 2 | 3 | 4 | 5
	setValue: (value: 1 | 2 | 3 | 4 | 5) => void
	onChange?: (value:1|2|3|4|5)=>void
}

export const Star = (props: PropsType) => {

	let onClickHandler = () => {
		props.setValue(props.value)
		if(props.onChange){
			props.onChange(props.value)
		}
	}

	return <span onClick={onClickHandler}>
		{props.selected ? <b> star </b> : 'star'}
	</span>

}
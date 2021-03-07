import React, {useState} from "react";
import {Star} from "../Rating/Star";

type PropsType = {
	defaultValue?: 0|1|2|3|4|5
	onChange: (value:0|1|2|3|4|5)=>void
}

export const UnControlledRating = (props: PropsType) => {

	let [value, setValue] = useState<0|1|2|3|4|5>(props.defaultValue? props.defaultValue : 0)


	return (
		<div>
			<div>
				<h3>
					UnControlledRating
				</h3>
			</div>
			<div>
				<Star selected={value > 0} setValue = {setValue} value={1} onChange = {()=>props.onChange(1)}/>
				<Star selected={value > 1} setValue = {setValue} value={2} onChange = {()=>props.onChange(2)}/>
				<Star selected={value > 2} setValue = {setValue} value={3} onChange = {()=>props.onChange(3)}/>
				<Star selected={value > 3} setValue = {setValue} value={4} onChange = {()=>props.onChange(4)}/>
				<Star selected={value > 4} setValue = {setValue} value={5} onChange = {()=>props.onChange(5)}/>
			</div>
		</div>
	)
}
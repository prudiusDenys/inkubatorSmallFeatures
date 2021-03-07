import React from "react";
import {Star} from "./Star";

type PropsType = {
	value: number
	setValue: (value: number)=>void
}

export const Rating = React.memo(function Rating(props: PropsType){
	console.log('RATING');
	return (
		<div>
			<div>
				<h3>
					UnControlledRating
				</h3>
			</div>
			<div>
				<Star selected={props.value > 0} setValue = {props.setValue} value={1}/>
				<Star selected={props.value > 1} setValue = {props.setValue} value={2}/>
				<Star selected={props.value > 2} setValue = {props.setValue} value={3}/>
				<Star selected={props.value > 3} setValue = {props.setValue} value={4}/>
				<Star selected={props.value > 4} setValue = {props.setValue} value={5}/>
			</div>
		</div>
	)
})

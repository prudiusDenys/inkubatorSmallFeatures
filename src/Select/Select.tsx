import React, {useState, MouseEvent} from "react";
import classes from "./Select.module.css";
import {CitiesType} from "../App";


type PropsType = {
	cities: Array<CitiesType>
	cityValue: string
	setCityValue: (city: string) => void
}

export const Select = React.memo(function Select(props: PropsType){

	console.log('SELECT')
	const [showOptions, setShowOptions] = useState(false)

	let city = props.cities.map(c => {

		let onMouseDownHandler = () => props.setCityValue(c.city)

		return (
			<div key={c.id} className={classes.city} onMouseDown={onMouseDownHandler}>{c.city}</div>
		)
	})

	let onClickHandler = () => setShowOptions(!showOptions)
	let onBlurHandler = () => setShowOptions(false)

	return (
		<div className={classes.wrapper}>
			<div className={classes.select}>
				<div className={classes.selectedCity} tabIndex={0} onClick={onClickHandler}
						 onBlur={onBlurHandler}>{props.cityValue}</div>
				{
					showOptions &&
          <div className={classes.options}>
						{city}
          </div>
				}
			</div>
		</div>
	)
})


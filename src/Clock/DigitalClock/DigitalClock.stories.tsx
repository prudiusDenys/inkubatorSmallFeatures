import React, {useEffect} from "react";
import {useState} from "react";


export default {
	title: 'Digital Clock'
}

const addingNumber = (n: number) => {
	return n < 10 ? `0${n}` : n
}

export const DigitalClock = () => {

	const [time, setTime] = useState(new Date)

	useEffect(() => {
		const intervalId = setInterval(() => setTime(new Date), 1000)
		return () => clearInterval(intervalId)
	}, [])

	return (
		<div>
			<div>{addingNumber(time.getHours())}:{addingNumber(time.getMinutes())}:{addingNumber(time.getSeconds())}</div>
		</div>
	)
}
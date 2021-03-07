import React from "react";

type PropsType = {
	setColor?: (color:boolean)=>void
	color: boolean
}

export const OnOff = React.memo( function OnOff(props: PropsType){
	console.log('ONOFF');

	const OnnStyle = {
		display: 'inline-block',
		width: '40px',
		height: '40px',
		border: '2px solid black',
		cursor: 'pointer',
		backgroundColor: (props.color) ? 'green' : 'white'
	}
	const OffStyle = {
		display: 'inline-block',
		width: '40px',
		height: '40px',
		border: '2px solid black',
		marginLeft: '10px',
		cursor: 'pointer',
		backgroundColor: (!props.color) ? 'red' : 'white'
	}
	let circle = {
		width: '20px',
		height: '20px',
		borderRadius: '10px',
		display: 'inline-block',
		marginLeft: '10px',
		backgroundColor: (props.color) ? 'green' : 'red'
	}

	let onClickHandlerOnn = () => {
		if(props.setColor){
			props.setColor(true)
		}
	}
	let onClickHandlerOff = () => {
		if(props.setColor){
			props.setColor(false)
		}
	}

	return (
		<div>
			<div>
				<h2>
					ControlledOnOff
				</h2>
			</div>
			<div onClick={onClickHandlerOnn} style={OnnStyle}>ONN</div>
			<div onClick={onClickHandlerOff} style={OffStyle}>OFF</div>
			<div style={circle}></div>
		</div>
	)
})


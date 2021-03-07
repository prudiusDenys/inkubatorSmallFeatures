import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {OnOff} from "./OnOff";

export default {
	title: 'OnOff',
	component: OnOff,
};

export const OnMode = () => <OnOff color={true} setColor={action('on or off clicked')}/>
export const OffMode = () => <OnOff color={false} setColor={action('on or off clicked')}/>
export const ModeChanging = () =>{
	const [value, setValue] = useState(true)
	return <OnOff color={value} setColor={setValue}/>
}
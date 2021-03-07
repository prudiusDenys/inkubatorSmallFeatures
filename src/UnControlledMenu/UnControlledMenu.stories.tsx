import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {UnControlledMenu} from "./UnControlledMenu";

export default {
	title: 'UnControlledMenu',
	component: UnControlledMenu,
};


export const ModeMenu = ()=> <UnControlledMenu/>


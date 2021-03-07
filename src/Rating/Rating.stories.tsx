import React, {useState} from 'react';
import {Rating} from "./Rating";

export default {
	title: 'Rating',
	component: Rating,
};

export const EmptyRating = () => <Rating value={0} setValue={()=>{}}/>
export const Rating1 = () => <Rating value={1} setValue={()=>{}}/>
export const Rating2 = () => <Rating value={2} setValue={()=>{}}/>
export const Rating3 = () => <Rating value={3} setValue={()=>{}}/>
export const Rating4 = () => <Rating value={4} setValue={()=>{}}/>
export const Rating5 = () => <Rating value={5} setValue={()=>{}}/>
export const ChangeRating = () =>{
	const [rating, setRating] = useState(5)
	return <Rating value={rating} setValue={setRating}/>
}
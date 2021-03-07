export const sum = (a: number, b: number) => {
	return a + b;
}

export const mult = (a: number, b: number) => {
	return a * b ;
}

export const f = (a: string)=>{
	let arr = a.toLowerCase().split(' ');
	return	arr;
}

type StudentType = {
	id: number
	name: string
	age: number
	isActive: boolean
	address: AddressType
	technologies: Array<TechnologiesType>
}

type AddressType = {
	streetTitle: string
	city: CityType
}
type CityType = {
	title: string
	countryTitle: string
}
type TechnologiesType = {
	id: number
	title: string
}

export const student: StudentType = {
	id: 1,
	name: 'Dimych',
	age: 32,
	isActive: false,
	address: {
		streetTitle: 'Surganova 2',
		city:{
			title: 'Minsk',
			countryTitle: 'Belarus'
		}
	},
	technologies: [
		{
			id:1,
			title: "HTML"
		},
		{
			id:2,
			title: "HTML"
		},
		{
			id:3,
			title: "HTML"
		}
	]
}
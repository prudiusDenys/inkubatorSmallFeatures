import {reducer, SET_BUTTON_OFF, SET_BUTTON_ON, StateType} from "./UnControlledOnOff";


test('commutator should be true', () => {
	const state: StateType = {
		commutator: false
	}
	const newState = reducer(state, {type: SET_BUTTON_ON})
	expect(newState.commutator).toBe(true)
})

test('commutator should be false', () => {
	const state: StateType = {
		commutator: false
	}
	const newState = reducer(state, {type: SET_BUTTON_OFF})
	expect(newState.commutator).toBe(false)
})

test('reducer should throw error because action type is incorrect', () => {
	const state: StateType = {
		commutator: false
	}
	expect(() => {
		reducer(state, {type: 'FAKE'})
	}).toThrowError()
})
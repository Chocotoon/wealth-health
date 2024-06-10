import { configureStore } from '@reduxjs/toolkit'

let state = {
    employees: [],
    isComponentVisible: false,
    offset: 10
}

const reducer = (currentState, action) => {
    switch (action.type) {
        case 'TOGGLE_VUE':
            return { ...currentState, isComponentVisible: !currentState.isComponentVisible }
        case 'ADD_EMPLOYEE': 
            const updatedEmployees = [...currentState.employees, action.payload]
            return {...currentState, employees: updatedEmployees}
        case 'SET_OFFSET': 
            return {  ...currentState, offset: action.payload}
        default:
            return currentState
    }
}
export const store = configureStore(
    {
        preloadedState: state,
        reducer
    }
)
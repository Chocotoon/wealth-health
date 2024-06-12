import { configureStore } from '@reduxjs/toolkit'

let state = {
    employees: [],
    isComponentVisible: false
}

const reducer = (currentState, action) => {
    switch (action.type) {
        case 'TOGGLE_VUE':
            return { ...currentState, isComponentVisible: !currentState.isComponentVisible }
        case 'ADD_EMPLOYEE': 
            const updatedEmployees = [...currentState.employees, action.payload]
            return {...currentState, employees: updatedEmployees}
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
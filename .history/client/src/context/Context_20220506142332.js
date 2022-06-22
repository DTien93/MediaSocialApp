import { createContext, useReducer } from 'react'

const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false
}

export const Context = createContext(INITIAL_STATE)

export const ContextProvider = () => {
    const [state, dipatch] = useReducer(Context, INITIAL_STATE)

    return (
        <Context.Provider value>
            
        </Context.Provider>
    )
}
import React, { createContext,useReducer } from 'react'
export const ColorContent = createContext({})
//reducer
export const reducer = (state, action) => {
    switch (action.type) {
        case 'updatecolor':
            return action.color
        default:
            return state
    }
}
export const Color = props =>{
    const [color,dispatch] = useReducer(reducer,'blue')
    return (
        <ColorContent.Provider value={{color,dispatch}}>
            {props.children}
        </ColorContent.Provider>
    )
}
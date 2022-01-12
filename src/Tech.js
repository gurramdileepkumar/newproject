import React,{ createContext, useContext } from 'react'
import Tech1 from './Tech1';

export const Context = createContext();


export default function Tech() {
    const name = "bit technologies.."
    return (
        <div>
            <Context.Provider value={name}>
                <Tech1 />

            </Context.Provider>
            
        </div>
    )
}

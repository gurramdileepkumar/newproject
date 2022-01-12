import React,{createContext} from 'react'
import Fc1 from './Fc1'

 export const Context = createContext();

export default function Fc() {
    const name="bit technologies"
    return (
        <div>
            <Context.Provider value={name}>
                <Fc1 />
            </Context.Provider>
            
        </div>
    )
}

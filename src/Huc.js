import React,{createContext} from 'react'
import Huc1 from './Huc1'

export const Context = createContext();


export default function Huc() {

    const name = "bit technologies";
    return (
        <div>
            <Context.Provider value={name}>

                <Huc1/>
            </Context.Provider>
        </div>
    )
}

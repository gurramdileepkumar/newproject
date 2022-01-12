import React,{useContext} from 'react'
import { Context } from './Fc'

export default function Fc1() {
    const value = useContext(Context);
    return (
        <div>
            <h1>welcome {value}</h1>
            {/* <Context.Consumer>
                {value =><p>{value}</p>}
            </Context.Consumer> */}
            
        </div>
    )
}

import React,{useContext} from 'react'
import { Context } from './Huc'
// import {Context} from './Huc';

export default function Huc1() {
    // const value = useContext(Context);
    return (
        <div>
            {/* <h1>welcome to {value}</h1> */}
            <Context.Consumer>
                {value => <p>{value}</p>}
            </Context.Consumer>
        </div>
    )
}

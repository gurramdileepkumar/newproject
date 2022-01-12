import React,{ useContext }from 'react'
import { Context } from './Tech'

export default function Tech1() {
    return (
        <div>
            <Context.Consumer>
                {value => <p>{value}</p>}
            </Context.Consumer>
            
        </div>
    )
}

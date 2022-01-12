import React from 'react'
import { useState } from 'react'

export default function Bit() {
    const [count,setCount]= useState(0)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>add</button>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count-1)}>remove</button>

            
        </div>
    )
}

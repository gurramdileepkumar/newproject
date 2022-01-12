import React, {useState} from 'react'

export default function Hooks() {

    const [name,setName] = useState({
        fisrtname :'',
        surname :''
    })
  
    // const [count,setCount] = useState(0)


    return (
        <div style={{textAlign:"center"}}>
            {/* <button onClick={ () =>setCount(count - 1)}>remove</button>
            <input type="" value={count} />
            <button onClick={ () =>setCount(count + 1)}>add</button> */}
            <input type="text" value={name.fisrtname}
                onChange={ e =>setName({...name,fisrtname:e.target.value})}
             />
            <input type="text" value={name.surname}
                onChange={ e =>setName({...name,surname:e.target.value})}
             />
             <br />
             <span>{name.fisrtname}</span>
             <span>{name.surname}</span>
            
        </div>
    )
}

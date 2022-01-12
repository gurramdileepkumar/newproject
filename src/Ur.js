import React,{useRef,useEffect} from 'react'

export default function Ur() {
//     const quantityRef = useRef();
//    const increamentQuantity = () =>{
//         quantityRef.current.value++;
//     }
// const focusRef = useRef();
//  useEffect (()=>{
//     focusRef.current.focus();
//  },[])
const elementRef = useRef();
useEffect(() => {
    const myElement = elementRef.current;
     console.log(myElement);
}, [])
 
    return (
        <div>
            {/* <input type="" ref={quantityRef} value="0" />
            <button onClick={increamentQuantity}>+</button> */}
            {/* <input type="text" ref={focusRef} /> */}
            <h1 ref={elementRef}>WELCOME</h1>
            
        </div>
    )
}

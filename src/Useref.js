import React,{useRef,useEffect} from 'react'

export default function Useref() {
    // const focusRef = useRef();

    // useEffect(() => {
    //   focusRef.current.focus();
    // }, [])
    // const quantityRef = useRef();
    // const increamentQuantity = () =>{
    //     quantityRef.current.value++;
    // }
    const elementRef = useRef();
    useEffect(() => {
      const myElement = elementRef.current;
      console.log(myElement);
    }, [])
    return (
        <div>
            <h1 ref={elementRef}>welcome...</h1>
            {/* <input type=""  ref={quantityRef} value="0"/>
            <button onClick={increamentQuantity}>Add</button> */}
        </div>
    )
}

import React, { Dispatch, SetStateAction } from "react"

interface ButtonProps{
    count: number;
    setCount: Dispatch<SetStateAction<number>>
}
const Button:React.FC<ButtonProps> = ({count, setCount}) =>{
  console.log('button re-render')
    return(
        <button onClick={()=> setCount(count+1)}>Button Child {count}</button>
    )
}
export default React.memo(Button)
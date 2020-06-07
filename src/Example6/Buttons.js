import React, { useContext } from 'react'
import {ColorContent} from './color'
function Buttons(){
    const {dispatch} = useContext(ColorContent)
    return(
        <div>
            <button onClick={()=>{dispatch({type:'updatecolor',color:"red"})}}>红色</button>
            <button onClick={()=>{dispatch({type:'updatecolor',color:"yellow"})}}>黄色</button>
        </div>
    )
}
export default Buttons
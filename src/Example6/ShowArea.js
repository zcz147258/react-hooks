import React, { useContext, useReducer } from 'react'
import {ColorContent} from './color'
function ShowArea(){
    const {color} = useContext(ColorContent)
    return(
        <div style={{ color: color}}>字体颜色为blue</div>
    )
}
export default ShowArea;
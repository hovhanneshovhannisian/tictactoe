import React from 'react'

function Cell(props) {
    const isFilled = props.value ? "filled" : ""
    const setValue = ( ) => {
        props.changeValue(props.player)
    }
    return (
        <div onClick={setValue} className={`${isFilled} cell`}>
            {props.value}
        </div>
    )
}

export default Cell
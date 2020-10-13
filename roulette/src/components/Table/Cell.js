import React from 'react'

const Cell = (props) => {
    
    return (
        <div className='cell'>
            <div className={`cell${props.number1}`} onClick={() => props.onClick(props.payout1, props.number1)}>{props.label1}</div>
            <div className={`cell${props.number2}`} onClick={() => props.onClick(props.payout2, props.number2)}>{props.label2}</div>
            <div className={`cell${props.number3}`} onClick={() => props.onClick(props.payout3, props.number3)}>{props.label3}</div>
            <div className={`cell${props.number4}`} onClick={() => props.onClick(props.payout4, props.number4)}>{props.label4}</div>
        </div>
    )
}

export default Cell

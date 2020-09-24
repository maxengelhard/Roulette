import React from 'react'

const Balance = (props) => {
    return (
        <div className='balance'>
            <p>Balance</p>
            {props.balance}
        </div>
    )
}

export default Balance

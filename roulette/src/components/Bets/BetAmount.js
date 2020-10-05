import React from 'react'
// import refresh from './refresh-icon.png'

const BetAmount = (props) => {
    return (
        <div className='betAmount'>
            <button style={{background: 'gray'}} value={1} onClick={() => props.changeAmount(1)}>1</button>
            <button style={{background: 'pink'}} value={2} onClick={() => props.changeAmount(2)}>2</button>
            <button style={{background: 'red'}} value={5} onClick={() => props.changeAmount(5)}>5</button>
            <button style={{background: 'green'}} value={25} onClick={() => props.changeAmount(25)}>25</button>
            <button style={{background: 'black'}} value={100} onClick={() => props.changeAmount(100)}>100</button>
            <button style={{background: 'blue'}} value={500} onClick={() => props.changeAmount(500)}>500</button>
            {/*<button style={{background: 'red'}}  onClick={() => props.repeat()}><img src={refresh} alt='refresh'/></button>*/}
        </div>
    )
}

export default BetAmount

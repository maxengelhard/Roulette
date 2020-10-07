import React from 'react'
import colors from './Buttons'
// import refresh from './refresh-icon.png'

const BetAmount = (props) => {

    const betAmounts = colors.map((color) => {
        const style={background: color[0], filter: 'brightness(.5)', border: 'none', margin: '2px'}
        if (props.value === color[1]) {
            style.filter = 'brightness(1)'
            style.border = '2px dotted white'
        }
       return <button key={color[1]} style={style} value={color[1]} onClick={() => props.changeAmount(color[1])}>{color[1]}</button> 
    })
    return (
        <div className='betAmount'>
            {betAmounts}
            {/*<button style={{background: 'red'}}  onClick={() => props.repeat()}><img src={refresh} alt='refresh'/></button>*/}
        </div>
    )
}

export default BetAmount

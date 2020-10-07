import React from 'react'
import payouts from '../Bets/payouts'


const LargeTable = (props) => {
    const label = (index) => {
        const value = Object.values(props.bets[index+18])[0]/Object.values(payouts[index+18])
        if (props.startBetting && value >0) {
        return <div className='chip'style={{borderRadius: '50%',boxSizing: 'border-box', height: '20px', width: '20px', padding: 'auto', margin: 'auto', background: 'black', fontSize: '10px'}}>{value}</div>
        } else return false
    }

    let tableArr = [];
    let currentNum = 1;
    while(currentNum <=36) {
        tableArr.push([currentNum,currentNum+1,currentNum+2])
        currentNum+=3;
    }
    const table = tableArr.map((num,key) =>  {
        return (
           <tr key={key}><td className={`button${num[0]}`}><button onClick={() => props.onClick(props.bet,num[0])}>{label(num[0]) ? label(num[0]) : num[0]}</button></td><td className={`button${num[1]}`}><button onClick={() => props.onClick(props.bet,num[1])}>{label(num[1]) ? label(num[1]) : num[1]}</button></td><td className={`button${num[2]}`}><button onClick={() => props.onClick(props.bet,num[2])}>{label(num[2]) ? label(num[2]) : num[2]}</button></td></tr> 
        )
    })
    return (
            <table> 
                <tbody>
    <tr><td className='button0' colSpan='3'><button onClick={() => props.onClick(props.bet,0)}>{label(0) ? label(0) : 0}</button></td></tr>
                     {table}
                </tbody>
            </table>
    )
}

export default LargeTable

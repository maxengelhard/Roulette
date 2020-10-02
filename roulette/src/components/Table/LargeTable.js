import React from 'react'

const LargeTable = (props) => {
    let tableArr = [];
    let currentNum = 1;
    while(currentNum <=36) {
        tableArr.push([currentNum,currentNum+1,currentNum+2])
        currentNum+=3;
    }
    const table = tableArr.map((num,key) =>  {
        return (
           <tr key={key}><td><button onClick={() => props.onClick(props.bet)}>{num[0]}</button></td><td><button onClick={() => props.onClick(props.bet)}>{num[1]}</button></td><td><button onClick={() => props.onClick(props.bet)}>{num[2]}</button></td></tr> 
        )
    })
    return (
            <table> 
                <tbody>
                <tr><td colSpan='3'><button onClick={() => props.onClick(props.bet)}>0</button></td></tr>
                     {table}
                </tbody>
            </table>
    )
}

export default LargeTable

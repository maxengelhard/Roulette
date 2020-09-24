import React from 'react'

const LargeTable = () => {
    let tableArr = [];
    let currentNum = 1;
    while(currentNum <=36) {
        tableArr.push([currentNum,currentNum+1,currentNum+2])
        currentNum+=3;
    }
    const table = tableArr.map((num,key) =>  {
        return (
           <tr key={key}><td><button>{num[0]}</button></td><td><button>{num[1]}</button></td><td><button>{num[2]}</button></td></tr> 
        )
    })
    return (
            <table> 
                <tbody>
                <tr><td colSpan='3'><button>0</button></td></tr>
                     {table}
                </tbody>
            </table>
    )
}

export default LargeTable

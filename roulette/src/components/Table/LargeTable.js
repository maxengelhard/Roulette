import React from 'react'
import payouts from '../Bets/payouts'
import Cell from './Cell'


const LargeTable = (props) => {
    const label = (index) => {

        const value = Object.values(props.bets[index])[0]/Object.values(payouts[index])
        if (value >0) {
        return <div className='chip'>{value}</div>
        } else return false
    }

    let tableArr = [];
    let currentNum = 1;
    while(currentNum <=36) {
        tableArr.push([currentNum,currentNum+1,currentNum+2])
        currentNum+=3;
    }
    const table = tableArr.map((num,key) =>  {
        // first need to get the zero row
        if (key===0) {
            return (
            <div key={key} className='row'>
            <div>
                <Cell 
                onClick={props.onClick} 
                payout1={payouts[17]} 
                number1={null} 
                label1={label(17) ? label(17): '' }

                payout2={props.split}
                number2={`0-${num[0]}`}
                label2={label(90+num[0]) ? label(90+num[0]) : ''}
                
                payout3={props.street}
                number3={`${num[0]}-${num[1]}-${num[2]}`}
                label3={label(164+num[0]) ? label(164+num[0]) : ''}

                payout4={props.bet}
                number4={num[0]}
                label4= {label(num[0]+19) ? label(num[0]+19) : num[0]}
                />
                </div>
            <div>
                <Cell 
                onClick={props.onClick} 
                payout1={props.trio} 
                number1={`0-${num[0]}-${num[1]}`} 
                label1={label(126+num[0]) ? label(126+num[0]) : ''}

                payout2={props.split}
                number2={`0-${num[1]}`}
                label2={label(90+num[1]) ? label(90+num[1]) : ''}
                
                payout3={props.split}
                number3={`${num[0]}-${num[1]}`}
                label3={label(55+num[0]) ? label(55+num[0]) : ''}

                payout4={props.bet}
                number4={num[1]}
                label4= {label(num[1]+19) ? label(num[1]+19) : num[1]}
                />
            </div>
            <div>
                <Cell 
                onClick={props.onClick} 
                payout1={props.trio} 
                number1={`0-${num[1]}-${num[2]}`} 
                label1={label(126+num[1]) ? label(126+num[1]) : ''}

                payout2={props.split}
                number2={`0-${num[2]}`}
                label2={label(90+num[2]) ? label(90+num[2]) : ''}
                
                payout3={props.split}
                number3={`${num[1]}-${num[2]}`}
                label3={label(55+num[1]) ? label(55+num[1]) : ''}

                payout4={props.bet}
                number4={num[2]}
                label4= {label(num[2]+19) ? label(num[2]+19) : num[2]}
                />
                </div>
                </div>
            )
        }
        
         else return (
            <div key={key} className='row'>
            <div>
                <Cell 
                onClick={props.onClick} 
                payout1={props.doubleStreet} 
                number1={`${(num[0]-3)}-${(num[1]-3)}-${(num[2]-3)}-${num[0]}-${num[1]}-${num[2]}`} 
                label1={label(176 +(num[0]-1)/3) ? label(176 +(num[0]-1)/3): ''}

                payout2={props.split}
                number2={`${(num[0]-3)}-${num[0]}`}
                label2={label(90+num[0]) ? label(90+num[0]) : ''}
                
                payout3={props.street}
                number3={`${num[0]}-${num[1]}-${num[2]}`}
                label3= {label(165 +(num[0]-1)/3) ? label(165 +(num[0]-1)/3): ''}

                payout4={props.bet}
                number4={num[0]}
                label4= {label(num[0]+19) ? label(num[0]+19) : num[0]}
                />
            </div>
            <div>
                <Cell 
                onClick={props.onClick} 
                payout1={props.corner} 
                number1={`${(num[0]-3)}-${num[0]}-${(num[1]-3)}-${num[1]}`} 
                label1={label(125+num[0]) ? label(125+num[0]) : ''}

                payout2={props.split}
                number2={`${(num[1]-3)}-${num[1]}`}
                label2={label(90+num[1]) ? label(90+num[1]) : ''}
                
                payout3={props.split}
                number3={`${num[0]}-${num[1]}`}
                label3={label(55+num[0]) ? label(55+num[0]) : ''}

                payout4={props.bet}
                number4={num[1]}
                label4= {label(num[1]+19) ? label(num[1]+19) : num[1]}
                />
            </div>
            <div>
                <Cell 
                onClick={props.onClick} 
                payout1={props.corner} 
                number1={`${(num[1]-3)}-${num[1]}-${(num[2]-3)}-${num[2]}`} 
                label1={label(125+num[1]) ? label(125+num[1]) : ''}

                payout2={props.split}
                number2={`${(num[2]-3)}-${num[2]}`}
                label2={label(90+num[2]) ? label(90+num[2]) : ''}
                
                payout3={props.split}
                number3={`${num[1]}-${num[2]}`}
                label3={label(55+num[1]) ? label(55+num[1]) : ''}

                payout4={props.bet}
                number4={num[2]}
                label4= {label(num[2]+19) ? label(num[2]+19) : num[2]}
                />
            </div>
            </div>
    
        )
    })
    return (
            <div className='largeTable'> 
                <div className='largeHeader' onClick={() => props.onClick(props.bet,0)}>
                {label(19) ? label(19) : 0}
                </div>
                {table}
            </div>
    )
}

export default LargeTable

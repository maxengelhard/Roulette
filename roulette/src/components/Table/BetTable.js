import React from 'react'
import TableCell from './TableCell'
import LargeTable from './LargeTable'
import payouts from '../Bets/payouts'
import BetAmount from '../Bets/BetAmount'

const BetTable = (props) =>  {
        const label = (index) => {
            const value = Object.values(props.bets[index])[0]/Object.values(payouts[index])
            if (value >0) {
                if (index ===6 || index===7 || index===8) {
                    return <div className='chip' style={{transform: 'translate(-50%,0%)'}}>{value}</div>
                } else {
                    return <div className='chip' style={{height: '20px', width:'20px', paddingTop: '1px', fontSize: '12px', marginTop:'40%'}}>{value}</div>
                }
            } else return false
        }

    return (
        <div style={{display: 'flex'}}>
        <div>
        <div className="wrapper" style={{color: 'white', textAlign: 'center'}}>
            <TableCell className='low' row='2/4' column='1' label={label(4) ? label(4) :'1 To 18'} bet={payouts[4]} count={1}onClick={props.onClick}/>
            <TableCell className='even' row='4/6' column='1' label={label(3) ? label(3) : 'EVEN'} bet={payouts[3]} onClick={props.onClick}/>
            <TableCell className='red' row='6/8' column='1' label={label(0) ? label(0) : <div className='redDiamond' />} bet={payouts[0]} onClick={props.onClick}/>
            <TableCell className='black' row='8/10' column='1' label={label(1) ? label(1) :<div className='blackDiamond' />} bet={payouts[1]} onClick={props.onClick}/>
            <TableCell className='odd' row='10/12' column='1' label={label(2) ? label(2) :'ODD'} bet={payouts[2]} onClick={props.onClick}/>
            <TableCell className='high' row='12/14' column='1' label={label(5) ? label(5) :'19 To 36'} bet={payouts[5]} onClick={props.onClick}/>
            <TableCell className='firstDozen' row='2/6' column='2' label={label(9) ? label(9) :'1st 12'} bet={payouts[9]} onClick={props.onClick}/>
            <TableCell className='secondDozen' row='6/10' column='2' label={label(10) ? label(10) : '2nd 12'} bet={payouts[10]} onClick={props.onClick}/>
            <TableCell className='thirdDozen' row='10/14' column='2' label={label(11) ? label(11) :'3rd 12' } bet={payouts[11]} onClick={props.onClick}/>
            <div className='largeTable' style={{gridColumn: '3/6', gridRow: '1/14'}}>
            <LargeTable 
            onClick={props.onClick} 
            bet={payouts[12]} 
            bets={props.bets}
            split={payouts[13]}
            trio={payouts[15]}
            street={payouts[14]}
            doubleStreet={payouts[18]}
            corner={payouts[16]}
            />
            </div>
            <TableCell className='column-1' row='14' column='3/3' label={label(6) ? label(6) : '2 To 1'} bet={payouts[6]} onClick={props.onClick}/>
            <TableCell className='column-2' row='14' column='4/4' label={label(7) ? label(7) : '2 To 1'} bet={payouts[7]} onClick={props.onClick}/>
            <TableCell className='column-3' row='14' column='5/5' label={label(8) ? label(8) : '2 To 1'} bet={payouts[8]} onClick={props.onClick}/>
        </div>
        <BetAmount 
        value={props.betAmount} 
        changeAmount={props.changeAmount}
        undoBet={props.undoBet}
        lastBet={props.lastBet}
        repeatBet={props.repeatBet}
        double={props.double}
        repeat={props.repeat}
        disableRepeat={props.disableRepeat}
        />
        </div>
        
        </div>
    )
    }

export default BetTable

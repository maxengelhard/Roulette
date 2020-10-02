import React from 'react'
import TableCell from './TableCell'
import LargeTable from './LargeTable'
import Bets from '../Bets/Bets'
import payouts from '../Bets/payouts'


class BetTable extends React.Component {
    constructor() {
        super()
        this.state = {
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick(bet) {
        this.setState((prevState) => {
            return {...prevState.bet, bet}
        })
    }
    componentDidUpdate(prevProps,prevState) {
        // itereate over the prevState
    }
    render() {
        console.log(this.state)
    return (
        <div>
            <Bets bets={this.state} />
        <div className="wrapper" style={{color: 'white', textAlign: 'center'}}>
            <TableCell className='first18' row='2/4' column='1' label='1 To 18' bet={payouts['Low']} onClick={this.onClick}/>
            <TableCell className='even' row='4/6' column='1' label='EVEN' bet={payouts['Even']} onClick={this.onClick}/>
            <TableCell className='red' row='6/8' column='1' label={<div className='redDiamond' />} bet={payouts['Red']} onClick={this.onClick}/>
            <TableCell className='black' row='8/10' column='1' label={<div className='blackDiamond' />} bet={payouts['Black']} onClick={this.onClick}/>
            <TableCell className='odd' row='10/12' column='1' label='ODD' bet={payouts['Odd']} onClick={this.onClick}/>
            <TableCell className='last18' row='12/14' column='1' label='19 To 36' bet={payouts['High']} onClick={this.onClick}/>
            <TableCell className='first12' row='2/6' column='2' label='1st 12'bet={payouts['First Dozen']} onClick={this.onClick}/>
            <TableCell className='second12' row='6/10' column='2' label='2nd 12'bet={payouts['Second Dozen']} onClick={this.onClick}/>
            <TableCell className='third12' row='10/14' column='2' label='3rd 12'bet={payouts['Third Dozen']} onClick={this.onClick}/>
            <TableCell className='largeTable' row='1/14' column='3/6' label={<LargeTable onClick={this.onClick} bet={payouts['Straight Up']}/>} onClick={this.onClick} />
            <TableCell className='twoToOne' row='14' column='3/3' label='2 To 1' bet={payouts['Column-1']} onClick={this.onClick}/>
            <TableCell className='twoToOne' row='14' column='4/4' label='2 To 1' bet={payouts['Column-2']} onClick={this.onClick}/>
            <TableCell className='twoToOne' row='14' column='5/5' label='2 To 1' bet={payouts['Column-3']} onClick={this.onClick}/>
        </div>
        </div>
    )
    }
}

export default BetTable

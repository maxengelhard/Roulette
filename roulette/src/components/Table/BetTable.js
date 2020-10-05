import React from 'react'
import TableCell from './TableCell'
import LargeTable from './LargeTable'
import Bets from '../Bets/Bets'
import payouts from '../Bets/payouts'
import BetAmount from '../Bets/BetAmount'


class BetTable extends React.Component {
    constructor() {
        super()
        this.state = {
            bets: payouts,
            startBetting: false,
            betAmount: 1,
            
        }
        this.onClick = this.onClick.bind(this)
        this.changeAmount = this.changeAmount.bind(this)
    }

    // to neutralize it to zero

    componentDidMount() {
        this.setState((prevState) => {
            prevState.bets = payouts.map((obj) => {
                return {[Object.keys(obj)[0]] : 0}
            })
        })
    }

    onClick(bet) {
        this.setState((prevState) => {
            const newBet = Object.keys(bet)[0]
            const updatedBets = prevState.bets.map((obj,index) => {
                const collector = Object.keys(obj)[0]
                if (newBet === collector) {
                   return { [collector] : prevState.bets[index][collector] + bet[newBet]*this.state.betAmount }
                } else return obj
            })
            return {
                ...prevState,
                bets: updatedBets,
                startBetting: true
            }
        })
    }

    changeAmount(wager) {
        this.setState((prevState) => {
            return {
                ...prevState,
                betAmount: wager,
            }
        })
    }
    
    render() {
        const label = (index) => {
            const value = Object.values(this.state.bets[index])[0]
            const multiple = Object.values(payouts[index])
            if (this.state.startBetting && value >0) {
                return value/multiple
            } else return false
        }

    return (
        <div style={{display: 'flex'}}>
        <div className='playerBets'>
        <Bets bets={this.state.startBetting ? this.state: []} />
        </div>
        <div>
        <div className="wrapper" style={{color: 'white', textAlign: 'center'}}>
            <TableCell className='first18' row='2/4' column='1' label={label(4) ? label(4) :'1 To 18'} bet={payouts[4]} count={1}onClick={this.onClick}/>
            <TableCell className='even' row='4/6' column='1' label={label(3) ? label(3) : 'EVEN'} bet={payouts[3]} onClick={this.onClick}/>
            <TableCell className='red' row='6/8' column='1' label={label(0) ? label(0) : <div className='redDiamond' />} bet={payouts[0]} onClick={this.onClick}/>
            <TableCell className='black' row='8/10' column='1' label={label(1) ? label(1) :<div className='blackDiamond' />} bet={payouts[1]} onClick={this.onClick}/>
            <TableCell className='odd' row='10/12' column='1' label={label(2) ? label(2) :'ODD'} bet={payouts[2]} onClick={this.onClick}/>
            <TableCell className='last18' row='12/14' column='1' label={label(5) ? label(5) :'19 To 36'} bet={payouts[5]} onClick={this.onClick}/>
            <TableCell className='first12' row='2/6' column='2' label={label(9) ? label(9) :'1st 12'} bet={payouts[9]} onClick={this.onClick}/>
            <TableCell className='second12' row='6/10' column='2' label={label(10) ? label(10) : '2nd 12'} bet={payouts[10]} onClick={this.onClick}/>
            <TableCell className='third12' row='10/14' column='2' label={label(11) ? label(11) :'3rd 12' } bet={payouts[11]} onClick={this.onClick}/>
            <TableCell className='largeTable' row='1/14' column='3/6' label={<LargeTable  onClick={this.onClick} bet={payouts[13]}/>} onClick={this.onClick} />
            <TableCell className='twoToOne' row='14' column='3/3' label={label(6) ? label(6) : '2 To 1'} bet={payouts[6]} onClick={this.onClick}/>
            <TableCell className='twoToOne' row='14' column='4/4' label={label(7) ? label(7) : '2 To 1'} bet={payouts[7]} onClick={this.onClick}/>
            <TableCell className='twoToOne' row='14' column='5/5' label={label(8) ? label(8) : '2 To 1'} bet={payouts[8]} onClick={this.onClick}/>
        </div>
        <BetAmount changeAmount={this.changeAmount}/>
        </div>
        
        </div>
    )
    }
}

export default BetTable

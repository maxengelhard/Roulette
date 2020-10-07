import React from 'react';
import BetTable from './components/Table/BetTable';
import Header from './components/Header'
import WheelControl from './components/WheelControl';
import BetControl from './components/Bets/BetControl'
import rotations from './components/Wheel/rotations'
import numbers from './components/Wheel/numbers'
import payouts from './components/Bets/payouts'
import checkWinner from './components/Bets/checkwinner'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
        // for the spinning wheel
        spinning: false,
        disabled: false,
        degWheel: 0,
        degBall: 0,
        finished: false,
        rotations: rotations,
        numbers: numbers,
        whoWon: false,
        // for the betting
        bets: payouts.map((obj) => {return {[Object.keys(obj)[0]] : 0}}),
        startBetting: false,
        betAmount: 1,
        totalBet: 0,
        // for the balance
        balance: 1000,
    }
    this.handleClick = this.handleClick.bind(this)
    this.makeBet = this.makeBet.bind(this)
    this.changeAmount = this.changeAmount.bind(this)
}

/////////////// For the spinning wheel

handleClick() {
    // set the state to spinning randomly
    this.setState(prevState => {
        return {
            spinning: true,
            disabled: true,
            degWheel: Math.floor(5000 + Math.random()*5000),
            degBall: Math.floor(2500 + Math.random()*2500),
        }
    })
    // create a new promise to wait for when it is finished spinning
    const finished = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.setState(prevState => {
                    return {
                      ...prevState,
                      finished: true,
                      balance: prevState.balance + checkWinner(this.state.whoWon, this.state.bets)}
                }))
            },10005)
        })
    }
    // reset the state after the promise returns
    const reset = () => {
        setTimeout(() => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    spinning: false,
                    disabled: false,
                    degWheel: 0,
                    degBall: 0,
                    finished: false,
                    rotations : prevState.rotations.map(num => ((num - this.state.degWheel)%360 +360)%360),
                    whoWon: false,
                    bets: payouts.map((obj) => {return {[Object.keys(obj)[0]] : 0}}),
                    startBetting: false,
                    totalBet: 0,
                }
            })
        }, 5000)};

        // call the async function
    async function asyncCall() {
        await finished()
        reset()
    }

    asyncCall()
    
}

componentDidUpdate(prevProps, prevState) {
    // to update my rotations array
    if (this.state.spinning) {
    if (prevState.degWheel !== this.state.degWheel) {
        this.setState((prevState) => {
            return {
                ...prevState,
                rotations : prevState.rotations.map(num => (num + this.state.degWheel)%360),
                
            }
        })
    }
    // once those are updated find where the ball is closest too!
    const winner = (arr,goal) => {
        const closest = arr.reduce((prev,cur) => {
            return (Math.abs(cur-goal)) < Math.abs(prev-goal) ? cur: prev
        })
        return arr.indexOf(closest)
    }
    if (prevState.rotations[0] !== this.state.rotations[0]) {
        this.setState((prevState) => {
            // (360/37)*6 would place the white 0 span at the top of the board
            // this is important becuase it makes zero the first index of which is how the numbers array is set up
            const goal = (360 + (360/37)*6 - (this.state.degBall)%360)%360
            return {
                ...prevState,
                whoWon: numbers[winner(this.state.rotations,goal)]
            }
        })
    }
} return false

}

////////////// For the betting table


makeBet(bet,number) {

  this.setState((prevState) => {
      const newBet = (number || number===0) ? number: Object.keys(bet)[0]
      const updatedBets = prevState.bets.map((obj,index) => {
          const collector = Object.keys(obj)[0]
          if (!isNaN(newBet) && newBet.toString() === collector) {
            return {[collector]: prevState.bets[index][collector] + bet['Straight Up']*this.state.betAmount}
          }
          else if (newBet === collector) {
             return { [collector] : prevState.bets[index][collector] + bet[newBet]*this.state.betAmount }
          } 
          else return obj
      })
      const total = updatedBets.reduce((sum, cur, idx) => {
          return sum + cur[Object.keys(cur)[0]]/payouts[idx][Object.keys(cur)[0]]
      },0)
      return {
          ...prevState,
          bets: updatedBets,
          startBetting: true,
          totalBet: total,
          balance: prevState.balance - this.state.betAmount
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
  
    document.querySelectorAll('button').forEach(button => button.style.pointerEvents = this.state.disabled ? 'none': 'auto')

  return (
    <div>
      <Header />
      <div className='main'>
        <div className='leftSide'>
      <WheelControl 
        degWheel={this.state.degWheel} 
        degBall={this.state.degBall} 
        spinning={this.state.spinning}
        finished={this.state.finished}
        handleClick={this.handleClick} />
      <BetControl 
      totalBet={this.state.totalBet} 
      winner={this.state.finished ? this.state.whoWon : ''}
      balance={this.state.balance} 
      bets={this.state.bets}
      />
      </div>
      <BetTable 
      bets={this.state.bets}
      startBetting={this.state.startBetting}
      betAmount={this.state.betAmount}
      totalBet={this.state.totalBet}
      onClick={this.makeBet}
      changeAmount={this.changeAmount}
      whoWon={this.state.whoWon}
      finished={this.state.finished}
      />
      </div>
      
    </div>
  );
}
}

export default App;

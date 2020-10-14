import React from 'react';
import BetTable from './components/Table/BetTable';
import Header from './components/Header'
import WheelControl from './components/WheelControl';
import BetControl from './components/Bets/BetControl'
import rotations from './components/Wheel/rotations'
import numbers from './components/Wheel/numbers'
import payouts from './components/Bets/payouts'
import checkWinner from './components/Bets/checkwinner'
import sumTotal from './components/Bets/sumTotal'


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

        betAmount: 1,
        totalBet: 0,
        // for the balance
        balance: 0,
        // for undo
        lastBet: [],
        // for repeat
        repeat: [],
        repeatTotal: 0,
        repeatLastBet: [],
    }
    this.handleClick = this.handleClick.bind(this)
    this.makeBet = this.makeBet.bind(this)
    this.changeAmount = this.changeAmount.bind(this)
    this.undoBet = this.undoBet.bind(this)
    this.repeatBet = this.repeatBet.bind(this)
    this.double = this.double.bind(this)
}

componentDidMount() {
  const storedBalance = localStorage.getItem('balance')
  if (localStorage.getItem('balance')) {
    this.setState({
      balance: storedBalance
    })
  } else {
    this.setState({
      balance: 1000
    })
  }
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
          // finish the spin
            setTimeout(() => {
                resolve(this.setState(prevState => {
                    return {
                      ...prevState,
                      finished: true,
                      balance: prevState.balance + checkWinner(this.state.whoWon, this.state.bets),
                      totalBet: checkWinner(this.state.whoWon, this.state.bets)
                    }
                }))
            },10005)
        })
    }
    // reset the state after the promise returns
    const reset = () => {
        setTimeout(() => {
            this.setState(prevState => {
              localStorage.setItem('balance', prevState.balance)
              localStorage.setItem('date', Date.now())
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
                    totalBet: 0,
                    repeat: prevState.bets,
                    repeatTotal: sumTotal(prevState.bets,payouts),
                    repeatLastBet: prevState.lastBet
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
  
  const table = document.querySelector('.wrapper').querySelectorAll('div,.red,.black')
  const undo = document.querySelector('.undo')
  const repeat = document.querySelector('.repeat')
    
  // to update my rotations array  
    if (this.state.spinning) {
      // then make all bets unavailable
    table.forEach(button => button.style.pointerEvents = 'none')
    undo.style.pointerEvents = 'none'
    repeat.style.pointerEvents = 'none'
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
} 
// else we can change other things
// check to see if the bet amount is more than the balance
 else if (this.state.betAmount !== prevState.betAmount || this.state.balance !== prevState.balance || this.state.spinning !== prevState.spinning) {
  const wagers = document.querySelector(`.betAmount`).querySelectorAll('button:not(.undo):not(.repeat)')
  undo.style.pointerEvents = 'auto'
  if (this.state.betAmount > this.state.balance) {
    table.forEach(button => button.style.pointerEvents = 'none')
    wagers.forEach(button => {
      if (button.value > this.state.balance) {
        button.style.pointerEvents = 'none'
      } else {
        button.style.pointerEvents = 'auto'
      }
    })
  } else {
    table.forEach(button => button.style.pointerEvents = 'auto')
    wagers.forEach(button => button.style.pointerEvents = 'auto')
  }
  if (this.state.repeatTotal < this.state.balance) {
    repeat.style.pointerEvents = 'auto'
  }
} else {
  table.forEach(button => button.style.pointerEvents = 'auto')
  undo.style.pointerEvents = 'auto'
} 


return false

}

////////////// For the betting table


makeBet(bet,number) {
  this.setState((prevState) => {
      const newBet = (number || number===0) ? number: Object.keys(bet)[0]
      const value = Object.values(bet)[0]
      const updatedBets = prevState.bets.map((obj,index) => {
          const collector = Object.keys(obj)[0]
          if (newBet.toString() === collector) {

             return { [collector] : obj[collector] + value*this.state.betAmount }
          } 
          else return obj
      })

      let lastBetArr = prevState.lastBet
      lastBetArr.push({[newBet]: this.state.betAmount})
      return {
          ...prevState,
          bets: updatedBets,
          totalBet: sumTotal(updatedBets,payouts),
          balance: prevState.balance - this.state.betAmount,
          lastBet: lastBetArr,
          repeat: [],
          repeatTotal: 0,
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

undoBet() {
  const last = this.state.lastBet.length-1
  const key = Object.keys(this.state.lastBet[last])[0]
  const value = Object.values(this.state.lastBet[last])[0]

  this.setState(prevState => {
    // find the key in the bets and subtract that
    const updatedBets = prevState.bets.map((obj,index) => {
      const collector = Object.keys(obj)[0]
      if (key === collector) {
         return { [collector] : obj[collector] - value*payouts[index][key]}
      } 
      else return obj
  })

      return {
        ...prevState,
        balance: prevState.balance + value,
        totalBet: prevState.totalBet - value,
        bets: updatedBets,
        lastBet: prevState.lastBet.slice(0,last)
      }
  })
}

repeatBet() {
  this.setState(prevState => {
    // itereate over prevState to see which are greater than 0 and push them into the lastBet
    return {
      ...prevState,
      bets: prevState.repeat,
      totalBet: prevState.repeatTotal,
      balance: prevState.balance - prevState.repeatTotal,
      repeat: [],
      repeatTotal: 0,
      lastBet: prevState.repeatLastBet,
      repeatLastBet: [],
    }
  })

}

double() {
  // set the state of every bet being doubled
  this.setState(prevState => {
    const doubled = prevState.bets.map(obj => {
      const key = Object.keys(obj)[0]
      return {[key] : obj[key]*2}
    })
    return {
      ...prevState,
      bets: doubled,
      totalBet: prevState.totalBet*2,
      balance: prevState.balance - prevState.totalBet
    }
  })
  

}

render() {
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
      finished={this.state.finished}
      />
      </div>
      <BetTable 
      bets={this.state.bets}
      betAmount={this.state.betAmount}
      balance={this.state.balance}
      totalBet={this.state.totalBet}
      onClick={this.makeBet}
      changeAmount={this.changeAmount}
      whoWon={this.state.whoWon}
      finished={this.state.finished}
      undoBet={this.undoBet}
      lastBet={this.state.lastBet}
      repeatBet={this.repeatBet}
      double={this.double}
      repeat={this.state.repeat.length >0}
      spinning={this.state.spinning}
      // check if we're repeating if we are pass down if the repeat Total is more than the balance : else see if double is more than balance
      disableRepeat={this.state.repeat.length >0 ? this.state.repeatTotal > this.state.balance : this.state.totalBet > this.state.balance}
      />
      </div>
    </div>
  );
}
}

export default App;

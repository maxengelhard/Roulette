import React from 'react'
import RoulletWheel from './Wheel/RoulletWheel'
import SpinButton from './Wheel/SpinButton'
import BetControl from './Bets/BetControl'
import rotations from './Wheel/rotations'
import numbers from './Wheel/numbers'

class WheelControl extends React.Component {
    constructor() {
        super()
        this.state = {
            spinning: false,
            degWheel: 0,
            degBall: 0,
            finished: false,
            rotations: rotations,
            numbers: numbers,
            whoWon: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        // set the state to spinning randomly
        this.setState(prevState => {
            return {
                spinning: true,
                degWheel: Math.floor(5000 + Math.random()*5000),
                degBall: Math.floor(2500 + Math.random()*2500),
            }
        })
        // create a new promise to wait for when it is finished spinning
        const finished = () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(this.setState(prevState => {
                        return {finished: true}
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
                        degWheel: 0,
                        degBall: 0,
                        finished: false,
                        rotations : prevState.rotations.map(num => ((num - this.state.degWheel)%360 +360)%360),
                        whoWon: false,
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


    render(props) {

        const spinStyle = {
            transition: 'all 10s ease-out',
            transform: `rotate(${this.state.degWheel}deg)`
        }

        const ballStyle = {
            transition: 'all 10s ease-out',
            transform: `rotate(-${this.state.degBall}deg)`,
        }

        
    return (
        <div className='leftSide'>
            <RoulletWheel className='box' style={this.state.spinning ? spinStyle : {}} ballStyle={this.state.spinning ? ballStyle: {}}/>
            <SpinButton handleClick={this.handleClick} disabled={this.state.spinning}/>
            <BetControl winner={this.state.finished ? this.state.whoWon : ''} />
        </div>
    )
    }
}

export default WheelControl

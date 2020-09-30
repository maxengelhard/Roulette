import React from 'react'
import RoulletWheel from './Wheel/RoulletWheel'
import SpinButton from './Wheel/SpinButton'
import BetControl from './Bets/BetControl'

class LeftSide extends React.Component {
    constructor() {
        super()
        this.state = {
            spinning: false,
            deg: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                spinning: !prevState.spinning,
                deg: Math.floor(5000 + Math.random()*5000),
            }
        })
    }
    render() {

        const spinStyle = {
            transition: 'all 10s ease-out',
            transform: `rotate(${this.state.deg}deg)`
        }
        
    return (
        <div className='margin'>
            <RoulletWheel className={`box ${this.state.spinning ? 'spin' : ''}`} style={this.state.spinning ? spinStyle : {}}/>
            <SpinButton handleClick={this.handleClick}/>
            <BetControl />


        </div>
    )
    }
}

export default LeftSide

import React from 'react'
import RoulletWheel from './RoulletWheel'
import SpinButton from './SpinButton'
import BetControl from './Bets/BetControl'

class LeftSide extends React.Component {
    constructor() {
        super()
        this.state = {
            spinning: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                spinning: !prevState.spinning
            }
        })
    }
    render() {
    return (
        <div style={{marginRight: '5%'}}>
            <RoulletWheel className={`box ${this.state.spinning ? 'spin' : ''}`}/>
            <SpinButton handleClick={this.handleClick}/>
            <BetControl />

        </div>
    )
    }
}

export default LeftSide

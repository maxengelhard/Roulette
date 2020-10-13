import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'

const RepeatIcon = <FontAwesomeIcon icon={faRedoAlt} />

const Repeat = (props) => {
     const doubleRing = props.flash ? 'double': ''
    const repeat = props.repeat ? RepeatIcon : '2X'
    const click = props.repeat ? () => props.repeatBet() : () => props.double()
    return (
        <button className={`repeat ${doubleRing}`} onClick={click} disabled={props.disableRepeat}>
            {repeat}
        </button>
    )
}

export default Repeat

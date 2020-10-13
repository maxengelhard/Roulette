import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faUndoAlt} />

const UndoBet = (props) => {
    return (
        <button disabled={!props.disabled} className='undo' onClick={() => props.undoBet()}>
            {element}
        </button>
    )
}

export default UndoBet

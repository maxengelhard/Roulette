import React from 'react'

const UndoBet = (props) => {
    return (
        <button disabled={!props.disabled} className='undo' onClick={() => props.undoBet()}>
            Undo
        </button>
    )
}

export default UndoBet

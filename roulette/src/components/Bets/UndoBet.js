import React from 'react'

const UndoBet = (props) => {
    return (
        <button onClick={() => props.undoBet()}>
            Undo
        </button>
    )
}

export default UndoBet

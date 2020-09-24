import React from 'react'

const TableCell = (props) => {
    return (
        <div className={props.className} style={{gridColumn: props.column, gridRow: props.row}}>
            <button onClick={() => props.onClick(props.bet)}>{props.label}</button>
        </div>
    )
}

export default TableCell

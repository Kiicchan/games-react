import './Board.css'

function Row(props) {
    return (
        <div className={"row"}>
            {props.children}
        </div>
    )
}

function Cell({renderPiece, onCellClick, pos, highlight}) {
    return (
        <div className={"cell"}>
            {renderPiece ? renderPiece(pos) : <div className={`hole ${highlight ? "highlight" : ""}`} onClick={() => onCellClick(pos)} />} 
        </div>
    )
}

function Board({boardState, renderPiece, onCellClick}) {
    return (
        <div className={"board"}>
            {boardState.map((rowItems, row) => {
                return (
                    <Row key={row}>
                        {rowItems.map((isCell, col) => {
                            let cell
                            if (isCell === 1) { 
                                cell = <Cell key={col} 
                                            pos={{ row, col }} 
                                            onCellClick={onCellClick}/> 
                            } else if (isCell === 2) {
                                cell = <Cell key={col}
                                            pos={{ row, col }}
                                            renderPiece={renderPiece} />
                            }
                            return cell
                        })}
                    </Row>
                )
            })}
        </div>
    )
}

export default Board;
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

function Board({boardState, renderPiece, onCellClick, availableMoves}) {
    return (
        <div className={"board"}>
            {boardState.map((rowItems, row) => {
                return (
                    <Row key={row.toString()}>
                        {rowItems.map((isCell, col) => {
                            let cell
                            if (isCell === 1) {
                                let isAvailable = false
                                availableMoves.forEach((move) => {
                                    if (row === move.row && col === move.col) { isAvailable = true }
                                })
                                cell = <Cell key={col.toString()}  //Célula sem Peça
                                            pos={{ row, col }} 
                                            onCellClick={onCellClick} 
                                            highlight={isAvailable} /> 
                            } else if (isCell === 2) {  //Célula com Peça
                                cell = <Cell key={col.toString()}
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
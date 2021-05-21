import './Piece.css'

function Piece({onPieceClick, pos, select}) {
    return (
        <div className={`piece ${select ? "select" : "black"}`} 
            onClick={() => onPieceClick(pos)}
        />
    )
}

export default Piece;
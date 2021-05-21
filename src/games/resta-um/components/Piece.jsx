import './Piece.css'
import { useState } from "react";

function Piece({onPieceClick, pos}) {
    const [select, setSelect] = useState(false)
    return (
        <div className={`piece ${select ? "select" : "black"}`} 
            onClick={() => onPieceClick(pos, setSelect)}
        />
    )
}

export default Piece;
import { useState, useCallback } from "react";
import Board from "./components/Board";
import Piece from "./components/Piece";

function movePiece(oldPos, newPos, boardState) {
    let newBoardState = boardState.slice()
    newBoardState[oldPos.row][oldPos.col] = 1   //posição de origem
    newBoardState[(oldPos.row + newPos.row)/2][(oldPos.col + newPos.col)/2] = 1   //posição da peça removida
    newBoardState[newPos.row][newPos.col] = 2   //posição de destino
    return newBoardState
}

function getAvailableMoves(pos, boardState) {
    const availableMoves = []
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    directions.forEach((direction) => {
        const pos1 = {row: direction[0] + pos.row, col: direction[1] + pos.col}
        const pos2 = {row: direction[0] * 2 + pos.row, col: direction[1] * 2 + pos.col}
        const boardValue1 = getBoardValue(pos1, boardState)
        const boardValue2 = getBoardValue(pos2, boardState)
        if(boardValue1 === 2 && boardValue2 === 1) { availableMoves.push(pos2) }
    })
    return availableMoves            
}

function getBoardValue(pos, boardState) {
    if (pos.row == null || pos.col == null) {
        return null
    } else if (pos.row >= 0 && pos.row < 7 && pos.col >= 0 && pos.col < 7) {
        return boardState[pos.row][pos.col]
    } else {
        return null
    }
}

function Game(props) {
    const [boardState, setBoardState] = useState([  //Estado do tabuleiro-> 0: célula inválida, 1: célula vazia, 2: célula com peça
        [0,0,2,2,2,0,0],
        [0,0,2,2,2,0,0],
        [2,2,2,2,2,2,2],
        [2,2,2,1,2,2,2],
        [2,2,2,2,2,2,2],
        [0,0,2,2,2,0,0],
        [0,0,2,2,2,0,0],
    ])

    const [availableMoves, setAvailableMoves] = useState([])    //Lista de movimentos possíveis
    const [selectedPiece, setSelectedPiece] = useState({ row: null, col: null })    //Posição da peça selecionada
    const clearSelect = () => {                             //reset de seleção de peça
        setSelectedPiece({ row: null, col: null })
        setAvailableMoves([])
    }

    const onPieceClick = useCallback((pos) => {
        if (selectedPiece.row === pos.row && selectedPiece.col === pos.col) {
            clearSelect()
        } else {
            setAvailableMoves(getAvailableMoves(pos, boardState))
            setSelectedPiece(pos)
        }
    }, [boardState, selectedPiece])

    const onCellClick = useCallback((newPos) => {
        let isAvailable = false
        let availableMoves = getAvailableMoves(selectedPiece, boardState)
        availableMoves.forEach((move) => {
            if (newPos.row === move.row && newPos.col === move.col) { isAvailable = true }
        })

        if (isAvailable) {
            let newBoardState = movePiece(selectedPiece, newPos, boardState)
            setBoardState(newBoardState)
        }
        
        clearSelect()
    }, [boardState, selectedPiece])
    
    return (
        <>
            <Board 
                boardState={boardState}
                onCellClick={onCellClick}
                renderPiece={(pos) => <Piece pos={pos}
                                        onPieceClick={onPieceClick}
                                        select={pos.col === selectedPiece.col && pos.row === selectedPiece.row} />}
                availableMoves={availableMoves}
            />
        </>
    )
}

export default Game;
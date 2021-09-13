import { createContext, useReducer, useEffect} from "react";

const StateContext = createContext();
export default StateContext;

const reducer = (state, action) => {
    switch (action.type) {        
        case 'reveal':
           {const {row, col} = action.payload
            const {fieldState, mineMap, isGameEnd} = state
            
            if(isGameEnd){return state}; //fazer nada
            
            const isMine = mineMap[row][col] === 1
            const newFieldState = isMine ? 
                revealMines(row, col, mineMap, fieldState) : 
                revealCellRecursively(row, col, mineMap, fieldState)
            return {...state, fieldState: newFieldState, isGameEnd: isMine, timerOn: !isMine}
        }

        case 'reveal/Around':
           {const {row, col} = action.payload
            const {fieldState, mineMap, isGameEnd} = state
            if(isGameEnd){return state};

            let {newFieldState, didGameEnd} = revealAround(row, col, mineMap, fieldState)

            return {...state, fieldState: newFieldState, isGameEnd: didGameEnd, timerOn: didGameEnd ? false : true}
           }

        case 'mark':
           {const {row, col} = action.payload
            const {fieldState, isGameEnd} = state
            
            if(isGameEnd){return state};
            
            let newFieldState = [...fieldState]
            let newRow = [...fieldState[row]]
            const value = fieldState[row][col]
            if (value === 'flag') {
                newRow[col] = 'question'
            } else if(value === 'question') {
                newRow[col] = ''
            } else {
                newRow[col] = 'flag'
            }
            newFieldState[row] = newRow 
            return {...state, fieldState: newFieldState, timerOn: true}}
        
        case 'timer/Increment':
            const {timerCount} = state            
            return {...state, timerCount: timerCount + 1 }

        case 'victory':
            return {...state, isGameEnd: true, isVictory: true, timerOn: false}
        case 'config/Change':
            return init(action.payload.gameConfiguration)
        case 'reset':
            return init(state.gameConfiguration)
        default:
            return state;
    }
}

function init(gameConfiguration) {
    const mineMap = createMineField(gameConfiguration.rows, gameConfiguration.cols, gameConfiguration.mines)    
    const fieldState = Array(gameConfiguration.rows).fill(0).map(() => Array(gameConfiguration.cols).fill(''))
    return {
        gameConfiguration,
        fieldState,
        mineMap,
        timerCount: 0,
        timerOn: false,
        isGameEnd: false,
        isVictory: false
    }
}

export function StateContextProvider ({children}) {
    const initialConfiguration = {rows: 9, cols: 9, mines: 10}
    const [state, dispatch] = useReducer(reducer, initialConfiguration, init)
    
    useEffect(() => {   //analisa condição de vitória
        const isVictory = didWin(state.mineMap, state.fieldState)
        if (isVictory) {
            dispatch({type: 'victory'})
        }
    },[state.fieldState, state.mineMap])

    useEffect(() => {   // inicia o timer
        if (state.timerOn) {
            const timerId = setInterval(() => {
                    dispatch({type: 'timer/Increment'})
                }, 1000);         
            return () => clearInterval(timerId)
        }
    }, [state.timerOn])

    return (
        <StateContext.Provider value = {{state, dispatch}}> {children} </StateContext.Provider>
    )
}

// Biblioteca:

const getMineCount = (row, col, mineMap) => {    
    let mineCount = 0
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            mineCount += mineMap[row + i] && mineMap[row + i][col + j] === 1 ? 1 : 0 
        }
    }
    return mineCount
}

const revealCellRecursively = (row, col, mineMap, fieldState) => {
    const isConcealed = fieldState[row][col] === '' || fieldState[row][col] === 'question'    
    
    if (isConcealed) {
        const value = getMineCount(row, col, mineMap)
        
        let newFieldState = [...fieldState]
        let newRow = [...fieldState[row]]
        if (value === 0) {
            newRow[col] = value
            newFieldState[row] = newRow
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    newFieldState = 
                        mineMap[row + i] && mineMap[row + i][col + j] === 0 ?
                        revealCellRecursively(row + i, col + j, mineMap, newFieldState) : 
                        newFieldState
                }
            }
        } else {
            newRow[col] = value            
            newFieldState[row] = newRow
        }
        return newFieldState
    } else {
        return fieldState
    }
}

const revealAround = (row, col, mineMap, fieldState) => {
    let newFieldState = [...fieldState]
    
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            const isMine = mineMap[row+i] ? 
                    mineMap[row+i][col+j] === 1 : false
            const isConcealed = fieldState[row+i] ?
                    fieldState[row+i][col+j] === '' || fieldState[row+i][col+j] === 'question' : false
            if (isConcealed && isMine) {
                newFieldState = revealMines(row+i, col+j, mineMap, fieldState)
                return {newFieldState, didGameEnd: true}
            } else if(isConcealed && !isMine) {
                newFieldState = revealCellRecursively(row+i, col+j, mineMap, newFieldState)
            }
        }
    }

    return {newFieldState, didGameEnd: false}
}

const revealMines = (row, col, mineMap, fieldState) => {
    const newFieldState = [...fieldState]
    for (let i = 0; i < fieldState.length; i++) {
        const newRow = [...fieldState[i]];
        for (let j = 0; j < newRow.length; j++) {
            const value = newRow[j];
            const isMine = mineMap[i][j] === 1
            if (value !== 'flag' && isMine ) {
                newRow[j] = row === i && col === j ? 'red mine' : 'mine'
            } else if (value === 'flag' && !isMine) {
                newRow[j] = 'red flag'
            }
        }
        newFieldState[i] = newRow
    }
    return newFieldState
}

const createMineField = (rows, cols, mines) => {
    const mineMap = Array(rows).fill(0).map(() => Array(cols).fill(0))
    
    const availableSpots = []
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            availableSpots.push({rows: i, cols: j})
        }        
    }

    for (let m = 0; m < mines && availableSpots.length > 0; m++) {
        const pickedSpot = Math.floor(Math.random() * availableSpots.length) 
        const [mineLocation] = availableSpots.splice(pickedSpot, 1)
        mineMap[mineLocation.rows][mineLocation.cols] = 1
    }
    return mineMap
}

const didWin = (mineMap, fieldState) => {
    for (let i = 0; i < mineMap.length; i++) {
        for (let j = 0; j < mineMap[i].length; j++) {
            const isMine = mineMap[i][j] === 1
            const isRevealed = Number.isInteger(fieldState[i][j])
            if (!isMine && !isRevealed) {
                return false
            }
        }        
    }
    return true
}
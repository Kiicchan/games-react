import './DisplayArea.css'
import { useContext } from "react";
import StateContext from "../contexts/StateContext";
import Display from "./Display";
import ResetButton from "./ResetButton";

export default function DisplayArea(props) {
    const {state} = useContext(StateContext)
    const minesLeft = state.gameConfiguration.mines - countFlags(state.fieldState)

    return (
        <div className='display-area'>
            <Display value={minesLeft} />
            <ResetButton />
            <Display value={state.timerCount} />
        </div>
    )
}

const countFlags = (fieldState) => {
    let flagCount = 0
    for (let i = 0; i < fieldState.length; i++) {
        const row = fieldState[i];
        for (let j = 0; j < row.length; j++) {
            const value = row[j];
            if (value === 'flag') {
                flagCount += 1
            }
        }
    }
    return flagCount
}
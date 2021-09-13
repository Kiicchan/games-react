import { useContext } from "react"
import StateContext from "../contexts/StateContext";
import "./Field.css";
import { ReactComponent as FlagIcon} from "../icons/flag.svg";
import { ReactComponent as MineIcon} from "../icons/mine.svg";
import { ReactComponent as QuestionMarkIcon} from "../icons/questionmark.svg";

function Cell({row, col, value}) {
    const isNumber = Number.isInteger(value)
    const {dispatch} = useContext(StateContext)

    if (isNumber) {
        return <div className={`cell revealed n${value.toString()}`}
                    onDoubleClick={() => dispatch({type: 'reveal/Around', payload: {row, col}})}
                    >
                        {value}
                </div>        
    } else {
        switch (value) {
            case "flag":
                return <FlagIcon className="cell unrevealed" 
                            onContextMenu={() => dispatch({type: 'mark', payload: {row, col}})}
                            />
                            
            case "red flag":
                return <FlagIcon className="cell unrevealed lightred" />

            case "mine":
                return <MineIcon className="cell revealed" />

            case "red mine":
                return <MineIcon className="cell revealed red" />

            case "question":
                return <QuestionMarkIcon className="cell unrevealed" 
                            onClick={() => dispatch({type: 'reveal', payload: {row, col}})} 
                            onContextMenu={() => dispatch({type: 'mark', payload: {row, col}})}
                            />
            default:
                return <div className="cell unrevealed" 
                            onClick={() => dispatch({type: 'reveal', payload: {row, col}})} 
                            onContextMenu={() => dispatch({type: 'mark', payload: {row, col}})}
                            />
        }

    }
}

function Row(props) {
    return (
        <div className="row">
            {props.cells.map((value, col) => {
                return (
                    <Cell value={value} key={col} row={props.row} col={col}/>
                )
            })}
        </div>
    )
}

export default function Field(props) {
    const {state} = useContext(StateContext)
    const {fieldState} = state
    return (
        <div className="field">
            {fieldState.map((cells, row) => {
                return (
                    <Row cells={cells} key={row} row={row}/>
                )
            })}
        </div>
    )
}
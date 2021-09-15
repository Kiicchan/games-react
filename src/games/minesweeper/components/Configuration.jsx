import './Configuration.css'
import { useContext, useRef } from "react";
import StateContext from "../contexts/StateContext";

export default function Configuration(props) {
    const {state, dispatch} = useContext(StateContext)
    const difficulty = useRef({value: null})

    const handleDifficultyChange = (value) => {
        let gameConfiguration
        switch (value) {
            case 'beginner':
                gameConfiguration = {rows: 9, cols: 9, mines: 10}
                break;
            case 'intermediate':
                gameConfiguration = {rows: 16, cols: 16, mines: 40}
                break;
            case 'expert':
                gameConfiguration = {rows: 16, cols: 30, mines: 99}
                break;
            default:
                gameConfiguration = state.gameConfiguration
                break;
        }

        dispatch({type: 'config/Change', payload: {gameConfiguration} })
    }

    const handleCustomChange = (event) => {
        const rows = Number(event.target['rows'].value)
        const cols = Number(event.target['cols'].value) 
        const mines = Number(event.target['mines'].value) < rows * cols ? Number(event.target['mines'].value) : rows * cols - 1
        const gameConfiguration = {rows, cols, mines}
        dispatch({type: 'config/Change', payload: {gameConfiguration}})
    }

    return (
        <div className="form-container">
            <form>
                <label htmlFor="difficulty">Dificuldade: </label>
                <select name="difficulty" id="difficulty" ref={difficulty} onChange={(e)=> handleDifficultyChange(e.target.value)}>
                    <option value="beginner" defaultValue>Iniciante</option>
                    <option value="intermediate">Intermediário</option>
                    <option value="expert">Especialista</option>
                    <option value="custom">Personalizado</option>
                </select>
            </form>
            {
                difficulty.current.value === 'custom' ?
                <form onSubmit={(event) => {event.preventDefault(); handleCustomChange(event)}}>
                    <div>
                        <label htmlFor="rows">Linhas:</label>
                        <input defaultValue={state.gameConfiguration.rows} min={5} max={30} type="number" name="rows" id="rows" required />
                    </div>
                    <div>
                        <label htmlFor="cols">Colunas:</label>
                        <input defaultValue={state.gameConfiguration.cols} min={5} max={30} type="number" name="cols" id="cols" required/>
                    </div>
                    <div>
                        <label htmlFor="mines">Minas:</label>
                        <input defaultValue={state.gameConfiguration.mines} min={1} max={900} type="number" name="mines" id="mines" required/>
                    </div>
                    <button type="submit">Iniciar</button>
                </form>                
                : null
            }
        </div>
        
        
    )
}
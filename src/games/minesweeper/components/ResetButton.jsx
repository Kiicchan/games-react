import './ResetButton.css'
import { useContext } from 'react';
import StateContext from "../contexts/StateContext";
import {ReactComponent as SmileyIcon} from "../icons/smiley.svg";
import {ReactComponent as VictoryIcon} from "../icons/victory.svg";
import {ReactComponent as DefeatIcon} from "../icons/defeat.svg";

export default function ResetButton(props) {
    const {state, dispatch} = useContext(StateContext)
    const Icon = state.isVictory ? VictoryIcon : state.isGameEnd ? DefeatIcon : SmileyIcon

    return (
        <Icon className='reset-button'
            onClick={() => dispatch({type: 'reset'})}
            />
    )
}
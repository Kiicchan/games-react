import {StateContextProvider} from "./contexts/StateContext";
import Field from "./components/Field";
import DisplayArea from "./components/DisplayArea";
import Configuration from "./components/Configuration";
import Container from "./components/Container";

function Game(props) {
    return (
        <div className='minesweeper'>
            <Container>
                <StateContextProvider >
                    <DisplayArea />
                    <Field />
                    <Configuration />
                </StateContextProvider>
            </Container>
        </div>
    )
}

export default Game;
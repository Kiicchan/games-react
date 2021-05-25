import "./Display.css";

function Display(props) {
    return (
        <div className="display">
            <div className="text">{props.number === 1 ? "Resta" : "Restam"} {props.number}</div>
        </div>
    )
}

export default Display;
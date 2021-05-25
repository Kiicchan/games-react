import { useEffect } from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Game from "./Game";

const useStyles = makeStyles((theme) => ({
    content: {
        padding: theme.spacing(2)
    }
}))

function RestaUm(props) {
    const classes = useStyles()
    
    useEffect(() => {
        if(props.setTitle) {props.setTitle("Resta 1")}
        return () => {if(props.setTitle) {props.setTitle("Games")}}
    })

    return(
        <Paper elevation = {3} className={classes.content}>
           <Game />
        </Paper>        
    )
}


export default RestaUm;
import { useEffect } from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    content: {
        padding: theme.spacing(2)
    }
}))

function RestaUm(props) {
    const classes = useStyles()
    
    useEffect(() => {
        if(props.setTitle) {props.setTitle("Resta Um")}
        return () => {if(props.setTitle) {props.setTitle("Games")}}
    })

    return(
        <Paper elevation = {3} className={classes.content}>
            <div>
                Este é o Resta Um
            </div>
        </Paper>
        
    )
}

export default RestaUm;
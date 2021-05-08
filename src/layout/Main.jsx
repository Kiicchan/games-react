import { Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    main: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
    },
    content: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
}));

function Main(props) {
    const classes = useStyles()
    return (
        <main className={classes.main}>
            <Paper elevation={3} className={classes.content} style={props.style}>
                {props.children}
            </Paper>
        </main>
    );
}

export default Main;
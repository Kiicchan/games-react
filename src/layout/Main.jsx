import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    main: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: theme.spacing(2)
    }
}));

function Main(props) {
    const classes = useStyles()
    return (
        <main className={classes.main} {...props}>
            {props.children}
        </main>
    );
}

export default Main;
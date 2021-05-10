import { Typography, Paper } from "@material-ui/core";
import { Header, Footer, Main } from "../layout";
import IconGames from "@material-ui/icons/Games";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    content: {
        minWidth: "100px",
        minHeight: "100px",
        padding: theme.spacing(2),
        margin: theme.spacing(2)
    }
}));

function Games() {
    const classes = useStyles()
    return (
        <>
            <Header title="Games" icon={<IconGames />} />
            <Main>
                <Paper elevation={3} className={classes.content} >
                    <Typography variant="body1" component="p" align="justify">
                        Estes são os jogos
                    </Typography>
                </Paper>
            </Main>
            <Footer />
        </>
    )
}

export default Games;
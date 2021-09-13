import { useState } from "react";
import { Typography, Paper, Box } from "@material-ui/core";
import { Header, Main } from "../layout";
import IconGames from "@material-ui/icons/Games";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, Redirect, useRouteMatch, Link } from "react-router-dom";
import { RestaUm, Minesweeper } from "../games"
import RestaUmCard from "../games/resta-um/Card"
import MineSweeperCard from "../games/minesweeper/Card"

const useStyles = makeStyles((theme) => ({
    content: {
        minWidth: "100px",
        padding: theme.spacing(2),
        margin: theme.spacing(2)
    }
}));

function Games() {
    const classes = useStyles()
    const { path } = useRouteMatch()
    const [title, setTitle] = useState("Games")
    
    return (
        <>
            <Header title={title} icon={<IconGames />} />
            <Main>
                <Switch>
                    <Route exact path={`${path}`}>
                        <Paper elevation={3} className={classes.content} >
                            <Typography variant="body1" component="p" align="justify">
                                Escolha um Jogo
                            </Typography>
                        </Paper>
                        <Box display="flex" flexDirection="row" justifyContent="space-around" width="50%">
                            <RestaUmCard component={Link} to='/games/resta-um' />
                            <MineSweeperCard component={Link} to='/games/minesweeper' />
                        </Box>
                    </Route>
                    <Route exact path={`${path}/resta-um`} render={(props) => <RestaUm {...props} setTitle={setTitle} />} /> {/*injeção de dependência na rota */}
                    <Route exact path={`${path}/minesweeper`} render={(props) => <Minesweeper {...props} setTitle={setTitle} />} />
                    <Redirect from={`${path}/*`} to='/games' />
                </Switch>
            </Main>
        </>
    )
}

export default Games;
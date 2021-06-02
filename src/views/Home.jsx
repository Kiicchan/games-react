import { Typography, Paper } from "@material-ui/core";
import { Header, Main } from "../layout";
import IconHome from "@material-ui/icons/Home";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    content: {
        maxWidth: "70%",
        padding: theme.spacing(2),
        margin: theme.spacing(2)
    }
}));

function Home() {
    const classes = useStyles()
    return (
        <>
            <Header title="Home" icon={<IconHome />} />
            <Main style={{justifyContent: "flex-start"}}>
                <Paper elevation={3} className={classes.content} >
                    <Typography variant="body1" component="p" align="justify">
                        Seja bem vindo. Esta é uma aplicação React de teste com o intuito de aprender
                        e desenvolver habilidades com a biblioteca.
                        Nesta aplicação foram usados os componentes do Material UI e React Router.
                        Para acessar os jogos, clique na opção de
                        Menu no topo da tela.
                    </Typography>
                </Paper>
            </Main>
        </>
    )
}

export default Home
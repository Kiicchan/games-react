import { Typography } from "@material-ui/core";
import { Header, Footer, Main } from "../layout";
import IconHome from "@material-ui/icons/Home";

function Home() {
    return (
        <>
            <Header title="Home" icon={<IconHome />} />
            <Main style={{ maxWidth: "500px" }}>
                <Typography variant="body1" component="p">
                    Seja bem vindo ao React Games. Esta é uma aplicação React de teste com o intuito de aprender
                    e desenvolver habilidades com o framework.
                    Nesta aplicação foram usados os elementos UI do Material e para as rotas a API do React Router.
                    Para acessar os jogos, clique na opção de
                    Menu no topo da tela.
                </Typography>
            </Main>
            <Footer />
        </>
    )
}

export default Home
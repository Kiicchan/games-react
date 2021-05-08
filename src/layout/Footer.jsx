import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';

const useStyles = makeStyles((theme) => ({
  footer: {
    flexGrow: 0
  },
  content: {
    display: "flex",
    backgroundColor: "#444",
    color: "#FFF",
    padding: theme.spacing(2),
    justifyContent: "flex-end"
  },
  text: {
    display: "flex",
    alignItems: "center",
    '& *' : {
      marginLeft: theme.spacing(2)
    }
  }
}));

function Footer() {
    const classes = useStyles()
    return (
      <footer className={classes.footer}>
        <Paper square className={classes.content} elevation={0}>
          <Typography className={classes.text} variant="body1" component="p">
            <span>Desenvolvido por Marcos Chacon</span> <VideogameAssetIcon color="secondary" />
          </Typography>
        </Paper>
      </footer>
    );
  }
  
  export default Footer;
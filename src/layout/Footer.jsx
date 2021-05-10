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
    justifyContent: "flex-end",
    padding: theme.spacing(1)
  },
  text: {
    display: "flex",
    alignItems: "center"
  },
  icon: {
    fontSize: "28px",
    marginLeft: theme.spacing(1)
  }
}));

function Footer() {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Paper square className={classes.content} elevation={0}>
        <Typography className={classes.text} variant="body2" component="span">
          Desenvolvido por Marcos Chacon
        </Typography>
        <VideogameAssetIcon className={classes.icon} color="secondary" />
      </Paper>
    </footer>
  );
}

export default Footer;
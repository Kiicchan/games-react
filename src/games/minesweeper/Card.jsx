import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from "./imgs/minesweeper.jpg"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea {...props}>
        <CardMedia className={classes.media}
          component="img"
          image={image}
          title="Jogo Campo Minado"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Campo Minado
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Cuidado com as minas! Revele todas as células vazias enquanto desbrava este clássico jogo lógico e desafiador.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
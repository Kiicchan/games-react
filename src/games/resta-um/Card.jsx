import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from "./imgs/restaum.jpg"

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
          title="Jogo Resta Um"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Resta Um
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Mova as peças em diferentes direções até que sobre apenas uma para solucionar este curioso quebra-cabeça.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
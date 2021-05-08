import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Nav from "./Nav";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    '& *' : {
      marginRight: theme.spacing(2)
    }
  },
}));



function Header(props) {
  const classes = useStyles();
  const [openNav, setOpenNav] = useState(false)

  return (
      <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setOpenNav(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.icon}
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Nav open={openNav} anchor="left" onClose={() => setOpenNav(false)}></Nav>
      </>
  );
}
  
  export default Header;
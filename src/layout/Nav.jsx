import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles({
  list: {
    width: 250,
  }
});

function Nav(props) {
    const classes = useStyles()
  return (
          <Drawer {...props}>
              <List className={classes.list}>
                  <ListItem>
                      <ListItemIcon><HomeIcon/></ListItemIcon>
                      <ListItemText>Home</ListItemText>
                  </ListItem>
                  <Divider/>
              </List>
          </Drawer>
  );
}

export default Nav;
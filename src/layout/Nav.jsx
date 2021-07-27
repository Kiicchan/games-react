import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconHome from "@material-ui/icons/Home";
import IconGames from "@material-ui/icons/Games";
import { Link as RouterLink } from 'react-router-dom';

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  }
}));

function Nav(props) {
  const classes = useStyles()
  const [openNav, setOpenNav] = useState(false)
  
  useEffect(() => {   /*exportar a função de controle de estado do componente Nav para o Header (evitando o uso de Redux para um caso tão simples) */
    window.setOpenNav = setOpenNav
    return () => {window.setOpenNav = undefined}
  }, [])
  return (
    <Drawer open={openNav} anchor="left" onClose={() => setOpenNav(false)} >
      <List className={classes.list}>
        <ListItemLink to="/home" primary="Home" icon={<IconHome />} />
        <ListItemLink to="/games" primary="Games" icon={<IconGames />}/>
        <Divider />
        <ListItemLink to="/games/resta-um" primary="Resta 1" />
        <ListItemLink to="/games/minesweeper" primary="Campo Minado" />
      </List>
    </Drawer>
  );
}

export default Nav;
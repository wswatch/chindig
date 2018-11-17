import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GearIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root} >
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <GearIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <div className="logo">Chindig</div>
          </Typography>
          <Button className={classes.menuButton} color="inherit" aria-label="Search">
            <SearchIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);

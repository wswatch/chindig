import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import GearIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';

import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showSearch: false
    };
  }

  handleChange = event => {
    let query = event.target.value
    this.props.onSearch(query)
  };


  toggleSearch = () => {
    this.setState(oldState => ({
      showSearch: !oldState.showSearch
    }));
  }


  render() {
    const { classes } = this.props;
    const { showSearch } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Settings Menu">
              <GearIcon />
            </IconButton>


            {!showSearch &&
                <Typography variant="h6" color="inherit" className={classes.grow}>
                  <div className="logo">Chindig</div>
                </Typography>}


            {/* desktop */}
            <Hidden smDown>

              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  onChange={this.handleChange}
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
            </Hidden>

            {/* mobile */}
            {showSearch &&
              <Hidden mdUp>
                <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  onChange={this.handleChange}
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
            </Hidden>}

            {!showSearch &&
            <Hidden mdUp>
              <Button className={classes.menuButton} color="inherit" aria-label="open search button" onClick={this.toggleSearch}>
                <SearchIcon />
              </Button>
            </Hidden>}

            {showSearch &&
              <Button className={classes.menuButton} color="inherit" aria-label="close search button" onClick={this.toggleSearch}>
                <CloseIcon />
              </Button>
              }

          </Toolbar>
        </AppBar>
      </div>
    );
  }

}







/*
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
*/

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);

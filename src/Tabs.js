import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Navbar from './Navbar'

import Suggested from './Suggested';
import Past from './Past';
import Saved from './Saved';

const events = require('./mock-data/events.json');

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      value: 0,
      events: events.filter(e => !e.past),
      pastEvents: events.filter(e => e.past),
      savedEvents: []
    };
  }


  onSearch = (query) => {
    query = query.toLowerCase();

    let filteredEvents = events.filter(event => {
      let name = event.name.toLowerCase(),
        description = event.description.toLowerCase(),
        tag = event.tag.toLowerCase();

      return name.indexOf(query) !== -1 ||
        description.indexOf(query) !== -1 ||
        tag.indexOf(query) !== -1;
    });

    this.setState({events: filteredEvents, query});
  }


  onTabChange = (event, value) => {
    this.setState({ value });
  };


  onSaveEvent = (eventObj) => {
    eventObj.saved = true;
    this.forceUpdate()
  }

  onUnsaveEvent = (eventObj) => {
    eventObj.saved = false;
    this.forceUpdate()
  }

  render() {
    const { classes } = this.props;
    const { value, events, pastEvents } = this.state;

    let savedEvents = events.filter(e => e.saved);

    return (
      <div className={classes.root}>
        <Navbar onSearch={this.onSearch} />

        <AppBar position="static" className={classes.grow}>
          <Tabs value={value} onChange={this.onTabChange} centered fullWidth>
            <Tab label="Suggested" />
            <Tab label="Past" />
            <Tab label={`Upcoming (${savedEvents.length})`} />
          </Tabs>
        </AppBar>
        {value === 0 &&
          <TabContainer>
            <div className="tab-container">
              <Suggested events={events} onSave={this.onSaveEvent} onUnsave={this.onUnsaveEvent}/>
            </div>
          </TabContainer>}
        {value === 1 &&
          <TabContainer className="tab-container">
            <Past events={pastEvents} />
          </TabContainer>}
        {value === 2 &&
          <TabContainer className="tab-container">
            <Saved events={savedEvents} />
          </TabContainer>
        }
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
